const mongoose=require('mongoose');
const schema=mongoose.Schema({
    _startDate:Date,
    _endDate: Date,
    _backlogs:[{
        type: mongoose.Schema.ObjectId,
        ref: "Backlog"
    }]
});
class Release {
    constuctor(startDate,endDate,backlogs){
        this._startDate=startDate;
        this._endDate=endDate;
        this._backlogs=backlogs;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate=startDate;
    }
    get endDate(){
        return this._endDate;
    }
    set endDate(endDate){
        this._endDate=endDate;
    }
    get backlogs(){
        return this._backlogs;
    }
    set backlogs(backlogs){
        this._backlogs=backlogs;
    }
}
schema.loadClass(Release);
module.exports=mongoose.model('Release',schema);
