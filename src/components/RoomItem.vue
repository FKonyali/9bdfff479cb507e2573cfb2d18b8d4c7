 <template>
    <label class="room__c-item">
        <input type="radio" :name="inputName" :checked="room.title === getForm.hotel.room_type || index === 0 ? true : false" :value="getForm.room_type" @change="changeRoomScenic($event, room)" v-if="room.price_rate">
        <input type="radio" :name="inputName" :checked="room.title === getForm.hotel.room_type || index === 0 ? true : false" :value="getForm.room_type" @change="changeRoomType($event, room)" v-if="room.price">
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
                    <div class="room__cib-price" v-if="room.price_rate">
                        + {{ room.price_rate }}%
                    </div>
                    <div class="room__cib-price" v-if="room.price">
                        {{ moneyFormat(room.price * diffDays(getForm.start_date, getForm.end_date)) }} TL
                    </div>
                </div>
            </div>
        </div>
    </label>
</template>

<script>
import moneyFormat from '@/helpers/moneyFormat.js'
import diffDays from '@/helpers/diffDays.js'

export default {
    name: 'RoomItem',
    props: {
        index: {
            type: Number,
            default: 0
        },
        room: {},
        inputName: {
            type: String,
            default: ''
        }
    },
    methods: {
        moneyFormat,
        diffDays,
        changeRoomType (e, roomDetailObj) {
            this.$store.commit('updateForm', {
                ...this.getForm,
                hotel: {
                    ...this.getForm.hotel,
                    price: roomDetailObj.price,
                    room_type: roomDetailObj.title
                }
            })
        },
        changeRoomScenic (e, roomDetailObj) {
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
        }
    }
}
</script>

<style lang="scss" scoped>
    .room {
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
    }

    @media (max-width: 820px) {
        .room {
            &__c {
                &-inner {
                    padding: 5px 10px
                }
            }
        }
    }

    @media (max-width: 585px) {
        .room {
            &__c {
                &-item {
                    width: 100%;
                    margin-bottom: 15px;
                }

                &-inner {
                    padding: 15px 25px
                }
            }
        }
    }
</style>
