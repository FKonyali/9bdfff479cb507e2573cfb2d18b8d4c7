<template>
    <div class="payment">
        <div class="payment__container">
            <div class="payment__left payment__col">
                <div class="payment__card creditcard" :class="{'flipped': flip}">
                    <div class="payment__c-front front">
                        <svg version="1.1" id="cardfront" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 750 471" style="enable-background:new 0 0 750 471;" xml:space="preserve">
                            <g id="Front">
                                <g id="CardBackground">
                                    <g id="Page-1_1_">
                                        <g id="amex_1_">
                                            <path id="Rectangle-1_1_" class="lightcolor grey" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                                    C0,17.9,17.9,0,40,0z"></path>
                                        </g>
                                    </g>
                                    <path class="darkcolor greydark" d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"></path>
                                </g>
                                <text transform="matrix(1 0 0 1 60.106 295.0121)" id="svgnumber" class="st2 st3 st4">{{card.card_number ? cardNumberFormat(card.card_number) : '0123 4567 8910 1112'}}</text>
                                <text transform="matrix(1 0 0 1 54.1064 428.1723)" id="svgname" class="st2 st5 st6">{{card.card_name ? card.card_name : 'AD SOYAD'}}</text>
                                <text transform="matrix(1 0 0 1 54.1074 389.8793)" class="st7 st5 st8">cardholder name</text>
                                <text transform="matrix(1 0 0 1 479.7754 388.8793)" class="st7 st5 st8">expiration</text>
                                <text transform="matrix(1 0 0 1 65.1054 241.5)" class="st7 st5 st8">card number</text>
                                <g>
                                    <text transform="matrix(1 0 0 1 574.4219 433.8095)" id="svgexpire" class="st2 st5 st9">{{card.card_date_month ? card.card_date_month : '01'}}/{{card.card_date_year ? card.card_date_year : '2021'}}</text>
                                    <text transform="matrix(1 0 0 1 479.3848 417.0097)" class="st2 st10 st11">VALID</text>
                                    <text transform="matrix(1 0 0 1 479.3848 435.6762)" class="st2 st10 st11">THRU</text>
                                    <polygon class="st2" points="554.5,421 540.4,414.2 540.4,427.9"></polygon>
                                </g>
                                <g id="cchip">
                                    <g>
                                        <path class="st2" d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                                c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"></path>
                                    </g>
                                    <g>
                                        <g>
                                            <rect x="82" y="70" class="st12" width="1.5" height="60"></rect>
                                        </g>
                                        <g>
                                            <rect x="167.4" y="70" class="st12" width="1.5" height="60"></rect>
                                        </g>
                                        <g>
                                            <path class="st12" d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                                    c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                                    C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                                    c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                                    c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"></path>
                                        </g>
                                        <g>
                                            <rect x="82.8" y="82.1" class="st12" width="25.8" height="1.5"></rect>
                                        </g>
                                        <g>
                                            <rect x="82.8" y="117.9" class="st12" width="26.1" height="1.5"></rect>
                                        </g>
                                        <g>
                                            <rect x="142.4" y="82.1" class="st12" width="25.8" height="1.5"></rect>
                                        </g>
                                        <g>
                                            <rect x="142" y="117.9" class="st12" width="26.2" height="1.5"></rect>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g id="Back">
                            </g>
                        </svg>
                    </div>
                    <div class="payment__c-back back">
                        <svg version="1.1" id="cardback" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 750 471" style="enable-background:new 0 0 750 471;" xml:space="preserve">
                            <g id="Front">
                                <line class="st0" x1="35.3" y1="10.4" x2="36.7" y2="11"></line>
                            </g>
                            <g id="Back">
                                <g id="Page-1_2_">
                                    <g id="amex_2_">
                                        <path id="Rectangle-1_2_" class="darkcolor greydark" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                                C0,17.9,17.9,0,40,0z"></path>
                                    </g>
                                </g>
                                <rect y="61.6" class="st2" width="750" height="78"></rect>
                                <g>
                                    <path class="st3" d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                            C707.1,246.4,704.4,249.1,701.1,249.1z"></path>
                                    <rect x="42.9" y="198.6" class="st4" width="664.1" height="10.5"></rect>
                                    <rect x="42.9" y="224.5" class="st4" width="664.1" height="10.5"></rect>
                                    <path class="st5" d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"></path>
                                </g>
                                <text transform="matrix(1 0 0 1 621.999 227.2734)" id="svgsecurity" class="st6 st7">{{card.card_cvv ? card.card_cvv : '985'}}</text>
                                <g class="st8">
                                    <text transform="matrix(1 0 0 1 518.083 280.0879)" class="st9 st6 st10">security code</text>
                                </g>
                                <rect x="58.1" y="378.6" class="st11" width="375.5" height="13.5"></rect>
                                <rect x="58.1" y="405.6" class="st11" width="421.7" height="13.5"></rect>
                                <text transform="matrix(1 0 0 1 59.5073 228.6099)" id="svgnameback" class="st12 st13"></text>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="payment__c-info">
                    <div class="payment__c-title">
                        Kredi Kartı Bilgileri
                    </div>
                    <div class="payment__ci-item">
                        <label class="payment__c-label">
                            Kartın Üzerindeki İsim
                        </label>
                        <input type="text" class="payment__c-input" placeholder="Kartın Üzerindeki İsimi Giriniz" v-model="card.card_name" maxlength="20">
                    </div>
                    <div class="payment__ci-item">
                        <label class="payment__c-label">
                            Kartın Numarası
                        </label>
                        <input type="text" class="payment__c-input" placeholder="Kartın Numarasını Giriniz" v-model="card.card_number" maxlength="16">
                    </div>
                    <div class="payment__ci-group">
                        <div class="payment__ci-gleft">
                            <label for="month" class="payment__c-label">
                                Kart Son Kullanma Tarihi
                            </label>
                            <div class="payment__ci-flex">
                                <select name="mount" id="month" v-model="card.card_date_month">
                                    <option value="" disabled selected>Ay</option>
                                    <option :value="counter" v-for="(counter, index) in 12" :key="index">{{counter}}</option>
                                </select>
                                <select name="year" id="year" v-model="card.card_date_year">
                                    <option value="" disabled selected>Yıl</option>
                                    <option :value="year" v-for="(year, index) in rangeYear" :key="index">{{year}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="payment__ci-gright">
                            <label for="cvv" class="payment__c-label">
                                CVV
                            </label>
                            <input type="text" name="cvv" id="cvv" class="payment__c-input" placeholder="CVV Giriniz" v-model="card.card_cvv" @focus="flip = true" @blur="flip = false" maxlength="4">
                        </div>
                    </div>
                </div>
            </div>
            <div class="payment__right payment__col">
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
                    <div class="payment__coupon">
                        <div class="payment__c-container">
                            <input type="text" class="payment__input" placeholder="Kupon Kodu" v-model="getForm.coupon_code" maxlength="7">
                            <button class="payment__btn" @click="checkCoupon">
                                Kodu Kullan
                            </button>
                        </div>
                        <div v-if="getForm.coupon">
                            <div class="payment__succ" v-if="getForm.coupon.length > 0">Kupon uygulanmıştır.</div>
                            <div class="payment__err" v-else>Kupon geçersizdir.</div>
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

        <BottomNavigation
            :backBtnHide="false"
            btnText="Ödeme Yap ve Bitir"
            :getForm="getForm"
            goPath="/result"
            :btnDisabled="(card.card_date_month=='' ||
            card.card_date_month=='' ||
            card.card_name=='' ||
            card.card_number=='' ||
            card.card_cvv=='')"
        />
    </div>
