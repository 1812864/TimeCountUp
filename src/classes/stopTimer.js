import {convertToHummanReadableTime} from '../utils'

export class StopTimer {

    constructor(lapTime = 0, startTime = 0, endTime = 0) {
        this.lapTime = lapTime
        this.startTime = startTime
        this.endTime = endTime
    }


    getLapTime() {
        return convertToHummanReadableTime(this.lapTime)
    }

    getStartTime() {
        return convertToHummanReadableTime(this.startTime)
    }

    getEndTime() {
        return convertToHummanReadableTime(this.endTime)
    }

    setLapTime(newTime) {
        this.lapTime = newTime
    }

    setStartTime(newTime) {
        this.startTime = newTime
    }

    setEndTime(newTime) {
        this.endTime = newTime
    }
}