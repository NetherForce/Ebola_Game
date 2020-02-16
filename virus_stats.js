let contInd = []; contInd[177] = 0; contInd[127] = 1; contInd[27] = 2; contInd[242] = 3; contInd[71] = 4;
class Virus{
    constructor(type_){
        this.type = type_;
        this.hasStarted = false;
        this.infectivity = 10;
        this.severity = 0;
        this.lethality = 0;
        this.brInfected = 0;
        this.brDead = 0;
        this.infectedIn = [0, 0, 0, 0, 0];
        this.maxInfectedIn = [2000000000, 1500000000, 1500000000, 500000000, 500000000];
        this.maxZaRisuvaneIn = [10000, 10000, 7500, 5000, 5000]
        this.DNA = 0;
        this.DNAPerDay = 1;
        this.bonus={
            infectivity: 0,
            severity: 0,
            lethality: 0
        };
        // Eurasia=0, Severna Amerika=1, Ushna Amerika=2, Afrika=3, Awstraliq=4
    }
    drawRedDot(x_, y_){
        middleContext.fillStyle = "red";
        middleContext.fillRect(x_, y_, 1, 1);
    }
    start(x_, y_){
        if (this.hasStarted) return;
        let pixel = backContext.getImageData(x_, y_, 1, 1).data;
        if (typeof contInd[pixel[1]] === 'undefined') return;
        this.infectedIn[contInd[pixel[1]]]++;
        this.brInfected++;
        this.drawRedDot(x_, y_);
        this.hasStarted = true;
    }
    infectivityChange(howMuch_){
        this.infectivity += howMuch_;
    }
    severityChange(howMuch_){
        this.severity += howMuch_;
    }
    lethalityChange(howMuch_){
        this.lethality += howMuch_;
    }
    kill(br_){
        this.brInfected -= br_;
        this.brDead += br_;
    }
    addDNA(number_){
        this.DNA += number_;
    }
    drawAPointOnARandomSpot(br_, continentIndex_){
        for(let i=0; i<br_; i++){
            let isGood = false, x_, y_;
            while(!isGood){
                x_ = Math.floor(Math.random()*canvas.width);
                y_ = Math.floor(Math.random()*canvas.height);
                let pixel = backContext.getImageData(x_, y_, 1, 1).data;
                isGood = (contInd[pixel[1]] == continentIndex_);
            }
            this.drawRedDot(x_, y_);
        }
    }
    updatePerDay(){
        for(let i=0; i<this.infectedIn.length; i++){
            let a = Math.random();
            if(a<(this.infectivity+this.bonus.infectivity)/100){
                let novozarazeni = Math.ceil(this.infectedIn[i] * (1 + Math.random()));
                if(this.infectedIn[i] + novozarazeni > this.maxInfectedIn[i]){
                   novozarazeni = this.maxInfectedIn[i] - this.infectedIn[i];
                }

                if(this.infectedIn[i] + novozarazeni < this.maxZaRisuvaneIn[i]){
                    this.drawAPointOnARandomSpot(novozarazeni, i);
                }else{
                    this.drawAPointOnARandomSpot(this.maxZaRisuvaneIn[i]-this.infectedIn[i], i);
                }

                this.infectedIn[i] += novozarazeni;
                this.brInfected += novozarazeni;
            }

            let b = Math.random();
            if(b<(this.lethality+this.bonus.lethality)/100){
                let novoubiti = Math.floor(this.infectedIn[i] * (1 + Math.random()));
                this.infectedIn[i] -= novoubiti;
                this.brDead += novoubiti;
            }
        }
    }
}
// Draw stat box and handle text
function drawStat(text, stat, x, y, width, height, color) {
  context.fillStyle = color;
  context.fillText(text, x, y);
  context.strokeRect(x, y + 10, width, height);
  context.fillRect(x, y + 10, width * stat / 100, height);
}
var testVirus = new Virus('type');
