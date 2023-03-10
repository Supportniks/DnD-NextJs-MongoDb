export const abilityScores = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha']
export const abilityToSkills = {
    str: ['Athletics'],
    dex: ["Acrobatics", "Sleight of Hand", "Stealth"],
    con: [],
    int: ["Arcana", "History", "Investigation", "Nature", "Religion"],
    wis: ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"],
    cha: ["Deception", "Intimidation", "Performance", "Persuasion"]
}
const types = ["aberration", "beast", "celestial", "construct", "dragon", "elemental", "fey", "fiend", "giant", "humanoid", "monstrosity", "ooze", "plant", "undead"];
const schools = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation']
const spellSlotLevels = [1,2,3,4,5,6,7,8,9]
const spellClasses = ["Artificer", "Bard", "Cleric", "Druid", "Monk", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard", "Fighter (Eldritch Knight)", "Rogue (Arcane Trickster)", "Cleric (Trickery)", "Paladin (Oathbreaker)", "Warlock (Archfey)", "Warlock (Great Old One)", "Druid (Grassland)", "Druid (Underdark)", "Paladin (Crown)"]
const crRange = [0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].sort(function(a,b) {return a-b});
const classes = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"].sort()
const races = ["Aarakocra", "Aasimar", "Bugbear", "Dragonborn", "Dwarf", "Elf", "Feral Teifling", "Firbolg", "Genasi", "Gith", "Gnome", "Goblin", "Goliath", "Half-Elf", "Halfling", "Half-Orc", "Hobgoblin", "Human", "Kenku", "Kobold", "Leonin", "Lizardfolk", "Orc", "Orc of Exandria", "Satyr", "Tabaxi", "Teifling", "Tortle", "Triton", "Yuan-ti Pureblood"].sort()
const damageTypes = ["bludgeoning", "piercing", "slashing", "acid", "poison", "fire", "cold", "force", "lightning", "thunder", "necrotic", "psychic", "radiant", "spell damage", "nonmagical b, p, s"]
const conditions = ["blinded", "charmed", "deafened", "frightened", "grappled", "incapacitated", "invisible", "paralyzed", "petrified", "poisoned", "prone", "stunned", "unconcious"].sort()
const sizes =["tiny", "small", "medium", "large", "huge", "gargantuan"]
const abilityList = ["Str", "Dex", "Con", "Int", "Wis", "Cha"]
const languagesList = ["Aarakocra", "Auran", "Common", "Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc", "Abyssal", "Celestial", "Deep Speech", "Draconic", "Infernal", "Primordial", "Sylvan", "Undercommon", "Terran"]
const skillList = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"]
const equipmentTypes = ['Ammo', 'Valuable', "Heavy Armor", "Light Armor", "Melee", "Medium Armor", "Ranged", "Shield", "Potion", "Rod", "Ring", "Scroll", "Staff", "Wonderous Item", "Wand", "Gear"].sort()
const equipmentRarity = ['Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary', 'Artifact']
const equipmentProperies = ['2 Handed', 'Ammunition', 'Finesse', 'Heavy', 'Light', 'Loading', 'Thrown', 'Versatile', 'Reach', 'Special'].sort()
const skillToAbility = (skill) => {
    switch (true) {
        default:
            return "wis"
        case ["athletics"].includes(skill):
            return "str"
        case ["acrobatics", "sleight of hand", "stealth" ].includes(skill):
            return "dex"
        case ["arcana", "history", "investigation", "nature", "religion"].includes(skill):
            return "int"
        case ["deception", "intimidation", "performance", "persuasion"].includes(skill):
            return "cha"
    }
}
const sensesList = ["darkvision 30 ft.", "darkvision 60 ft.", "darkvision 120 ft.", "blindsight 60 ft.", "blindsight 120 ft.", "tremorsense", "truevision"]
const monsterTemplate = {
    name: "",
    size: "",
    titan: false,
    description: "",
    environment: "",
    type: "medium",
    alignment: "",
    ac: 8,
    hitDice: {
      hdDice: 1,
      hdSides: 8,
      hdBonus: 0
    },
    speed: [],
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
    saves: [],
    skills: [],
    passive: 10,
    languages: [],
    cr: 0,
    xp: 0,
    vulnerabilities: [],
    resistances: [],
    damageImmunity: [],
    conditionImmunity: [],
    senses: [],
    traits: [],
    actions: [],
    legendary: [],
    legendaryCount: undefined,
    legendaryActions: [],
    equipment: [],
    spells: [],
    spellSlots: []
  }
export { types, crRange, classes, races, damageTypes, conditions, sizes, sensesList, abilityList, skillList, skillToAbility, monsterTemplate, languagesList, schools, spellSlotLevels, spellClasses, equipmentTypes, equipmentRarity, equipmentProperies }