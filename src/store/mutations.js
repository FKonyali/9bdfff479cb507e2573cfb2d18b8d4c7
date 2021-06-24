export default {
    updateHotels (state, data) {
        state.hotels = data
    },
    updatePageStatus (state, data) {
        state.pageStatus = data
    },
    updateForm (state, data) {
        state.form = data
    },
    updateHotelDetail (state, data) {
        state.hotelDetail = data
    }
}
