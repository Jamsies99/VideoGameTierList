let outElem = document.getElementById('outElem b');
let outParagraph = document.getElementById('outParagraph');
let contGridElem = document.getElementById('contGrid');

let jsonDatabase = [
  {
    "Name" : "Big Boss",
    "picture_url" : "BB.jpg",
    "game": "Metal Gear",
    "BadAssery" : "5/10",
    "skills" : ["Espionage", "Master of CQC", "Tatician"]
  },

  {
    "Name" : "Yasuo",
    "picture_url" : "Yasuo.jpg",
    "game": "League of Legends",
    "BadAssery" : "6/10",
    "skills" : ["Master of Wind Techniques", "Superhuman Agility", "Master Swordsmen"]
  },
  {
    "Name" : "DoomGuy",
    "picture_url" : "Doom.jpg",
    "game": "Doom",
    "BadAssery" : "5/10",
    "skills" : ["Fearlessness", "Masterful Gunskill", "Durable"]
  },
  {
    "Name" : "Kratos",
    "picture_url" : "Kratos.jpg",
    "game": "God of War",
    "BadAssery" : "10/10",
    "skills" : ["The God of War", "Mythical Powers", "Large array of Magical Weapons"]
  },

  {
    "Name" : "Darth Vader",
    "picture_url" : "darth.png",
    "game": "Red Dead Redemption 2",
      "BadAssery" : "100/10",
    "skills" : ["Full Control of the Dark Side of the Force", " Ruthless and Calculating", "Mastery of Lightsabre combat"]
  },
  {
    "Name" : "Gerald",
    "picture_url" : "gerald.jpg",
    "game": "The Witcher 3",
    "BadAssery" : "8/10",
    "skills" : ["Mythical Powers", "Superhuman Strength and Stamina", "Master Tracker and Hunter"]
  },
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(inJSON) {

  let newContElem = document.createElement("DIV");
  newContElem.style.backgroundColor = '#ece8e1';
  newContElem.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerHTML = inJSON['Name'];
  newContElem.appendChild(newContentHeading);


  let gameHeading = document.createElement("H4");
  gameHeading.classList.add('contentTitle');
  gameHeading.innerHTML = inJSON['game'];
  newContElem.appendChild(gameHeading);


  let newContSubH = document.createElement("H5");
  newContSubH.innerHTML = "Skillset:";
  newContElem.appendChild(newContSubH);

  let newContentskillLst = document.createElement("UL");
  newContElem.appendChild(newContentskillLst);

  for (var i = 0; i < inJSON['skills'].length; i++) {
    var currSkill = inJSON['skills'][i];
    var newSkillElem = document.createElement("LI");
    newSkillElem.innerHTML = currSkill;
    newContentskillLst.appendChild(newSkillElem);
  }

  let newImg = document.createElement("IMG");
  newImg.classList.add("footerImage");
  newImg.src = inJSON['picture_url'];
  newContElem.appendChild(newImg);
  contGridElem.appendChild(newContElem);

  let rankHeading = document.createElement("H6");
  let rank = "BA ranking: "
  let number = inJSON['BadAssery']
  let finString= rank+number;
  rankHeading.innerHTML = finString;
  newContElem.appendChild(rankHeading);
}
