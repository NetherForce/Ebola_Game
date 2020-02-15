class Virus{
    constructor(type_){
        this.type = type_;
        this.hasStarted = false;
        this.infectivity = 90;
        this.severity = 0;
        this.lethality = 0;
        this.brInfected = 0;
        this.brDead = 0;
        this.infectedIn = [0, 0, 0, 0, 0];
        this.DNA = 0;
        this.DNAPerDay = 1;
        this.personDorRadius = 3;
        this.bonus={
            infectivity: 0,
            severity: 0,
            lethality: 0
        };
        // Eurasia=0, Severna amerika=1, Ushna amerika=2, Afrika=3, Awstraliq=4
    }
    drawRedDot(x_, y_){
        middleContext.fillStyle = "red";
        middleContext.beginPath();
        middleContext.arc(x_, y_, this.personDorRadius, 0, Math.PI*2);
        middleContext.fill();
    }
    start(x_, y_){
        if(this.hasStarted==false){
            let pixel = backContext.getImageData(x_, y_, 1, 1).data;
            if (pixel[1] == 27){
                this.infectedIn[2]++;
                this.brInfected++;
                this.drawRedDot(x_, y_);
                this.hasStarted = true;
            }
            if (pixel[1] == 127){
                this.infectedIn[1]++;
                this.brInfected++;
                this.drawRedDot(x_, y_);
                this.hasStarted = true;
            }
            if (pixel[1] == 242){
                this.infectedIn[3]++;
                this.brInfected++;
                this.drawRedDot(x_, y_);
                this.hasStarted = true;
            }
            if (pixel[1] == 177){
                this.infectedIn[0]++;
                this.brInfected++;
                this.drawRedDot(x_, y_);
                this.hasStarted = true;
            }
            if (pixel[1] == 71){
                this.infectedIn[4]++;
                this.brInfected++;
                this.drawRedDot(x_, y_);
                this.hasStarted = true;
            }
        }
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
            let x_ = Math.floor(Math.random()*canvas.width);
            let y_ = Math.floor(Math.random()*canvas.height);
            
            let pixel = backContext.getImageData(x_, y_, 1, 1).data;
            let isGood = false;
            
            if (pixel[1] == 27 && continentIndex_ == 2){
                isGood = true;
            }
            if (pixel[1] == 127 && continentIndex_ == 1){
                isGood = true;
            }
            if (pixel[1] == 242 && continentIndex_ == 3){
                isGood = true;
            }
            if (pixel[1] == 177 && continentIndex_ == 0){
                isGood = true;
            }
            if (pixel[1] == 71 && continentIndex_ == 4){
                isGood = true;
            }
            
            while(isGood == false){
                x_ = Math.floor(Math.random()*canvas.width);
                y_ = Math.floor(Math.random()*canvas.height);

                pixel = backContext.getImageData(x_, y_, 1, 1).data;
                isGood = false;

                if (pixel[1] == 27 && continentIndex_ == 2){
                    isGood = true;
                }
                if (pixel[1] == 127 && continentIndex_ == 1){
                    isGood = true;
                }
                if (pixel[1] == 242 && continentIndex_ == 3){
                    isGood = true;
                }
                if (pixel[1] == 177 && continentIndex_ == 0){
                    isGood = true;
                }
                if (pixel[1] == 71 && continentIndex_ == 4){
                    isGood = true;
                }
            }
            
            console.log("asdfasdfasdf");
            
            this.drawRedDot(x_, y_);
        }
    }
    updatePerDay(){
        console.log("asdf");
        for(let i=0; i<this.infectedIn.length; i++){
            let a = Math.random();
            if(a<(this.infectivity+this.bonus.infectivity)/100){
                let novozarazeni = Math.ceil(this.infectedIn[i] * (1 + Math.random()));
                this.infectedIn[i] += novozarazeni;
                this.drawAPointOnARandomSpot(novozarazeni, i);
                console.log("asdfasdf");
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
var testVirus = new Virus('type');
