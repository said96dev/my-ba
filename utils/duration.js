import moment from "moment";
import {BadRequestError} from "../errors/index.js"

const duration = (startTime , endTime) => {
    var start = moment(startTime).utc()
    var end = moment(endTime ).utc()
    var duration = moment.duration(end.diff(start));
    var hours = parseInt(duration.asHours());
    var minutes = parseInt(duration.asMinutes()) % 60;
    if( parseInt(hours) < 0 || parseInt(minutes) < 0 ){
        throw new BadRequestError("Start time can´t be after end time")
    }
    return hours + ':' + minutes
}

export default duration