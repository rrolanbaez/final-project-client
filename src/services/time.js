import { DateTime } from "luxon"

export const returnReadableTime = (time) => {
    return DateTime.fromISO(time).toLocaleString(DateTime.DATETIME_HUGE, { locale: 'en-PR' })
    // .toFormat(DateTime.DATETIME_FULL)

}

export const returnReadableTimeShort = (time) => {
    return DateTime.fromISO(time).toLocaleString(DateTime.DATETIME_SHORT)
}