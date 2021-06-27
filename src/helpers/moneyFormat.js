export default function moneyFormat (a) {
    return a.toString().replace('.', ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
}
