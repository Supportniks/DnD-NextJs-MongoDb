# DnD Campaign & Encounter Tracker
 I'm a novice programmer and this project is a learn-as-you-go effort, so please concider it alpha-as-f$%k.
 Written using NextJs and MongoDb

## License
![Creative Commons Licence](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)
This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/)

The intent of this project is to create a usable app for non-commercial use. If you are interested in contributing to this effort on that basis, I'll be happy to concider pull requests to help improve features or fix bugs.

## App layout
The app will make use of several pages, using React Router functionality. https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/

State will be passed through the app via the react-router-dom Link component. Then accessed using useLocation(). https://dev.to/maxcell/react-router-using-location-state-for-custom-ui-navigation-2ia9?utm_source=pocket_mylist

Home
* Tools page
    * Dice roller
    * Random tables (loot, injury, encounters, etc)
* Monsters List
    * Search feature
    * Add monster
    * View monster
        * Edit monster
        * Delete monster
        * Copy monster (creating custom monsters)
* Campaigns list
    * Add campaign
    * View campaign. Shows the list of adventures, notes & campaign NPCs in the campaign.
        * Edit campaign
        * Delete campaign
        * Add, edit & remove notes and npcs for the campaign 
        * View adventure. Shows the list of encounters, notes & campaign NPCs in the adventure.
            * Edit adventure
            * Delete adventure
            * Add, edit & remove notes and npcs for the adventure 
            * View encounter. Shows the list of combatants (PC's, NPCs and monsters) in the adventure.
                * Edit encounter (add remove combatants, notes, treasure, etc)
                * Delete encounter
                * Run encounter: lots of functionality. Tracking rounds & turns, hit points, conditions, dice rolling for actions, etc
     
 ## Roadmap
View what I'm planning and currently working on [here](https://trello.com/b/Gks4VriW/development).
 
## Data
The state for this app is stored in mongoDb.

The structure for the data is as follows (this will be updated as features are added and the data structure grows & changes);
```json
{
    "characters": [
        {
            "_id": uuid,
            "campaignId": uuid,
            "name": string,
            "strength": int32,
            "dexterity": int32,
            "constitution": int32,
            "inteligence": int32,
            "wisdom": int32,
            "charisma": int32,
            "xp": int32,
            "level": int32,
            "proficiency": int32,
            "maxHp": int32,
            "currentHp": int32,
        }
    ],
    "monsters": [
        {
            "_id": uuid,
            "name": string,
            "description": string,
            "type": string,
            "size": string,
            "ac": int32,
            "hitDice": [int32, int32, int32],
            "speed": ["string", "string"],
            "strength": int32,
            "dexterity": int32,
            "constitution": int32,
            "inteligence": int32,
            "wisdom": int32,
            "charisma": int32,
            "saves": ['Str', 'Wis', 'etc'],
            "skills": [string, string], // 
            "vulnerabilities": [string, string],
            "resistances": [string, string],
            "damageImmunity": [string, string],
            "conditionImmunity": [string, string],
            "senses": [string, string],
            "languages" [string, string],
            "cr": float,
            "traits": [
                {
                    "name": string,
                    "description": string
                }
            ],
            "actions": [
                {
                    "name": string,
                    "description": string,
                    "attack": {
                        "toHit": int32,
                        
                    }
                }
            ],
            "legendary": {},
        }
    ],
    "campaigns": [
        {
            "id": generated by json-server,
            "name": string,
            "description": string,
            "state": pending | active | complete,
            "favorite": true | false
        }
    ],
    "adventures": [
        {
            "id": generated by json-server,
            "campaignId": generated by json-server,
            "name": string,
            "description": string,
            "state": pending | active | complete,
            "favorite": true | false
        }
    ],
    "encounters": [
        {
            "id": generated by json-server,
            "campaignId": from-campaign,
            "adventureId": from-adventure,
            "name": string,
            "description": string,
            "favorite": true | false
        }
    ]
}
```

