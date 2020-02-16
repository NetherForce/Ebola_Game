let airport_img = new Image, normal_airplane_img = new Image, infected_airplane_img = new Image;
airport_img.src = 'airport.png'; normal_airplane_img.src = 'normal_airplane.png'; infected_airplane_img.src = 'infected_airplane.png';
let airport_height = 24, airport_width = 60, h_w = airport_width / 2, h_h = airport_height / 2;
class Airport {
    constructor(continent, index, x, y) {
        this.continent = continent;
        this.index = index;
        this.x = x;
        this.y = y;
    }
    draw() {
        context.drawImage(airport_img, this.x, this.y, airport_width, airport_height);
    }
}
class Airplane {
    constructor(startX, startY, endX, endY, speed) {
        this.x = startX;
        this.y = startY;
        this.distance = Math.sqrt((endX - startX) * (endX - startX) + (endY - startY) * (endY - startY));
        this.speed = speed;
        this.t = this.distance / this.speed;
        this.dX = (endX - startX) / this.t;
        this.dY = (endY - startY) / this.t;
        this.angle = Math.atan2(endY - startY, endX - startX);
        if (this.angle < 0) this.angle += 2 * Math.PI;
        this.img = normal_airplane_img;
    }
    update() {
        // Move airplanes until it arrives to destination
        if (--this.t < 0) return;
        this.x += this.dX;
        this.y += this.dY;
    }
    draw() {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(Math.PI / 2 + this.angle);
        context.drawImage(this.img, 0, 0, 40, 40);
        context.restore();
    }
}
let airports = [], airplanes = [];
let flights_per_day = 10, flight_speed = 5;
// Create main Airports
airports.push(new Airport('Eurasia', 0, 520, 170));
airports.push(new Airport('North America', 1, 95, 175));
airports.push(new Airport('South America', 2, 200, 320));
airports.push(new Airport('Africa', 3, 365, 245));
airports.push(new Airport('Australia', 4, 665, 355));
