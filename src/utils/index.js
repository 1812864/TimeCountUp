export const convertToHummanReadableTime = (time) => {
    const minus = (("0" + Math.floor(time / 60000) % 60)).slice(-2)
    const second = (("0" + Math.floor(time / 1000) % 60)).slice(-2)
    const milisecond = (("0" + (time / 10) % 100)).slice(-2)

    return `${minus}:${second}:${milisecond}`
}
