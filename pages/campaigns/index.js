import connectToDatabase from '../../utils/mongodb'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';
import { useState, useEffect, CSSProperties } from 'react'
import { truncate } from '../../utils/utils'
import Link from 'next/link'
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import BasicForm from '../../components/forms/BasicForm'
import Nav from '../../components/Nav';
import GridLoader from "react-spinners/PuffLoader";


export default withPageAuthRequired(function Campaign({ }) {
  const { user, error, isLoading } = useUser();
  const api = '/api/'
  const [ campaigns, setCampaigns ] = useState([])
  const [ encounters, setEncounters ] = useState([])
  const [ selected, setSelected ] =useState();
  const [ modal, setModal ] = useState({"type": "none", "on": false})
  const [ loadingCampaigns, setLoadingCampaigns ] = useState(true);
  const [ loadingEncounters, setLoadingEncounters ] = useState(true);
 
  useEffect(() => {
    const getCampaigns = async () => {
      const response = await fetch(`${api}campaigns`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'query',
            data: {userId: user.sub}
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
      }
      })
      const allcampaigns = await response.json(response)
      
      setCampaigns(allcampaigns)
      setLoadingCampaigns(false)
    }
    getCampaigns()

    
    const getRunningEncounters = async () => {
      const response = await fetch(`${api}encounters`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'minilist',
            data: {
                mode: "running",
                userId: user.sub
            }
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      })

      const runningEncounters = await response.json()
      // console.log(runningEncounters)
      setEncounters(runningEncounters)
      setLoadingEncounters(false)
    }
    getRunningEncounters()

    return () => {}
  }, [])

  const updateCampaigns = async (mongoCollection, item) => {
    const newCampaigns = null

    // does the item have an id, if so do an editone api call
    if (!item._id) {
      // console.log('item has no id, add this to collection')
      const response = await fetch(`${api}campaigns`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'addone',
            data: {...item, userId: user.sub, monsters: [], items: [], npcs: []}
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      })
      newCampaigns = await response.json()
    }

    if (item._id) {
      // console.log('item has id, edit this item')
      const response = await fetch(`${api}campaigns`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'editone',
            data: item
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      })
      newCampaigns = await response.json()
    }
   
    if (newCampaigns.acknowledged && newCampaigns.insertedId) {
      setCampaigns([...campaigns, {...item, userId: user.sub, _id: newCampaigns.insertedId}])
      setModal({on: false, type: ""})
    } 
    else if (newCampaigns.modifiedCount && newCampaigns.modifiedCount === 1) {
      setCampaigns([...campaigns.filter(c => c._id !== item._id), item])
      setModal({on: false, type: ""})
    }
  }

  const deleteCampaign = async (mongoCollection, item) => {
    // console.log(item)
    const response = await fetch(`${api}delete`, {
      method: "POST",
      body: JSON.stringify(
          {
            collection: 'campaigns',
            action: 'deleteone',
            data: item
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })

    const acknowledgement = await response.json()
    if (acknowledgement.acknowledged && acknowledgement.deletedCount === 1) {
      setCampaigns([...campaigns.filter(campaign => { return campaign._id !== item._id})])
    }
  }
  
  return (
    <>
        <Nav location='campaigns' user={user}></Nav>
        {/* modal window */}
        {modal.on && <div id="modal-window" className="modal">
            {/* Modal content */}
                <div className="modal-content">
                    <span className="close" onClick={() => {setModal({"on": false, "type": "none"})}}>&times;</span>
                    {modal.type === "campaigns" &&
                    <>
                        <h3>Edit Campaign</h3>
                        <BasicForm data={selected} updateFnc={updateCampaigns} mongoCollection={modal.type}></BasicForm>
                    </>}
                </div>
        </div>}

        <section>
            <div className="one-column">
                <h2>Campaigns</h2>
                {loadingCampaigns &&<div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", padding: "1rem", borderRadius: "3%"}}>
                  <h2 style={{fontSize: "1.5rem", marginBottom: "1rem", color: "white"}}>LOADING</h2>
                  <GridLoader
                    color={'#36d7b7'}
                    loading={loadingCampaigns}
                    // cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>}
                {!loadingCampaigns && <div>
                  <div style={{display: "flex", flexDirection: "column", gap: "0.5rem", boxShadow: "var(--box-shadow)"}}>
                    <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "campaigns"}))}}>New</button>

                    {campaigns.sort((a,b) => {return a.modified < b.modified}).map(campaign => (
                        <div key={campaign._id} className="list-item">
                            <Link key={campaign.id} href={`/campaign/${campaign._id}`}>
                                <div className="link">
                                        <h2>{campaign.name}</h2>
                                        <em>{truncate(campaign.description, 50)}</em>
                                </div>
                            </Link>

                            <div>
                              <FaWindowClose style={{"cursor": "pointer"}} color="red"
                                onClick={() => {deleteCampaign("campaigns", campaign)}} />

                              <FaEdit style={{"cursor": "pointer"}} color="grey"
                                onClick={() => {setSelected(campaign); setModal({"on": true, "type": "campaigns"})}} />
                            </div>
                        </div>
                    ))}
                    </div>
                </div>}
            </div>

            <div className="one-column">
                <h2>Running Encounters</h2>
                {loadingEncounters &&<div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", padding: "1rem", borderRadius: "3%"}}>
                  <h2 style={{fontSize: "1.5rem", marginBottom: "1rem", color: "white"}}>LOADING</h2>
                  <GridLoader
                    color={'#36d7b7'}
                    loading={loadingEncounters}
                    // cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>}
                {!loadingEncounters && encounters && encounters
                    .filter(e => { return e.mode === "running"})
                    .map(encounter => (
                        <div key={encounter._id} className="list-item">                          
                            <EncounterLink encounter={encounter}></EncounterLink>
                        </div>))}
            </div>
        </section>
    </>
  )
})

export function EncounterLink ({encounter}) {
  const api = '/api/'
  const [ campaign, setCampaign ] = useState();
  const [ adventure, setAdventure ] = useState();

  const getEncounterDetails = async (encounter) => {
    // get the campaign and adventure name for a specified encounter
    const campaignResponse = await fetch(`${api}campaigns`, {
      method: "POST",
      body: JSON.stringify(
          {
          action: 'query',
          data: {_id: encounter.campaignId}
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })
    const campaign = await campaignResponse.json()
    console.log(campaign)

    const adventureResponse = await fetch(`${api}adventures`, {
      method: "POST",
      body: JSON.stringify(
          {
          action: 'query',
          data: {_id: encounter.adventureId}
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })
    const adventure = await adventureResponse.json()
    console.log(adventure)

    if (campaign && campaign.length > 0) setCampaign(campaign[0])
    if (adventure && adventure.length > 0) setAdventure(adventure[0])
  }

  useEffect(() => {
    if (encounter) {
      getEncounterDetails(encounter)
    }
  
    return () => {}
  }, [encounter])
  


  return (
    <Link href={`/encounter/${encounter._id}`}>
      <div className='link'>
        <h2>{encounter.name}</h2>
        {campaign && adventure && <p>{campaign.name} > {adventure.name}</p>}
      </div>
    </Link>
  );
}

export async function getServerSideProps(context) {
  try {
    await connectToDatabase
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
