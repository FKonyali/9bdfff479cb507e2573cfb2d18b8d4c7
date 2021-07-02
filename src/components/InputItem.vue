<template>
    <div class="input-item">
        <label :for="this.for" class="input-item__label" v-if="$slots.labeltitle">
            <slot name="labeltitle"></slot>
        </label>
        <div class="relative input-number" v-if="this.inputType === 'number'">
            <input type="tel" class="form-control" id="childrennumber" @input="inputValidation" ref="refInput" :value="this.value" :disabled="!disabled">
            <div class="input-item__control">
                <button class="input-item__up" @click="funcCounter(inputVal += 1)" :disabled="!disabled"></button>
                <button class="input-item__down" @click="funcCounter(inputVal -= 1)" :disabled="!disabled"></button>
            </div>
        </div>
        <div class="input-item__err" v-if="!error && !disabled && errorMsg">
            {{ errorMsg }}
        </div>
        <input type="date" class="form-control" :id="this.for" v-if="this.inputType === 'date'" @change="inputValidation" :value="inputDate" :min="min">
    </div>
</template>

<script>
export default {
    name: 'InputItem',
    props: {
        for: {
            type: String,
            default: ''
        },
        inputType: {
            type: String,
            default: ''
        },
        maxLength: {
            type: Number,
            default: 1
        },
        minLength: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: 10
        },
        value: {},
        disabled: {
            type: Boolean,
            default: true
        },
        error: {
            type: Boolean
        },
        errorMsg: {
            type: String,
            default: ''
        },
        propsInputVal: {},
        min: {}
    },
    data () {
        return {
            inputVal: this.value || 0,
            inputDate: this.value || ''
        }
    },
    methods: {
        inputValidation (e) {
            if (this.inputType) {
                switch (this.inputType) {
                    case 'number': {
                        const x = e.target.value.replace(/\D/g, '').match(/\d{0,6}/)
                        e.target.value = x ? x[0] : ''
                        this.inputVal = e.target.value * 1
                        this.numberValidation(this.inputVal)
                        e.target.value = e.target.value.substring(0, this.maxLength)
                        break
                    }
                    case 'date': {
                        const x = e.target.value
                        if (x.length === 10) {
                            this.$emit('input', x)
                            this.inputDate = x
                        }
                        break
                    }
                }
            }
        },
        funcCounter (a) {
            this.numberValidation(a)
        },
        numberValidation (number) {
            if (number < 0) {
                this.inputVal = 0
            } else if (number > this.max) {
                this.inputVal = this.max
            } else if (number.toString().length > this.maxLength) {
                this.inputVal -= 1
            }

            this.$emit('input', this.inputVal)
        }
    },
    computed: {
        counter: function () {
            return this.inputVal
        },
        getForm () {
            return this.$store.getters.getForm
        }
    }
    // watch: {
    //     getForm () {
    //         this.$emit('input', 0)
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    .input-item {
        width: 25%;
        border-right: 1px solid #2f3a3f;
        padding: 15px;

        &__err {
            font-size: 12px;
            margin-top: 10px;
            color: red
        }

        &__label {
            font-weight: 600;
        }

        &:last-child {
            border-right: 0;
        }

        &__control {
            background: #dcdcdc;
            position: absolute;
            right: 1px;
            top: 1px;
            bottom: 1px;
            width: 30px;
            display: flex;
            flex-direction: column;
            border-left: 1px solid #2f3a3f;
        }

        &__up, &__down {
            width: 100%;
            height: 50%;
            cursor: pointer;
            position: relative;

            &:disabled {
                opacity: .7;
                cursor: no-drop;
            }
        }

        &__up {
            &:before {
                content: '';
                border-style: solid;
                border-width: 0px 5px 7px 5px;
                border-color: transparent transparent #333333 transparent;
                position: absolute;
                left: 50%;
                top: 5px;
                transform: translateX(-50%);
            }
        }

        &__down {
            &:before {
                content: '';
                border-style: solid;
                border-width: 7px 5px 0px 5px;
                border-color: #333333 transparent transparent transparent;
                position: absolute;
                left: 50%;
                bottom: 5px;
                transform: translateX(-50%);
            }
        }
    }

    .input-number {
        input {
            padding-right: 40px;
        }
    }

    .form-control {
        border: 1px solid #2f3a3f;
        height: 30px;
        padding: 5px;
        width: 100%;

        &:disabled {
            opacity: .7;
            cursor: no-drop;
        }
    }

    @media (max-width: 820px) {
        .input-item {
            width: 50%;
            border-bottom: 1px solid #2f3a3f;

            &:nth-child(2) {
                border-right: 0;
            }

            &:nth-child(3), &:nth-child(4) {
                border-bottom: 0;
            }
        }
    }

    @media (max-width: 475px) {
        .input-item {
            width: 100%;
            border-right: 0;
        }
    }
</style>
