<template>
    <div class="result">
        <div class="result__top">
            <h2 class="result__title">
                Rezervasyon kaydınız alınmıştır.
            </h2>
            <div class="result__desc">
                Rezervasyon özetiniz aşağıdaki gibidir. Rezervasyon kaydınızda değişiklik veya yeni rezervasyon yapmak için aşağıdaki linkleri kullanabilirsiniz.
            </div>
            <div class="result__btns">
                <button class="result__btn" @click="resetRezervation">
                    Yeni Rezervasyon Yap
                </button>
                <button class="result__btn" @click="goHome">
                    Rezervasyonu Güncelle
                </button>
                <button class="result__btn" @click="deleteRezervation">
                    Rezervasyonu İptal Et
                </button>
            </div>
        </div>
        <div class="result__bottom">
            <div class="payment__r-inner">
                <h2 class="payment__title">
                    {{getForm.hotel.hotel_name}}
                    <span>({{getForm.hotel.city}})</span>
                </h2>
                <div class="payment__info">
                    <div class="payment__iitem">
                        <strong>Giriş Tarihi</strong>
                        {{dateFormat(getForm.start_date)}}
                    </div>
                    <div class="payment__iitem">
                        <strong>Çıkış Tarihi</strong>
                        {{dateFormat(getForm.end_date)}}
                    </div>
                    <div class="payment__iitem">
                        <strong>Yetişkin</strong>
                        {{getForm.adult}}
                    </div>
                    <div class="payment__iitem">
                        <strong>Çocuk</strong>
                        {{getForm.child}}
                    </div>
                    <div class="payment__iitem">
                        <strong>Oda Tipi</strong>
                        {{getForm.hotel.room_type}}
                    </div>
                    <div class="payment__iitem">
                        <strong>Manzara</strong>
                        {{getForm.hotel.room_scenic}}
                    </div>
                </div>
                <div class="payment__result">
                    <div class="payment__r-list">
                        <div class="payment__r-item">
                            <div class="payment__r-left">
                                Oda Fiyatı
                            </div>
                            <div class="payment__r-right">
                                {{ moneyFormat(getForm.hotel.price) }} TL
                            </div>
                        </div>
                        <div class="payment__r-item">
                            <div class="payment__r-left">
                                Fiyat Etki Oranı
                            </div>
                            <div class="payment__r-right">
                                %{{getForm.hotel.price_rate}}
                            </div>
                        </div>
                        <div class="payment__r-item">
                            <div class="payment__r-left">
                                Konaklama <span>({{ diffDays(getForm.start_date, getForm.end_date) }} Gün)</span>
                            </div>
                            <div class="payment__r-right">
                                {{ moneyFormat(getForm.hotel.price * diffDays(getForm.start_date, getForm.end_date)) }} TL
                            </div>
                        </div>
                        <div class="payment__r-item" v-if="getForm.coupon">
                            <div class="payment__r-left" v-if="getForm.coupon.length > 0">
                                İndirim <span>({{getForm.coupon[0].code}})</span>
                            </div>
                            <div class="payment__r-right" v-if="getForm.coupon.length > 0">
                                -{{getForm.coupon[0].discount_ammount}} TL
                            </div>
                        </div>
                    </div>
                    <div class="payment__r-price">
                        <strong>TOPLAM TUTAR</strong>
                        <span>{{ moneyFormat((getForm.hotel.price * diffDays(getForm.start_date, getForm.end_date) * (getForm.hotel.price_rate + 100) / 100) - (getForm.coupon ? getForm.coupon[0].discount_ammount : 0)) }} TL</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dateFormat from '@/helpers/dateFormat.js'
import diffDays from '@/helpers/diffDays.js'
import moneyFormat from '@/helpers/moneyFormat.js'

