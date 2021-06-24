<template>
    <div class="room">
        <div class="room__container" v-if="getHotelDetail.detail">
            <div class="room__top" v-if="getHotelDetail.detail.city">
                <div class="room__t-top">
                    <div class="room__t-hotel-name">
                        {{ getForm.hotel.hotel_name }} <span>({{ getHotelDetail.detail.city }})</span>
                    </div>
                </div>
                <div class="room__t-bottom">
                    <div class="room__t-item">
                        <strong>Giriş Tarihi: </strong>
                        {{ startDate }}
                    </div>
                    <div class="room__t-item">
                        <strong>
                            Çıkış Tarihi
                        </strong>
                        {{ endDate }}
                    </div>
                    <div class="room__t-item">
                        <strong>
                            Yetişkin
                        </strong>
                        {{ getForm.adult }}
                    </div>
                    <div class="room__t-item">
                        <strong>
                            Çocuk
                        </strong>
                        {{ getForm.child }}
                    </div>
                </div>
            </div>
            <div class="room__choice" v-if="getHotelDetail.detail.room_type">
                <h2 class="room__c-title">
                    Oda Tipi Seçimi
                </h2>
                <div class="room__c-items">
                    <label class="room__c-item" v-for="(room, index) in getHotelDetail.detail.room_type" :key="room.id">
                        <input type="radio" name="room_type" :checked="index === 0 ? true : false" :value="form.room_type" @change="changeRoomType($event, room)">
                        <div class="room__c-inner">
                            <h4 class="room__ci-title">
                                {{ room.title }}
                            </h4>
                            <img :src="room.photo" class="room__ci-img" :alt="room.title">
                            <div class="room__ci-bot">
                                <div class="room__cib-left">
                                    <div class="room__cib-text">
                                        {{ diffDays(getForm.start_date, getForm.end_date) }} Gün
                                    </div>
                                    <div class="room__cib-text">
                                        1 Yetişkin
                                    </div>
                                </div>
                                <div class="room__cib-right">
                                    <div class="room__cib-price">
                                        {{ formatMoney(room.price * diffDays(getForm.start_date, getForm.end_date)) }} TL
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <div class="room__choice" v-if="getHotelDetail.detail.room_scenic">
                <h2 class="room__c-title">
                    Manzara Seçimi
                </h2>
                <div class="room__c-items">
                    <label class="room__c-item" v-for="(room, index) in getHotelDetail.detail.room_scenic" :key="room.id">
                        <input type="radio" name="room_scenic" :checked="index === 0 ? true : false" :value="form.room_scenic" @change="changeRoomScenic($event, room)">
                        <div class="room__c-inner">
                            <h4 class="room__ci-title">
                                {{ room.title }}
                            </h4>
                            <img :src="room.photo" class="room__ci-img" :alt="room.title">
                            <div class="room__ci-bot">
                                <div class="room__cib-left">
                                    <div class="room__cib-text">
                                        Fiyat Etki Oranı
                                    </div>
                                </div>
                                <div class="room__cib-right">
                                    <div class="room__cib-price">
                                        + {{ room.price_rate }}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div class="room__msg" v-if="getHotelDetail.status === 'PENDING'">Yükleniyor...</div>
        <div class="room__msg" v-if="getHotelDetail.status === 'ERROR'">Beklenmeyen bir hata oluştu tekrar deneyin.</div>
        <div class="room__msg" v-if="getHotelDetail.status === 'SUCCESS' && !getHotelDetail.detail.city">Lütfen seçim yapın.</div>
    </div>
</template>

<script>
    export default {
        name: 'RoomSelection',
        data () {
            return {
                startDate: '',
                endDate: '',
                form: {
                    room_type: '',
                    room_scenic: ''
                }
            }
        },
        created () {
            this.$store.commit('updatePageStatus', {
                name: 'choiceRoom',
                status: 'LOADED'
            })

            if (this.getForm.hotel) {
                this.$store.dispatch('hotelDetail')
            }

            const startDate = new Date(this.getForm.start_date)
            this.startDate = startDate.getDate() + '.' + startDate.getMonth() + '.' + startDate.getFullYear()

            const endDate = new Date(this.getForm.end_date)
            this.endDate = endDate.getDate() + '.' + endDate.getMonth() + '.' + endDate.getFullYear()
        },
        methods: {
            diffDays (a, b) {
                const oneDay = 24 * 60 * 60 * 1000
                const firstDate = new Date(a)
                const secondDate = new Date(b)
                return Math.round(Math.abs((firstDate - secondDate) / oneDay))
            },
            formatMoney (a) {
                return a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
            },
            changeRoomType (e, roomDetailObj) {
                this.$store.commit('updateForm', {
                    ...this.getForm,
                    hotel: {
                        ...this.getForm.hotel,
                        price: roomDetailObj.price,
                        priceFormat: this.formatMoney(roomDetailObj.price),
                        room_type: roomDetailObj.title
                    }
                })
            },
            changeRoomScenic (e, roomDetailObj) {
                console.log(roomDetailObj)
                this.$store.commit('updateForm', {
                    ...this.getForm,
                    hotel: {
                        ...this.getForm.hotel,
                        price_rate: roomDetailObj.price_rate,
                        room_scenic: roomDetailObj.title
                    }
                })
            }
        },
        computed: {
            getForm () {
                return this.$store.getters.getForm
            },
            getHotelDetail () {
                return this.$store.getters.getHotelDetail
            }
        }
    }
</script>

<style lang="scss" scoped>
    .room {
        $room: &;

        &__top {
            background: #f1f1f1;
            border-radius: 10px;
            padding: 15px 30px;
            margin: 15px 0
        }

        &__t {
            &-top {
                margin-bottom: 5px;
            }

            &-hotel-name {
                font-weight: 700;
                font-size: 22px;

                span {
                    font-size: 18px;
                    font-weight: 400;
                }
            }

            &-bottom {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
            }

            &-item {
                padding: 0 10px;
                position: relative;

                &:after {
                    content: '-';
                    position: absolute;
                    right: -3px;
                    top: 50%;
                    transform: translateY(-50%);
                }

                &:first-child {
                    padding-left: 0;
                }

                &:last-child {
                    padding-right: 0;

                    &:after {
                        display: none;
                    }
                }

                strong {
                    font-weight: 700;
                }
            }
        }

        &__choice {
            margin: 15px 0;
        }

        &__c {
            &-title {
                font-weight: 700;
                font-size: 16px;
                padding-bottom: 5px;
                border-bottom: 1px solid #eee;
                margin-bottom: 15px
            }

            &-items {
                display: flex;
                flex-wrap: wrap;
            }

            &-item {
                width: 33.333%;
                cursor: pointer;
                padding: 0 10px;

                input {
                    opacity: 0;
                    visibility: hidden;
                    position: absolute;

                    &:checked {
                        &~.room__c-inner {
                            border-color: #10a210
                        }
                    }
                }
            }

            &-inner {
                padding: 15px 25px;
                border: 1px solid #eee;
                border-radius: 7px;
            }
        }

        &__ci {
            &-title {
                font-weight: 700;
                font-size: 16px;
                margin-bottom: 5px;
            }

            &-img {
                width: 100%;
                margin-bottom: 5px;
            }

            &-bot {
                display: flex;
                justify-content: space-between;
            }
        }

        &__cib {
            &-text {
                font-size: 12px;
                font-weight: 500;
            }

            &-price {
                font-size: 16px;
                font-weight: 700;
            }
        }

        &__msg {
            margin: 30px 0;
        }
    }
</style>
