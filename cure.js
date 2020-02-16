class Cure {
	constructor() {
		this.isItFound = false;
		this.percents = 0;
		this.timeToNewPercents = 0;
	}
	update() {
    let visusche = testVirus;
    this.timeToNewPercents = 1100 - visusche.severity * 10;
		if (this.isItFound == true) {
			if (updates % this.timeToNewPercents == 0) {
				this.percents++;
			}
		} else if(visusche.brDead > 100000) {
			this.isItFound = true;
    }
		if (this.percents >= 100) {
			this.percents = 100;
      for (let i = 0; i < visusche.infectedIn.length; i++) {
          if (visusche.infectedIn[i] > 10) {
              visusche.brInfected -= visusche.infectedIn[i]/10;
              visusche.infectedIn[i] -= visusche.infectedIn[i]/10;
          } else {
              visusche.brInfected -= visusche.infectedIn[i];
              visusche.infectedIn[i] = 0;
          }
      }
		}
	}
}
var cure = new Cure();
