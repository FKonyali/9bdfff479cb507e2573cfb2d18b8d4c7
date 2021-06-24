const apiRootUrl = process.env.VUE_APP_API_ROOT

export default {
    hotels (context) {
        const requestOptions = {
            method: 'GET'
        }

        let ReqStatus = ''
        context.commit('updateHotels', {
            ...context.getters.getHotels,
            status: 'PENDING'
        })
        fetch(`${apiRootUrl}/tkn/hotels`, requestOptions)
            .then(response => {
                ReqStatus = response.status
                return response.json()
            })
            .then(result => {
                if (ReqStatus === 200) {
                    context.commit('updateHotels', {
                        ...context.getters.getHotels,
                        status: 'SUCCESS',
                        arr: result,
                        filter: result
                    })
                } else {
                    context.commit('updateHotels', {
                        ...context.getters.getHotels,
                        status: 'ERROR',
                        err: result
                    })
                }
            })
            .catch(error => {
                console.log('error', error)
                context.commit('updateHotels', {
                    ...context.getters.getHotels,
                    status: 'ERROR',
                    err: error
                })
            })
    },
    hotelDetail (context) {
        const requestOptions = {
            method: 'GET'
        }

        let ReqStatus = ''
        context.commit('updateHotelDetail', {
            ...context.getters.getHotelDetail,
            status: 'PENDING'
        })
        fetch(`${apiRootUrl}/tkn/hotel-details/${context.getters.getForm.hotel.hotel_id}`, requestOptions)
            .then(response => {
                ReqStatus = response.status
                return response.json()
            })
            .then(result => {
                if (ReqStatus === 200) {
                    context.commit('updateHotelDetail', {
                        ...context.getters.getHotelDetail,
                        status: 'SUCCESS',
                        detail: result
                    })

                    context.commit('updateForm', {
                        ...context.getters.getForm,
                        hotel: {
                            ...context.getters.getForm.hotel,
                            city: result.city
                        }
                    })
                } else {
                    context.commit('updateHotelDetail', {
                        ...context.getters.getHotelDetail,
                        status: 'ERROR',
                        err: result
                    })
                }
            })
            .catch(error => {
                console.log('error', error)
                context.commit('updateHotelDetail', {
                    ...context.getters.getHotelDetail,
                    status: 'ERROR',
                    err: error
                })
            })
    },
    checkCoupon (context) {
        const requestOptions = {
            method: 'GET'
        }

        let ReqStatus = ''
        context.commit('updateHotelDetail', {
            ...context.getters.getHotelDetail,
            status: 'PENDING'
        })
        fetch(`${apiRootUrl}/tkn/coupons/?code=${context.getters.getForm.coupon_code}`, requestOptions)
            .then(response => {
                ReqStatus = response.status
                return response.json()
            })
            .then(result => {
                if (ReqStatus === 200) {
                    context.commit('updateForm', {
                        ...context.getters.getForm,
                        coupon: result
                    })
                }
            })
            .catch(error => {
                console.log('error', error)
            })
    }
}
