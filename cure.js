class Cure{
	constructor(isItFound, percents, timeToNewPercents, time, x, y, color, font){
		this.isItFound = isItFound;
		this.percents = percents;
		this.timeToNewPercents = timeToNewPercents;
		this.time = time;
		this.x = x;
		this.y = y;
		this.color = color;
		this.font = font;
	}
	update(){
		this.time++;
		if(this.isItFound == true){
			if(this.time % this.timeToNewPercents == 0){
				this.percents++;
			}
		}
		if(this.percents >= 100){
			// Game over
		}
	}
	draw(){
		if(button[0].seeing == true){ 
			context.fillStyle = this.color;
			context.font = this.font + "px Ariel";
			context.fillText("Cure: " + this.percents + " %", this.x, this.y);
		}
	}
}
var cure = new Cure(false, 0, 750, 0, 925, 400, "aqua", 60);