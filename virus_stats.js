class Virus{
    constructor(type_, brInfected_){
        this.type = type_;
        this.infectivity = 10;
        this.severity = 0;
        this.lethality = 0;
        this.brInfected = brInfected_;
        this.brDead = 0;
        this.infectedIn = [0, 0, 0, 0, 0];
        this.DNA = 0;
        this.DNAPerDay = 1;
        this.bonus={
            infectivity: 0,
            severity: 0,
            lethality: 0
        };
        // Eurasia=0, Severna amerika=1, Ushna amerika=2, Afrika=3, Awstraliq=4
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
    updatePerDay(){
        for(let i=0; i<this.infectedIn.length; i++){
            let a = Math.random();
            if(a<(this.infectivity+this.bonus.infectivity)/100){
                let novozarazeni = Math.ceil(this.infectedIn[i] * (1 + Math.random()));
                this.infectedIn[i] += novozarazeni;
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
