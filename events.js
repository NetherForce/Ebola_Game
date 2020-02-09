class Event{
    constructor(dateStarted_, dateEnded_, function_, name_, afterHowManyYearsIsTheNextEvent_) {
        this.dateStarted = dateStarted_;
        this.dateEnded = dateEnded_;
        this.toggleBonuses = function_;
        this.name = name_;
        this.afterHowManyYearsIsTheNextEvent = afterHowManyYearsIsTheNextEvent_;
    }
}
var eventHandler = {events: [], currentEventName: 'No events going on', update: function(){
    for (let i = 0; i < eventHandler.events.length; i++) {
        if (date.getFullYear() % eventHandler.events[i].afterHowManyYearsIsTheNextEvent == 0) {
            if (date.getDate() + '.' + (date.getMonth() + 1) === eventHandler.events[i].dateStarted) {
                eventHandler.events[i].toggleBonuses(1);
                eventHandler.currentEventName = eventHandler.events[i].name;
            }
            if (date.getDate() + '.' + (date.getMonth() + 1) === eventHandler.events[i].dateEnded) {
                eventHandler.events[i].toggleBonuses(-1);
                eventHandler.currentEventName = 'No events going on';
            }
        }
    }
}};
eventHandler.events.push(new Event('1.1', '2.1', function(a) {testVirus.bonus.infectivity += a * 3}, 'New Year', 1));
eventHandler.events.push(new Event('14.2', '15.2', function(a){}, "Valentine's Day", 1));
eventHandler.events.push(new Event('10.6', '30.6', function(a){}, "Olympic Games", 4));