</template>

<script>
import BottomNavigation from '@/components/BottomNavigation.vue'
import dateFormat from '@/helpers/dateFormat.js'
import cardNumberFormat from '@/helpers/cardNumberFormat.js'
import diffDays from '@/helpers/diffDays.js'
import moneyFormat from '@/helpers/moneyFormat.js'

export default {
    name: 'Payment',
    components: {
        BottomNavigation
    },
    data () {
        return {
            rangeYear: [],
            flip: false,
            card: {
                card_date_month: '',
                card_date_year: '',
                card_name: '',
                card_number: '',
                card_cvv: ''
            }
        }
    },
    created () {
        this.$store.commit('updatePageStatus', {
            name: 'payment',
            status: 'LOADED'
        })

        const year = new Date().getFullYear()
        const maxYear = year + 10
        for (let i = year; i < maxYear; i++) {
            this.rangeYear.push(i)
        }
    },
    methods: {
        dateFormat,
        cardNumberFormat,
        diffDays,
        moneyFormat,
        checkCoupon () {
            if (this.getForm.coupon_code.length > 0) {
                this.$store.dispatch('checkCoupon')
            }
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
    .payment {
        margin: 30px 0;

        &__container {
            display: flex;
            margin: 0 -15px 15px;
        }

        &__col {
            width: 50%;
            padding: 0 15px
        }

        &__left {
            display: flex;
            flex-direction: column;
        }

        &__card {
            padding-bottom: 64%
        }

        &__title {
            font-weight: 700;
            margin-bottom: 15px;
            font-size: 24px;

            span {
                font-weight: 400;
                font-size: 20px;
            }
        }

        &__err {
            color: red;
            width: 100%;
            margin: 10px 0 0;
        }

        &__succ {
            color: green;
            margin: 10px 0 0;
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

    @media (max-width: 700px) {
        .payment {
            &__container {
                flex-wrap: wrap;
            }

            &__col {
                width: 100%
            }

            &__left {
                margin-bottom: 30px;
            }
        }
    }

    .payment-title {
        width: 100%;
        text-align: center;
    }

    .form-container .field-container:first-of-type {
        grid-area: name;
    }

    .form-container .field-container:nth-of-type(2) {
        grid-area: number;
    }

    .form-container .field-container:nth-of-type(3) {
        grid-area: expiration;
    }

    .form-container .field-container:nth-of-type(4) {
        grid-area: security;
    }

    .field-container input {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .field-container {
        position: relative;
    }

    .form-container {
        display: grid;
        grid-column-gap: 10px;
        grid-template-columns: auto auto;
        grid-template-rows: 90px 90px 90px;
        grid-template-areas: "name name""number number""expiration security";
        padding: 20px;
        color: #707070;
    }

    label {
        padding-bottom: 5px;
        font-size: 13px;
    }

    .ccicon {
        height: 38px;
        position: absolute;
        right: 6px;
        top: calc(50% - 17px);
        width: 60px;
    }

    /* CREDIT CARD IMAGE STYLING */
    .preload * {
        -webkit-transition: none !important;
        -moz-transition: none !important;
        -ms-transition: none !important;
        -o-transition: none !important;
    }

    .container {
        width: 100%;
        max-height: 251px;
        height: 54vw;
        padding: 20px;
    }

    #ccsingle {
        position: absolute;
        right: 15px;
        top: 20px;
    }

    #ccsingle svg {
        width: 100px;
        max-height: 60px;
    }

    .creditcard svg#cardfront,
    .creditcard svg#cardback {
        width: 100%;
        -webkit-box-shadow: 1px 5px 6px 0px black;
        box-shadow: 1px 5px 6px 0px black;
        border-radius: 22px;
    }

    #generatecard{
        cursor: pointer;
        float: right;
        font-size: 12px;
        color: #fff;
        padding: 2px 4px;
        background-color: #909090;
        border-radius: 4px;
        cursor: pointer;
        float:right;
    }

    /* CHANGEABLE CARD ELEMENTS */
    .creditcard .lightcolor,
    .creditcard .darkcolor {
        -webkit-transition: fill .5s;
        transition: fill .5s;
    }

    .creditcard .lightblue {
        fill: #03A9F4;
    }

    .creditcard .lightbluedark {
        fill: #0288D1;
    }

    .creditcard .red {
        fill: #ef5350;
    }

    .creditcard .reddark {
        fill: #d32f2f;
    }

    .creditcard .purple {
        fill: #ab47bc;
    }

    .creditcard .purpledark {
        fill: #7b1fa2;
    }

    .creditcard .cyan {
        fill: #26c6da;
    }

    .creditcard .cyandark {
        fill: #0097a7;
    }

    .creditcard .green {
        fill: #66bb6a;
    }

    .creditcard .greendark {
        fill: #388e3c;
    }

    .creditcard .lime {
        fill: #d4e157;
    }

    .creditcard .limedark {
        fill: #afb42b;
    }

    .creditcard .yellow {
        fill: #ffeb3b;
    }

    .creditcard .yellowdark {
        fill: #f9a825;
    }

    .creditcard .orange {
        fill: #ff9800;
    }

    .creditcard .orangedark {
        fill: #ef6c00;
    }

    .creditcard .grey {
        fill: #bdbdbd;
    }

    .creditcard .greydark {
        fill: #616161;
    }

    /* FRONT OF CARD */
    #svgname {
        text-transform: uppercase;
    }

    #cardfront .st2 {
        fill: #FFFFFF;
    }

    #cardfront .st3 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 600;
    }

    #cardfront .st4 {
        font-size: 54.7817px;
    }

    #cardfront .st5 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
    }

    #cardfront .st6 {
        font-size: 33.1112px;
    }

    #cardfront .st7 {
        opacity: 0.6;
        fill: #FFFFFF;
    }

    #cardfront .st8 {
        font-size: 24px;
    }

    #cardfront .st9 {
        font-size: 36.5498px;
    }

    #cardfront .st10 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 300;
    }

    #cardfront .st11 {
        font-size: 16.1716px;
    }

    #cardfront .st12 {
        fill: #4C4C4C;
    }

    /* BACK OF CARD */
    #cardback .st0 {
        fill: none;
        stroke: #0F0F0F;
        stroke-miterlimit: 10;
    }

    #cardback .st2 {
        fill: #111111;
    }

    #cardback .st3 {
        fill: #F2F2F2;
    }

    #cardback .st4 {
        fill: #D8D2DB;
    }

    #cardback .st5 {
        fill: #C4C4C4;
    }

    #cardback .st6 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
    }

    #cardback .st7 {
        font-size: 27px;
    }

    #cardback .st8 {
        opacity: 0.6;
    }

    #cardback .st9 {
        fill: #FFFFFF;
    }

    #cardback .st10 {
        font-size: 24px;
    }

    #cardback .st11 {
        fill: #EAEAEA;
    }

    #cardback .st12 {
        font-family: 'Rock Salt', cursive;
    }

    #cardback .st13 {
        font-size: 37.769px;
    }

    /* FLIP ANIMATION */
    .container {
        perspective: 1000px;
    }

    .creditcard {
        width: 100%;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        transition: -webkit-transform 0.6s;
        -webkit-transition: -webkit-transform 0.6s;
        transition: transform 0.6s;
        transition: transform 0.6s, -webkit-transform 0.6s;
        cursor: pointer;
    }

    .creditcard .front,
    .creditcard .back {
        position: absolute;
        width: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-font-smoothing: antialiased;
        color: #47525d;
    }

    .creditcard .back {
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }

    .creditcard.flipped {
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }
</style>
