<template>
    <header class="header">
        <router-link to="/" class="header__left">
            <h1 class="header__logo">
                Otel
            </h1>
            <div class="header__l-text">
                Rezervasyon Sistemi
            </div>
        </router-link>
        <div class="header__right">
            <button to="/" class="header__btn" @click="resetFlow">
                Yeni Rezervasyon Yap
            </button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        resetFlow () {
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
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        padding: 15px 30px;
        background: #063662;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 2;

        &__left {
            text-align: left;
        }

        &__logo {
            font-size: 24px;
            color: #FFF
        }

        &__l-text {
            font-size: 14px;
            color: #FFF
        }

        &__btn {
            font-size: 16px;
            color: #063662;
            background: #ededed;
            border-radius: 5px;
            padding: 5px 10px;
        }
    }
</style>
