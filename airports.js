let airport_img = new Image;
airport_img.src = 'airport.png';
class Airport {
  constructor(continent, index, x, y) {
    this.continent = continent;
    this.index = index;
    this.x = x;
    this.y = y;
  }
  draw() {
    context.drawImage(airport_img, this.x, this.y, 60, 24);
  }
}
let airports = [new Airport('Eurasia', 0, 520, 170), new Airport('North America', 1, 95, 175),
new Airport('South America', 2, 200, 320), new Airport('Africa', 3, 365, 245), new Airport('Australia', 4, 665, 355)];
