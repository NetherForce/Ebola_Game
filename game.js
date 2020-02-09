var date = new Date();
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
}, 10);
let middleCanvas = document.getElementById('canvas-middle');
let middleContext = middleCanvas.getContext('2d');
let middle_img = new Image();
middle_img.src = 'countries.jpg';
setTimeout( () => {
  middleContext.drawImage(middle_img, 0, 0, 800, 600)
}, 20);

class Data{
	constructor(day, month, year, vreme, color, newsText){
		this.day = day;
		this.month = month;
		this.year = year;
		this.vreme = vreme;
		this.color = color;
		this.newsText = newsText;
	}
	update(){
		this.vreme++;
		if(this.vreme % 30 == 0){
			this.day++;
		}
		if(this.day >= 30){
			this.day = 1;
			this.month += 1;
		}
		if(this.month >= 12){
			this.month = 1;
			this.year -= -1;
		}
		if(this.day >= 1 && this.month == 1){
			this.newsText = "New year"
		}
		if(this.day >= 10 && this.month == 1){
			this.newsText = "Grigor Dimitrov wins a mach"
		}
		if(this.day >= 16 && this.month == 1){
			this.newsText = "Lili Ivanova concert"
		}
		if(this.day >= 1 && this.month == 2){
			this.newsText = "National Freedom Day"
		}
		if(this.day >= 7 && this.month == 2){
			this.newsText = ""
		}
		if(this.day >= 14 && this.month == 2){
			this.newsText = "Valentine's Day";
		}
		if(this.day >= 20 && this.month == 2){
			this.newsText = "Fat Thursday";
		}
		if(this.day >= 26 && this.month == 2){
			this.newsText = "Pancake day";
		}
		if(this.day >= 1 && this.month == 3){
			this.newsText = "Baba Marta"
		}
		if(this.day >= 8 && this.month == 3){
			this.newsText = "Mother's Day"
		}
		if(this.day >= 14 && this.month == 3){
			this.newsText = "Popcorn Lover's Day"
		}
		if(this.day >= 20 && this.month == 3){
			this.newsText = "Spring Day"
		}
		if(this.day >= 26 && this.month == 3){
			this.newsText = "Waffle Day"
		}
		if(this.day >= 24 && this.month >= 7){
			if(this.year == 2020 || this.year == 2024 || this.year == 2028 || this.year == 2032 || this.year == 2036 || this.year == 2040){
				this.newsText = "Summer Olympic games"
			}
		}
		if(this.day == 9 && this.month == 	8 ){
			if(this.year == 2020 || this.year == 2024 || this.year == 2028 || this.year == 2032 || this.year == 2036 || this.year == 2040){
				this.newsText = "";
			}
		}

	}
	draw() {
		context.fillStyle = this.color;
		context.font = "30px Ariel"
		context.fillText(this.day + " . " + this.month + " . " + this.year, canvas.width - 200, 50);
		context.fillStyle = "red";
		context.fillText("News : ", 50, 50);
		context.fillStyle = "black";
		context.fillText(this.newsText, 150, 50);
	}
}
var data = new Data(1, 1, 2020, 0, "black","");
>>>>>>> 27d96e6451598f2ed7743c89da0b934f92b83616
function update() {
	data.update();
}
function draw() {
	data.draw();
}
<<<<<<< HEAD
function changeDate() {
    
};

=======
>>>>>>> 27d96e6451598f2ed7743c89da0b934f92b83616
function keyup(key) {
    console.log("Pressed", key);
};
function mouseup() {
<<<<<<< HEAD
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
class Human{
    constructor(x_, y_, country_) {
        this.x = x_;
        this.y = y_;
        this.country = country_;
    }
}
=======
    console.log("Mouse clicked at", mouseX, mouseY);
    // Check which continent is clicked
    let pixel = backContext.getImageData(mouseX, mouseY, 1, 1).data;
    if (pixel[1] == 27) console.log("North America");
    if (pixel[1] == 127) console.log("South America");
    if (pixel[1] == 242) console.log("Africa");
    if (pixel[1] == 177) console.log("Eurasia");
    if (pixel[1] == 71) console.log("Australia");
};
>>>>>>> 27d96e6451598f2ed7743c89da0b934f92b83616
