export default function addDays (newDate, days) {
    const date = new Date(newDate.valueOf())
    date.setDate(date.getDate() + days)
    return `${date.getFullYear()}-${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`
}
