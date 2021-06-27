export default function dateFormat (date) {
    const transformDate = new Date(date)
    return (transformDate.getDate() < 10 ? '0' + transformDate.getDate() : transformDate.getDate()) + '.' +
    (transformDate.getMonth() < 10 ? '0' + transformDate.getMonth() : transformDate.getMonth()) + '.' +
    transformDate.getFullYear()
}
