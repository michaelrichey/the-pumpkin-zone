const charList = [
  {
    name: "nba jam",
    home: "char1",
    imgfile: "images/picture-choice-nba-jam.jpg"
  },
  {
    name: "shin chan",
    home: "char2",
    imgfile: "images/picture-choice-shin-chan.png"
  },
  {
    name: "funky",
    home: "char3",
    imgfile: "images/picture-choice-fk.png"
  },
  {
    name: "pb crisps",
    home: "char4",
    imgfile: "images/picture-choice-pbcrisps.png"
  }
];

document.querySelectorAll(".selecto").forEach(function (item) {
  item.addEventListener("click", function (e) {
    makeFullBodyImgAppear(e)
    makeCharNameAppear(e)


  });
});

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
