export default {
    hotels: [],
    pageStatus: {},
    form: localStorage.getItem('form') ? JSON.parse(localStorage.getItem('form')) : {
        start_date: '',
        end_date: '',
        adult: 0,
        child: 0,
        hotel: {
            hotel_id: '',
            hotel_name: ''
        }
    },
    hotelDetail: {}
}
