<template>
    <div class="room">
        <div class="room__container" v-if="hotelDetail">
            <div class="room__top" v-if="hotelDetail.city">
                <div class="room__t-top">
                    <div class="room__t-hotel-name">
                        {{ getForm.hotel.hotel_name }} <span>({{ hotelDetail.city }})</span>
                    </div>
                </div>
                <div class="room__t-bottom">
                    <div class="room__t-item">
                        <strong>Giriş Tarihi: </strong>
                        {{ dateFormat(getForm.start_date) }}
                    </div>
                    <div class="room__t-item">
                        <strong>
                            Çıkış Tarihi
                        </strong>
                        {{ dateFormat(getForm.end_date) }}
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
            <div class="room__choice" v-if="hotelDetail.room_type">
                <h2 class="room__c-title">
                    Oda Tipi Seçimi
                </h2>
                <div class="room__c-items">
                    <RoomItem v-for="(room, index) in hotelDetail.room_type" :key="room.id" :index="index" :room="room" inputName="room_type"/>
                </div>
            </div>
            <div class="room__choice" v-if="hotelDetail.room_scenic">
                <h2 class="room__c-title">
                    Manzara Seçimi
                </h2>
                <div class="room__c-items">
                    <RoomItem v-for="(room, index) in hotelDetail.room_scenic" :key="room.id" :index="index" :room="room" inputName="room_scenic" />
                </div>
            </div>
        </div>
        <div class="room__msg" v-if="hotelDetail.status === 'PENDING'">Yükleniyor...</div>
        <div class="room__msg" v-if="hotelDetail.status === 'ERROR'">Beklenmeyen bir hata oluştu tekrar deneyin.</div>
        <div class="room__msg" v-if="hotelDetail.status === 'SUCCESS' && !getHotelDetail.city">Lütfen seçim yapın.</div>

        <BottomNavigation :backBtnHide="false" btnText="Kaydet ve Devam Et" :getForm="getForm" goPath="/payment" />
    </div>
</template>

<script>
import BottomNavigation from '@/components/BottomNavigation.vue'
import RoomItem from '@/components/RoomItem.vue'
import dateFormat from '@/helpers/dateFormat.js'

export default {
    name: 'RoomSelection',
    components: {
        RoomItem,
        BottomNavigation
    },
    data () {
        return {
            hotelDetail: {}
        }
    },
    created () {
        this.$store.commit('updatePageStatus', {
            name: 'choiceRoom',
            status: 'LOADED'
        })
        const filterHotelDetail = this.getHotelDetail.detail.find(x => x.id === this.getForm.hotel.hotel_id)
        this.hotelDetail = filterHotelDetail
    },
    methods: {
        dateFormat
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
        }

        &__msg {
            margin: 30px 0;
        }
    }
</style>