export default {
    name: 'Result',
    created () {
        this.$store.commit('updatePageStatus', {
            name: 'result',
            status: 'LOADED'
        })
    },
    computed: {
        getForm () {
            return this.$store.getters.getForm
        }
    },
    methods: {
        dateFormat,
        moneyFormat,
        diffDays,
        resetRezervation () {
            localStorage.removeItem('form')
            this.$store.commit('updateForm', {
                start_date: '',
                end_date: '',
                adult: 0,
                child: 0,
                hotel: {
                    hotel_id: '',
                    hotel_name: ''
                }
            })

            this.goHome()
        },
        goHome () {
            if (this.$router.currentRoute.path !== '/') {
                this.$router.push('/')
            }
        },
        deleteRezervation () {
            if (confirm('Rezervasyon kaydınınızı iptal etmek istediğinize emin misiniz?')) {
                this.resetRezervation()
            }
        }
    },
    watch: {
        getForm: {
            handler (val) {
                localStorage.setItem('form', JSON.stringify(val))
                this.$store.commit('updateForm', val)
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .result {
        margin: 30px 0;

        &__top {
            border: 1px solid #eee;
            border-radius: 10px;
            padding: 30px
        }

        &__title {
            text-align: center;
            margin-bottom: 15px
        }

        &__desc {
            text-align: center;
            padding: 0 30px;
            margin-bottom: 15px
        }

        &__btns {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__btn {
            background: #063662;
            color: #FFF;
            border-radius: 5px;
            padding: 10px 15px;
            font-size: 16px;
            margin-right: 10px;

            &:last-child {
                margin-right: 0;
            }
        }

        &__bottom {
            margin-top: 30px
        }
    }

    .payment {
        margin: 30px 0;

        &__title {
            font-weight: 700;
            margin-bottom: 15px;
            font-size: 24px;

            span {
                font-weight: 400;
                font-size: 20px;
            }
        }

        &__r {
            &-inner {
                background: #f1f1f1;
                padding: 30px;
                border-radius: 10px;
            }

            &-item {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            &-list {
                border-bottom: 1px solid #eee;
                padding: 20px;
            }

            &-left {
                font-weight: 700;

                span {
                    font-weight: 400;
                }
            }

            &-price {
                padding: 20px;
                text-align: center;
                display: flex;
                flex-direction: column;
                font-weight: 700;
                font-size: 18px;

                span {
                    font-size: 34px;
                    font-weight: 700;
                }
            }
        }

        &__info {
            display: flex;
            flex-wrap: wrap;
        }

        &__iitem {
            width: calc(50% - 10px);
            background: #FFF;
            border-radius: 10px;
            margin: 5px;
            padding: 10px;
            text-align: center;

            strong {
                display: block;
            }
        }

        &__coupon {
            margin: 5px 0;
            padding: 20px;
            border-radius: 10px;
            background: #FFF;
        }

        &__input {
            padding: 10px;
            flex: 1;
            margin-right: 10px;
            background: #FFF;
            border: 1px solid #2f3a3f;
            max-width: 100%;
        }

        &__btn {
            background: #063662;
            color: #FFF;
            border-radius: 5px;
            padding: 10px 15px;
            font-size: 16px;
            width: 130px;
        }

        &__result {
            background: #FFF;
            border-radius: 10px;
            margin-top: 10px;
        }

        &__c {
            &-info {
                border: 2px solid #2f3a3f;
                padding: 30px 20px;
                margin-top: 30px;
                position: relative;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }

            &-container {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }

            &-title {
                position: absolute;
                left: 20px;
                top: -14px;
                background: #FFF;
                padding: 0 5px;
                font-weight: 700;
                font-size: 20px;
            }

            &-label {
                font-size: 16px;
                display: block;
            }

            &-input {
                width: 100%;
                padding: 7px 10px;
                border: 1px solid #2f3a2f;
            }
        }

        &__ci {
            &-item {
                margin-bottom: 30px;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            &-group {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                select {
                    padding: 7px 10px;
                    border: 1px solid #2f3a2f;
                    margin-right: 15px;
                }
            }

            &-gleft {
                margin-bottom: 15px;
            }
        }
    }
</style>
