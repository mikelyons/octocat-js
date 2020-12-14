/*
  p5.js is a JavaScript library to make coding accessible
  for artists, designers, educators, and beginners.

  Read the docs at https://p5js.org/reference/
  Check out examples at https://p5js.org/examples/

  octocat.js is a JavaScript library to make octocats.
  Read the docs at https://github.com/octocademy/octocat.js
*/
import p5 from "p5.js";
import Octocat from "octocat.js";

let octocat;

p5.setup = () => {
  createCanvas(300, 300);
  octocat = new Octocat();

  // Put your cursor below the arrows to start editing
  // then click on an octocat setting to insert it
  // in your code. When you make changes, your octocat
  // will automatically update!
  //
  // ⬇️️️️️️️️️️️️️️️️️️️️️️️️⬇️⬇️⬇️⬇️

  octocat.setEyes("Happy Open")
  octocat.setEyes("Excited Open")
  octocat.setBodyColor({ primary: "#557542", underside: "#B7D5A5", suctions: "#D8DAF0" })
  octocat.setFaceColor({ face: "#B7D5A5", nose: "#457A6D" })
  octocat.setFaceColor({ face: "#CDCF8A", nose: "#84872F" })
  octocat.setEyeColor("#135C38")
  octocat.setMouth("Starstruck")
  octocat.setMouth("Canines")
  octocat.setHair("Braided Bun")
  octocat.setHair("Rainbow Streak")
  octocat.setHair("Pompadour")
  octocat.setHair("Undercut")
  octocat.setHairColor("#2C3EC1")
  octocat.setFacialHair("Wizard Beard")
  octocat.setFacialHair("Dali Mustache")
  octocat.setFacialHair("Stubble shadow")
  octocat.setFacialHair("Mutton Chops")
  octocat.setTop("Astronaut")
  octocat.setTop("Wizard Robe")
  octocat.setTop("Scuba Wetsuit")
  octocat.setBottom("Armor Suit")
  octocat.setBottom("Kilt")
  octocat.setBottom("Shorts")
  octocat.setBottom("Astronaut pants")
  octocat.setBottom("Scuba Pants")
  octocat.setFootwear("Scuba Flippers")
  octocat.setHeadgear("Wizard Hat")
  octocat.setHeadgear("Scubahead")
  octocat.setHeadgear("Wizard Hat")
  octocat.setEyewear("Sports Paint")
  octocat.setEyewear("Scuba Goggles")
  octocat.setEyewear("Sunglasses Heart Shaped")
  octocat.setEyewear("Scuba Goggles")
  octocat.setAccessory("Cape")
  octocat.setAccessory("Tattoo")
  octocat.setAccessory("Cape")
  octocat.setProp("Aussie")
  octocat.setPuddleColor("#701B09")
  octocat.setPuddleColor("#B3682B")
  octocat.setPuddleColor("#9DC877")
};

// ♻️ The draw method gets called repeatedly
// you can make changes here to animate!
p5.draw = () => {
  background("white");
  octocat.draw();
};

