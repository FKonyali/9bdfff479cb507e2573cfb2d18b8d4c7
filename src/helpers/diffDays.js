export default function diffDays (a, b) {
    const oneDay = 24 * 60 * 60 * 1000
    const firstDate = new Date(a)
    const secondDate = new Date(b)
    return Math.round(Math.abs((firstDate - secondDate) / oneDay))
}
