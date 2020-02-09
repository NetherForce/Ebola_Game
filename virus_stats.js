class Virus{
    constructor(type_, brInfected_){
        this.type = type_;
        this.infectivity = 10;
        this.severity = 0;
        this.lethality = 0;
        this.brInfected = brInfected_;
        this.brDead = 0;
        this.infectedIn = [0, 0, 0, 0, 0, 0];
        //Asia=0, severna amerika=1, ushna amerika=2, ewropa=3, afrika=4, awstraliq=5
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
}