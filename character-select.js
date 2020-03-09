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

document.querySelectorAll(".selecto").forEach(function(item) {
  item.addEventListener("click", function(e) {
    charList.forEach(function(gizmo) {
      if (gizmo.home === e.target.id) {
        document.querySelector("#box1").innerHTML = "";

        const makeImage = document.createElement("img");
        makeImage.classList.add("top-img");
        makeImage.src = gizmo.imgfile;
        document.querySelector("#box1").appendChild(makeImage);
      }
    });
  });
});
