<template>
    <div class="select-box" v-click-outside="hideSelectContent">
        <div class="select-box__item">
            <div class="select-box__left">
                <button type="button" class="select-box__btn">
                    <svg
                        style="enable-background:new 0 0 512 512;"
                        version="1.1"
                        viewBox="0 0 512 512"
                        xml:space="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <path
                        d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"
                        />
                    </svg>
                </button>
                <input class="select-box__input" type="text" placeholder="Rezervasyon yapmak istediğiniz oteli seçiniz." v-on:focus="focusSelect()" v-model="searchFilterInput" @input="searchInput">
            </div>
            <div class="select-box__arrow-container" @click="toggleSelect()">
                <div class="select-box__arrow"></div>
            </div>
        </div>
        <div class="select-box__content" v-if="toggle">
            <div v-if="getHotels.status === 'PENDING'">Yükleniyor...</div>
            <ul v-if="getHotels.status === 'SUCCESS'">
                <li v-for="(hotel) in getHotels.filter" :key="hotel.id">
                    <label>
                        <input type="radio" name="hotel" @change="pickHotel($event, hotel.hotel_name)" :value="hotel.id" :checked="hotel.id == $attrs.value.hotel_id ? true : false">
                        {{ hotel.hotel_name }}
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectBox',
    data () {
        return {
            toggle: false,
            form: {
                hotel_id: ''
            },
            searchFilterInput: ''
        }
    },
    methods: {
        focusSelect () {
            this.toggle = true
            if (!this.getHotels.arr) {
                this.$store.dispatch('hotels')
            }
        },
        pickHotel (e, a) {
            this.$emit('input', {
                hotel_id: e.target.value,
                hotel_name: a
            })
        },
        toLowerCase (string) {
            const letters = { İ: 'i', I: 'i', Ş: 'ş', Ğ: 'ğ', Ü: 'ü', Ö: 'ö', Ç: 'ç' }
            string = string.replace(/(([İIŞĞÜÇÖ]))+/g, function (letter) { return letters[letter] })
            return string.toLowerCase()
        },
        searchInput (e) {
            this.searchFilterInput = e.target.value
            this.$emit('hotels', this.productFilterList)
        },
        toggleSelect () {
            this.toggle = !this.toggle
            if (!this.getHotels.arr) {
                this.$store.dispatch('hotels')
            }
        },
        hideSelectContent () {
            this.toggle = false
        }
    },
    computed: {
        getHotels () {
            return this.$store.getters.getHotels
        },
        productFilterList () {
            const filterArr = this.getHotels.arr.filter((item) => {
                return this.toLowerCase(item.hotel_name).includes(this.toLowerCase(this.searchFilterInput))
            })
            this.$store.commit('updateHotels', {
                ...this.getHotels,
                filter: filterArr
            })
            return filterArr
        }
    },
    directives: {
        'click-outside': {
            bind: function (el, binding, vnode) {
                window.event = function (event) {
                    if (!(el === event.target || el.contains(event.target))) {
                        vnode.context[binding.expression](event)
                    }
                }
                document.body.addEventListener('click', window.event)
            },
            unbind: function (el) {
                document.body.removeEventListener('click', window.event)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .select-box {
        position: relative;

        &__item {
            border: 1px solid #2f3a3f;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            border-radius: 5px;
        }

        &__content {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            text-align: left;
            padding: 15px;
            background: #FFF;
            border: 1px solid #e4e1e1;
            z-index: 1;
            max-height: 200px;
            overflow: auto;

            li {
                margin-bottom: 10px;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            label {
                width: 100%;
                display: block;
                cursor: pointer;
            }
        }

        &__left {
            display: flex;
            align-items: center;
            flex: 1
        }

        &__btn {
            width: 25px;
            height: 25px;
            margin-right: 3px;
            background: none;
        }

        &__input {
            width: 100%;
            padding: 10px 0;
            font-size: 14px;
        }

        &__arrow {
            position: relative;
            height: 100%;

            &:before {
                content: '';
                border-style: solid;
                border-width: 7px 5px 0px 5px;
                border-color: #333333 transparent transparent transparent;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            &-container {
                width: 30px;
                background: #dcdcdc;
                border-left: 1px solid #2f3a3f;
                align-self: stretch;
                border-radius: 0 4px 4px 0;
            }
        }
    }
</style>
