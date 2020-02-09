class Event{
    constructor(dateStarted_, dateEnded_, function_, name_) {
        this.dateStarted = dateStarted_;
        this.dateEnded_ = dateEnded_;
        this.toggleBonuses = function_;
        this.name = name_;
    }
}
var eventHandler = {events: [], currentEventName: 'No current event', update: function(){
    for (let i =0; i < eventHandler.events.length; i++) {
        if (date.getDate() + '.' + date.getMonth() === eventHandler.events[i].dateStarted) {
            eventHandler.events[i].toggleBonuses(1);
            eventHandler.currentEventName = eventHandler.events[i].name;
        }
        if (date.getDate() + '.' + date.getMonth() === eventHandler.events[i].dateEnded) {
            eventHandler.events[i].toggleBonuses(-1);
            eventHandler.currentEventName = 'No events going on';
        }
    }
}};
eventHandler.events.push(new Event('1.1', '2.1', function(a){
    Virus.bonus.infectivity += a * 3;
}), 'New Year');
/*
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
		}*/