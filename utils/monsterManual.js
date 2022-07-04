const monsterManual = [
   {
      "name": "Aerisi Kalinoth",
      "size": "M",
      "type": "humanoid (elf)",
      "alignment": "Neutral Evil",
      "ac": "13 (16 with mage armor)",
      "hp": "66 (12d8+12)",
      "speed": "walk 30 ft.",
      "str": "8",
      "dex": "16",
      "con": "12",
      "int": "17",
      "wis": "10",
      "cha": "16",
      "save": "",
      "skill": "Arcana +6, History +6, Perception +3",
      "passive": "13",
      "languages": "Auran, Common, Elvish",
      "cr": "7",
      "resist": "lightning",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "darkvision 60 ft.",
      "trait": [
         {
            "name": "Fey Ancestry",
            "text": [
               "Aerisi has advantage on saving throws against being charmed, and magic can't put her to sleep."
            ]
         },
         {
            "name": "Howling Defeat",
            "text": [
               "When Aerisi drops to 0 hit points, her body disappears in a howling whirlwind that disperses quickly and harmlessly. Anything she is wearing or carrying is left behind."
            ]
         },
         {
            "name": "Legendary Resistance (2/Day)",
            "text": [
               "If Aerisi fails a saving throw, she can choose to succeed instead."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "Aerisi is a 12th-level spellcaster. Her spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). Aerisi has the following wizard spells prepared:",
               "Cantrips (at will): gust, mage hand, message, prestidigitation, ray of frost, shocking grasp",
               "• 1st level (4 slots): charm person, feather fall, mage armor, thunderwave",
               "• 2nd level (3 slots): dust devil, gust of wind, invisibility",
               "• 3rd level (3 slots): fly, gaseous form, lightning bolt",
               "• 4th level (3 slots): ice storm, storm sphere",
               "• 5th level (2 slots): cloudkill, seeming (cast each day)",
               "• 6th level (1 slots): chain lightning"
            ]
         }
      ],
      "action": [
         {
            "name": "Windvane",
            "text": [
               "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60 ft., one target. 9 (1d6 + 6) piercing damage, or 10 (1d8 + 6) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) lightning damage."
            ],
            "attack": [
               "Windvane|+9|1d6+6"
            ]
         }
      ],
      "legendary": [
         {
            "name": "Lair Actions"
         },
         {
            "text": [
               "If Aerisi is in the air node while Yan-C-Bin isn't, Aerisi can take lair actions. On initiative count 20 (losing initiative ties), Aerisi uses a lair action to cast one of her spells, up to 3rd level, without using components or a spell slot. She can't cast the same spell two rounds in a row, although she can continue to concentrate on a spell she previously cast using a lair action. Aerisi can take no other lair actions while concentrating on a spell cast as a lair action.",
               "If Aerisi casts invisibility using this lair action, she also draws the power of the air node into herself. By doing so, she regains 15 (3d8 + 2) hit points."
            ]
         }
      ],
      "slots": "4, 3, 3, 3, 2, 1",
      "spells": "gust, mage hand, message, prestidigitation, ray of frost, shocking grasp, charm person, feather fall, mage armor, thunderwave, dust devil, gust of wind, invisibility, fly, gaseous form, lightning bolt, ice storm, storm sphere, cloudkill, seeming, chain lightning",
      "description": "Aerisi Kalinoth is the air prophet of the Elder Elemental Eye and leader of the Cult of the Howling Hatred. Tall and slender, with dark hair and (illusory) feathered wings that gently fan the air, Aerisi Kalinoth speaks to her people in a whisper that belies her violent temper, which reveals itself whenever she is denied.\nAerisi was a sheltered moon elf princess named Dara Algwynenn Kalinoth who grew up in a remote Faerie realm. Her parents had wished to protect her from the harsh realities of the world, but they only succeeded in spoiling her. When they tried to discipline their wilful daughter, she used the power of elemental air against them. Soon after, her dreams led her to the ancient dwarven ruins where the spear Windvane awaited her.\nDara changed her name to Aerisi and pretended to be an avariel (winged elf) princess like the ones from her storybooks. Then Aerisi used her talents for enchantment magic to sway mortals into joining her cult. She has convinced all her followers that she is in fact an avariel, and believes it herself even though she must cast seeming each day to \"reveal\" her wings.\nAerisi is prone to deluded flights of fancy and impulsive decadence. She sees herself as a beautiful, fierce, and just ruler who wields elemental power because she deserves it.\nIn the Air Node. When danger threatens the Temple of Howling Hatred, Aerisi retreats to the Howling Caves, the air node. Within this node, Aerisi gains one additional use of her Legendary Resistance trait.\nSource: Princes of the Apocalypse p. 192",
      "environment": ""
   },
   {
      "name": "Aquatic Ghoul",
      "size": "M",
      "type": "undead",
      "alignment": "Chaotic Evil",
      "ac": "12",
      "hp": "22 (5d8)",
      "speed": "walk 30 ft.",
      "str": "13",
      "dex": "15",
      "con": "10",
      "int": "7",
      "wis": "10",
      "cha": "6",
      "save": "",
      "skill": "",
      "passive": "10",
      "languages": "Common",
      "cr": "1",
      "resist": "",
      "immune": "poison",
      "vulnerable": "",
      "conditionImmune": "charmed, exhaustion, poisoned",
      "senses": "darkvision 60 ft.",
      "action": [
         {
            "name": "Bite",
            "text": [
               "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. 9 (2d6 + 2) piercing damage."
            ],
            "attack": [
               "Bite|+2|2d6+2"
            ]
         },
         {
            "name": "Claws",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            ],
            "attack": [
               "Claws|+4|2d4+2"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 87",
      "environment": "underdark, swamp, urban"
   },
   {
      "name": "Bastian Thermandar",
      "size": "M",
      "type": "humanoid (fire genasi)",
      "alignment": "Neutral Evil",
      "ac": "12 (15 with mage armor)",
      "hp": "78 (12d8+24)",
      "speed": "walk 30 ft.",
      "str": "12",
      "dex": "14",
      "con": "15",
      "int": "11",
      "wis": "9",
      "cha": "18",
      "save": "",
      "skill": "Arcana +3, Deception +7",
      "passive": "9",
      "languages": "Common, Ignan",
      "cr": "8",
      "resist": "fire",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "darkvision 60 ft.",
      "action": [
         {
            "name": "Dagger",
            "text": [
               "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2) piercing damage."
            ],
            "attack": [
               "Dagger|+5|1d4+2"
            ]
         }
      ],
      "trait": [
         {
            "name": "Innate Spellcasting",
            "text": [
               "Bastian's innate spellcasting ability is Constitution (spell save DC 13, +5 to hit with spell attacks). He can innately cast the following spells:",
               "At will: produce flame",
               "1/day: burning hands"
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "Bastian is a 9th-level spellcaster. His spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). Bastian knows the following sorcerer spells:",
               "Cantrips (at will): fire bolt, mage hand, message, prestidigitation, shocking grasp",
               "• 1st level (4 slots): mage armor, magic missile, shield",
               "• 2nd level (3 slots): misty step, scorching ray",
               "• 3rd level (3 slots): counterspell, fireball",
               "• 4th level (3 slots): dimension door, wall of fire",
               "• 5th level (1 slots): hold monster"
            ]
         }
      ],
      "slots": "4, 3, 3, 3, 1",
      "spells": "produce flame, burning hands, fire bolt, mage hand, message, prestidigitation, shocking grasp, mage armor, magic missile, shield, misty step, scorching ray, counterspell, fireball, dimension door, wall of fire, hold monster",
      "description": "Like many in the fire cult, Bastian burns with an inner fire, but his fire is ambition, rather than a wish to see the world burn. Bastian is scheming to supplant Vanifer and claim Tinderstrike for himself.\nAs a practitioner of the arcane arts who learned much of his fire magic from Vanifer herself, Bastian relies on his spells in a fight, and he is a \"quick-burning\" sort who tries to deliver maximum impact early in the fight. If he knows a fight is coming but can't preemptively strike, Bastian becomes more cautious, casting wall of fire to protect himself before he hurls magic into the fray.\nSource: Princes of the Apocalypse p. 201",
      "environment": ""
   },
   {
      "name": "Black Earth Guard",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Neutral Evil",
      "ac": "18 (plate armor)",
      "hp": "39 (6d8+12)",
      "speed": "walk 30 ft.",
      "str": "17",
      "dex": "11",
      "con": "14",
      "int": "10",
      "wis": "10",
      "cha": "9",
      "save": "",
      "skill": "Intimidation +1, Perception +2",
      "passive": "12",
      "languages": "Common",
      "cr": "2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The guard makes two melee attacks."
            ]
         },
         {
            "name": "Morningstar",
            "text": [
               "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 7 (1d8 + 3) piercing damage."
            ],
            "attack": [
               "Morningstar|+5|1d8+3"
            ]
         }
      ],
      "reaction": {
         "name": "Unyielding",
         "text": [
            "When the guard is subjected to an effect that would move it, knock it prone, or both, it can use its reaction to be neither moved nor knocked prone."
         ]
      },
      "description": "Black Earth guards are the warriors of the earth cult. They are brutal, heavily armored thugs devoted to Ogremoch. That devotion has granted them an uncanny ability to hold their ground against the buffeting assaults. It has also earned them the right to wear special plate armor of elemental stone, which breaks down when the guard is slain.\nThese guards are fanatically loyal to the Black Earth priests and the leaders of the cult. They fight to the death if commanded to do so by their superiors. Those with more potential become burrowsharks.\nSource: Princes of the Apocalypse p. 195",
      "environment": ""
   },
   {
      "name": "Black Earth Priest",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Neutral Evil",
      "ac": "17 (splint armor)",
      "hp": "45 (7d8+14)",
      "speed": "walk 30 ft.",
      "str": "15",
      "dex": "11",
      "con": "14",
      "int": "12",
      "wis": "10",
      "cha": "16",
      "save": "",
      "skill": "Intimidation +5, Religion +3, Persuasion +5",
      "passive": "10",
      "languages": "Common, Terran",
      "cr": "3",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The priest makes two melee attacks."
            ]
         },
         {
            "name": "Glaive",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. 7 (1d10 + 2) slashing damage."
            ],
            "attack": [
               "Glaive|+4|1d10+2"
            ]
         }
      ],
      "reaction": {
         "name": "Unyielding",
         "text": [
            "When the priest is subjected to an effect that would move it, knock it prone, or both, it can use its reaction to be neither moved nor knocked prone."
         ]
      },
      "trait": [
         {
            "name": "Spellcasting",
            "text": [
               "The priest is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells:",
               "Cantrips (at will): acid splash, blade ward, light, mending, mold earth",
               "• 1st level (4 slots): earth tremor, expeditious retreat, shield",
               "• 2nd level (3 slots): shatter, spider climb",
               "• 3rd level (2 slots): slow"
            ]
         }
      ],
      "slots": "4, 3, 2",
      "spells": "acid splash, blade ward, light, mending, mold earth, earth tremor, expeditious retreat, shield, shatter, spider climb, slow",
      "description": "The priests of the Black Earth are the drivers and organizers of Ogremoch's cult. They are the true believers, seeing Ogremoch as a divine force, and they have developed a twisted dogma to explain how the evil of elemental earth is destined to remake the world and rule over all. The Black Earth priests form a cabal of leaders whose fanaticism and magical power serve as the backbone of the cult. Individuals of unusual power hold higher rank in the cult, but the priests provide the cult leader with his or her authority over the rest of Ogremoch's followers.\nSource: Princes of the Apocalypse p. 195",
      "environment": ""
   },
   {
      "name": "Braelen Hatherhand",
      "size": "M",
      "type": "humanoid (any race)",
      "alignment": "Any alignment",
      "ac": "10",
      "hp": "2 (1d8)",
      "speed": "walk 30 ft.",
      "str": "10",
      "dex": "10",
      "con": "10",
      "int": "10",
      "wis": "10",
      "cha": "10",
      "save": "",
      "skill": "",
      "passive": "10",
      "languages": "any one language (usually Common)",
      "cr": "0",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Club",
            "text": [
               "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 2 (1d4) bludgeoning damage."
            ],
            "attack": [
               "Club|+2|1d4"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 156",
      "environment": "arctic, desert, coastal, grassland, hill, urban, forest"
   },
   {
      "name": "Bronzefume",
      "size": "G",
      "type": "dragon",
      "alignment": "Neutral",
      "ac": "20 (natural armor)",
      "hp": "220 (22d20+110)",
      "speed": "walk 20 ft., swim 40 ft.",
      "str": "25",
      "dex": "10",
      "con": "20",
      "int": "10",
      "wis": "12",
      "cha": "12",
      "save": "Dex +6, Con +11, Wis +7",
      "skill": "",
      "passive": "11",
      "languages": "Aquan, Draconic",
      "cr": "17",
      "resist": "fire",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "darkvision 120 ft.",
      "trait": [
         {
            "name": "Amphibious",
            "text": [
               "The dragon turtle can breathe air and water."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks."
            ]
         },
         {
            "name": "Bite",
            "text": [
               "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. 26 (3d12 + 7) piercing damage."
            ],
            "attack": [
               "Bite|+13|3d12+7"
            ]
         },
         {
            "name": "Claw",
            "text": [
               "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. 16 (2d8 + 7) slashing damage."
            ],
            "attack": [
               "Claw|+13|2d8+7"
            ]
         },
         {
            "name": "Tail",
            "text": [
               "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone."
            ],
            "attack": [
               "Tail|+13|3d12+7"
            ]
         },
         {
            "name": "Steam Breath (Recharge 5-6)",
            "text": [
               "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage."
            ],
            "attack": [
               "Steam Breath (Recharge 5-6)||15d6"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 92",
      "environment": "underwater, coastal"
   },
   {
      "name": "Burrowshark",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Neutral Evil",
      "ac": "18 (plate armor)",
      "hp": "82 (11d8+33)",
      "speed": "walk 30 ft.",
      "str": "18",
      "dex": "12",
      "con": "16",
      "int": "10",
      "wis": "11",
      "cha": "13",
      "save": "",
      "skill": "Animal handling +2, Athletics +6, Intimidation +3, Perception +2",
      "passive": "12",
      "languages": "Common",
      "cr": "4",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Bond of the Black Earth",
            "text": [
               "The burrowshark is magically bound to a bulette trained to serve as its mount. While mounted on its bulette, the burrowshark shares the bulette's senses and can ride the bulette while it burrows. The bonded bulette obeys the burrowshark's commands. If its mount dies, the burrowshark can train a new bulette to serve as its bonded mount, a process requiring a month."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The burrowshark makes three melee attacks."
            ]
         },
         {
            "name": "Spear",
            "text": [
               "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage if used with two hands to make a melee attack."
            ],
            "attack": [
               "Spear|+6|1d6+4"
            ]
         }
      ],
      "reaction": {
         "name": "Unyielding",
         "text": [
            "When the burrowshark is subjected to an effect that would move it, knock it prone, or both, it can use its reaction to be neither moved nor knocked prone."
         ]
      },
      "description": "Elite warriors of the earth cult, burrowsharks are fierce champions who ride trained bulettes into battle. While their powerful mounts rend and tear foes to pieces, burrowsharks leap to the ground and cut down their foes without mercy.\nBurrowsharks are much like Black Earth guards, since both have uncanny footing and special armor. For burrowsharks, an additional gift of Ogremoch's might establishes a magical bond between the burrowshark and a bulette, allowing the rider to burrow with its mount and sense what its mount senses.\nSource: Princes of the Apocalypse p. 196",
      "environment": ""
   },
   {
      "name": "Cavil Zaltobar",
      "size": "M",
      "type": "humanoid (any race)",
      "alignment": "Any alignment",
      "ac": "12 (15 with mage armor)",
      "hp": "40 (9d8)",
      "speed": "walk 30 ft.",
      "str": "9",
      "dex": "14",
      "con": "11",
      "int": "17",
      "wis": "12",
      "cha": "11",
      "save": "Int +6, Wis +4",
      "skill": "Arcana +6, History +6",
      "passive": "11",
      "languages": "any four languages",
      "cr": "6",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Dagger",
            "text": [
               "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2) piercing damage."
            ],
            "attack": [
               "Dagger|+5|1d4+2"
            ]
         },
         {
            "name": "Variant: Familiars",
            "text": [
               "Any spellcaster that can cast the find familiar spell (such as an archmage or mage) is likely to have a familiar. The familiar can be one of the creatures described in the spell (see the Player's Handbook) or some other Tiny monster, such as a crawling claw, imp, pseudodragon, or quasit."
            ]
         }
      ],
      "trait": [
         {
            "name": "Spellcasting",
            "text": [
               "Cavil is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). Cavil has the following wizard spells prepared:",
               "Cantrips (at will): fire bolt, light, mage hand, prestidigitation",
               "• 1st level (4 slots): detect magic, mage armor, magic missile, shield",
               "• 2nd level (3 slots): misty step, suggestion",
               "• 3rd level (3 slots): counterspell, fireball, fly",
               "• 4th level (3 slots): greater invisibility, ice storm",
               "• 5th level (1 slots): cone of cold"
            ]
         }
      ],
      "slots": "4, 3, 3, 3, 1",
      "spells": "fire bolt, light, mage hand, prestidigitation, detect magic, mage armor, magic missile, shield, misty step, suggestion, counterspell, fireball, fly, greater invisibility, ice storm, cone of cold",
      "description": "Source: Princes of the Apocalypse p. 182",
      "environment": ""
   },
   {
      "name": "Crushing Wave Priest",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Neutral Evil",
      "ac": "13 (chain shirt)",
      "hp": "52 (8d8+16)",
      "speed": "walk 30 ft.",
      "str": "15",
      "dex": "11",
      "con": "14",
      "int": "10",
      "wis": "11",
      "cha": "16",
      "save": "",
      "skill": "Deception +5, Religion +2, Stealth +2",
      "passive": "10",
      "languages": "Aquan, Common",
      "cr": "2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Quarterstaff",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 6 (1d8 + 2) bludgeoning damage."
            ],
            "attack": [
               "Quarterstaff|+4|1d8+2"
            ]
         }
      ],
      "trait": [
         {
            "name": "Spellcasting",
            "text": [
               "The priest is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells:",
               "Cantrips (at will): chill touch, mage hand, minor illusion, prestidigitation, ray of frost",
               "• 1st level (4 slots): expeditious retreat, ice knife, magic missile, shield",
               "• 2nd level (3 slots): blur, hold person",
               "• 3rd level (2 slots): sleet storm"
            ]
         }
      ],
      "slots": "4, 3, 2",
      "spells": "chill touch, mage hand, minor illusion, prestidigitation, ray of frost, expeditious retreat, ice knife, magic missile, shield, blur, hold person, sleet storm",
      "description": "Crushing Wave priests are the fanatical core of the cult. Gathering in secretive cabals, they perform dark rituals to glorify Olhydra as the embodiment of water's destructiveness. They believe that using water to kill their enemies, such as through ritual drowning, earns them Olhydra's favor.\nSource: Princes of the Apocalypse p. 205",
      "environment": ""
   },
   {
      "name": "Crushing Wave Reaver",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Neutral Evil",
      "ac": "14 (shield)",
      "hp": "22 (4d8+4)",
      "speed": "walk 30 ft.",
      "str": "15",
      "dex": "14",
      "con": "13",
      "int": "10",
      "wis": "11",
      "cha": "8",
      "save": "",
      "skill": "Athletics +4, Stealth +4",
      "passive": "10",
      "languages": "Common",
      "cr": "1/2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Sharktoothed Longsword",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands. Against a target is wearing no armor, the reaver deals an extra die of damage with this sword."
            ],
            "attack": [
               "Sharktoothed Longsword|+4|1d8+2"
            ]
         },
         {
            "name": "Javelin",
            "text": [
               "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. 5 (1d6 + 2) piercing damage."
            ],
            "attack": [
               "Javelin|+4|1d6+2"
            ]
         }
      ],
      "description": "The foot soldiers of the Crushing Wave cult are vicious sea reavers. Many of them were pirates before they fell in with the cult, and they remain eager for blood and plunder. Crushing Wave reavers appreciate the value of stealth and surprise, and look for chances to launch sudden attacks from positions of concealment whenever possible. The soldiers of the Crushing Wave cult are highly loyal to the cult priests, but they rarely fight to the death if an avenue of retreat is open to them.\nReavers carry shields made of giant crab shells, and the blades of their swords are lined with shark's teeth.\nSource: Princes of the Apocalypse p. 205",
      "environment": ""
   },
   {
      "name": "Darathra Shendrel",
      "size": "M",
      "type": "humanoid (any race)",
      "alignment": "Any alignment",
      "ac": "18 (plate armor)",
      "hp": "52 (8d8+16)",
      "speed": "walk 30 ft.",
      "str": "16",
      "dex": "11",
      "con": "14",
      "int": "11",
      "wis": "11",
      "cha": "15",
      "save": "Con +4, Wis +2",
      "skill": "",
      "passive": "10",
      "languages": "any one language (usually Common)",
      "cr": "3",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Brave",
            "text": [
               "Darathra has advantage on saving throws against being frightened."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Darathra makes two melee attacks."
            ]
         },
         {
            "name": "Greatsword",
            "text": [
               "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 10 (2d6 + 3) slashing damage."
            ],
            "attack": [
               "Greatsword|+5|2d6+3"
            ]
         },
         {
            "name": "Heavy Crossbow",
            "text": [
               "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. 5 (1d10) piercing damage."
            ],
            "attack": [
               "Heavy Crossbow|+2|1d10"
            ]
         },
         {
            "name": "Leadership (Recharges after a Short or Long Rest)",
            "text": [
               "For 1 minute, Darathra can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand Darathra. A creature can benefit from only one Leadership die at a time. This effect ends if Darathra is incapacitated."
            ]
         }
      ],
      "reaction": {
         "name": "Parry",
         "text": [
            "Darathra adds 2 to its AC against one melee attack that would hit it. To do so, Darathra must see the attacker and be wielding a melee weapon."
         ]
      },
      "description": "Source: Princes of the Apocalypse p. 37",
      "environment": ""
   },
   {
      "name": "Dark Tide Knight",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Lawful Evil",
      "ac": "13",
      "hp": "58 (9d8+18)",
      "speed": "walk 30 ft.",
      "str": "17",
      "dex": "16",
      "con": "14",
      "int": "10",
      "wis": "11",
      "cha": "11",
      "save": "",
      "skill": "Athletics +7, Stealth +7",
      "passive": "10",
      "languages": "Common",
      "cr": "3",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Bonded Mount",
            "text": [
               "The knight is magically bound to a beast with an innate swimming speed trained to serve as its mount. While mounted on this beast, the knight gains the beast's senses and ability to breathe underwater. The bonded mount obeys the knight's commands. If its mount dies, the knight can train a new beast to serve as its bonded mount, a process requiring a month."
            ]
         },
         {
            "name": "Sneak Attack",
            "text": [
               "The knight deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the knight that isn't incapacitated and the knight doesn't have disadvantage on the attack roll."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The knight makes two shortsword attacks."
            ]
         },
         {
            "name": "Shortsword",
            "text": [
               "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (1d6 + 3) piercing damage."
            ],
            "attack": [
               "Shortsword|+5|1d6+3"
            ]
         },
         {
            "name": "Lance",
            "text": [
               "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. 9 (1d12 + 3) piercing damage."
            ],
            "attack": [
               "Lance|+5|1d12+3"
            ]
         }
      ],
      "reaction": {
         "name": "Uncanny Dodge",
         "text": [
            "When an attacker the knight can see hits it with an attack, the knight can halve the damage against it."
         ]
      },
      "description": "Dark Tide knights are the elite warriors of the Crushing Wave cult. By drawing upon Olhydra's dark power, they gain the ability to ride sea-creatures that normally wouldn't be suitable as mounts, and can even breathe underwater and share their mount's senses. The knights prefer to fight from or in the water, since they don't like to leave their mounts behind, but they can be fierce opponents on foot at need.\nUnlike most other knights, Dark Tide knights disdain heavy armor, relying on the speed and ferocity of their attacks to carry them to victory.\nSource: Princes of the Apocalypse p. 205, Essentials Kit: Storm Lord's Wrath",
      "environment": ""
   },
   {
      "name": "Deseyna Majarra",
      "size": "M",
      "type": "humanoid (any race)",
      "alignment": "Any alignment",
      "ac": "15 (breastplate)",
      "hp": "9 (2d8)",
      "speed": "walk 30 ft.",
      "str": "11",
      "dex": "12",
      "con": "11",
      "int": "12",
      "wis": "14",
      "cha": "16",
      "save": "",
      "skill": "Deception +5, Insight +4, Persuasion +5",
      "passive": "12",
      "languages": "any two languages",
      "cr": "1/8",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Rapier",
            "text": [
               "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 5 (1d8 + 1) piercing damage."
            ],
            "attack": [
               "Rapier|+3|1d8+1"
            ]
         }
      ],
      "reaction": {
         "name": "Parry",
         "text": [
            "Deseyna adds 2 to its AC against one melee attack that would hit it. To do so, Deseyna must see the attacker and be wielding a melee weapon."
         ]
      },
      "description": "Source: Princes of the Apocalypse p. 126",
      "environment": ""
   },
   {
      "name": "Drannin Splithelm",
      "size": "M",
      "type": "humanoid (shield dwarf)",
      "alignment": "Neutral Evil",
      "ac": "18 (plate armor)",
      "hp": "93 (11d8+44)",
      "speed": "walk 25 ft.",
      "str": "19",
      "dex": "10",
      "con": "18",
      "int": "11",
      "wis": "8",
      "cha": "12",
      "save": "",
      "skill": "Athletics +7, Intimidation +4",
      "passive": "9",
      "languages": "Common, Dwarvish",
      "cr": "7",
      "resist": "cold, poison",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "darkvision 60 ft.",
      "trait": [
         {
            "name": "Action Surge (Recharges after a Short or Long Rest)",
            "text": [
               "Drannin takes an additional action on his turn."
            ]
         },
         {
            "name": "Brute",
            "text": [
               "A melee weapon deals one extra die of its damage when Drannin hits with it (included in the attack)."
            ]
         },
         {
            "name": "Dwarven Resilience",
            "text": [
               "Drannin has advantage on saving throws against poison."
            ]
         },
         {
            "name": "Indomitable (Recharges after a Short or Long Rest)",
            "text": [
               "Drannin can reroll a saving throw that he fails. He must use the new roll."
            ]
         },
         {
            "name": "Second Wind (Recharges after a Short or Long Rest)",
            "text": [
               "Drannin can use a bonus action to regain 16 (1d10 + 11) hit points."
            ]
         },
         {
            "name": "Special Equipment",
            "text": [
               "Drannin wears a control amulet for his shield guardian (see the Monster Manual) and a ring of cold resistance. He also carries a potion of frost giant strength."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Drannin makes three attacks with his greataxe."
            ]
         },
         {
            "name": "Greataxe",
            "text": [
               "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 17 (2d12 + 4) slashing damage."
            ],
            "attack": [
               "Greataxe|+7|2d12+4"
            ]
         }
      ],
      "description": "Drannin is a self-serving dwarf who has always felt that, due to his heritage, he was owed better than he received. When he didn't receive the accolades, he began to see everyone in his way as the problem, trying to keep him down, and he vowed to do whatever it took to turn the tables. He is currently intent on claiming the legendary axe Orcsplitter, the weapon buried with King Torhild Flametongue of Besilmer many centuries ago. The secret doors and puzzles of the Halls of the Hunting Axe have frustrated Drannin for a long time, but he now has a plan to dupe his cousin Gargosh into finding the axe for him (see the \"Halls of the Hunting Axe\" side trek in chapter 6). Drannin believes that with Orcsplitter in his possession he can establish himself as a powerful lord among his clan, and finally win the respect he thinks he deserves.\nDrannin's most prized possession is his shield guardian. He stole the amulet that controls the shield guardian from a sorcerer some years back.\nSource: Princes of the Apocalypse p. 210",
      "environment": ""
   },
   {
      "name": "Elizar Dryflagon",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Neutral Evil",
      "ac": "14 (hide armor)",
      "hp": "71 (11d8+22)",
      "speed": "walk 30 ft.",
      "str": "13",
      "dex": "15",
      "con": "14",
      "int": "11",
      "wis": "18",
      "cha": "10",
      "save": "",
      "skill": "Arcana +3, Deception +3",
      "passive": "14",
      "languages": "Common, Druidic",
      "cr": "5",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Summon Mephits (Recharges after a Long Rest)",
            "text": [
               "By puffing on his pipe, Elizar can use an action to cast conjure minor elementals. If he does so, he summons four smoke mephits."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "Elizar is a 7th-level spellcaster. His spellcasting ability is Wisdom (spell save DC 15, +7 to hit with spell attacks). Elizar has the following druid spells prepared:",
               "Cantrips (at will): druidcraft, guidance, poison spray, produce flame",
               "• 1st level (4 slots): animal friendship, faerie fire, healing word, jump, thunderwave",
               "• 2nd level (3 slots): flame blade, spike growth",
               "• 3rd level (3 slots): dispel magic, stinking cloud",
               "• 4th level (2 slots): blight, wall of fire"
            ]
         }
      ],
      "action": [
         {
            "name": "Dagger +1",
            "text": [
               "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. 5 (1d4 + 3) piercing damage."
            ],
            "attack": [
               "Dagger +1|+6|1d4+3"
            ]
         }
      ],
      "slots": "4, 3, 3, 2",
      "spells": "druidcraft, guidance, poison spray, produce flame, animal friendship, faerie fire, healing word, jump, thunderwave, flame blade, spike growth, dispel magic, stinking cloud, blight, wall of fire",
      "description": "Elizar was a druid who claims to be a member of the Circle of the Scarlet Moon. However, Elizar is really in service to Imix, maintaining some druidic power through a connection to the elements.\nSource: Princes of the Apocalypse p. 202",
      "environment": ""
   },
   {
      "name": "Emberhorn Minotaur",
      "size": "L",
      "type": "monstrosity",
      "alignment": "Chaotic Evil",
      "ac": "14 (natural armor)",
      "hp": "76 (9d10+27)",
      "speed": "walk 40 ft.",
      "str": "18",
      "dex": "11",
      "con": "16",
      "int": "6",
      "wis": "16",
      "cha": "9",
      "save": "",
      "skill": "Perception +7",
      "passive": "17",
      "languages": "Abyssal",
      "cr": "3",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "darkvision 60 ft.",
      "trait": [
         {
            "name": "Charge",
            "text": [
               "If the minotaur moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone."
            ]
         },
         {
            "name": "Labyrinthine Recall",
            "text": [
               "The minotaur can perfectly recall any path it has traveled."
            ]
         },
         {
            "name": "Reckless",
            "text": [
               "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
            ]
         }
      ],
      "action": [
         {
            "name": "Burning Breath (Recharge 5-6)",
            "text": [
               "The minotaur exhales a cloud of burning embers in a 15-foot cone. Each creature in that area must succeed on a DC 14 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one."
            ],
            "attack": [
               "Burning Breath (Recharge 5-6)||6d6"
            ]
         },
         {
            "name": "Greataxe",
            "text": [
               "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 17 (2d12 + 4) slashing damage."
            ],
            "attack": [
               "Greataxe|+6|2d12+4"
            ]
         },
         {
            "name": "Gore",
            "text": [
               "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 13 (2d8 + 4) piercing damage."
            ],
            "attack": [
               "Gore|+6|2d8+4"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 120",
      "environment": "underdark"
   },
   {
      "name": "Eternal Flame Guardian",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Chaotic Evil",
      "ac": "17 (breastplate, shield, 15 while using a crossbow)",
      "hp": "45 (7d8+14)",
      "speed": "walk 30 ft.",
      "str": "15",
      "dex": "13",
      "con": "14",
      "int": "8",
      "wis": "11",
      "cha": "13",
      "save": "",
      "skill": "Intimidation +3, Perception +2",
      "passive": "12",
      "languages": "Common",
      "cr": "2",
      "resist": "fire",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Flaming Weapon (Recharges after a Short or Long Rest)",
            "text": [
               "As a bonus action, the guard can wreath one melee weapon it is wielding in flame. The guard is unharmed by this fire, which lasts until the end of the guard's next turn. While wreathed in flame, the weapon deals an extra 3 (1d6) fire damage on a hit."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The guard makes two melee attacks."
            ]
         },
         {
            "name": "Longsword",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 6 (1d8 + 2) slashing damage."
            ],
            "attack": [
               "Longsword|+4|1d8+2"
            ]
         },
         {
            "name": "Heavy Crossbow",
            "text": [
               "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. 6 (1d10 + 1) piercing damage."
            ],
            "attack": [
               "Heavy Crossbow|+3|1d10+1"
            ]
         }
      ],
      "description": "Eternal Flame guardians are dullards fascinated by the power of fire and eager to show the cult's enemies firsthand what it feels like to burn. They light things aflame to honor elemental fire and just for entertainment, but they don't always think ahead about what else nearby might catch fire.\nSource: Princes of the Apocalypse p. 200",
      "environment": ""
   },
   {
      "name": "Eternal Flame Priest",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Neutral Evil",
      "ac": "12 (15 with mage armor)",
      "hp": "52 (8d8+16)",
      "speed": "walk 30 ft.",
      "str": "12",
      "dex": "15",
      "con": "14",
      "int": "10",
      "wis": "11",
      "cha": "16",
      "save": "",
      "skill": "Deception +5, Intimidation +5, Religion +2",
      "passive": "10",
      "languages": "Common, Ignan",
      "cr": "3",
      "resist": "fire",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Dagger",
            "text": [
               "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2) piercing damage."
            ],
            "attack": [
               "Dagger|+4|1d4+2"
            ]
         }
      ],
      "trait": [
         {
            "name": "Spellcasting",
            "text": [
               "The priest is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells:",
               "Cantrips (at will): control flames, create bonfire, fire bolt, light, minor illusion",
               "• 1st level (4 slots): burning hands, expeditious retreat, mage armor",
               "• 2nd level (3 slots): blur, scorching ray",
               "• 3rd level (2 slots): fireball"
            ]
         }
      ],
      "slots": "4, 3, 2",
      "spells": "control flames, create bonfire, fire bolt, light, minor illusion, burning hands, expeditious retreat, mage armor, blur, scorching ray, fireball",
      "description": "Eternal Flame priests see the world around them as impure and unworthy, and believe that only cleansing by fire can set it right. As a result, all fire is deemed holy, from the smallest candle flame to the greatest conflagrations. When traveling in the open, Eternal Flame priests are clever enough to hide their true beliefs, passing themselves off as druids or wizards with a knack for fire magic.\nSource: Princes of the Apocalypse p. 200",
      "environment": ""
   },
   {
      "name": "Fathomer",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Neutral Evil",
      "ac": "10 (13 with mage armor)",
      "hp": "52 (8d8+16)",
      "speed": "walk 30 ft.",
      "str": "14",
      "dex": "11",
      "con": "14",
      "int": "11",
      "wis": "11",
      "cha": "15",
      "save": "",
      "skill": "Arcana +2, Perception +4, Stealth +4",
      "passive": "14",
      "languages": "Aquan, Common",
      "cr": "2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Shapechanger (2/Day)",
            "text": [
               "The fathomer can use its action to polymorph into a Medium serpent composed of water, or back into its true form. Anything the fathomer is wearing or carrying is subsumed into the serpent form during the change, inaccessible until the fathomer returns to its true form. The fathomer reverts to its true form after 4 hours, unless it can expend another use of this trait. If the fathomer is knocked unconscious or dies, it also reverts to its true form.",
               "While in serpent form, the fathomer gains a swimming speed of 40 feet, the ability to breathe underwater, immunity to poison damage, as well as resistance to fire damage and bludgeoning, piercing, and slashing damage from nonmagical attacks. It also has immunity to the following conditions: exhaustion, grappled, paralyzed, poisoned, restrained, prone, unconscious. The serpent form can enter a hostile creature's space and stop there. In addition, if water can pass through a space, the serpent can do so without squeezing."
            ]
         },
         {
            "name": "Olhydra's Armor (Human Form Only)",
            "text": [
               "The fathomer can cast mage armor at will, without expending material components."
            ]
         },
         {
            "name": "Spellcasting (Human Form Only)",
            "text": [
               "The fathomer is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It has two 3rd-level spell slots, which it regains after finishing a short or long rest, and knows the following warlock spells:",
               "Cantrips (at will): chill touch, eldritch blast, mage hand",
               "• 3rd level (2 slots): armor of Agathys, expeditious retreat, hex, invisibility, Vampiric touch"
            ]
         }
      ],
      "action": [
         {
            "name": "Constrict (Serpent Form Only)",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 9 (2d6 + 2) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 12). Until the grapple ends, the target is restrained, and the fathomer can't constrict another target."
            ],
            "attack": [
               "Constrict (Serpent Form Only)|+4|2d6+2"
            ]
         },
         {
            "name": "Dagger (Human Form Only)",
            "text": [
               "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2) piercing damage."
            ],
            "attack": [
               "Dagger (Human Form Only)|+4|1d4+2"
            ]
         }
      ],
      "slots": "2",
      "spells": "chill touch, eldritch blast, mage hand, armor of Agathys, expeditious retreat, hex, invisibility, Vampiric touch",
      "description": "Fathomers are cultists who have sealed a pact with Olhydra, Princess of Evil Water. In addition to their spellcasting abilities, fathomers have the ability to transform their bodies into water, taking serpent-like shapes. In their water serpent forms, fathomers gain many of the resistances elemental creatures possess, as well as the ability to grapple and crush their enemies with their watery bodies.\nFathomers often serve as spies, infiltrators, and assassins for the water cult, since they can slip under locked doors or pass through bars and similar obstacles with ease.\nSource: Princes of the Apocalypse p. 207, Ghosts of Saltmarsh",
      "environment": ""
   },
   {
      "name": "Feathergale Knight",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Lawful Evil",
      "ac": "16 (scale mail)",
      "hp": "33 (6d8+6)",
      "speed": "walk 30 ft.",
      "str": "14",
      "dex": "14",
      "con": "12",
      "int": "11",
      "wis": "10",
      "cha": "14",
      "save": "",
      "skill": "Animal handling +2, History +2",
      "passive": "10",
      "languages": "Auran, Common",
      "cr": "1",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The knight makes two melee attacks."
            ]
         },
         {
            "name": "Longsword",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
            ],
            "attack": [
               "Longsword|+4|1d8+2"
            ]
         },
         {
            "name": "Spear",
            "text": [
               "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack."
            ],
            "attack": [
               "Spear|+4|1d6+2"
            ]
         }
      ],
      "trait": [
         {
            "name": "Spellcasting",
            "text": [
               "The knight is a 1st-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It knows the following sorcerer spell:",
               "Cantrips (at will): gust, light, message, ray of frost",
               "• 1st level (2 slots): expeditious retreat, feather fall"
            ]
         }
      ],
      "slots": "2",
      "spells": "gust, light, message, ray of frost, expeditious retreat, feather fall",
      "description": "The Feathergale Knights are ambitious, wealthy folk from cities such as Waterdeep seduced by the air cult's promises of power. From the backs of hippogriffs or giant vultures, they survey the land around Feathergale Spire, guarding the entrance to the air cult's hidden temple.\nThe knights are contemptuous of other elemental cultists, whom they view as depraved lunatics. Under lord commander Thurl Merosska, the Feathergale Knights see themselves as elite men and women who can make hard choices for the good of their realms. In reality, they are bound to Yan-C-Bin and are blind to their own corruption and decadence. Despite their refined manners and social sophistication, each has sealed that pact with the murder of a sentient being-deaths the knights have dubbed necessary for the security of the realm.\nThe knights have access to wingwear, as described in the \"Elemental Magic Items\" section. They are often wearing it when encountered.\nSource: Princes of the Apocalypse p. 189",
      "environment": ""
   },
   {
      "name": "Fennor",
      "size": "M",
      "type": "humanoid (any race)",
      "alignment": "Any Chaotic Alignment",
      "ac": "13 (hide armor)",
      "hp": "67 (9d8+27)",
      "speed": "walk 30 ft.",
      "str": "16",
      "dex": "12",
      "con": "17",
      "int": "9",
      "wis": "11",
      "cha": "9",
      "save": "",
      "skill": "",
      "passive": "10",
      "languages": "any one language (usually Common)",
      "cr": "2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Reckless",
            "text": [
               "At the start of its turn, Fennor can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
            ]
         }
      ],
      "action": [
         {
            "name": "Greataxe",
            "text": [
               "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 9 (1d12 + 3) slashing damage."
            ],
            "attack": [
               "Greataxe|+5|1d12+3"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 170",
      "environment": ""
   },
   {
      "name": "Flamewrath",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Chaotic Evil",
      "ac": "12 (15 with mage armor)",
      "hp": "105 (14d8+42)",
      "speed": "walk 30 ft.",
      "str": "10",
      "dex": "14",
      "con": "16",
      "int": "11",
      "wis": "10",
      "cha": "16",
      "save": "",
      "skill": "Arcana +3, Religion +3",
      "passive": "10",
      "languages": "Common, Ignan",
      "cr": "6",
      "resist": "",
      "immune": "fire",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Wreathed in Flame",
            "text": [
               "For the flamewrath, the warm version of the fire shield spell has a duration of \"until dispelled.\" The fire shield burns for 10 minutes after the flamewrath dies, consuming its body."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "The flamewrath is a 7th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It knows the following sorcerer spells:",
               "Cantrips (at will): control flames, fire bolt, friends, light, minor illusion",
               "• 1st level (4 slots): burning hands, color spray, mage armor",
               "• 2nd level (3 slots): scorching ray, suggestion",
               "• 3rd level (3 slots): fireball, hypnotic pattern",
               "• 4th level (1 slots): fire shield (see Wreathed in Flame)"
            ]
         }
      ],
      "action": [
         {
            "name": "Dagger",
            "text": [
               "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2) piercing damage."
            ],
            "attack": [
               "Dagger|+5|1d4+2"
            ]
         }
      ],
      "slots": "4, 3, 3, 1",
      "spells": "control flames, fire bolt, friends, light, minor illusion, burning hands, color spray, mage armor, scorching ray, suggestion, fireball, hypnotic pattern, fire shield",
      "description": "A flamewrath is a spellcaster that has earned the favor of Imix, the Prince of Elemental Fire, through a series of painful rites. A flamewrath's skin is burned and scarred. Inured to pain, the flamewrath revels in battle, using an array of fire spells to incinerate enemies who would try to douse the power of elemental fire. Melee combatants who draw too close face fires that can dance across the flamewrath's skin and burn attackers.\nSource: Princes of the Apocalypse p. 201",
      "environment": ""
   },
   {
      "name": "Gar Shatterkeel",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Neutral Evil",
      "ac": "16 (natural armor)",
      "hp": "97 (15d8+45)",
      "speed": "walk 30 ft., swim 30 ft.",
      "str": "15",
      "dex": "15",
      "con": "16",
      "int": "12",
      "wis": "18",
      "cha": "13",
      "save": "",
      "skill": "Nature +9, Survival +8",
      "passive": "14",
      "languages": "Aquan, Common",
      "cr": "9",
      "resist": "cold",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Amphibious",
            "text": [
               "Gar can breathe air and water."
            ]
         },
         {
            "name": "Legendary Resistance (2/Day)",
            "text": [
               "If Gar fails a saving throw, he can choose to succeed instead."
            ]
         },
         {
            "name": "Water Walk",
            "text": [
               "Gar can stand and move on liquid surfaces as if they were solid ground."
            ]
         },
         {
            "name": "Watery Fall",
            "text": [
               "When Gar drops to 0 hit points, his body collapses into a pool of inky water that rapidly disperses. Anything he was wearing or carrying is left behind."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "Gar is a 9th-level spellcaster. His spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks). He has the following druid spells prepared:",
               "Cantrips (at will): mending, resistance, shape water",
               "• 1st level (4 slots): create or destroy water, cure wounds, fog cloud, thunderwave",
               "• 2nd level (3 slots): darkvision, hold person, protection from poison",
               "• 3rd level (3 slots): call lightning, sleet storm, tidal wave",
               "• 4th level (3 slots): control water, ice storm",
               "• 5th level (1 slots): scrying"
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Gar makes two melee attacks, one with his claw and one with Drown."
            ]
         },
         {
            "name": "Claw",
            "text": [
               "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 9 (2d6 + 2) bludgeoning damage, and the target is grappled (escape DC 13). Until the grapple ends, Gar can't attack other creatures with his claw."
            ],
            "attack": [
               "Claw|+6|2d6+2"
            ]
         },
         {
            "name": "Drown",
            "text": [
               "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. 6 (1d6 + 3) piercing damage plus 4 (1d8) cold damage."
            ],
            "attack": [
               "Drown|+7|1d6+3"
            ]
         }
      ],
      "legendary": [
         {
            "name": "Lair Actions"
         },
         {
            "text": [
               "Gar can employ lair actions while he's within the coral mountain.",
               "On initiative count 20 (losing initiative ties), Gar Shatterkeel takes a lair action to cause one of the following effects; Gar can't use the same effect two rounds in a row.",
               "• Gar may teleport anywhere within the coral mountain, bringing up to five willing creatures with him.",
               "• The coral in a 60-foot radius grows rapidly around creatures inside the coral mountain. Each creature must succeed on a DC 18 Strength saving throw or become restrained. Restrained creatures can take an action on their turn to make a DC 18 Strength (Athletics) or Dexterity (Acrobatics) check to free themselves. This effect lasts for 1 minute unless dispelled (it counts as a 6th level spell), and doesn't require Gar to maintain concentration. Gar Shatterkeel and any creatures he designates are immune to this effect.",
               "• Up to five corpses that Gar can see within 60 feet rise up as drowned blade and attack anyone Gar directs them to on his turn."
            ]
         },
         {
            "name": "Lair Actions"
         },
         {
            "text": [
               "If Gar is in the water node while Olhydra isn't, he can take lair actions. On initiative count 20 (losing initiative ties), Gar uses a lair action to use his Multiattack or cast one of his spells, up to 3rd level, without using components or a spell slot. He can't cast the same spell two rounds in a row, but he can continue to concentrate on a spell he previously cast using a lair action. He can take no other lair actions while concentrating on a spell cast as a lair action. His favorite use of this capability is casting inflict wounds or call lightning.",
               "If Gar casts cure wounds using this lair action, he regains the maximum number of hit points from the spell (28)."
            ]
         }
      ],
      "slots": "4, 3, 3, 3, 1",
      "spells": "mending, resistance, shape water, create or destroy water, cure wounds, fog cloud, thunderwave, darkvision, hold person, protection from poison, call lightning, sleet storm, tidal wave, control water, ice storm, scrying",
      "description": "Gar Shatterkeel is the water prophet of Elemental Evil and the dour leader of the Crushing Wave cult. He is embittered by a life of suffering at the hands of others. Pirates killed his family when he was young, he was forced into servitude aboard a merchant ship, and then another band of pirates left him to die at sea, where he lost his arm to a shark. Gar sees the elemental power of water as the only thing of value in his life and has gathered others who feel as he does.\nGar bears the elemental weapon Drown. His missing arm has been replaced by an artificial limb in the shape of a crab's claw. As the leader of Olhydra's cult, he wields her innate magic. Other Crushing Wave cultists sense her power in him and follow him out of fear.\nIn the Water Node. When it becomes clear that the Temple of the Crushing Wave is no longer secure, Gar retreats to the Plunging Torrents, the water node. Within this node, Gar gains one additional use of his Legendary Resistance trait.\nSource: Princes of the Apocalypse p. 208",
      "environment": ""
   },
   {
      "name": "Ghald",
      "size": "L",
      "type": "humanoid (sahuagin)",
      "alignment": "Lawful Evil",
      "ac": "15 (natural armor)",
      "hp": "102 (12d10+36)",
      "speed": "walk 30 ft., swim 50 ft.",
      "str": "19",
      "dex": "17",
      "con": "16",
      "int": "14",
      "wis": "13",
      "cha": "17",
      "save": "Dex +6, Con +6, Int +5, Wis +4",
      "skill": "Insight +4, Perception +7",
      "passive": "17",
      "languages": "Common, Sahuagin",
      "cr": "7",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "darkvision 120 ft.",
      "trait": [
         {
            "name": "Assassinate",
            "text": [
               "During its first turn, Ghald has advantage on attack rolls against any creature that hasn't taken a turn. Any hit Ghald scores against a surprised creature is a critical hit."
            ]
         },
         {
            "name": "Limited Amphibiousness",
            "text": [
               "Ghald can breathe air and water, but he needs to be submerged at least once every 4 hours to avoid suffocating."
            ]
         },
         {
            "name": "Shark Telepathy",
            "text": [
               "Ghald can magically command any shark within 120 feet of him, using a limited telepathy."
            ]
         },
         {
            "name": "Sneak Attack",
            "text": [
               "Ghald deals an extra 14 (4d6) damage when he hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of Ghald's that isn't incapacitated and Ghald doesn't have disadvantage on the attack roll."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Ghald makes three attacks, one with his bite and two with his shortswords."
            ]
         },
         {
            "name": "Bite",
            "text": [
               "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. 9 (2d4 + 4) piercing damage."
            ],
            "attack": [
               "Bite|+7|2d4+4"
            ]
         },
         {
            "name": "Shortsword",
            "text": [
               "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. 11 (2d6 + 4) piercing damage."
            ],
            "attack": [
               "Shortsword|+7|2d6+4"
            ]
         },
         {
            "name": "Garrote",
            "text": [
               "Melee Weapon Attack: +7 to hit, reach 5 ft., one Medium or Small creature against which Ghald has advantage on the attack roll. 9 (2d4 + 4) bludgeoning damage, and the target is grappled (escape DC 15). Until the grapple ends, the target can't breathe, and Ghald has advantage on attack rolls against it."
            ],
            "attack": [
               "Garrote|+7|2d4+4"
            ]
         }
      ],
      "description": "Ghald is an 8-foot-tall, four-armed sahuagin who works with a partner, Unferth, for the Kraken Society in Yartar. He's careful not to emerge from his hiding place beneath the docks unless it's dark and rainy, and even then he hides under a bulky cloak. He and Unferth serve as the Kraken Society's top operatives in this part of the North, and specialize in advancing the agenda of the society through theft, intimidation, and assassination.\nWhen the thieves' guild known as the Hand of Yartar comes into possession of a powerful elemental weapon (see the \"Dark Dealings in Yartar\" side trek in chapter 6), Ghald and Unferth make sure the Kraken Society comes in with the top bid. They then make sure that no one else interferes.\nSource: Princes of the Apocalypse p. 210",
      "environment": ""
   },
   {
      "name": "Grumink the Renegade",
      "size": "M",
      "type": "humanoid (any race)",
      "alignment": "Any Non-Good Alignment",
      "ac": "15 (studded leather armor)",
      "hp": "78 (12d8+24)",
      "speed": "walk 30 ft.",
      "str": "11",
      "dex": "16",
      "con": "14",
      "int": "13",
      "wis": "11",
      "cha": "10",
      "save": "Dex +6, Int +4",
      "skill": "Acrobatics +6, Deception +3, Perception +3, Stealth +9",
      "passive": "13",
      "languages": "Thieves' cant plus any two languages",
      "cr": "8",
      "resist": "poison",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Assassinate",
            "text": [
               "During its first turn, Grumink has advantage on attack rolls against any creature that hasn't taken a turn. Any hit Grumink scores against a surprised creature is a critical hit."
            ]
         },
         {
            "name": "Evasion",
            "text": [
               "If Grumink is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, Grumink instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
            ]
         },
         {
            "name": "Sneak Attack (1/Turn)",
            "text": [
               "Grumink deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of Grumink that isn't incapacitated and Grumink doesn't have disadvantage on the attack roll."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Grumink makes two shortsword attacks."
            ]
         },
         {
            "name": "Shortsword",
            "text": [
               "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
            ],
            "attack": [
               "Shortsword|+6|1d6+3",
               "Shortsword||7d6"
            ]
         },
         {
            "name": "Light Crossbow",
            "text": [
               "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
            ],
            "attack": [
               "Light Crossbow|+6|1d8+3",
               "Light Crossbow||7d6"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 210",
      "environment": ""
   },
   {
      "name": "Hellenrae",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Lawful Evil",
      "ac": "16",
      "hp": "78 (12d8+24)",
      "speed": "walk 50 ft.",
      "str": "13",
      "dex": "18",
      "con": "14",
      "int": "10",
      "wis": "15",
      "cha": "13",
      "save": "",
      "skill": "Acrobatics +7, Athletics +4, Insight +5, Perception +5",
      "passive": "15",
      "languages": "Common, Terran",
      "cr": "5",
      "resist": "",
      "immune": "poison",
      "vulnerable": "",
      "conditionImmune": "blinded, poisoned",
      "senses": "blindsight 60 ft. (blind beyond this radius)",
      "trait": [
         {
            "name": "Evasion",
            "text": [
               "If Hellenrae is subjected to an effect that allows her to make a Dexterity saving throw to take only half damage, she instead takes no damage if she succeeds on the saving throw, and only half damage if she fails."
            ]
         },
         {
            "name": "Stunning Strike (Recharge 5-6)",
            "text": [
               "When Hellenrae hits a target with a melee weapon attack, the target must succeed on a DC 13 Constitution saving throw or be stunned until the end of Hellenrae's next turn."
            ]
         },
         {
            "name": "Unarmored Defense",
            "text": [
               "While Hellenrae is wearing no armor and wielding no shield, her AC includes her Wisdom modifier."
            ]
         },
         {
            "name": "Unarmored Movement",
            "text": [
               "While Hellenrae is wearing no armor and wielding no shield, her speed increases by 20 feet (included in her speed)."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Hellenrae makes three melee attacks."
            ]
         },
         {
            "name": "Unarmed Strike",
            "text": [
               "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 9 (1d10 + 4) bludgeoning damage."
            ],
            "attack": [
               "Unarmed Strike|+7|1d10+4"
            ]
         }
      ],
      "reaction": {
         "name": "Parry and Counter",
         "text": [
            "Hellenrae adds 3 to her AC against one melee or ranged weapon attack that would hit her. To do so, she must be able to sense the attacker with her blindsight. If the attack misses, Hellenrae can make one melee attack against the attacker if it is within her reach."
         ]
      },
      "description": "The chief lieutenant of Marlos Urnrayle, Hellenrae lost her sight as a child. A bitter, angry orphan, she was taken in by a monastic order and trained to use her other senses to compensate. However, she took the monks' philosophy of self-denial and emptiness of mind to extremes, seeking to fill herself with the dark power she sensed sleeping in the earth and rock around her.\nHellenrae is a dour, unsmiling woman who habitually wears drab robes and a golden gargoyle mask with no eye holes. She despises weakness in any form. Therefore, she hates just about everybody, and barely tolerates the other Black Earth cultists.\nSource: Princes of the Apocalypse p. 198",
      "environment": ""
   },
   {
      "name": "Howling Hatred Initiate",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Neutral Evil",
      "ac": "13 (leather armor)",
      "hp": "9 (2d8)",
      "speed": "walk 30 ft.",
      "str": "10",
      "dex": "15",
      "con": "10",
      "int": "10",
      "wis": "9",
      "cha": "11",
      "save": "",
      "skill": "Deception +2, Religion +2, Stealth +4",
      "passive": "9",
      "languages": "Common",
      "cr": "1/8",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Guiding Wind (Recharges after a Short or Long Rest)",
            "text": [
               "As a bonus action, the initiate gains advantage on the next ranged attack roll it makes before the end of its next turn."
            ]
         },
         {
            "name": "Hold Breath",
            "text": [
               "The initiate can hold its breath for 30 minutes."
            ]
         }
      ],
      "action": [
         {
            "name": "Dagger",
            "text": [
               "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2) piercing damage."
            ],
            "attack": [
               "Dagger|+4|1d4+2"
            ]
         }
      ],
      "description": "Howling Hatred initiates are attracted by the cult's philosophy of non-attachment and the rejection of material things, unaware of the cult's true nature. The cult attracts adherents of all kinds, from dreamy-eyed youths with little property to world-weary folk eager to put their faith in something as tangible and powerful as an elemental force.\nInitiates live on little but air for a month, believing that this regimen purifies them of bodily needs. In truth it makes their bodies so desperate for sustenance that they become susceptible to indoctrination. Soon, they can justify heinous acts within the context of the cult: Human sacrifice isn't an act of murder, but a freeing of the soul from the limitations of a physical shell; conjuring a whirlwind to destroy unbelievers isn't an act of terror but a demonstration of true faith.\nSource: Princes of the Apocalypse p. 190",
      "environment": ""
   },
   {
      "name": "Howling Hatred Priest",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Neutral Evil",
      "ac": "15 (studded leather armor)",
      "hp": "45 (10d8)",
      "speed": "walk 30 ft.",
      "str": "12",
      "dex": "16",
      "con": "10",
      "int": "14",
      "wis": "10",
      "cha": "14",
      "save": "",
      "skill": "Acrobatics +5, Intimidation +4, Religion +4",
      "passive": "10",
      "languages": "Auran, Common",
      "cr": "2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Hold Breath",
            "text": [
               "The priest can hold its breath for 30 minutes."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "The priest is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). It knows the following sorcerer spells:",
               "Cantrips (at will): blade ward, gust, light, prestidigitation, shocking grasp",
               "• 1st level (4 slots): feather fall, shield, witch bolt",
               "• 2nd level (3 slots): dust devil, gust of wind",
               "• 3rd level (2 slots): gaseous form"
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The priest makes two melee attacks or two ranged attacks."
            ]
         },
         {
            "name": "Scimitar",
            "text": [
               "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (1d6 + 3) slashing damage."
            ],
            "attack": [
               "Scimitar|+5|1d6+3"
            ]
         },
         {
            "name": "Dagger",
            "text": [
               "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. 5 (1d4 + 3) piercing damage."
            ],
            "attack": [
               "Dagger|+5|1d4+3"
            ]
         }
      ],
      "slots": "4, 3, 2",
      "spells": "blade ward, gust, light, prestidigitation, shocking grasp, feather fall, shield, witch bolt, dust devil, gust of wind, gaseous form",
      "description": "The most fanatical of the air cultists, the priests push their bodies to physical extremes in order to decrease their density and mass and become as light as leaves. Gaunt and sallow faced, with concave bellies, bulging eyes, and taut skin that enunciates every bone, these living skeletons sustain themselves on nothing more than air and fanatical devotion to the teachings of the cult. The wind serves them at a gesture.\nHowling Hatred priests see themselves as living extensions of Yan-C-Bin, and they help new recruits cast off the shackles of their old lives and embrace a \"higher purpose.\" Once the new recruits are thus purified, the priests decide whether they are worthy for indoctrination as initiates or would better serve the Howling Hatred cult as sacrifices. The priests also uphold the doctrine of their prophet, inoth, and harshly punish any initiate who strays from the path.\nMost other air cultists hate the priests, though none dares to speak out against them. Those that challenge the priests often end up the subjects of rigorous new attempts at purification.\nSource: Princes of the Apocalypse p. 190",
      "environment": ""
   },
   {
      "name": "Hurricane",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Lawful Evil",
      "ac": "14",
      "hp": "33 (6d8+6)",
      "speed": "walk 45 ft.",
      "str": "12",
      "dex": "16",
      "con": "13",
      "int": "10",
      "wis": "12",
      "cha": "10",
      "save": "",
      "skill": "Acrobatics +5",
      "passive": "11",
      "languages": "Auran, Common",
      "cr": "2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Unarmored Defense",
            "text": [
               "While the hurricane is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
            ]
         },
         {
            "name": "Unarmored Movement",
            "text": [
               "While the hurricane is wearing no armor and wielding no shield, its walking speed increases by 15 feet (included in its speed)."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "The hurricane is a 3rd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). It knows the following sorcerer spells:",
               "Cantrips (at will): blade ward, gust, light, prestidigitation",
               "• 1st level (4 slots): feather fall, jump, thunderwave",
               "• 2nd level (2 slots): gust of wind"
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The hurricane makes two melee attacks."
            ]
         },
         {
            "name": "Unarmed Strike",
            "text": [
               "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (1d6 + 3) bludgeoning damage."
            ],
            "attack": [
               "Unarmed Strike|+5|1d6+3"
            ]
         }
      ],
      "reaction": {
         "name": "Deflect Missiles",
         "text": [
            "When the hurricane is hit by a ranged weapon attack, it reduces the damage from the attack by 1d10 + 9. If the damage is reduced to 0, the hurricane can catch the missile if it is small enough to hold in one hand and the hurricane has at least one hand free."
         ]
      },
      "slots": "4, 2",
      "spells": "blade ward, gust, light, prestidigitation, feather fall, jump, thunderwave, gust of wind",
      "description": "Hurricanes profess their disgust with decadence, and they dedicate their bodies and their minds to the world's destruction. Through breathing exercises and ascetic philosophy, skilled Howling Hatred initiates learn to imitate the cycling patterns of the hurricane. They believe the physical world must be shattered so that the creatures of the Material Plane can live unshackled by physical things.\nHurricanes see the frenetic activity of the world in slow motion, and themselves at the calm center of the storm. Through meditation and mysticism they learn to summon powerful blasts of wind, catch missiles with ease, and fall like feathers.\nSource: Princes of the Apocalypse p. 191",
      "environment": ""
   },
   {
      "name": "Imix",
      "size": "H",
      "type": "elemental",
      "alignment": "Neutral Evil",
      "ac": "17",
      "hp": "325 (26d12+156)",
      "speed": "walk 50 ft., fly 50 ft.",
      "str": "19",
      "dex": "24",
      "con": "22",
      "int": "15",
      "wis": "16",
      "cha": "23",
      "save": "Dex +13, Con +12, Cha +12",
      "skill": "",
      "passive": "13",
      "languages": "Common, Ignan",
      "cr": "19",
      "resist": "bludgeoning, piercing, slashing from nonmagical attacks",
      "immune": "fire, poison",
      "vulnerable": "",
      "conditionImmune": "charmed, frightened, paralyzed, petrified, poisoned, prone, restrained",
      "senses": "blindsight 120 ft.",
      "trait": [
         {
            "name": "Empowered Attacks",
            "text": [
               "Imix's slam attacks are treated as magical for the purpose of bypassing resistance and immunity to nonmagical attacks."
            ]
         },
         {
            "name": "Fire Aura",
            "text": [
               "At the start of each of Imix's turns, each creature within 10 feet of him takes 17 (5d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature also takes 17 (5d6) fire damage if it touches Imix or hits him with a melee attack while within 10 feet of him, and a creature takes that damage the first time on a turn that Imix moves into its space. Nonmagical weapons that hit Imix are destroyed by fire immediately after dealing damage to him"
            ]
         },
         {
            "name": "Fire Form",
            "text": [
               "Imix can enter a hostile creature's space and stop there. He can move through a space as narrow as 1 inch without squeezing if fire could pass through that space."
            ]
         },
         {
            "name": "Illumination",
            "text": [
               "Imix sheds bright light in a 60-foot radius and dim light for an additional 60 feet."
            ]
         },
         {
            "name": "Legendary Resistance (3/Day)",
            "text": [
               "If Imix fails a saving throw, he can choose to succeed instead."
            ]
         },
         {
            "name": "Magic Resistance",
            "text": [
               "Imix has advantage on saving throws against spells and other magical effects."
            ]
         },
         {
            "name": "Innate Spellcasting",
            "text": [
               "Imix's innate spellcasting ability is Charisma (spell save DC 20, +12 to hit with spell attacks). He can innately cast the following spells, requiring no material components:",
               "At will: fireball, wall of fire",
               "3/day each: fire storm, haste, teleport"
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Imix makes two slam attacks or two flame blast attacks."
            ]
         },
         {
            "name": "Slam",
            "text": [
               "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. 18 (2d10 + 7) bludgeoning damage plus 18 (5d6) fire damage."
            ],
            "attack": [
               "Slam|+12|2d10+7"
            ]
         },
         {
            "name": "Flame Blast",
            "text": [
               "Ranged Spell Attack: +12 to hit, range 250 ft., one target. 35 (10d6) fire damage."
            ],
            "attack": [
               "Flame Blast|+12|10d6"
            ]
         },
         {
            "name": "Summon Elementals (1/Day)",
            "text": [
               "Imix summons up to three fire elemental and loses 30 hit points for each elemental he summons. Summoned elementals have maximum hit points, appear within 100 feet of Imix, and disappear if Imix is reduced to 0 hit points."
            ]
         }
      ],
      "legendary": [
         {
            "text": [
               "Imix can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Imix regains spent legendary actions at the start of its turn."
            ]
         },
         {
            "name": "Heat Wave",
            "text": [
               "Imix creates a blast of heat within 300 feet of himself. Each creature in the area in physical contact with metal objects (for example, carrying metal weapons or wearing metal armor) takes 9 (2d8) fire damage. Each creature in the area that isn't resistant or immune to fire damage must make a DC 21 Constitution saving throw or gain one level of exhaustion."
            ]
         },
         {
            "name": "Teleport (Costs 2 Actions)",
            "text": [
               "Imix magically teleports up to 120 feet to an unoccupied space he can see. Anything Imix is wearing or carrying isn't teleported with him."
            ]
         },
         {
            "name": "Combustion (Costs 3 Actions)",
            "text": [
               "Imix causes one creature he can see within 30 feet of him to burst into flames. The target must make a DC 21 Constitution saving throw. On a failed save, the target takes 70 (20d6) fire damage and catches fire. A target on fire takes 10 (3d6) fire damage when it starts its turn, and remains on fire until it or another creature takes an action to douse the flames. On a successful save, the target takes half as much damage and doesn't catch fire."
            ]
         },
         {
            "name": "Lair Actions"
         },
         {
            "text": [
               "Imix is master of heat and flames in his vicinity. He can take lair actions on the Elemental Plane of Fire, or in any elemental fire node (such as the Weeping Colossus in chapter 5). On initiative count 20 (losing initiative ties), Imix uses his lair action to cause one of the following effects:",
               "• Any fires in the lair flare up drastically, quadrupling in size (for example, a fire blazing in a 5-foot by 5-foot area expands to a 10-foot by 10-foot area). Pools or streams of lava or other molten material are also affected. Creatures caught in the area of an expanded fire are subject to the normal damage for entering or being in the fire. Creatures caught by a sudden flood of lava must succeed on a DC 20 Strength saving throw or be knocked prone, in addition to the normal damage for contact with molten rock.",
               "• A thick cloud of black smoke and burning embers fills a 40-foot-radius sphere within 120 feet of Imix, lasting until initiative count 20 of the next round. Creatures and objects within or beyond the smoke are heavily obscured. A creature that enters the cloud of embers for the first time on a turn or starts its turn there takes 10 (3d6) fire damage.",
               "• A wave of searing heat fills the lair in a 300-foot radius around Imix for an instant. Each creature other than Imix in the area must succeed on a DC 15 Constitution saving throw or take 1d8 fire damage. Creatures that take fire damage from this effect gain one level of exhaustion. In addition, there is a fifty percent chance that any container of fluid held or carried by an affected creature (for example, a magic potion) is destroyed."
            ]
         },
         {
            "name": "Regional Effects"
         },
         {
            "text": [
               "The region containing an elemental node in which Imix is present becomes vulnerable to the influence of fire. This creates the following effects:",
               "• A dry, baking heat wave strikes the region within 10 miles of Imix's location. At first, effects are minor - grass turns brown, animals become listless, work and travel become very tiring. The longer Imix remains, the worse the heat becomes; after 5 days, crops die and ponds dry up; after 10 days, unprotected livestock dies, and wells and small rivers dry up; after 20 days, large lakes and rivers are reduced in depth by 20 feet and shrink accordingly.",
               "• Wildfires erupt within a 5-mile radius of Imix's lair. Every hour, there is a ten percent chance that characters in this area are caught in the path of a wildfire moving 50 feet per round. Each character must succeed on a DC 21 Constitution saving throw or take 10 (3d6) fire damage. A wildfire continues to threaten the characters for 1d10 rounds or until they get out of its path. Wooden structures caught in the wildfire are destroyed.",
               "• Lava fountains erupt from the ground within 1 mile of Imix's lair. Every hour, there is a ten percent chance that characters in this area are close enough to an erupting lava fountain to be in danger. A lava fountain creates a vent 20 feet in diameter, and hurls globs of lava up to 200 feet away. Each character within this area must succeed on a DC 21 Dexterity saving throw or take 11 (2d10) bludgeoning damage plus 17 (5d6) fire damage. A fountain lasts for 2d10 rounds before subsiding.",
               "• Wildfires or volcanic fissures within 1 mile of Imix's lair form intermittent portals to the Elemental Plane of Fire, allowing elemental creatures into the mortal world to dwell near those points.",
               "If Imix is destroyed or banished back to his home plane, the regional effects fade over the next 1d10 days."
            ]
         }
      ],
      "spells": "fireball, wall of fire, fire storm, haste, teleport",
      "description": "Imix, the Eternal Flame and the All-Consuming Fire, is the Prince of Evil Fire. His natural form resembles a 30-foot-tall, 10-foot-wide pillar of fire with smoldering black pits for eyes. Imix rarely speaks, but he crackles and roars with terrible laughter as anything combustible within his grasp bursts into flame and feeds his hate. Mortal beings are mere objects of contempt to Imix, and he burns alive any he can catch for nothing more than the wicked glee of watching them writhe and die in his flames.\nLike his native element, Imix is fickle, temperamental, and highly destructive. Anything combustible stokes his hunger, but he takes special delight in feeding on the handiwork and possessions of intelligent beings, such as crops, buildings, or goods. Imix doesn't even spare his own followers or those who placate him with gifts and sacrifices-he is capricious and unpredictable, and often turns on those who think they have earned his favor.\nImix's Lair. Imix's home is a fiery inverted pyramid within a volcano on the Elemental Plane of Fire. This fortress-palace is known as the Temple of Ultimate Consumption. Imix is quick to answer calls from the Material Plane, since he hungers eternally for new forests, plains, and kingdoms to burn.\nSource: Princes of the Apocalypse p. 214",
      "environment": ""
   },
   {
      "name": "Lyzandra \"Lyzzie\" Calderos",
      "size": "M",
      "type": "humanoid (any race)",
      "alignment": "Any alignment",
      "ac": "12 (15 with mage armor)",
      "hp": "40 (9d8)",
      "speed": "walk 30 ft.",
      "str": "9",
      "dex": "14",
      "con": "11",
      "int": "17",
      "wis": "12",
      "cha": "11",
      "save": "Int +6, Wis +4",
      "skill": "Arcana +6, History +6",
      "passive": "11",
      "languages": "any four languages",
      "cr": "6",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Dagger",
            "text": [
               "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2) piercing damage."
            ],
            "attack": [
               "Dagger|+5|1d4+2"
            ]
         },
         {
            "name": "Variant: Familiars",
            "text": [
               "Any spellcaster that can cast the find familiar spell (such as an archmage or mage) is likely to have a familiar. The familiar can be one of the creatures described in the spell (see the Player's Handbook) or some other Tiny monster, such as a crawling claw, imp, pseudodragon, or quasit."
            ]
         }
      ],
      "trait": [
         {
            "name": "Spellcasting",
            "text": [
               "Lyzandra is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). Lyzandra has the following wizard spells prepared:",
               "Cantrips (at will): fire bolt, light, mage hand, prestidigitation",
               "• 1st level (4 slots): detect magic, mage armor, magic missile, shield",
               "• 2nd level (3 slots): misty step, suggestion",
               "• 3rd level (3 slots): counterspell, fireball, fly",
               "• 4th level (3 slots): greater invisibility, ice storm",
               "• 5th level (1 slots): cone of cold"
            ]
         }
      ],
      "slots": "4, 3, 3, 3, 1",
      "spells": "fire bolt, light, mage hand, prestidigitation, detect magic, mage armor, magic missile, shield, misty step, suggestion, counterspell, fireball, fly, greater invisibility, ice storm, cone of cold",
      "description": "Source: Princes of the Apocalypse p. 110",
      "environment": ""
   },
   {
      "name": "Maegla Tarnlar",
      "size": "M",
      "type": "humanoid (any race)",
      "alignment": "Any alignment",
      "ac": "10",
      "hp": "4 (1d8)",
      "speed": "walk 30 ft.",
      "str": "10",
      "dex": "10",
      "con": "10",
      "int": "10",
      "wis": "10",
      "cha": "10",
      "save": "",
      "skill": "",
      "passive": "10",
      "languages": "any one language (usually Common)",
      "cr": "0",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Club",
            "text": [
               "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 2 (1d4) bludgeoning damage."
            ],
            "attack": [
               "Club|+2|1d4"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 25",
      "environment": "arctic, desert, coastal, grassland, hill, urban, forest"
   },
   {
      "name": "Marlos Urnrayle",
      "size": "M",
      "type": "monstrosity",
      "alignment": "Neutral Evil",
      "ac": "15 (natural armor)",
      "hp": "136 (16d8+64)",
      "speed": "walk 30 ft.",
      "str": "17",
      "dex": "11",
      "con": "18",
      "int": "12",
      "wis": "13",
      "cha": "17",
      "save": "",
      "skill": "Arcana +4, Deception +6, Perception +4",
      "passive": "14",
      "languages": "Common, Terran",
      "cr": "8",
      "resist": "acid",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "darkvision 60 ft., tremorsense 60 ft.",
      "trait": [
         {
            "name": "Earthen Defeat",
            "text": [
               "When Marlos drops to 0 hit points, his body transforms into mud and collapses into a pool. Anything he is wearing or carrying is left behind."
            ]
         },
         {
            "name": "Earth Passage",
            "text": [
               "Marlos can move in difficult terrain composed of anything made from earth or stone as if it were normal terrain. He can move through solid earth and rock as if it were difficult terrain. If he ends his turn there, he is shunted into the nearest space he last occupied."
            ]
         },
         {
            "name": "Legendary Resistance (2/Day)",
            "text": [
               "If Marlos fails a saving throw, he can choose to succeed instead."
            ]
         },
         {
            "name": "Petrifying Gaze",
            "text": [
               "When a creature that can see Marlos's eyes starts its turn within 30 feet of him, Marlos can force it to make a DC 14 Constitution saving throw if Marlos isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.",
               "Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see Marlos until the start of its next turn, when it can decide to avert its eyes again. If the creature looks at Marlos in the meantime, it must immediately make the save.",
               "If Marlos sees himself reflected on a polished surface within 30 feet of him and in an area of bright light, Marlos is, due to his curse, affected by his own gaze."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Marlos makes three melee attacks, one with his snake hair and two with Ironfang."
            ]
         },
         {
            "name": "Snake Hair",
            "text": [
               "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 7 (1d8 + 3) piercing damage plus 14 (4d6) poison damage."
            ],
            "attack": [
               "Snake Hair|+6|1d8+3"
            ]
         },
         {
            "name": "Ironfang",
            "text": [
               "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. 7 (1d8 + 3) piercing damage plus 4 (1d8) thunder damage."
            ],
            "attack": [
               "Ironfang|+9|1d8+3"
            ]
         }
      ],
      "legendary": [
         {
            "name": "Lair Actions"
         },
         {
            "text": [
               "If Marlos is in the earth node while Ogrémoch isn't, the medusa can take lair actions. On initiative count 20 (losing initiative ties), Marlos uses a lair action to cast earthquake without using components. As long as he maintains concentration on earthquake, initiative count 20 is the start of Marlos's turn for the purpose of the spell. He can take no other lair actions while concentrating on earthquake.",
               "Marlos's second option for a lair action is to draw power from the earth node to heal. When he does so, he regains 30 (6d8 + 3) hit points."
            ]
         }
      ],
      "description": "Marlos Urnrayle is the earth prophet of Elemental Evil and the leader of the Black Earth cult in the Sumber Hills. He is a medusa of unusual power who was once a vain and cruel human nobleman. Marlos delights in petrifying his foes, especially those of great physical beauty, and smashing the remains to rubble.\nMarlos wields the magical war pick Ironfang, which he found in the Fane of the Eye after being drawn to the spot by a vision. Because of his medusa curse and his possession of the elemental weapon, the other Black Earth cultists believe that he stands high in Ogremoch's favor and are fanatically loyal to him.\nIn the Earth Node. When the Temple of Black Earth is threatened, Marlos Urnrayle retreats to the Black Geode, the earth node. Within this node, Marlos gains one additional use of his Legendary Resistance trait.\nSource: Princes of the Apocalypse p. 199",
      "environment": ""
   },
   {
      "name": "Miraj Vizann",
      "size": "M",
      "type": "humanoid (earth genasi)",
      "alignment": "Neutral Evil",
      "ac": "10 (13 with mage armor)",
      "hp": "82 (11d8+33)",
      "speed": "walk 30 ft.",
      "str": "12",
      "dex": "10",
      "con": "17",
      "int": "13",
      "wis": "11",
      "cha": "18",
      "save": "",
      "skill": "Arcana +4, Deception +7",
      "passive": "10",
      "languages": "Common, Primordial",
      "cr": "6",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Earth Walk",
            "text": [
               "Moving through difficult terrain made of earth or stone costs Miraj no extra movement."
            ]
         },
         {
            "name": "Innate Spellcasting",
            "text": [
               "Miraj's innate spellcasting ability is Constitution (spell save DC 14). He can innately cast the following spell, requiring no material components:",
               "1/day: pass without trace"
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "Miraj is an 11th-level spellcaster. His spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). He knows the following sorcerer spells:",
               "Cantrips (at will): acid splash, blade ward, friends, light, message, mold earth",
               "• 1st level (4 slots): chromatic orb, mage armor, magic missile",
               "• 2nd level (3 slots): Maximilian's earthen grasp, shatter, suggestion",
               "• 3rd level (3 slots): counterspell, erupting earth",
               "• 4th level (3 slots): polymorph, stoneskin",
               "• 5th level (2 slots): wall of stone",
               "• 6th level (1 slots): move earth"
            ]
         }
      ],
      "action": [
         {
            "name": "Staff",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 4 (1d6 + 1) bludgeoning damage, or 5 (1d8 + 1) bludgeoning damage when used with two hands."
            ],
            "attack": [
               "Staff|+4|1d6+1"
            ]
         }
      ],
      "slots": "4, 3, 3, 3, 2, 1",
      "spells": "pass without trace, acid splash, blade ward, friends, light, message, mold earth, chromatic orb, mage armor, magic missile, Maximilian's earthen grasp, shatter, suggestion, counterspell, erupting earth, polymorph, stoneskin, wall of stone, move earth",
      "description": "Miraj is an earth genasi from Calimshan. He is a perfectionist who oversees the Black Earth cult's tunneling operations and specializes in magic and alchemical processes that shape stone. He also has an affinity for the element of water and styles himself a 'mud sorcerer.'\nThough he is the most accomplished spellcaster in the Cult of the Black Earth, he has no interest in challenging Marlos Urnrayle for leadership. He knows that he is no match for the medusa and is happy to pursue his experiments while Marlos leads.\nSource: Princes of the Apocalypse p. 198",
      "environment": ""
   },
   {
      "name": "Molten Magma Roper",
      "size": "L",
      "type": "monstrosity",
      "alignment": "Neutral Evil",
      "ac": "20 (natural armor)",
      "hp": "93 (11d10+33)",
      "speed": "walk 10 ft., climb 10 ft.",
      "str": "18",
      "dex": "8",
      "con": "17",
      "int": "7",
      "wis": "16",
      "cha": "6",
      "save": "",
      "skill": "Perception +6, Stealth +5",
      "passive": "16",
      "languages": "",
      "cr": "5",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "darkvision 60 ft.",
      "trait": [
         {
            "name": "False Appearance",
            "text": [
               "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite."
            ]
         },
         {
            "name": "Grasping Tendrils",
            "text": [
               "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it."
            ]
         },
         {
            "name": "Spider Climb",
            "text": [
               "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite."
            ]
         },
         {
            "name": "Bite",
            "text": [
               "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 22 (4d8 + 4) fire damage."
            ],
            "attack": [
               "Bite|+7|4d8+4"
            ]
         },
         {
            "name": "Tendril",
            "text": [
               "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. 4 (1d8) fire damage and the target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target. A creature takes 4 (1d8) fire damage each time it ends its turn grappled by the roper."
            ],
            "attack": [
               "Tendril|+7|1d8"
            ]
         },
         {
            "name": "Reel",
            "text": [
               "The roper pulls each creature grappled by it up to 25 feet straight toward it."
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 143",
      "environment": "underdark"
   },
   {
      "name": "Nurvureem, The Dark Lady",
      "size": "H",
      "type": "dragon",
      "alignment": "Chaotic Evil",
      "ac": "19 (natural armor)",
      "hp": "195 (17d12+85)",
      "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
      "str": "23",
      "dex": "14",
      "con": "21",
      "int": "14",
      "wis": "13",
      "cha": "17",
      "save": "Dex +7, Con +10, Wis +6, Cha +8",
      "skill": "Perception +11, Stealth +2",
      "passive": "21",
      "languages": "Common, Draconic",
      "cr": "14",
      "resist": "necrotic",
      "immune": "acid",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "blindsight 60 ft., darkvision 120 ft.",
      "trait": [
         {
            "name": "Amphibious",
            "text": [
               "Nurvureem can breathe air and water."
            ]
         },
         {
            "name": "Legendary Resistance (3/Day)",
            "text": [
               "If Nurvureem fails a saving throw, it can choose to succeed instead."
            ]
         },
         {
            "name": "Living Shadow",
            "text": [
               "While in dim light or darkness, the dragon has resistance to damage that isn't force, psychic, or radiant."
            ]
         },
         {
            "name": "Shadow Stealth",
            "text": [
               "While in dim light or darkness, the dragon can take the Hide action as a bonus action."
            ]
         },
         {
            "name": "Sunlight Sensitivity",
            "text": [
               "While in sunlight, the dragon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Nurvureem can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            ]
         },
         {
            "name": "Bite",
            "text": [
               "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. 17 (2d10 + 6) piercing damage plus 4 (1d8) necrotic damage."
            ],
            "attack": [
               "Bite|+11|2d10+6"
            ]
         },
         {
            "name": "Claw",
            "text": [
               "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. 13 (2d6 + 6) slashing damage."
            ],
            "attack": [
               "Claw|+11|2d6+6"
            ]
         },
         {
            "name": "Tail",
            "text": [
               "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. 15 (2d8 + 6) bludgeoning damage."
            ],
            "attack": [
               "Tail|+11|2d8+6"
            ]
         },
         {
            "name": "Frightful Presence",
            "text": [
               "Each creature of Nurvureem's choice that is within 120 feet of Nurvureem and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to Nurvureem's Frightful Presence for the next 24 hours."
            ]
         },
         {
            "name": "Acid Breath (Recharge 5-6)",
            "text": [
               "Nurvureem exhales necrotic in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) necrotic damage on a failed save, or half as much damage on a successful one."
            ],
            "attack": [
               "Acid Breath (Recharge 5-6)||12d8"
            ]
         }
      ],
      "legendary": [
         {
            "text": [
               "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            ]
         },
         {
            "name": "Detect",
            "text": [
               "Nurvureem makes a Wisdom (Perception) check."
            ]
         },
         {
            "name": "Tail Attack",
            "text": [
               "Nurvureem makes a tail attack."
            ]
         },
         {
            "name": "Wing Attack (Costs 2 Actions)",
            "text": [
               "Nurvureem beats its wings. Each creature within 10 feet of Nurvureem must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. Nurvureem can then fly up to half its flying speed."
            ]
         },
         {
            "name": "Lair Actions"
         },
         {
            "text": [
               "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
               "• Pools of water that the dragon can see within 120 feet of it surge outward in a grasping tide. Any creature on the ground within 20 feet of such a pool must succeed on a DC 15 Strength saving throw or be pulled up to 20 feet into the water and knocked prone.",
               "• A cloud of swarming insects fills a 20-foot-radius sphere centered on a point the dragon chooses within 120 feet of it. The cloud spreads around corners and remains until the dragon dismisses it as an action, uses this lair action again, or dies. The cloud is lightly obscured. Any creature in the cloud when it appears must make on a DC 15 Constitution saving throw, taking 10 (3d6) piercing damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the cloud takes 10 (3d6) piercing damage.",
               "• Magical darkness spreads from a point the dragon chooses within 60 feet of it, filling a 15-foot-radius sphere until the dragon dismisses it as an action, uses this lair action again, or dies. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it. If any of the effect's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
            ]
         },
         {
            "name": "Regional Effects"
         },
         {
            "text": [
               "The region containing a legendary black dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
               "• The land within 6 miles of the lair takes twice as long as normal to traverse, since the plants grow thick and twisted, and the swamps are thick with reeking mud.",
               "• Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the dragon that drink such water regurgitate it within minutes.",
               "• Fog lightly obscures the land within 6 miles of the lair.",
               "If the dragon dies, vegetation remains as it has grown, but other effects fade over 1d10 days."
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 180",
      "environment": "swamp"
   },
   {
      "name": "Ogrémoch",
      "size": "G",
      "type": "elemental",
      "alignment": "Neutral Evil",
      "ac": "20 (natural armor)",
      "hp": "526 (27d20+243)",
      "speed": "walk 50 ft., burrow 50 ft.",
      "str": "26",
      "dex": "11",
      "con": "28",
      "int": "11",
      "wis": "15",
      "cha": "22",
      "save": "Str +14, Con +15, Wis +8",
      "skill": "",
      "passive": "12",
      "languages": "Common, Terran",
      "cr": "20",
      "resist": "bludgeoning, piercing, slashing from nonmagical attacks",
      "immune": "poison",
      "vulnerable": "",
      "conditionImmune": "charmed, frightened, paralyzed, petrified, poisoned, prone",
      "senses": "blindsight 120 ft., tremorsense 120 ft.",
      "trait": [
         {
            "name": "Empowered Attacks",
            "text": [
               "Ogrémoch's slam attacks are treated as magical and adamantine for the purpose of bypassing resistance and immunity to nonmagical attacks."
            ]
         },
         {
            "name": "Legendary Resistance (3/Day)",
            "text": [
               "If Ogrémoch fails a saving throw, he can choose to succeed instead."
            ]
         },
         {
            "name": "Magic Resistance",
            "text": [
               "Ogrémoch has advantage on saving throws against spells and other magical effects."
            ]
         },
         {
            "name": "Siege Monster",
            "text": [
               "Ogrémoch deals double damage to objects and structures with his melee and ranged weapon attacks."
            ]
         },
         {
            "name": "Innate Spellcasting",
            "text": [
               "Ogrémoch's innate spellcasting ability is Charisma (spell save DC 20, +12 to hit with spell attacks). He can innately cast the following spells, requiring no material components:",
               "At will: meld into stone, move earth, wall of stone"
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Ogrémoch makes two slam attacks."
            ]
         },
         {
            "name": "Slam",
            "text": [
               "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. 30 (4d10 + 8) bludgeoning damage."
            ],
            "attack": [
               "Slam|+14|4d10+8"
            ]
         },
         {
            "name": "Boulder",
            "text": [
               "Ranged Weapon Attack: +6 to hit, range 500 ft., one target. 46 (7d10 + 8) bludgeoning damage. If the target is a creature, it must succeed on a DC 23 Strength saving throw or be knocked prone."
            ],
            "attack": [
               "Boulder|+6|7d10+8"
            ]
         },
         {
            "name": "Summon Elementals (1/Day)",
            "text": [
               "Ogrémoch summons up to three earth elemental and loses 30 hit points for each elemental he summons. Summoned elementals have maximum hit points, appear within 100 feet of Ogrémoch, and disappear if Ogrémoch is reduced to 0 hit points."
            ]
         }
      ],
      "legendary": [
         {
            "text": [
               "Ogrémoch can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Ogrémoch regains spent legendary actions at the start of its turn."
            ]
         },
         {
            "name": "Illuminating Crystals",
            "text": [
               "Ogrémoch's crystalline protrusions flare. Each creature within 30 feet of Ogrémoch becomes outlined in orange light, shedding dim light in a 10-foot radius. Any attack roll against an affected creature has advantage if the attacker can see it, and the affected creature can't benefit from being invisible."
            ]
         },
         {
            "name": "Stomp (Costs 2 Actions)",
            "text": [
               "Ogrémoch stomps the ground, creating an earth tremor that extends in a 30-foot radius. Other creatures standing on the ground in that radius must succeed on a DC 23 Dexterity saving throw or fall prone."
            ]
         },
         {
            "name": "Create Gargoyle (Costs 3 Actions)",
            "text": [
               "Ogrémoch's hit points are reduced by 50 as he breaks off a chunk of his body and places it on the ground in an unoccupied space within 15 feet of him. The chunk of rock instantly transforms into a gargoyle and acts on the same initiative count as Ogrémoch. Ogrémoch can't use this action if he has 50 hit points or fewer. The gargoyle obeys Ogrémoch's commands and fights until destroyed."
            ]
         },
         {
            "name": "Lair Actions"
         },
         {
            "text": [
               "Ogrémoch can assert his dominion over the rock and stone around him to take lair actions on the Elemental Plane of Earth, or in any elemental earth node (including the Black Geode, described in chapter 5). On initiative count 20 (losing initiative ties), Ogrémoch uses his lair action to cause one of the following effects:",
               "• A 10-foot-radius area of rocky or earthy ground within 60 feet of Ogrémoch turns to sticky mud. Any creature on the ground in the area must succeed on a DC 15 Dexterity saving throw or sink 5 feet into the mud and be restrained. A creature can take an action to make a DC 15 Strength check, ending the effect on itself or another creature within its reach on a success.",
               "• Crystalline spikes grow from the ground in a 20-foot-radius area within 60 feet of Ogrémoch. The area becomes difficult terrain. A creature that moves through the affected area takes 1d8 piercing damage for every 5 feet it moves there. Creatures that are knocked prone in the area also take this damage.",
               "• A violent tremor shakes the lair in a 120-foot-radius around Ogrémoch. Each creature other than Ogrémoch on the ground in the area must succeed on a DC 15 Strength or Dexterity saving throw (target's choice) or be knocked prone."
            ]
         },
         {
            "name": "Regional Effects"
         },
         {
            "text": [
               "The region containing an elemental node in which Ogrémoch is present is seriously affected, becoming geologically unstable. This creates the following effects:",
               "• Earth tremors strike the region within 10 miles of Ogrémoch's location every 2d12 hours, each lasting 1d10 rounds. At first, damage is minor—broken windows, cracked plaster, items toppled off shelves. The longer Ogrémoch remains, the stronger the tremors become. After 5 days, the tremors are strong enough to destroy flimsy structures. After 10 days, they are strong enough to destroy ordinary wooden buildings. After 20 days, they can seriously damage or destroy reinforced or fortified structures.",
               "• Magnetic disturbances within 10 miles of Ogrémoch prevent compasses from functioning there.",
               "• Hidden sinkholes and fissures form within 1 mile of Ogrémoch's location. A hidden sinkhole can be spotted from a safe distance by any creature with a passive Wisdom (Perception) score of 15 or higher or spotted with a successful DC 15 Wisdom (Survival) check. Otherwise, the first creature to step on the thin crust covering the sinkhole must succeed on a DC 15 Dexterity saving throw or fall 1d6 x 10 feet into the sinkhole or fissure.",
               "• Natural caves and tunnels within 1 mile of Ogrémoch's lair form intermittent portals to the Elemental Plane of Earth, allowing elemental creatures into the mortal world to dwell near those points.",
               "If Ogrémoch is destroyed or banished back to his home plane, the regional effects fade over the next 1d10 days."
            ]
         }
      ],
      "spells": "meld into stone, move earth, wall of stone",
      "description": "The Prince of Evil Earth is Ogremoch (pronounced oh-gray-mock), the Mountain that Walks. His natural form is a shambling, 50-foot-tall colossus of rock, with crystal growths embedded throughout his body. When he bothers to speak, his voice sounds like grinding stones.\nOgremoch is a miser who regards all the resources and treasures found in the ground as his own. He holds nothing but contempt for mortals (or any other denizens of the Material Plane) and desires nothing more than to crush and subjugate whomever he encounters. What he can't crush, he endures and outlasts.\nOgremoch especially resents any mortals that dare to remove valuable metal or stone from the earth, and those who shape or build things of stone. He notices each nugget of gold or raw gemstone removed from areas under his influence, seeking to reclaim treasures \"stolen\" from him-and to punish the thieves. When the Prince of Evil Earth gains access to the Material Plane through an elemental node, he begins to methodically locate and destroy every mine, quarry, town, or fortification in the area. It's not that he needs the wealth, but the principle of the thing-extracting treasure from the earth-is anathema to Ogremoch.\nOgremoch's Lair. Ogremoch is normally found in the depths of elemental earth, choosing caverns with black crystals and jagged rock spikes to serve as his throne room. He can enter the Material Plane through large and well-established nodes of elemental earth, with a little help from the proper rituals. Within such a node, Ogremoch wields great power.\nSource: Princes of the Apocalypse p. 216",
      "environment": ""
   },
   {
      "name": "Olhydra",
      "size": "H",
      "type": "elemental",
      "alignment": "Neutral Evil",
      "ac": "18 (natural armor)",
      "hp": "324 (24d12+168)",
      "speed": "walk 50 ft., swim 100 ft.",
      "str": "21",
      "dex": "22",
      "con": "24",
      "int": "17",
      "wis": "18",
      "cha": "23",
      "save": "Str +11, Con +13, Wis +10",
      "skill": "",
      "passive": "14",
      "languages": "Aquan",
      "cr": "18",
      "resist": "lightning; bludgeoning, piercing, slashing from nonmagical attacks",
      "immune": "acid, cold, poison",
      "vulnerable": "",
      "conditionImmune": "charmed, frightened, paralyzed, petrified, poisoned, prone, restrained",
      "senses": "blindsight 120 ft.",
      "trait": [
         {
            "name": "Empowered Attacks",
            "text": [
               "Olhydra's slam attacks are treated as magical for the purpose of bypassing resistance and immunity to nonmagical attacks."
            ]
         },
         {
            "name": "Legendary Resistance (3/Day)",
            "text": [
               "If Olhydra fails a saving throw, she can choose to succeed instead."
            ]
         },
         {
            "name": "Magic Resistance",
            "text": [
               "Olhydra has advantage on saving throws against spells and other magical effects."
            ]
         },
         {
            "name": "Water Form",
            "text": [
               "Olhydra can enter a hostile creature's space and stop there. She can move through a space as narrow as 1 inch wide without squeezing."
            ]
         },
         {
            "name": "Innate Spellcasting",
            "text": [
               "Olhydra's innate spellcasting ability is Charisma (spell save DC 20, +12 to hit with spell attacks). She can innately cast the following spells, requiring no material components:",
               "At will: wall of ice",
               "1/day: storm of vengeance",
               "3/day: ice storm"
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Olhydra makes two slam attacks or two water jet attacks."
            ]
         },
         {
            "name": "Slam",
            "text": [
               "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. 21 (3d10 + 5) bludgeoning damage, and the target is grappled (escape DC 19). Olhydra can grapple up to four targets. When Olhydra moves, all creatures she is grappling move with her."
            ],
            "attack": [
               "Slam|+11|3d10+5"
            ]
         },
         {
            "name": "Water Jet",
            "text": [
               "Ranged Weapon Attack: +12 to hit, range 120 ft., one target. 21 (6d6) bludgeoning damage, and the target is knocked prone if it fails a DC 19 Strength saving throw."
            ],
            "attack": [
               "Water Jet|+12|6d6"
            ]
         },
         {
            "name": "Summon Elementals (1/Day)",
            "text": [
               "Olhydra summons up to three water elemental and loses 30 hit points for each elemental she summons. Summoned elementals have maximum hit points, appear within 100 feet of Olhydra, and disappear if Olhydra is reduced to 0 hit points."
            ]
         }
      ],
      "legendary": [
         {
            "text": [
               "Olhydra can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Olhydra regains spent legendary actions at the start of its turn."
            ]
         },
         {
            "name": "Crush",
            "text": [
               "One creature that Olhydra is grappling is crushed for 21 (3d10 + 5) bludgeoning damage."
            ]
         },
         {
            "name": "Fling (Costs 2 Actions)",
            "text": [
               "Olhydra releases one creature she is grappling by flinging the creature up to 60 feet away from her, in a direction of her choice. If the flung creature comes into contact with a solid surface, such as a wall or floor, the creature takes 1d6 bludgeoning damage for every 10 feet it was flung."
            ]
         },
         {
            "name": "Water to Acid (Costs 3 Actions)",
            "text": [
               "Olhydra transforms her watery body into acid. This effect lasts until Olhydra's next turn. Any creature that comes into contact with Olhydra or hits her with a melee attack while standing within 5 feet of her takes 11 (2d10) acid damage. Any creature grappled by Olhydra takes 22 (4d10) acid damage at the start of its turn."
            ]
         },
         {
            "name": "Lair Actions"
         },
         {
            "text": [
               "Olhydra can command the waters around herself to take lair actions on the Elemental Plane of Water, or in any elemental water node (such as the Plunging Torrents, described in chapter 5). On initiative count 20 (losing initiative ties), Olhydra uses her lair action to cause one of the following effects:",
               "• Pools of water in the lair surge outward in a grasping tide. Any creature within 20 feet of such a pool must succeed on a DC 20 Strength saving throw or be pulled up to 20 feet into the water and knocked prone.",
               "• Water within 120 feet of Olhydra becomes murky and opaque until initiative count 20 of the next round. A creature with darkvision can't see through the water, and light can't illuminate it.",
               "• A freezing fog fills a 40-foot-radius sphere within 120 feet of Olhydra, lasting until initiative count 20 of the next round. Creatures and objects within or beyond the fog are heavily obscured. A creature that enters the freezing cloud for the first time on a turn or starts its turn there takes 10 (3d6) cold damage."
            ]
         },
         {
            "name": "Regional Effects"
         },
         {
            "text": [
               "Olhydra's presence in an elemental node creates a number of widespread effects—bad weather, strong tides, and increasing aggression from dangerous sea life.",
               "• Violent downpours become frequent within 10 miles of the lair. A downpour occurs once every 2d12 hours, and lasts 1d3 hours. Downpours are so heavy that creatures moving overland travel at half normal speed",
               "• Within 5 miles of the lair, currents and tides are exceptionally strong and treacherous. Any ability checks made to safely navigate or control a vessel moving through these waters has disadvantage.",
               "• Aquatic creatures that have an Intelligence score of 2 or lower within 1 mile of the lair must succeed on a DC 15 Wisdom saving throw when they enter the area. If the saving throw succeeds, the creature is frightened and attempts to leave the area, remaining frightened while within it. On a failure, the creature becomes highly aggressive and remains in the area for 24 hours. While in this state, the creature gains advantage on saving throws against charm and fear effects.",
               "• Natural springs and pools within 1 mile of the lair form intermittent portals to the Elemental Plane of Water, allowing elemental creatures into the mortal world to dwell near those points.",
               "If Olhydra is destroyed or banished back to her home plane, the regional effects fade over the next 1d10 days."
            ]
         }
      ],
      "spells": "wall of ice, storm of vengeance, ice storm",
      "description": "Olhydra is the Princess of Evil Water. Sometimes known as the Crushing Wave, the Dark Tide, or the Well of Endless Anguish, she takes the form of a great wave, 20 feet high and 15 feet wide, with opalescent eyes. She prefers to remain in or near large bodies of water-seas, lakes, rivers, or sometimes great subterranean pools. When she needs to, she can surge onto dry land, moving much like a wave rushing up onto the shore, but only great anger or desperation would drive Olhydra to move more than a few hundred feet from her native element.\nOlhydra surges forth tirelessly and relentlessly. She delights in creating dangerous and destructive manifestations of elemental water, especially maelstroms and floods. She is eager to assert her power by smashing any vessel that dares to venture into her realm, and lays waste to villages or towns established within her reach. Olhydra erodes that which she can't batter and drown; she is patient, retreating in the face of adversity only to return stronger than before.\nOf all the Princes of Elemental Evil, Olhydra is the one most interested in mortals. She recognizes that pirates and raiders who redden the waters with mortal blood (and occasionally send treasure-laden ships into her clutches) are agents of her hateful outlook, whether they know it or not. Consequently, Olhydra sometimes spares the worst sort of seafarers from her wrath, patiently waiting for the day when they deliver others into her power.\nOlhydra's Lair. The Princess of Evil Water is native to the Elemental Plane of Water, where she can be found in the black depths of vast seas or enthroned among jagged reefs. Olhydra waits for the chance to enter the Material Plane through elemental water nodes or when called by the proper rituals. Whether she is in her elemental domain or temporarily occupying a water node, Olhydra commands the waters around her and can shape them to her will.\nSource: Princes of the Apocalypse p. 218",
      "environment": ""
   },
   {
      "name": "One-Eyed Shiver",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Chaotic Evil",
      "ac": "12 (15 with mage armor)",
      "hp": "49 (9d8+9)",
      "speed": "walk 30 ft.",
      "str": "10",
      "dex": "14",
      "con": "12",
      "int": "13",
      "wis": "13",
      "cha": "17",
      "save": "",
      "skill": "Arcana +3, Perception +3, Intimidation +5",
      "passive": "13",
      "languages": "Common",
      "cr": "3",
      "resist": "",
      "immune": "cold",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Chilling Mist",
            "text": [
               "While it is alive, the one-eyed shiver projects an aura of cold mist within 10 feet of itself. If the one-eyed shiver deals damage to a creature in this area, the creature also takes 5 (1d10) cold damage."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "The one-eyed shiver is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells:",
               "Cantrips (at will): chill touch, mage hand",
               "• 1st level (4 slots): fog cloud, mage armor, thunderwave",
               "• 2nd level (3 slots): mirror image, misty step",
               "• 3rd level (2 slots): fear"
            ]
         }
      ],
      "action": [
         {
            "name": "Dagger",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2) piercing damage."
            ],
            "attack": [
               "Dagger|+4|1d4+2"
            ]
         },
         {
            "name": "Eye of Frost",
            "text": [
               "The one-eyed shiver casts ray of frost from its missing eye. If it hits, the target is also restrained. A target restrained in this way can end the condition by using an action, succeeding on a DC 13 Strength check."
            ]
         }
      ],
      "slots": "4, 3, 2",
      "spells": "chill touch, mage hand, fog cloud, mage armor, thunderwave, mirror image, misty step, fear",
      "description": "Source: Princes of the Apocalypse p. 207",
      "environment": ""
   },
   {
      "name": "Oreioth",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Chaotic Evil",
      "ac": "11 (14 with mage armor)",
      "hp": "39 (6d8+12)",
      "speed": "walk 30 ft.",
      "str": "8",
      "dex": "13",
      "con": "14",
      "int": "16",
      "wis": "9",
      "cha": "11",
      "save": "Wis +1",
      "skill": "Arcana +5, Investigation +5, Medicine +1",
      "passive": "9",
      "languages": "Abyssal, Common",
      "cr": "2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Grim Harvest",
            "text": [
               "Once per turn when Oreioth kills one or more creatures with a spell of 1st level or higher, he regains hit points equal to twice the spell's level."
            ]
         },
         {
            "name": "Swift Animation (Recharges after a Long Rest)",
            "text": [
               "When a living Medium or Small humanoid within 30 feet of Oreioth dies, he can use an action on his next turn to cast animate dead on that humanoid's corpse, instead of using the spell's normal casting time."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "Oreioth is a 6th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). He has the following wizard spells prepared:",
               "Cantrips (at will): chill touch, minor illusion, prestidigitation, shocking grasp",
               "• 1st level (4 slots): false life, mage armor, magic missile, ray of sickness",
               "• 2nd level (3 slots): crown of madness, misty step",
               "• 3rd level (3 slots): animate dead, vampiric touch"
            ]
         }
      ],
      "action": [
         {
            "name": "Dagger",
            "text": [
               "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 3 (1d4 + 1) piercing damage."
            ],
            "attack": [
               "Dagger|+3|1d4+1"
            ]
         }
      ],
      "slots": "4, 3, 3",
      "spells": "chill touch, minor illusion, prestidigitation, shocking grasp, false life, mage armor, magic missile, ray of sickness, crown of madness, misty step, animate dead, vampiric touch",
      "description": "A lean, black-bearded young noble from Baldur's Gate, Oreioth is more at home among the dead than the living. He was cruel almost from the time he could talk, catching small creatures and killing them in hideously inventive ways to savor the power of life and death. He grew to be an embarrassment to his well-off family, who paid a tutor to channel his undeniable intelligence and curiosity into more positive outlets. They didn't know they had apprenticed the young Oreioth to a necromancer in need of an assistant for his researches.\nWhen Oreioth's master decided he had no more use for his apprentice, he sent Oreioth off to make his own way in the world. Oreioth worked his way northward, robbing graves and using his magic to intimidate or rob anyone weaker than him. Driven out of one decent town after another, he finally sought refuge in an old outlaw's lair he discovered near Lance Rock. There he commenced his newest round of experiments, avoiding all other living souls.\nWhat few social graces Oreioth once possessed are fading rapidly. He has become a megalomaniac, styling himself the Lord of Lance Rock and surrounding himself with zombies and skeletons compelled to heed his every whim. Oreioth barely recognizes his own name anymore, and he harbors dreams of founding a kingdom of undead servitors with himself on the throne.\nSource: Princes of the Apocalypse p. 212",
      "environment": ""
   },
   {
      "name": "Padraich",
      "size": "M",
      "type": "humanoid (any race)",
      "alignment": "Any Chaotic Alignment",
      "ac": "13 (hide armor)",
      "hp": "67 (9d8+27)",
      "speed": "walk 30 ft.",
      "str": "16",
      "dex": "12",
      "con": "17",
      "int": "9",
      "wis": "11",
      "cha": "9",
      "save": "",
      "skill": "",
      "passive": "10",
      "languages": "any one language (usually Common)",
      "cr": "2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Reckless",
            "text": [
               "At the start of its turn, Padraich can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
            ]
         }
      ],
      "action": [
         {
            "name": "Greataxe",
            "text": [
               "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 9 (1d12 + 3) slashing damage."
            ],
            "attack": [
               "Greataxe|+5|1d12+3"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 170",
      "environment": ""
   },
   {
      "name": "Razerblast",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Chaotic Evil",
      "ac": "17 (splint armor)",
      "hp": "112 (15d8+75)",
      "speed": "walk 30 ft.",
      "str": "16",
      "dex": "11",
      "con": "16",
      "int": "9",
      "wis": "10",
      "cha": "13",
      "save": "",
      "skill": "Intimidation +4, Perception +3",
      "passive": "13",
      "languages": "Common, Ignan",
      "cr": "5",
      "resist": "",
      "immune": "fire",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Searing Armor",
            "text": [
               "The razerblast's armor is hot. Any creature grappling the razerblast or grappled by it takes 5 (1d10) fire damage at the end of that creature's turn."
            ]
         },
         {
            "name": "Shrapnel Explosion",
            "text": [
               "When the razerblast drops to 0 hit points, a flaming orb in its chest explodes, destroying the razerblast's body and scattering its armor as shrapnel. Creatures within 10 feet of the razerblast when it explodes must succeed on a DC 12 Dexterity saving throw, taking 21 (6d6) piercing damage on a failed save, or half as much damage on a successful one."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The razerblast makes three melee attacks."
            ]
         },
         {
            "name": "Spear",
            "text": [
               "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
            ],
            "attack": [
               "Spear|+6|1d6+3"
            ]
         }
      ],
      "description": "A razerblast seethes with hate for the enemies of the fire cult. The razerblast's elemental overlords have replaced its heart with a flaming orb that detonates if the razerblast dies.\nRazerblasts remember little of their life before they the power of elemental fire transformed them. Now they follow the orders of the flamewraths and the cult leaders without question. Razerblasts fight confidently because they know that even if they lose, they go out in a blaze of glory.\nSource: Princes of the Apocalypse p. 201",
      "environment": ""
   },
   {
      "name": "Renwick",
      "size": "M",
      "type": "undead",
      "alignment": "Any Evil Alignment",
      "ac": "17 (natural armor)",
      "hp": "135 (18d8+54)",
      "speed": "walk 30 ft.",
      "str": "11",
      "dex": "16",
      "con": "16",
      "int": "20",
      "wis": "14",
      "cha": "16",
      "save": "Con +10, Int +12, Wis +9",
      "skill": "Arcana +19, History +12, Insight +9, Perception +9",
      "passive": "19",
      "languages": "Common plus up to five other languages",
      "cr": "21",
      "resist": "cold, lightning, necrotic",
      "immune": "poison; bludgeoning, piercing, slashing from nonmagical attacks",
      "vulnerable": "",
      "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned",
      "senses": "truesight 120 ft.",
      "trait": [
         {
            "name": "Legendary Resistance (3/Day)",
            "text": [
               "If Renwick fails a saving throw, it can choose to succeed instead."
            ]
         },
         {
            "name": "Rejuvenation",
            "text": [
               "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery."
            ]
         },
         {
            "name": "Turn Resistance",
            "text": [
               "Renwick has advantage on saving throws against any effect that turns undead."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "Renwick is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). Renwick has the following wizard spells prepared:",
               "Cantrips (at will): mage hand, prestidigitation, ray of frost",
               "• 1st level (4 slots): detect magic, magic missile, shield, thunderwave",
               "• 2nd level (3 slots): detect thoughts, invisibility, Melf's acid arrow, mirror image",
               "• 3rd level (3 slots): animate dead, counterspell, dispel magic, fireball",
               "• 4th level (3 slots): blight, dimension door",
               "• 5th level (3 slots): cloudkill, scrying",
               "• 6th level (1 slots): disintegrate, globe of invulnerability",
               "• 7th level (1 slots): finger of death, plane shift",
               "• 8th level (1 slots): dominate monster, power word stun",
               "• 9th level (1 slots): power word kill"
            ]
         }
      ],
      "action": [
         {
            "name": "Paralyzing Touch",
            "text": [
               "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            ],
            "attack": [
               "Paralyzing Touch|+12|3d6"
            ]
         }
      ],
      "legendary": [
         {
            "text": [
               "The undead can take 4 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The undead regains spent legendary actions at the start of its turn."
            ]
         },
         {
            "name": "Cantrip",
            "text": [
               "Renwick casts a cantrip."
            ]
         },
         {
            "name": "Paralyzing Touch (Costs 2 Actions)",
            "text": [
               "Renwick uses its Paralyzing Touch."
            ]
         },
         {
            "name": "Frightening Gaze (Costs 2 Actions)",
            "text": [
               "Renwick fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to Renwick's gaze for the next 24 hours."
            ]
         },
         {
            "name": "Disrupt Life (Costs 3 Actions)",
            "text": [
               "Each non-undead creature within 20 feet of Renwick must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one."
            ]
         },
         {
            "name": "Lair Actions"
         },
         {
            "text": [
               "On initiative count 20 (losing initiative ties), the lich can take a lair action to cause one of the following magical effects; the lich can't use the same effect two rounds in a row:",
               "• The lich rolls a d8 and regains a spell slot of that level or lower. If it has no spent spell slots of that level or lower, nothing happens.",
               "• The lich targets one creature it can see within 30 feet of it. A crackling cord of negative energy tethers the lich to the target. Whenever the lich takes damage, the target must make a DC 18 Constitution saving throw. On a failed save, the lich takes half the damage (rounded down), and the target takes the remaining damage. This tether lasts until initiative count 20 on the next round or until the lich or the target is no longer in the lich's lair.",
               "• The lich calls forth the spirits of creatures that died in its lair. These apparitions materialize and attack one creature that the lich can see within 60 feet of it. The target must succeed on a DC 18 Constitution saving throw, taking 52 (15d6) necrotic damage on a failed save, or half as much damage on a success. The apparitions then disappear."
            ]
         }
      ],
      "slots": "4, 3, 3, 3, 3, 1, 1, 1, 1",
      "spells": "mage hand, prestidigitation, ray of frost, detect magic, magic missile, shield, thunderwave, detect thoughts, invisibility, Melf's acid arrow, mirror image, animate dead, counterspell, dispel magic, fireball, blight, dimension door, cloudkill, scrying, disintegrate, globe of invulnerability, finger of death, plane shift, dominate monster, power word stun, power word kill",
      "description": "Source: Princes of the Apocalypse p. 66",
      "environment": ""
   },
   {
      "name": "Rhundorth",
      "size": "M",
      "type": "humanoid (any race)",
      "alignment": "Any alignment",
      "ac": "16 (chain shirt, shield)",
      "hp": "11 (2d8+2)",
      "speed": "walk 30 ft.",
      "str": "13",
      "dex": "12",
      "con": "12",
      "int": "10",
      "wis": "11",
      "cha": "10",
      "save": "",
      "skill": "Perception +2",
      "passive": "12",
      "languages": "any one language (usually Common)",
      "cr": "1/8",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Spear",
            "text": [
               "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
            ],
            "attack": [
               "Spear|+3|1d6+1"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 140",
      "environment": ""
   },
   {
      "name": "Sacred Stone Monk",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Lawful Evil",
      "ac": "14",
      "hp": "22 (4d8+4)",
      "speed": "walk 40 ft.",
      "str": "13",
      "dex": "15",
      "con": "12",
      "int": "10",
      "wis": "14",
      "cha": "9",
      "save": "",
      "skill": "Acrobatics +4, Athletics +3, Perception +4",
      "passive": "14",
      "languages": "Common",
      "cr": "1/2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "tremorsense 10 ft.",
      "trait": [
         {
            "name": "Unarmored Defense",
            "text": [
               "While the monk is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
            ]
         },
         {
            "name": "Unarmored Movement",
            "text": [
               "While the monk is wearing no armor and wielding no shield, its walking speed increases by 10 feet (included in its speed)."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The monk makes two melee attacks."
            ]
         },
         {
            "name": "Unarmed Strike",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 5 (1d6 + 2) bludgeoning damage."
            ],
            "attack": [
               "Unarmed Strike|+4|1d6+2"
            ]
         }
      ],
      "reaction": {
         "name": "Parry",
         "text": [
            "The monk adds 2 to its AC against one melee or ranged weapon attack that would hit it. To do so, the monk must see the attacker."
         ]
      },
      "description": "Sacred Stone monks are followers of a martial philosophy that seeks to emulate the strength of rock and stone. They don gargoyle masks and use a finely honed sense of touch to measure their surroundings by contact with the ground. They avoid speaking, or extraneous thought for that matter. They live only to test themselves with deprivation and to punish those who doubt the strength of elemental earth.\nSource: Princes of the Apocalypse p. 196",
      "environment": ""
   },
   {
      "name": "Shoalar Quanderil",
      "size": "M",
      "type": "humanoid (water genasi)",
      "alignment": "Lawful Evil",
      "ac": "10 (13 with mage armor)",
      "hp": "60 (8d8+24)",
      "speed": "walk 30 ft., swim 30 ft.",
      "str": "11",
      "dex": "12",
      "con": "16",
      "int": "14",
      "wis": "10",
      "cha": "17",
      "save": "",
      "skill": "Arcana +4, Deception +5, Insight +2, Persuasion +5",
      "passive": "10",
      "languages": "Aquan, Common",
      "cr": "4",
      "resist": "acid",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Amphibious",
            "text": [
               "Shoalar can breathe air and water."
            ]
         },
         {
            "name": "Innate Spellcasting",
            "text": [
               "Shoalar's innate spellcasting ability is Constitution (spell save DC 13, +5 to hit with spell attacks). He can innately cast the following spells:",
               "At will: shape water",
               "1/day: create or destroy water"
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "Shoalar is a 5th-level spellcaster. His spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). He knows the following sorcerer spells:",
               "Cantrips (at will): acid splash, chill touch, friends, prestidigitation, ray of frost",
               "• 1st level (4 slots): disguise self, mage armor, magic missile",
               "• 2nd level (3 slots): hold person, misty step",
               "• 3rd level (2 slots): tidal wave"
            ]
         }
      ],
      "action": [
         {
            "name": "Dagger",
            "text": [
               "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or ranged 20/60 ft., one target. 3 (1d4 + 1) piercing damage."
            ],
            "attack": [
               "Dagger|+3|1d4+1"
            ]
         }
      ],
      "slots": "4, 3, 2",
      "spells": "shape water, create or destroy water, acid splash, chill touch, friends, prestidigitation, ray of frost, disguise self, mage armor, magic missile, hold person, misty step, tidal wave",
      "description": "A plump water genasi armed with a jovial manner and biting sense of humor, Shoalar Quanderil seems like the last person one would expect to be a cruel member of a destructive cult. Nevertheless, Shoalar is the captain of a pirate ship that harries the Sword Coast, and a high-ranking Crushing Wave cultist. He sees Olhydra's power as a means to making himself as rich as possible.\nSource: Princes of the Apocalypse p. 208",
      "environment": ""
   },
   {
      "name": "Skyweaver",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Chaotic Evil",
      "ac": "12 (15 with mage armor)",
      "hp": "44 (8d8+8)",
      "speed": "walk 30 ft.",
      "str": "8",
      "dex": "14",
      "con": "12",
      "int": "11",
      "wis": "10",
      "cha": "16",
      "save": "",
      "skill": "Deception +5, Persuasion +5",
      "passive": "10",
      "languages": "Auran, Common",
      "cr": "3",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Dagger",
            "text": [
               "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. 3 (1d4 + 1) piercing damage."
            ],
            "attack": [
               "Dagger|+4|1d4+1"
            ]
         }
      ],
      "trait": [
         {
            "name": "Spellcasting",
            "text": [
               "The Skyweaver is a 6th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells:",
               "Cantrips (at will): blade ward, light, message, ray of frost, shocking grasp",
               "• 1st level (4 slots): feather fall, mage armor, witch bolt",
               "• 2nd level (3 slots): gust of wind, invisibility",
               "• 3rd level (3 slots): fly, lightning bolt"
            ]
         }
      ],
      "slots": "4, 3, 3",
      "spells": "blade ward, light, message, ray of frost, shocking grasp, feather fall, mage armor, witch bolt, gust of wind, invisibility, fly, lightning bolt",
      "description": "Skyweavers brim with rage and desire, which makes them perfect vessels for the wildly destructive magic of the Cult of the Howling Hatred. In contrast to their hurricane counterparts in the air cult, skyweavers embrace the worship of Elemental Evil for a quick path to power. With little experience wielding the might of the elements, skyweavers thrill with the rush of releasing raw elemental energy.\nSource: Princes of the Apocalypse p. 191",
      "environment": ""
   },
   {
      "name": "Stone Warrior",
      "size": "L",
      "type": "construct",
      "alignment": "Unaligned",
      "ac": "17 (natural armor)",
      "hp": "102 (17d10+85)",
      "speed": "walk 30 ft.",
      "str": "22",
      "dex": "9",
      "con": "20",
      "int": "3",
      "wis": "11",
      "cha": "1",
      "save": "",
      "skill": "",
      "passive": "10",
      "languages": "understands the languages of its creator but can't speak",
      "cr": "10",
      "resist": "",
      "immune": "poison, psychic; bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
      "vulnerable": "",
      "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
      "senses": "darkvision 120 ft.",
      "trait": [
         {
            "name": "Immutable Form",
            "text": [
               "The golem is immune to any spell or effect that would alter its form."
            ]
         },
         {
            "name": "Magic Resistance",
            "text": [
               "The golem has advantage on saving throws against spells and other magical effects."
            ]
         },
         {
            "name": "Magic Weapons",
            "text": [
               "The golem's weapon attacks are magical."
            ]
         }
      ],
      "action": [
         {
            "name": "Slam",
            "text": [
               "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. 19 (3d8 + 6) bludgeoning damage."
            ],
            "attack": [
               "Slam|+10|3d8+6"
            ]
         },
         {
            "name": "Slow (Recharge 5-6)",
            "text": [
               "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 97",
      "environment": ""
   },
   {
      "name": "Stonemelder",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Neutral Evil",
      "ac": "17 (splint armor)",
      "hp": "75 (10d8+30)",
      "speed": "walk 30 ft.",
      "str": "15",
      "dex": "10",
      "con": "16",
      "int": "12",
      "wis": "11",
      "cha": "17",
      "save": "",
      "skill": "Intimidation +5, Perception +2",
      "passive": "12",
      "languages": "Common, Terran",
      "cr": "4",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "tremorsense 30 ft.",
      "trait": [
         {
            "name": "Death Burst",
            "text": [
               "When the Stonemelder dies, it turns to stone and explodes in a burst of rock shards, becoming a smoking pile of rubble. Each creature within 10 feet of the exploding Stonemelder must make a DC 14 Dexterity saving throw, taking 11 (2d10) bludgeoning damage on a failed save, or half as much damage on a successful one."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "The Stonemelder is a 7th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells:",
               "Cantrips (at will): acid splash, blade ward, light, mending, mold earth",
               "• 1st level (4 slots): expeditious retreat, false life, shield",
               "• 2nd level (3 slots): Maximilian's earthen grasp, shatter",
               "• 3rd level (3 slots): erupting earth, meld into stone",
               "• 4th level (1 slots): stoneskin"
            ]
         }
      ],
      "action": [
         {
            "name": "Black Earth Rod",
            "text": [
               "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 5 (1d6 + 2) bludgeoning damage. The Stonemelder can also expend a spell slot to deal extra damage, dealing 2d8 bludgeoning damage for a 1st level slot, plus an additional 1d8 for each level of the slot above 1st."
            ],
            "attack": [
               "Black Earth Rod|+5|1d6+2"
            ]
         }
      ],
      "slots": "4, 3, 3, 1",
      "spells": "acid splash, blade ward, light, mending, mold earth, expeditious retreat, false life, shield, Maximilian's earthen grasp, shatter, erupting earth, meld into stone, stoneskin",
      "description": "Stonemelders are spellcasters who gain their power from Ogremoch, using elemental earth magic to sheathe their bodies in carapaces of rock. They are elite champions of the cult and answer only to the cult leaders. Not even the Black Earth priests tell stonemelders what to do.\nEach stonemelder carries a weapon known as a Black Earth rod. Such a rod is like an ordinary mace, but in the hands of a stonemelder, it serves as a conduit for Ogremoch's wrath.\nSource: Princes of the Apocalypse p. 197",
      "environment": ""
   },
   {
      "name": "Thurl Merosska",
      "size": "M",
      "type": "humanoid (human)",
      "alignment": "Lawful Evil",
      "ac": "16 (breastplate)",
      "hp": "71 (11d8+21)",
      "speed": "walk 30 ft.",
      "str": "16",
      "dex": "14",
      "con": "14",
      "int": "11",
      "wis": "10",
      "cha": "15",
      "save": "",
      "skill": "Animal handling +2, Athletics +5, Deception +4, Persuasion +4",
      "passive": "10",
      "languages": "Auran, Common",
      "cr": "3",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Thurl makes two melee attacks."
            ]
         },
         {
            "name": "Greatsword",
            "text": [
               "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 10 (2d6 + 3) slashing damage."
            ],
            "attack": [
               "Greatsword|+5|2d6+3"
            ]
         },
         {
            "name": "Lance",
            "text": [
               "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. 9 (1d12 + 3) piercing damage."
            ],
            "attack": [
               "Lance|+5|1d12+3"
            ]
         }
      ],
      "reaction": {
         "name": "Parry",
         "text": [
            "Thurl adds 2 to his AC against one melee attack that would hit him. To do so, Thurl must see the attacker and be wielding a melee weapon."
         ]
      },
      "trait": [
         {
            "name": "Spellcasting",
            "text": [
               "Thurl is a 5th-level spellcaster. His spellcasting ability is Charisma (spell save DC 12, +4 to hit with spell attacks). Thurl knows the following sorcerer spells:",
               "Cantrips (at will): friends, gust, light, message, ray of frost",
               "• 1st level (4 slots): expeditious retreat, feather fall, jump",
               "• 2nd level (3 slots): levitate, misty step",
               "• 3rd level (2 slots): haste"
            ]
         }
      ],
      "slots": "4, 3, 2",
      "spells": "friends, gust, light, message, ray of frost, expeditious retreat, feather fall, jump, levitate, misty step, haste",
      "description": "Thurl Merosska is the leader of the Feathergale Knights. Once a griffon rider of Waterdeep, Thurl retired after a storm nearly claimed his life. Obsessed with his near-death experience, Thurl learned of Yan-C-Bin and swore an oath to serve the elemental prince in exchange for power.\nThurl realized that there were others among the wealthy of Waterdeep who might make worthy servants of Yan-C-Bin. He formed the Feathergale Society to lure likely individuals into the air cult. He indoctrinated his Feathergale knights, one by one, into the cult's beliefs.\nWhen Aerisi Kalinoth arose as the chosen prophet of air, Thurl reluctantly pledged the Feathergale Knights to the cause. He resents Aerisi Kalinoth's rulership of the cult, but tells himself that he can use her and her followers to make the Feathergale Society strong enough to rule Waterdeep as it should be ruled.\nSource: Princes of the Apocalypse p. 192",
      "environment": ""
   },
   {
      "name": "Tornscale",
      "size": "M",
      "type": "humanoid (lizardfolk)",
      "alignment": "Neutral",
      "ac": "15 (natural armor, shield)",
      "hp": "36 (4d8+4)",
      "speed": "walk 30 ft., swim 30 ft.",
      "str": "15",
      "dex": "10",
      "con": "13",
      "int": "7",
      "wis": "12",
      "cha": "7",
      "save": "",
      "skill": "Perception +3, Stealth +4, Survival +5",
      "passive": "13",
      "languages": "Draconic",
      "cr": "1/2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Hold Breath",
            "text": [
               "Tornscale can hold its breath for 15 minutes."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Tornscale makes two melee attacks, each one with a different weapon."
            ]
         },
         {
            "name": "Bite",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 5 (1d6 + 2) piercing damage."
            ],
            "attack": [
               "Bite|+4|1d6+2"
            ]
         },
         {
            "name": "Heavy Club",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 5 (1d6 + 2) bludgeoning damage."
            ],
            "attack": [
               "Heavy Club|+4|1d6+2"
            ]
         },
         {
            "name": "Javelin",
            "text": [
               "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. 5 (1d6 + 2) piercing damage."
            ],
            "attack": [
               "Javelin|+4|1d6+2"
            ]
         },
         {
            "name": "Spiked Shield",
            "text": [
               "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 5 (1d6 + 2) piercing damage."
            ],
            "attack": [
               "Spiked Shield|+4|1d6+2"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 90",
      "environment": "forest, swamp"
   },
   {
      "name": "Vanifer",
      "size": "M",
      "type": "humanoid (tiefling)",
      "alignment": "Neutral Evil",
      "ac": "15 (studded leather armor)",
      "hp": "112 (15d8+45)",
      "speed": "walk 30 ft.",
      "str": "11",
      "dex": "16",
      "con": "17",
      "int": "12",
      "wis": "13",
      "cha": "19",
      "save": "",
      "skill": "Arcana +5, Deception +8, Performance +8",
      "passive": "11",
      "languages": "Common, Ignan, Infernal",
      "cr": "9",
      "resist": "",
      "immune": "fire",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "darkvision 60 ft.",
      "trait": [
         {
            "name": "Funeral Pyre",
            "text": [
               "When Vanifer drops to 0 hit points, her body is consumed in a flash of fire and smoke. Anything she was wearing or carrying is left behind among ashes."
            ]
         },
         {
            "name": "Legendary Resistance (2/Day)",
            "text": [
               "If Vanifer fails a saving throw, she can choose to succeed instead."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "Vanifer is a 10th-level spellcaster. Her spellcasting ability is Charisma (spell save DC 16, +8 to hit with spell attacks). Vanifer knows the following sorcerer spells:",
               "Cantrips (at will): chill touch, fire bolt, friends, mage hand, message, produce flame, thaumaturgy",
               "• 1st level (4 slots): burning hands, chromatic orb, hellish rebuke, shield",
               "• 2nd level (3 slots): darkness, detect thoughts, misty step, scorching ray",
               "• 3rd level (3 slots): counterspell, fireball, hypnotic pattern",
               "• 4th level (3 slots): wall of fire",
               "• 5th level (2 slots): dominate person"
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Vanifer makes two attacks."
            ]
         },
         {
            "name": "Tinderstrike",
            "text": [
               "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60 ft., one target. 7 (1d4 + 5) piercing damage plus 7 (2d6) fire damage."
            ],
            "attack": [
               "Tinderstrike|+9|1d4+5"
            ]
         }
      ],
      "legendary": [
         {
            "name": "Lair Actions"
         },
         {
            "text": [
               "If Vanifer is in the fire node while Imix isn't, the tiefling can take lair actions. On initiative count 20 (losing initiative ties), Vanifer uses a lair action to cast one of her spells, up to 3rd level, without using components or a spell slot. She can't cast the same spell two rounds in a row, although she can continue to concentrate on a spell she previously cast using a lair action. Vanifer can take no other lair actions while concentrating on a spell cast as a lair action. Her favorite use of this capability is casting fireball or hypnotic pattern.",
               "If Vanifer casts misty step using this lair action, she also draws the power of the fire node into herself. By doing so, she regains 15 (3d8 + 2) hit points."
            ]
         }
      ],
      "slots": "4, 3, 3, 3, 2",
      "spells": "chill touch, fire bolt, friends, mage hand, message, produce flame, thaumaturgy, burning hands, chromatic orb, hellish rebuke, shield, darkness, detect thoughts, misty step, scorching ray, counterspell, fireball, hypnotic pattern, wall of fire, dominate person",
      "description": "Vanifer's rough childhood has hardened her heart against others. The world is a corrupt, painful place, she thinks, and deserving of a fiery end. For years, she was a dancer and concubine in a pasha's court in Calimshan. Later, she took up the mantle of prophet when she found Tinderstrike, and the same ruthless ambition and practiced manipulation that enabled her to escape a life of servitude serves her well as the head of a growing cult.\nFor Vanifer, battle is best observed at a distance. She prefers to hurl destructive magic from afar. Those who challenge Vanifer in melee learn a painful lesson, as she and Tinderstrike make a formidable pair.\nIn the Fire Node\nWhen enemies threaten the Temple of Eternal Flame, Vanifer withdraws to the Weeping Colossus, the fire node. Within this node, Vanifer gains one additional use of her Legendary Resistance trait.\nSource: Princes of the Apocalypse p. 203",
      "environment": ""
   },
   {
      "name": "Wiggan Nettlebee",
      "size": "S",
      "type": "humanoid (halfling)",
      "alignment": "Neutral Evil",
      "ac": "11 (16 with barkskin)",
      "hp": "36 (8d6+8)",
      "speed": "walk 30 ft.",
      "str": "8",
      "dex": "12",
      "con": "12",
      "int": "14",
      "wis": "15",
      "cha": "13",
      "save": "",
      "skill": "Deception +3, Insight +4",
      "passive": "12",
      "languages": "Common, Halfling",
      "cr": "2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Brave Devotion",
            "text": [
               "Wiggan has advantage on saving throws against being charmed or frightened."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "Wiggan is a 4th-level spellcaster. His spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). He has the following cleric spells prepared:",
               "Cantrips (at will): guidance, light, mending, shillelagh, thaumaturgy",
               "• 1st level (4 slots): animal friendship, cure wounds, healing word, inflict wounds, speak with animals",
               "• 2nd level (3 slots): barkskin, spike growth, spiritual weapon"
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Wiggan makes two attacks with his wooden cane."
            ]
         },
         {
            "name": "Wooden Cane",
            "text": [
               "Melee Weapon Attack: +0 to hit (+4 to hit with shillelagh), reach 5 ft., one target. 1 (1d4 - 1) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage with shillelagh."
            ],
            "attack": [
               "Wooden Cane|+0|1d4-1"
            ]
         }
      ],
      "slots": "4, 3",
      "spells": "guidance, light, mending, shillelagh, thaumaturgy, animal friendship, cure wounds, healing word, inflict wounds, speak with animals, barkskin, spike growth, spiritual weapon",
      "description": "Wiggan Nettlebee is the patriarch of the Nettlebee clan, a wealthy family of halflings that raise livestock and farm their land. He presents the outward appearance of a modest rancher, and he forbids extravagance on his farm. Thinking he had found a cult dedicated to the dominating nature and utilizing its darker aspects, Wiggan joined the Cult of the Black Earth. He still doesn't know the full extent of the cult's plans.\nWiggan dislikes and distrusts outsiders. He believes they are all evildoers who would steal from him if they could. He sees the earth cult as a powerful and necessary ally toward securing his finances and sustaining his position. A greedy miser, Wiggan becomes visibly upset at the thought of parting with even a few spare coins from his hoard.\nSource: Princes of the Apocalypse p. 212",
      "environment": ""
   },
   {
      "name": "Windharrow",
      "size": "M",
      "type": "humanoid (half-elf)",
      "alignment": "Neutral Evil",
      "ac": "15 (studded leather armor)",
      "hp": "55 (10d8+10)",
      "speed": "walk 30 ft.",
      "str": "10",
      "dex": "16",
      "con": "12",
      "int": "14",
      "wis": "10",
      "cha": "17",
      "save": "",
      "skill": "Acrobatics +5, Deception +7, Persuasion +5, Performance +7, Stealth +5",
      "passive": "10",
      "languages": "Auran, Common, Elvish",
      "cr": "3",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "darkvision 60 ft.",
      "trait": [
         {
            "name": "Fey Ancestry",
            "text": [
               "Windharrow has advantage on saving throws against being charmed, and magic can't put him to sleep."
            ]
         },
         {
            "name": "Spellcasting",
            "text": [
               "Windharrow is an 8th-level spellcaster. His spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). Windharrow knows the following bard spells:",
               "Cantrips (at will): friends, prestidigitation, vicious mockery",
               "• 1st level (4 slots): disguise self, dissonant whispers, thunderwave",
               "• 2nd level (3 slots): invisibility, shatter, silence",
               "• 3rd level (3 slots): nondetection, sending, tongues",
               "• 4th level (2 slots): confusion, dimension door"
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Windharrow makes two melee attacks."
            ]
         },
         {
            "name": "Rapier",
            "text": [
               "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. 7 (1d8 + 3) piercing damage."
            ],
            "attack": [
               "Rapier|+5|1d8+3"
            ]
         }
      ],
      "slots": "4, 3, 3, 2",
      "spells": "friends, prestidigitation, vicious mockery, disguise self, dissonant whispers, thunderwave, invisibility, shatter, silence, nondetection, sending, tongues, confusion, dimension door",
      "description": "An opportunistic half-moon elf rake and bandit formerly known as Harald Grayspear, Windharrow was given his new name by Aerisi Kalinoth. When Aerisi was still with her family, Harald charmed and flattered his way into her favor. When Aerisi ran away from home to become the air prophet, she took Windharrow with her.\nAt Aerisi's insistence, Windharrow recruited a band of flutists from the ranks of new converts to the air cult, calling them the Windwyrds. Most have no musical talent whatsoever, and their music is often a shrill cacophony. Of all the air cultists, the Windwyrds are the least fanatical and the most fearful for their lives. Aerisi disposes of these minstrels on a whim, replacing them with other initiates. Those that master some skill with their instruments survive the longest, but the cost of failure creates a highly competitive environment among the minstrels.\nWindharrow is loyal to Aerisi Kalinoth as long as he fears her power. If his life is threatened or a richer offer presents itself, Windharrow betrays the air cult without a backward glance.\nSource: Princes of the Apocalypse p. 192",
      "environment": ""
   },
   {
      "name": "Yan-C-Bin",
      "size": "H",
      "type": "elemental",
      "alignment": "Neutral Evil",
      "ac": "22 (natural armor)",
      "hp": "283 (21d12+147)",
      "speed": "walk 50 ft., fly 150 ft.",
      "str": "18",
      "dex": "24",
      "con": "24",
      "int": "16",
      "wis": "21",
      "cha": "23",
      "save": "Dex +13, Wis +11, Cha +12",
      "skill": "",
      "passive": "15",
      "languages": "Auran",
      "cr": "18",
      "resist": "cold, fire; bludgeoning, piercing, slashing from nonmagical attacks",
      "immune": "lightning, poison, thunder",
      "vulnerable": "",
      "conditionImmune": "charmed, frightened, paralyzed, petrified, poisoned, prone, restrained",
      "senses": "blindsight 120 ft.",
      "trait": [
         {
            "name": "Air Form",
            "text": [
               "Yan-C-Bin can enter a hostile creature's space and stop there. He can move through a space as narrow as 1 inch wide without squeezing if air could pass through that space."
            ]
         },
         {
            "name": "Empowered Attacks",
            "text": [
               "Yan-C-Bin's slam attacks are treated as magical for the purpose of bypassing resistance and immunity to nonmagical attacks."
            ]
         },
         {
            "name": "Legendary Resistance (3/Day)",
            "text": [
               "If Yan-C-Bin fails a saving throw, he can choose to succeed instead."
            ]
         },
         {
            "name": "Magic Resistance",
            "text": [
               "Yan-C-Bin has advantage on saving throws against spells and other magical effects."
            ]
         },
         {
            "name": "Innate Spellcasting",
            "text": [
               "Yan-C-Bin's innate spellcasting ability is Charisma (spell save DC 20, +12 to hit with spell attacks). He can innately cast the following spells, requiring no material components:",
               "At will: gust of wind, invisibility, lightning bolt",
               "2/day each: chain lightning, cloudkill, haste"
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "Yan-C-Bin makes two slam attacks."
            ]
         },
         {
            "name": "Slam",
            "text": [
               "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. 20 (3d8 + 7) force damage plus 10 (3d6) lightning damage."
            ],
            "attack": [
               "Slam|+14|3d8+7"
            ]
         },
         {
            "name": "Thundercrack (Recharges after a Short or Long Rest)",
            "text": [
               "Yan-C-Bin unleashes a terrible thundercrack in a 100-foot-radius sphere centered on himself. All other creatures in the area must succeed on a DC 24 Constitution saving throw or take 31 (9d6) thunder damage and be deafened for 1 minute. On a successful save, a creature takes half as much damage and is deafened until the start of Yan-C-Bin's next turn."
            ],
            "attack": [
               "Thundercrack (Recharges after a Short or Long Rest)||9d6"
            ]
         },
         {
            "name": "Change Shape",
            "text": [
               "Yan-C-Bin polymorphs into a Medium humanoid. While in polymorphed form, a swirling breeze surrounds him, his eyes are pale and cloudy, and he loses the Air Form trait. He can remain in polymorphed form for up to 1 hour. Reverting to his true form requires an action."
            ]
         },
         {
            "name": "Summon Elementals (1/Day)",
            "text": [
               "Yan-C-Bin summons up to three air elemental and loses 30 hit points for each elemental he summons. Summoned elementals have maximum hit points, appear within 100 feet of Yan-C-Bin, and disappear if Yan-C-Bin is reduced to 0 hit points."
            ]
         }
      ],
      "legendary": [
         {
            "text": [
               "Yan-C-Bin can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Yan-C-Bin regains spent legendary actions at the start of its turn."
            ]
         },
         {
            "name": "Peal of Thunder",
            "text": [
               "Yan-C-Bin unleashes a peal of thunder that can be heard out to a range of 300 feet. Each creature within 30 feet of Yan-C-Bin takes 5 (1d10) thunder damage."
            ]
         },
         {
            "name": "Teleport (Costs 2 Actions)",
            "text": [
               "Yan-C-Bin magically teleports up to 120 feet to an unoccupied space he can see. Anything Yan-C-Bin is wearing or carrying is teleported with him."
            ]
         },
         {
            "name": "Suffocate (Costs 3 Actions)",
            "text": [
               "Yan-C-Bin steals the air of one breathing creature he can see within 60 feet of him. The target must make a DC 21 Constitution saving throw. On a failed save, the target drops to 0 hit points and is dying. On a successful save, the target can't breathe or speak until the start of its next turn."
            ]
         },
         {
            "name": "Lair Actions"
         },
         {
            "text": [
               "Yan-C-Bin dwells in a palace of air on the Elemental Plane of Air. In his palace and in air nodes on the Material Plane (including the Howling Caves, described in chapter 5), Yan-C-Bin is master. He can use the following actions in his lair. On initiative count 20 (losing initiative ties), Yan-C-Bin takes a lair action to cause one of the following effects; he can't use the same effect two rounds in a row:",
               "• Yan-C-Bin drops the temperature of the air, covering all surfaces with ice. This effect is identical to the sleet storm spell.",
               "• Yan-C-Bin controls the surrounding air as an extension of himself. Each creature Yan-C-Bin designates must succeed at a DC 24 Constitution saving throw or be hoisted or flung 3d6 x 10 feet through the air. A creature smashed into a solid object or released in mid-air takes 1d6 bludgeoning damage for every 10 feet moved or fallen.",
               "• Yan-C-Bin creates a torrent of debris within 120 feet of him that lasts until initiative count 20 on the next round. The debris lightly obscures every creature and object in the area for the duration. All creatures in the area must succeed at a DC 24 Wisdom saving throw or be blinded until initiative count 20 on the next round."
            ]
         },
         {
            "name": "Regional Effects"
         },
         {
            "text": [
               "When Yan-C-Bin inhabits an elemental node, the air is at his command. Temperatures fluctuate from blistering hot to freezing cold; thunder rolls and lightning cracks; powerful gales bear heavy creatures and objects aloft and hurl them with incredible force; cyclones touch down randomly, obliterating whatever they touch.",
               "• Gale force winds tear across the landscape in a 5-mile radius, whisking away small or light objects, dismantling roofs and fences, tearing branches from trees, and making flight impossible. Small and Medium creatures move at half speed through the wind; Tiny creatures exposed to the wind are carried away with it at a rate of 40 feet per round unless they succeed at a DC 15 Strength (Athletics) check.",
               "• Thunderstorms erupt in a 5-mile radius centered on Yan-C-Bin's lair, creating deafening cracks of thunder and constant lightning. Every ten minutes the storm rages, creatures standing beneath the open sky have a five percent chance of being struck by lightning. A creature struck by lightning must make a DC 21 Constitution saving throw, taking 21 (6d6) lightning damage on a failed save, or half as much damage on a successful one.",
               "• Cyclones touch down within a 5-mile radius of Yan-C-Bin's lair. Every hour, there is a five percent chance that characters in this area are caught in the path of a cyclone moving 250 feet per round. Each character must succeed on a DC 21 Constitution saving throw or take 33 (6d10) bludgeoning damage. Wooden or flimsy structures in the path of the cyclone are destroyed.",
               "• Natural caverns and windblown canyons within 1 mile of the lair form intermittent portals to the Elemental Plane of Air, allowing elemental creatures into the mortal world to dwell near those locations.",
               "If Yan-C-Bin is destroyed or banished back to his home plane, the regional effects fade over the next 1d10 days."
            ]
         }
      ],
      "spells": "gust of wind, invisibility, lightning bolt, chain lightning, cloudkill, haste",
      "description": "Yan-C-Bin (pronounced yan-see-bin) is the Prince of Evil Air. A being of great wisdom and malice, Yan-C-Bin's plots began at the forging of the worlds. Subtler than the other elemental princes, Yan-C-Bin operates unseen, studying his enemies from afar, ambushing them swiftly, and vanishing before his foes can retaliate.\nHis natural form is an invisible vortex of howling, swirling air 30 feet high and 15 feet wide, but Yan-C-Bin sometimes takes the shape of a gaunt, venerable, dark-skinned human with wispy white hair and glowing white eyes. When he wishes to remain unseen, Yan-C-Bin manifests only as a gust of cold wind flowing silently past.\nFrom his floating palace in the endless, cloudy skies of the Plane of Air, Yan-C-Bin watches worlds as they change over millennia. Evil aerial creatures worship the elemental prince as a god, and claim to see Yan-C-Bin's eyes in swirling storms. Yan-C-Bin doesn't care for their offerings, their sacrifices, or their worship. His only concern is the annihilation of the material realms as they are ripped apart by the superior elemental might of air and wind.\nYan-C-Bin's Lair. Yan-C-Bin dwells in a palace of air on the Elemental Plane of Air. In his palace and in air nodes on the Material Plane (including the Howling Caves, described in chapter 5), Yan-C-Bin is master. He can use the following actions in his lair.\nSource: Princes of the Apocalypse p. 221",
      "environment": ""
   },
   {
      "name": "Young Bulette",
      "size": "L",
      "type": "beast",
      "alignment": "Unaligned",
      "ac": "11 (natural armor)",
      "hp": "45 (6d10+12)",
      "speed": "walk 40 ft.",
      "str": "21",
      "dex": "8",
      "con": "15",
      "int": "2",
      "wis": "12",
      "cha": "6",
      "save": "",
      "skill": "",
      "passive": "11",
      "languages": "",
      "cr": "2",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "",
      "trait": [
         {
            "name": "Charge",
            "text": [
               "If the bulette moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
            ]
         }
      ],
      "action": [
         {
            "name": "Gore",
            "text": [
               "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 14 (2d8 + 5) bludgeoning damage."
            ],
            "attack": [
               "Gore|+7|2d8+5"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 139",
      "environment": "grassland"
   },
   {
      "name": "Young Purple Worm",
      "size": "G",
      "type": "monstrosity",
      "alignment": "Unaligned",
      "ac": "18 (natural armor)",
      "hp": "184 (15d20+90)",
      "speed": "walk 50 ft., burrow 30 ft.",
      "str": "28",
      "dex": "7",
      "con": "22",
      "int": "1",
      "wis": "8",
      "cha": "4",
      "save": "Con +11, Wis +4",
      "skill": "",
      "passive": "9",
      "languages": "",
      "cr": "15",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "blindsight 30 ft., tremorsense 60 ft.",
      "trait": [
         {
            "name": "Tunneler",
            "text": [
               "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake."
            ]
         }
      ],
      "action": [
         {
            "name": "Multiattack",
            "text": [
               "The worm makes two attacks: one with its bite and one with its stinger."
            ]
         },
         {
            "name": "Bite",
            "text": [
               "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. 22 (3d8 + 9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns.",
               "If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone."
            ],
            "attack": [
               "Bite|+14|3d8+9",
               "Bite||6d6"
            ]
         },
         {
            "name": "Tail Stinger",
            "text": [
               "Melee Weapon Attack: +14 to hit, reach 10 ft., one creature. 19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
            ],
            "attack": [
               "Tail Stinger|+14|3d6+9",
               "Tail Stinger||12d6"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 113",
      "environment": "underdark, desert"
   },
   {
      "name": "Zegdar",
      "size": "L",
      "type": "monstrosity",
      "alignment": "Chaotic Evil",
      "ac": "14 (natural armor)",
      "hp": "117 (9d10+27)",
      "speed": "walk 40 ft.",
      "str": "18",
      "dex": "11",
      "con": "16",
      "int": "6",
      "wis": "16",
      "cha": "9",
      "save": "",
      "skill": "Perception +7",
      "passive": "17",
      "languages": "Abyssal",
      "cr": "3",
      "resist": "",
      "immune": "",
      "vulnerable": "",
      "conditionImmune": "",
      "senses": "darkvision 60 ft.",
      "trait": [
         {
            "name": "Charge",
            "text": [
               "If Zegdar moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone."
            ]
         },
         {
            "name": "Labyrinthine Recall",
            "text": [
               "Zegdar can perfectly recall any path it has traveled."
            ]
         },
         {
            "name": "Reckless",
            "text": [
               "At the start of its turn, Zegdar can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
            ]
         }
      ],
      "action": [
         {
            "name": "Greataxe",
            "text": [
               "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 17 (2d12 + 4) slashing damage."
            ],
            "attack": [
               "Greataxe|+6|2d12+4"
            ]
         },
         {
            "name": "Gore",
            "text": [
               "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 13 (2d8 + 4) piercing damage."
            ],
            "attack": [
               "Gore|+6|2d8+4"
            ]
         }
      ],
      "description": "Source: Princes of the Apocalypse p. 120",
      "environment": "underdark"
   }
]

export default monsterManual