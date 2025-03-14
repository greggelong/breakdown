let kitchensound;
let comp;
let sliderRate;
let sliderPan;
let srate = 1;
let instruct;
let button;

function preload() {
  gregimg = loadImage("workerSign.JPG");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //kitchensound = loadSound("sfkitchen.mp3");
  comp = loadSound("closingLongPhil.mp3", loaded);
  pixelDensity(1);
  imageMode(CENTER);
  button = createButton("sound");
  button.position(width / 4, height / 2);
  button.mouseClicked(unlockAudioContext);
  //instruct = createElement("h1");
  //instruct.position(width / 4, height / 8);
  //instruct.style("color", "#ff0000");
  //instruct.html("Click to change my voice!");

  //sliderRate = createSlider(0, 3, 1, 0.01);
  //sliderPan = createSlider(0,1,0.5,0.01)
}

function loaded() {
  comp.loop();
}

function draw() {
  background(220);

  image(gregimg, width / 2, height / 2, 300 / srate, 300 / srate);

  //circle(mouseX, mouseY, width/2, height/2);

  //comp.rate(sliderRate.value());

  if (mouseIsPressed) {
    srate = map(mouseX, 0, width, 0.5, 2);
    comp.rate(srate);
  }
}

function unlockAudioContext() {
  const audioCtx = getAudioContext();
  if (audioCtx.state === "suspended") {
    audioCtx
      .resume()
      .then(() => {
        console.log("Audio context unlocked");
      })
      .catch((err) => {
        console.error("Failed to unlock audio context:", err);
      });
  }
  srate = 1;
  button.hide();
}
