const charList = [
  {
    name: "Party Bot 5000",
    home: "char1",
    imgfile: "images/robo.gif",
    headshot: "images/pp-bot.gif",
    height: "6' 2\"",
    weight: "235 lbs",
    power: "❚❚❚❚❚❚❚❚",
    technique: "❚❚",
    speed: "❚❚❚",
    jump: "❚❚❚❚",
    bio:
      "Designed in the Outback by party scientists, this robot was designed to dispense mirthmaking at maximum efficiency."
  },
  {
    name: "Dog Walker",
    home: "char2",
    imgfile: "images/werewolf.gif",
    headshot: "images/pp-wolf.gif",
    height: "5' 2\"",
    weight: "199 lbs",
    power: "❚❚❚",
    technique: "❚❚❚❚❚",
    speed: "❚❚❚❚",
    jump: "❚❚❚",
    bio:
      "Found in a box next to a convent, this schoolteacher-by-day uses his protractor to stab villains in the eyes. Also he turns into a werewolf under the full moon."
  },
  {
    name: "Count GrapeFang",
    home: "char3",
    imgfile: "images/vampire.gif",
    headshot: "images/pp-drac.gif",
    height: "4' 9\"",
    weight: "167 lbs",
    power: "❚❚❚❚",
    technique: "❚❚❚❚",
    speed: "❚❚❚❚",
    jump: "❚❚❚❚",
    bio:
      "Bitten by a vampire while eating grapes, this creature of the night terrorizes breakfast with muscadine-flavored cereal."
  },
  {
    name: "Karate Alien",
    home: "char4",
    imgfile: "images/alien.gif",
    headshot: "images/pp-alien.gif",
    height: "5' 9\"",
    weight: "187 lbs",
    power: "❚❚",
    technique: "❚❚❚❚❚❚❚❚❚",
    speed: "❚❚❚❚❚❚❚",
    jump: "❚❚❚❚",
    bio:
      "Emerging from an Insectinoid egg-pod that was separated from the nest, this genetically-engineered alien soldier uses his innate skills as a karate master to stab villains in the eyes with a protractor."
  }
];

document.querySelectorAll(".selecto").forEach(function (item) {
  item.addEventListener("click", function (e) {
    makeFullBodyImgAppear(e);
    makeCharNameAppear(e);
    makeHeadshotImgAppear(e);
    makeHeightWeight(e);
    makeStatsBars(e);
    makeBioAppear(e);
  });
});

const makeStatsBars = function (event) {
  charList.forEach(function (gizmo) {
    if (gizmo.home === event.target.id) {
      document.querySelector("#charview2d").innerHTML = "";
      makeBars("Power", gizmo.power);
      makeBars("Technique", gizmo.technique);
      makeBars("Speed", gizmo.speed);
      makeBars("Jump", gizmo.jump);
    }
  });
};

const makeBars = function (category, item) {
  const make = document.createElement("p");
  make.textContent = category + ": " + item;
  document.querySelector("#charview2d").appendChild(make);
};

const makeHeightWeight = function (event) {
  charList.forEach(function (gizmo) {
    if (gizmo.home === event.target.id) {
      document.querySelector("ul").innerHTML = "";

      const make = document.createElement("li");
      make.textContent = `Height: ${gizmo.height}`;
      const make2 = document.createElement("li");
      make2.textContent = `Weight: ${gizmo.weight}`;
      document.querySelector("ul").appendChild(make);
      document.querySelector("ul").appendChild(make2);
    }
  });
};

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
};

const makeCharNameAppear = function (event) {
  charList.forEach(function (gizmo) {
    if (gizmo.home === event.target.id) {
      document.querySelector("#charview1b").innerHTML = "";

      const makeName = document.createElement("p");
      makeName.classList.add("top-name");
      makeName.textContent = gizmo.name;
      document.querySelector("#charview1b").appendChild(makeName);
    }
  });
};

const makeFullBodyImgAppear = function (event) {
  charList.forEach(function (gizmo) {
    if (gizmo.home === event.target.id) {
      document.querySelector("#charview1c").innerHTML = "";

      const makeImage = document.createElement("img");
      makeImage.classList.add("char-img");
      makeImage.src = gizmo.imgfile;
      document.querySelector("#charview1c").appendChild(makeImage);
    }
  });
};

const makeBioAppear = function (event) {
  charList.forEach(function (gizmo) {
    if (gizmo.home === event.target.id) {
      document.querySelector("#charview2c").innerHTML = "";

      const makeBio = document.createElement("p");
      makeBio.classList.add("top-bio");
      makeBio.textContent = gizmo.bio;
      document.querySelector("#charview2c").appendChild(makeBio);
    }
  });
};

document.querySelector("#wacky-button").addEventListener("click", function (e) {
  if (e.target.value === "on") {
    document.querySelector("body").classList.add("wacky");
    document.querySelector("#wacky-button").value = "off";
  } else {
    document.querySelector("#wacky-button").value = "on";
    document.querySelector("body").classList.remove("wacky");
  }
});

// function not used. cant make it work. find a way to make it work later.
const selectFromArray = function (event, code) {
  charList.forEach(function (gizmo) {
    if (gizmo.home === event.target.id) {
      code;
    }
  });
};
