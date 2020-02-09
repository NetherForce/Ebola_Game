// North America 237 27 36
// South America 255 127 38
// Africa        254 242 0
// Eurasia       35 177 77
// Australia     63 71 204
let backCanvas = document.getElementById('canvas-back');
let backContext = backCanvas.getContext('2d');
let back_img = new Image();
back_img.src = 'countries_backend.jpg';
setTimeout( () => {
  backContext.drawImage(back_img, 0, 0, 800, 600)
}, 100);
let middleCanvas = document.getElementById('canvas-middle');
let middleContext = middleCanvas.getContext('2d');
let middle_img = new Image();
middle_img.src = 'countries.jpg';
setTimeout( () => {
  middleContext.drawImage(middle_img, 0, 0, 800, 600)
}, 20);
middleContext.imageSmoothingEnabled = false;
var date = new Date(), dayLength = 100, updates = 0;


function update() {
    updates++;
    dayHandler();
};
function dayHandler() {
    if (updates >= dayLength) {
        date.setDate(date.getDate() + 1);
        updates = 0;
        eventHandler.update();
    }
};
function draw() {
    context.fillStyle="black";
    context.font="20px Consolas";
    context.fillText(date.getDate() + '.'+ (date.getMonth() + 1) + '.' + date.getFullYear() + '|' + eventHandler.currentEventName,50,50);
}
function keyup(key) {
    console.log("Pressed", key);
};
function mouseup() {
	// Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
    // Check which continent is clicked
    let pixel = backContext.getImageData(mouseX, mouseY, 1, 1).data;
    if (pixel[1] == 27) console.log("North America");
    if (pixel[1] == 127) console.log("South America");
    if (pixel[1] == 242) console.log("Africa");
    if (pixel[1] == 177) console.log("Eurasia");
    if (pixel[1] == 71) console.log("Australia");
};