const charList = [
  {
    name: "nba jam",
    home: "char1",
    imgfile: "images/picture-choice-nba-jam.jpg",
    headshot: "images/picture-choice-nba-jam.jpg",
    height: "6' 2\"",
    weight: "235 lbs",
    power: "asdf",
    technique: "asdf",
    speed: "asdf",
    jump: "asdf",
  },
  {
    name: "shin chan",
    home: "char2",
    imgfile: "images/picture-choice-shin-chan.png",
    headshot: "images/picture-choice-shin-chan.png",
    height: "5' 2\"",
    weight: "199 lbs"
  },
  {
    name: "funky",
    home: "char3",
    imgfile: "images/picture-choice-fk.png",
    headshot: "images/picture-choice-fk.png",
    height: "4' 9\"",
    weight: "167 lbs"
  },
  {
    name: "pb crisps",
    home: "char4",
    imgfile: "images/picture-choice-pbcrisps.png",
    headshot: "images/picture-choice-pbcrisps.png",
    height: "5' 9\"",
    weight: "187 lbs"
  }
];

document.querySelectorAll(".selecto").forEach(function (item) {
  item.addEventListener("click", function (e) {
    makeFullBodyImgAppear(e)
    makeCharNameAppear(e)
    makeHeadshotImgAppear(e)
    makeHeightWeight(e)


  });
});


const makeHeightWeight = function (event) {
  charList.forEach(function (gizmo) {
    if (gizmo.home === event.target.id) {
      document.querySelector("ul").innerHTML = "";

      const make = document.createElement('li')
      make.textContent = `Height: ${gizmo.height}`
      const make2 = document.createElement('li')
      make2.textContent = `Weight: ${gizmo.weight}`
      document.querySelector("ul").appendChild(make)
      document.querySelector("ul").appendChild(make2)
    }
  })
}

const makeHeadshotImgAppear = function (event) {
  charList.forEach(function (gizmo) {
    if (gizmo.home === event.target.id) {
      document.querySelector("#charview2a").innerHTML = "";

      const makeImage = document.createElement("img");
      makeImage.classList.add("top-img");
      makeImage.src = gizmo.headshot;
      document.querySelector("#charview2a").appendChild(makeImage);
    }
  });
}

const makeCharNameAppear = function (event) {
  charList.forEach(function (gizmo) {
    if (gizmo.home === event.target.id) {
      document.querySelector("#charview1b").innerHTML = "";

      const makeName = document.createElement('p');
      makeName.classList.add("top-name")
      makeName.textContent = gizmo.name
      document.querySelector('#charview1b').appendChild(makeName)
    }
  })
}

const makeFullBodyImgAppear = function (event) {
  charList.forEach(function (gizmo) {
    if (gizmo.home === event.target.id) {
      document.querySelector("#charview1c").innerHTML = "";

      const makeImage = document.createElement("img");
      makeImage.classList.add("top-img");
      makeImage.src = gizmo.imgfile;
      document.querySelector("#charview1c").appendChild(makeImage);
    }
  });
}
