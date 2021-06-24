<template>
    <div class="page">
        <div class="input-group-container">
            <SelectBox v-model="getForm.hotel" />
            <div class="input-group">
                <InputItem
                    for="checkin"
                    inputType="date"
                    v-model="getForm.start_date"
                    :max="10"
                >
                    <template v-slot:labeltitle>
                        Giriş Tarihi
                    </template>
                </InputItem>
                <InputItem
                    for="checkout"
                    inputType="date"
                    v-model="getForm.end_date"
                    :max="10"
                >
                    <template v-slot:labeltitle>
                        Çıkış Tarihi
                    </template>
                </InputItem>
                <InputItem
                    for="adultnumber"
                    inputType="number"
                    v-model="getForm.adult"
                >
                    <template v-slot:labeltitle>
                        Yetişkin Sayısı
                    </template>
                </InputItem>
                <InputItem
                    for="childrennumber"
                    inputType="number"
                    :max="15"
                    :maxLength="2"
                    v-model="getForm.child"
                >
                    <template v-slot:labeltitle>
                        Çocuk Sayısı
                    </template>
                </InputItem>
            </div>
        </div>
    </div>
</template>

<script>
import SelectBox from '@/components/SelectBox.vue'
import InputItem from '@/components/InputItem.vue'

export default {
    name: 'Home',
    components: {
        SelectBox,
        InputItem
    },
    created () {
        this.$store.commit('updatePageStatus', {
            name: 'choiceOtel',
            status: 'LOADED'
        })
    },
    computed: {
        getForm () {
            return this.$store.getters.getForm
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
    .progressbar {
        background: #f1f1f1;
        padding: 15px 30px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        $progressbar: &;

        &__item {
            width: 30%;
            text-align: center;
            position: relative;

            &.is-active {
                #{$progressbar} {
                    &__icon {
                        border-color: #545454
                    }

                    svg {
                        fill: #2f3a3f;
                    }

                    &__title {
                        color: #2f3a3f
                    }
                }
            }

            &:first-child {
                &:before {
                    display: none;
                }
            }

            &:before {
                content: '';
                position: absolute;
                top: 35px;
                left: -58%;
                width: 100%;
                height: 1px;
                background: #d8d8d8;
            }
        }

        &__icon {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 2px solid #b7b7b7;
            background: #FFF;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            margin-bottom: 15px;
            position: relative;
            z-index: 1;

            svg {
                width: 30px;
                fill: #6b6868;
            }
        }

        &__title {
            font-size: 14px;
            color: #7f7e7e;
            width: 150px;
            text-align: center;
            margin: 0 auto;
            max-width: 100%;
        }
    }

    .input-group-container {
        border: 1px solid #eee;
        padding: 30px;
        border-radius: 10px;
        margin: 15px 0;
    }

    .input-group {
        border: 1px solid #2f3a3f;
        margin: 15px 0;
        display: flex;
        flex-wrap: wrap;
    }
</style>
