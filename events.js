class Event{
    constructor(dateStarted_, dateEnded_, function_) {
        this.dateStarted = dateStarted_;
        this.dateEnded_ = dateEnded_;
        this.bonuses = function_;
    }
}
var events = [];
events.push(new Event('1.1', '2.1'));