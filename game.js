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
		if(this. day == 9 && this.month == 	8 ){
			if(this.year == 2020 || this.year == 2024 || this.year == 2028 || this.year == 2032 || this.year == 2036 || this.year == 2040){
				this.newsText = "";
			}
		} 
		
	}
	draw(){
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
function update() {
<<<<<<< HEAD
	data.update();
}

function draw() {
	data.draw();
=======
	// Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
    
}

function draw() {
	// tuk naprogramirai kakvo da se risuva
    
>>>>>>> a205fccfe825ca9b9843da34406b341a5bb2b628
}

function keyup(key) {
	console.log("Pressed", key);
}

function mouseup() {
	console.log("Mouse clicked at", mouseX, mouseY);
}
