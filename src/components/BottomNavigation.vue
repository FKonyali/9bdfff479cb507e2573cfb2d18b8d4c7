<template>
    <div class="bottom-nav">
        <button class="bottom-nav__btn" @click="goBack" v-if="!backBtnHide">
            Geri
        </button>
        <button class="bottom-nav__btn"
            @click="formSubmit"
            :disabled="btnDisabled"
        >
            {{ btnText }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'BottomNavigation',
    props: {
        goPath: {
            type: String,
            default: ''
        },
        btnText: {
            type: String,
            default: ''
        },
        backBtnHide: {
            type: Boolean,
            default: true
        },
        getForm: {},
        btnDisabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        formSubmit () {
            this.$router.push(this.goPath)
        },
        goBack () {
            this.$router.back()
        }
    }
}
</script>

<style lang="scss" scoped>
    .bottom-nav {
        background: #f1f1f1;
        padding: 30px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: baseline;

        &__btn {
            background: #063662;
            color: #FFF;
            border-radius: 5px;
            padding: 10px 15px;
            font-size: 16px;
            margin-bottom: 20px;

            &:last-child {
                margin-bottom: 0;
            }

            &:disabled {
                opacity: .7;
                cursor: no-drop;
            }
        }
    }

    .justify-flex-end {
        justify-content: flex-end;
    }
</style>
