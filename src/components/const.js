/*
  - Normal - #837262
  - Effect - #f17430
*/

const colorNormal = "#b8a863";
const colorEffect = "#f17430";
const colorRitual = "royalblue";

const attributeDark = "cards/atributos/oscuridad.png";
const attributeLight = "cards/atributos/luz.jpeg";
const attributeWind = "cards/atributos/viento.jpeg";
export const types = {
  "dark-magician": {
    name: "Spellcaster",
    color: colorNormal,
    type: "Normal",
    // eslint-disable-next-line sonarjs/no-duplicate-string
    attribute: attributeDark
  },
  "blues-eyes-white-dragon": {
    name: "Dragon",
    color: colorNormal,
    type: "Normal",
    attribute: attributeLight
  },
  "red-eyes-dark-dragon": {
    name: "Dragon",
    color: colorNormal,
    type: "Normal",
    attribute: attributeDark
  },
  "summoned-skull": {
    name: "Demon",
    color: colorNormal,
    type: "Normal",
    attribute: attributeDark
  },
  "dark-magician-girl": {
    name: "Spellcaster",
    color: colorEffect,
    type: "Effect",
    attribute: attributeDark
  },
  "baby-dragon": {
    name: "Dragon",
    color: colorNormal,
    type: "Normal",
    attribute: attributeWind
  },
  "time-wizard": {
    name: "Spellcaster",
    color: colorEffect,
    type: "Effect",
    attribute: attributeLight
  },
  "magician-black-chaos": {
    name: "Speelcaster",
    color: colorRitual,
    type: "Ritual",
    attribute: attributeDark
  }
};
export const cardsData = [
  {
    start: 7,
    type: "dark-magician",
    title: "Dark Magician",
    image: "cards/mago-oscuro.jpeg",
    description: "The ultimate wizard in terms of attack and defense",
    attack: 2500,
    defense: 2100
  },
  {
    start: 8,
    type: "blues-eyes-white-dragon",
    title: "Blues-eyes White Dragon",
    image: "cards/dragon-blanco-de-ojos-azules.jpeg",
    description: "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale",
    attack: 3000,
    defense: 2500
  },
  {
    start: 7,
    type: "red-eyes-dark-dragon",
    title: "Red-Eyes B. Dragon",
    image: "cards/dragon-negro-de-ojos-rojos.jpeg",
    description: "A ferocious dragon with a deadly attack",
    attack: 2400,
    defense: 2000
  },
  {
    start: 6,
    type: "summoned-skull",
    title: "Summoned Skull",
    image: "cards/craneo-convocado.jpeg",
    description: "A fiend with dark powers for confusing enemy. Among the Fiend-Type Monsters, this monster boasts considerable force.",
    attack: 2500,
    defense: 1200
  },
  {
    start: 6,
    type: "dark-magician-girl",
    title: "Dark Magician Girl",
    image: "cards/hija-del-mago-oscuro.jpeg",
    description: "Gains 300 ATK for every 'Dark Magician' or 'Magician of Black Chaos' in the GYs",
    attack: 2000,
    defense: 1700
  },
  {
    start: 3,
    type: "baby-dragon",
    title: "Baby Dragon",
    image: "cards/dragon-bebe.jpeg",
    description: "Much more than just a child, this dragon is gifted with untapped power",
    attack: 1200,
    defense: 1700
  },
  {
    start: 2,
    type: "time-wizard",
    title: "Time Wizard",
    image: "cards/mago-del-tiempo.jpeg",
    description: "Toss a coin and call Heads or Tails. If you call it right, your opponent''s monsters on the Field are destroyed. If you call it wrong, your own monsters on the Field are destroyed and you lose Life Points equal to half the total ATK of the destroyed monsters. This card can be used only during your own turn, once per turn",
    attack: 500,
    defense: 400
  },
  {
    start: 8,
    type: "magician-black-chaos",
    title: "Magician of Black Chaos",
    image: "cards/mago-de-caos-negro.jpeg",
    description: "This card only be Ritual Summoned with the Ritual Spell Card, 'Black Magic Ritual'",
    attack: 2800,
    defense: 2600
  },
];
