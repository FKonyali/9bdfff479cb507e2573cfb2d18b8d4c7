<template>
    <div id="app">
        <Header />
        <div class="wrapper">
            <div class="container">
                <Progressbar/>
                <router-view />
                <div class="form-submit" :class="{ 'justify-flex-end' : getPageStatus.name == 'choiceOtel' }">
                    <button class="form-submit__btn" @click="goBack" v-if="getPageStatus.name !== 'choiceOtel'">
                        Geri
                    </button>
                    <button class="form-submit__btn" @click="formSubmit"
                    :disabled="(getForm.start_date == '' ||
                        getForm.end_date == '' ||
                        getForm.adult == 0 ||
                        getForm.hotel.hotel_id == '' ||
                        getForm.hotel.hotel_name == '')">
                        {{ getPageStatus.name == 'payment' ? 'Ödeme Yap ve Bitir' : 'Kaydet ve Devam Et' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Progressbar from '@/components/Progressbar.vue'

export default {
    name: 'App',
        components: {
        Header,
        Progressbar
    },
    methods: {
        formSubmit () {
            if (this.getPageStatus.name === 'choiceOtel') {
                this.$router.push('/select-room')
            } else if (this.getPageStatus.name === 'choiceRoom') {
                this.$router.push('/payment')
            }
        },
        goBack () {
            this.$router.back()
        }
    },
    computed: {
        getForm () {
            return this.$store.getters.getForm
        },
        getPageStatus () {
            return this.$store.getters.getPageStatus
        }
    },
    watch: {
        $route (to, from) {
            window.scrollTo(0, 0)
        },
        getForm () {
            localStorage.setItem('form', JSON.stringify(this.getForm))
        }
    }
}
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        border: 0;
        text-decoration: none;
        box-sizing: border-box;
    }

    html, body {
        min-height: 100vh;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .container {
        width: 960px;
        max-width: 100%;
        margin: 0 auto;
        padding: 0 30px;
    }

    .relative {
        position: relative;
    }

    button {
        cursor: pointer
    }

    .wrapper {
        margin: 120px 0 0;
    }

    .form-submit {
        background: #f1f1f1;
        padding: 30px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;

        &__btn {
            background: #063662;
            color: #FFF;
            border-radius: 5px;
            padding: 10px 15px;
            font-size: 16px;

            &:disabled {
                opacity: .7;
                cursor: no-drop;
            }
        }
    }

    .justify-flex-end {
        justify-content: flex-end;
    }

    ul {
        list-style: none;
    }
</style>
