import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import connectToDatabase from '../../../utils/mongodb'
import { ObjectId } from 'mongodb'

import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';

import { truncate } from '../../../utils/utils'
import { importMonster } from '../../../utils/import';

import BasicForm from '../../../components/forms/BasicForm'
import CharacterForm from '../../../components/forms/CharacterForm'
import Nav from '../../../components/Nav';
import { MonsterForm } from '../../monsters';

import { FaEdit, FaWindowClose } from 'react-icons/fa'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons


export default withPageAuthRequired(function Campaign({ initialCampaign }) {
    const router = useRouter()
    const api = '/api/'
    const { user, error, isLoading } = useUser();
    const [ campaign, setCampaign ] = useState({})
    const [ adventures, setAdventures ] = useState([])
    const [ encounters, setEncounters ] = useState([])
    const [ characters, setCharacters ] = useState([])    
    const [ selected, setSelected ] = useState();
    const [ modal, setModal ] = useState({"type": "none", "on": false})
    const [ displayDialog, setDisplayDialog ] = useState(false);
    const [ dialogType, setDialogType ] = useState('')
    const [ importMessage, setImportMessage ] = useState('')
    const [ failed, setFailed ] = useState([])

    const saveCustomMonster = async (monster) => {
        console.log(monster)
        monster = {...monster, sourceBook: 'Custom Edited', campaignMonster: true}
        console.log(monster)
        const DATA = {
           campaignId: campaign._id,
           monster: monster
        }
        const response = await fetch(`/api/campaigns`, {
           method: "POST",
           body: JSON.stringify({
              action: "append monster",
              data: DATA,
           }),
           headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        const reply = await response.json();
        console.log(reply)
        if (reply.confirm.acknowledged && reply.confirm.modifiedCount > 0) {
           setCampaign({...campaign, monsters: [...campaign.monsters, reply.monster]})
        //    setDialogType('')
        } else setFailed([...failed, monster])
     }

    const getFile = async (file) => {
        let content
        const monsters = []
        if (file.type === 'application/json') {
            content = await JSON.parse(await file.text());
        } else {
            setImportMessage('Selected import file is not in JSON FORMAT');
            console.log('Selected import file is not in JSON FORMAT')
            return
        }
        console.log(content)
  
        if (!content?.monster?.length > 0) {
           setImportMessage('No records found in data');
           console.log('No records found')
           return
        }
  
        await content?.monster?.forEach(monster => {
            console.log(monster)
           if (!monster.name) {
              setImportMessage("data is not valid")
              console.log("data is not valid")
           } else {
            monsters.push(importMonster({monster: {...monster, campaignMonster: true}, importTag: content.source}))
           }
        }) 
        console.log(monsters)
        setImportMessage('Files OK')
        
        monsters.forEach(monster => {
            saveCustomMonster(monster)
        })
     }
    
    useEffect(() => {
        const getCampaign = async () => {
            const response = await fetch(`${api}campaigns`, {
                method: "POST",
                body: JSON.stringify(
                    {
                    action: 'query',
                    data: {_id: router.query.id}
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })        
            const parsed = await response.json()
    
            if (parsed && parsed.length > 0) {
                setCampaign(parsed[0])
            }
        }
        getCampaign()
        
    
      return () => {}
    }, [])

    useEffect(() => {
        const getAdventures = async () => {
            const response = await fetch(`${api}adventures`, {
                method: "POST",
                body: JSON.stringify(
                    {
                    action: 'query',
                    data: {campaignId: campaign._id}
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
              }
              })
              const alladventures = await response.json(response)
              setAdventures(alladventures)
        }
        if (campaign?._id) getAdventures()

        const getCharacters = async () => {
            const response = await fetch(`${api}characters`, {
              method: "POST",
              body: JSON.stringify(
                  {
                  action: 'query',
                  data: {
                      campaignId: campaign._id
                  }
              }),
              headers: {
                  "Content-type": "application/json; charset=UTF-8"
              }
            })
            const characterReply = await response.json()
            console.log(characterReply)
            setCharacters(characterReply)
          }
          if (campaign?._id) getCharacters()
  
        const getRunningEncounters = async () => {
            const response = await fetch(`${api}encounters`, {
                method: "POST",
                body: JSON.stringify(
                    {
                    action: 'query',
                    data: {
                        mode: "running",
                        campaignId: campaign._id
                    }
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

        const runningEncounters = await response.json()
        if (runningEncounters) setEncounters(runningEncounters)
        }
        if (campaign?._id) getRunningEncounters()
    
      return () => {}
    }, [campaign])
    
    const updateAdventures = async (mongoCollection, item) => {
    console.log(mongoCollection)
    console.log(item)
    const data = {}
    const newAdventures = {}
    

    // if no _id, its a new item
    if (!item._id) {
        console.log('its a new item')
        const response = await fetch(`${api}adventures`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'addone',
                data: {...item, campaignId: campaign._id, userId: user.sub}
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })        
        newAdventures = await response.json()

        if (newAdventures.acknowledged && newAdventures.insertedId) {
            setAdventures([...adventures, {...item, _id: newAdventures.insertedId, userId: user.sub}])
            setModal({on: false, type: ""})
          }
    }
    // if theres an _id, then its an edit
    else if (item._id) {
        console.log('edit this item')
        const response = await fetch(`${api}adventures`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'editone',
                data: {...item, campaignId: campaign._id}
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })        
        newAdventures = await response.json()

        if (newAdventures.acknowledged && newAdventures.modifiedCount === 1) {
            setAdventures([...adventures.filter(a => {return a._id !== item._id}), item])
            setModal({on: false, type: ""})
          }   
    }
    }

    const deleteAdventure = async (item) => {
        const response = await fetch(`${api}delete`, {
            method: "POST",
                body: JSON.stringify(
                    {
                    collection: 'adventures',
                    action: 'deleteone',
                    data: item
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
        })

        const acknowledgement = await response.json()
        if (acknowledgement && acknowledgement.acknowledged && acknowledgement.deletedCount > 0) {
            setAdventures([...adventures.filter(adventure => { return adventure._id !== item._id})])
        }
    } 

    const updateCharacter = async (character, collection) => {
        updateCharacter = null

        // if no _id, its a new item
        if (!character._id) {
            const response = await fetch(`${api}characters`, {
                method: "POST",
                body: JSON.stringify(
                    {
                    action: 'addone',
                    data: {
                        ...character, 
                        campaignId: campaign._id,
                        enemy: 'pc',
                        currentHp: character.maxHp,
                        userId: user.id
                    }
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })        
            updateCharacter = await response.json()

            if (updateCharacter.acknowledged && updateCharacter.insertedId) {
                setCharacters([
                    ...characters, 
                    {
                        ...character, 
                        _id: updateCharacter.insertedId, 
                        enemy: 'pc',
                        currentHp: character.maxHp,
                        userId: user.sub}])
                setModal({on: false, type: ""})
            }
        }
        // if theres an _id, then its an edit
        else if (character._id) {
            const response = await fetch(`${api}characters`, {
                method: "POST",
                body: JSON.stringify(
                    {
                    action: 'editone',
                    data: {...character, campaignId: campaign._id}
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })        
            updateCharacter = await response.json()

            if (updateCharacter.acknowledged && updateCharacter.modifiedCount === 1) {
                setCharacters([...characters.filter(a => {return a._id !== character._id}), character])
                setModal({on: false, type: ""})
            }   
        }
    }

    const deleteCharacter = async (character) => {
        const response = await fetch(`${api}delete`, {
            method: "POST",
                body: JSON.stringify(
                    {
                    collection: 'characters',
                    action: 'deleteone',
                    data: character
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
        })

        const acknowledgement = await response.json()
        if (acknowledgement && acknowledgement.acknowledged && acknowledgement.deletedCount > 0) {
            setCharacters([...characters.filter(c => { return c._id !== character._id})])
        }
    }

    const updateItem = async (item, type) => {
        // editing campaign level arrays e.g. monsters, magic items, notes, npcs 
        setSelected(item)
        setDialogType(`edit ${type}`)
        setDisplayDialog(true)
    }

    const saveMonster = async (monster) => {
        console.log(monster)
        setDisplayDialog(false)

        const response = await fetch(`${api}campaigns`, {
            method: "PATCH",
            body: JSON.stringify(
                {
                action: 'editmonster',
                data: {
                    campaignId: campaign._id,
                    monster: monster
                }
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })        
        const newAdventures = await response.json()

        if (newAdventures.acknowledged && newAdventures.modifiedCount === 1) {
            // setAdventures([...adventures.filter(a => {return a._id !== item._id}), item])
            // setModal({on: false, type: ""})
            setCampaign({
                ...campaign, 
                monsters: [
                    ...campaign.monsters.filter(m => { return monster._id !== m._id}), monster]})
            setDialogType('')
        }   

    }

    const handleDialogModal = async (item) => {
        console.log(item)
        
    }

    const deleteMonster = async (monster) => {
        const response = await fetch(`${api}campaigns`, {
            method: "POST",
                body: JSON.stringify(
                    {
                    collection: 'campaigns',
                    action: 'edit monster',
                    data: {
                        campaignId: campaign._id,
                        monster: monster
                    }
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
        })

        const acknowledgement = await response.json()
        if (acknowledgement && acknowledgement.acknowledged && acknowledgement.modifiedCount > 0) {
            console.log(acknowledgement)
            setCampaign(
                {
                ...campaign, 
                monsters: [ ...campaign.monsters.filter( c => { return c._id !== monster._id } ) ]
                }   
            )
        }

    }
     
    return (
       <>
        <Nav location='campaign' campaign={campaign} user={user}></Nav>
        <Dialog 
            header={dialogType.toUpperCase()}
            visible={displayDialog} 
            style={{ "maxWidth": '50rem' }} 
            onHide={() => {setDisplayDialog(false); setDialogType('')}}>
            {dialogType === 'edit monster' && 
                <MonsterForm 
                    selected={selected}
                    setSelected={setSelected}
                    update={saveMonster}
                    setParentModal={handleDialogModal}>
                </MonsterForm>
            }
            {dialogType === 'import monsters' &&
            <>
                <FileUpload
                    accept="application/json"
                    customUpload
                    onClear={() => setImportMessage('')}
                    uploadHandler={(e) => getFile(e.files[0])}
                    emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>}>
                </FileUpload>
                <p>{importMessage}</p>
            </>
            }


        </Dialog>
       {/* modal window */}
       {modal.on && <div id="modal-window" className="modal">
            {/* Modal content */}
                <div className="modal-content">
                    <span className="close" onClick={() => {setModal({"on": false, "type": "none"})}}>&times;</span>
                    {modal.type === "adventures" &&
                    <>
                        <h3>Edit Campaign</h3>
                        <BasicForm data={selected} updateFnc={updateAdventures} mongoCollection={modal.type}></BasicForm>
                    </>}
                    {modal.type === "characters" &&
                    <>
                        <h3>Edit Campaign</h3>
                        <CharacterForm data={selected} updateFnc={updateCharacter} mongoCollection={modal.type}></CharacterForm>
                    </>}
                    
                </div>
        </div>}

        <section>
            <div className="one-column">
                <h2>Adventures</h2>
                    <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "adventures"}))}}>New</button>

                    {adventures.sort((a,b) => {return a.modified < b.modified}).map(adventure => (
                        <div key={adventure._id} className="list-item">
                            <Link key={adventure.id} href={`/adventure/${adventure._id}`}>
                                <div className="link">
                                        <h2>{adventure.name}</h2>
                                        <em>{truncate(adventure.description, 50)}</em>
                                </div>
                            </Link>

                            <div>
                              <FaWindowClose style={{"cursor": "pointer"}} color="red"
                                onClick={() => {deleteAdventure("adventures", adventure)}} />

                              <FaEdit style={{"cursor": "pointer"}} color="grey"
                                onClick={() => {setSelected(adventure); setModal({"on": true, "type": "adventures"})}} />
                            </div>
                        </div>
                    ))}
            </div>

            <div className="one-column">
                <h2>Characters</h2>
                <button className="green" onClick={() => {setSelected({}), setModal({"on": true, "type": "characters"})}}>New</button>

                {characters.map(character => (
                    <div key={character._id} className="list-item">
                        <Link href={`/character/${character.id}`}>
                            <div className="link">
                                    <h2>{character.name}</h2>
                                    <em>{truncate(character.description, 50)}</em>
                            </div>
                        </Link>

                        <div><FaWindowClose 
                            style={{"cursor": "pointer"}} 
                            color="red"
                            onClick={() => {deleteCharacter(character)}} />
                        <FaEdit 
                            style={{"cursor": "pointer"}} 
                            color="grey"
                            onClick={() => {setSelected(character); setModal({"on": true, "type": "characters"})}} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="one-column">
                <h2>Running Encounters</h2>
                {encounters && encounters
                    .filter(e => { return e.mode === "running"})
                    .map(encounter => (
                        <div key={encounter._id} className="list-item">
                            <Link href={`/encounter/${encounter._id}`}>
                                <h2>{encounter.name}</h2>
                                {/* <p>{`In ${campaigns.filter(c => c.id === encounter.campaignId).name} > ${adventures.list.filter(c => c.id === encounter.adventureId)[0].name}`}</p> */}
                            </Link>
                        </div>))}
            </div>

            <div className="one-column">
                <h2>Campaign Monsters</h2> 
                <Button 
                    label='Import' 
                    onClick={() => {setDialogType('import monsters'); setDisplayDialog(true)}}>
                </Button>
                {campaign?.monsters?.sort((a,b) => {return a.name > b.name}).map(monster => (
                        <div key={monster._id} className="list-item">
                            <Link key={monster._id} href={`/monster/${monster._id}`}>
                                <div className="link">
                                        <h2>{monster.name}</h2>
                                        <em>{truncate(monster.description, 50)}</em>
                                </div>
                            </Link>

                            <div>
                              <FaWindowClose style={{"cursor": "pointer"}} color="red"
                                onClick={() => {deleteMonster(monster)}} />

                              <FaEdit style={{"cursor": "pointer"}} color="grey"
                                onClick={() => {updateItem(monster, 'monster')}} />
                            </div>
                        </div>
                    ))}
            </div>
        </section>
       </>
    );
})

export async function getServerSideProps(context) {
    const {db} = await connectToDatabase()
    const id = new ObjectId(context.params.id)
    let response = await db.collection("campaigns").find({_id: id}).toArray()
    const campaign = await JSON.parse(JSON.stringify(response))

    return {
        props: {initialCampaign: campaign[0]}
    }
}