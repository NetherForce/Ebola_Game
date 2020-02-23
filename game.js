// North America 237 27 36
// South America 255 127 38
// Africa        254 242 0
// Eurasia       35 177 77
// Australia     63 71 204
var isPaused = false;
let backCanvas = document.getElementById('canvas-back');
let backContext = backCanvas.getContext('2d');
let back_img = new Image();
back_img.src = 'countries_backend.jpg';
setTimeout( () => {
  backContext.drawImage(back_img, 0, 0, 800, 600);
}, 100);
let middleCanvas = document.getElementById('canvas-middle');
let middleContext = middleCanvas.getContext('2d');
let middle_img = new Image();
middle_img.src = 'countries.jpg';
setTimeout( () => {
  middleContext.drawImage(middle_img, 0, 0, 800, 600);
}, 20);
middleContext.imageSmoothingEnabled = false;
var date = new Date(), speed = 100, updates = 0;
var dayLength = 100;

function update() {
    updates++;
    dayHandler();
    for (let i = 0; i < airplanes.length; ++i) {
      airplanes[i].update();
      if (airplanes[i].t <= -50) airplanes.splice(i, 1);
    }
};
function dayHandler() {
    if (testVirus.hasStarted && updates >= dayLength && !isPaused) {
        date.setDate(date.getDate() + 1);
        updates = 0;
        eventHandler.update();
        testVirus.updatePerDay();
        while (flights_per_day > 0) {
          let start_ind = Math.floor(Math.random() * airports.length);
          let end_ind = Math.floor(Math.random() * airports.length);
          if (start_ind != end_ind) { // Check if airports don't match
            // Create new Airplane
            // Check if the airplane is from an infected continent and if it's going to a uninfected continent
            let flag = (testVirus.infectedIn[start_ind] > 0 && testVirus.infectedIn[end_ind] == 0);
            // Choose plane type in terms of a random chance
            let type = (flag && Math.random() < testVirus.planeInfectivity / 100) ? 'infected' : 'normal';
            airplanes.push(new Airplane(start_ind, end_ind, flight_speed, type));
            --flights_per_day;
          }
        }
        flights_per_day = 10;
    }
};
function draw() {
    context.fillStyle = "black";
    context.font = "20px Consolas";
    context.fillText(date.getDate() + '.'+ (date.getMonth() + 1) + '.' + date.getFullYear() + '|' + eventHandler.currentEventName, 800, 50);
    for (let curr_airport of airports) curr_airport.draw();
    for (let curr_airplane of airplanes) curr_airplane.draw();
    // Draw current stats for the Virus
    context.fillText('DNA: ' + testVirus.DNA, 800, 200);
    drawStat('Infectivity', testVirus.infectivity, 800, 220, 400, 25, "Pink");
    drawStat('Severity', testVirus.severity, 800, 280, 400, 25, "#e6e600");
    drawStat('Lethality', testVirus.lethality, 800, 340, 400, 25, "Purple");
    drawStat('Cure', cure.percents, 800, 400, 400, 25, "Cyan");

}
function keyup(key) {
    console.log("Pressed", key);
};
function mouseup() {
    console.log("Mouse clicked at", mouseX, mouseY);
    // Check which continent is clicked
    let pixel = backContext.getImageData(mouseX, mouseY, 1, 1).data;
    if (pixel[1] == 27) console.log("North America");
    if (pixel[1] == 127) console.log("South America");
    if (pixel[1] == 242) console.log("Africa");
    if (pixel[1] == 177) console.log("Eurasia");
    if (pixel[1] == 71) console.log("Australia");
    testVirus.start(mouseX, mouseY);
};
