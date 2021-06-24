<template>
    <div class="progressbar__item">
        <div class="progressbar__icon" v-if="$slots.icon">
            <slot name="icon"></slot>
        </div>
        <div class="progressbar__title" v-if="$slots.title">
            <slot name="title"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressbarItem',
    props: {
        item: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .progressbar {
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
            font-weight: 500;
            color: #7f7e7e;
            width: 150px;
            text-align: center;
            margin: 0 auto;
            max-width: 100%;
        }
    }
</style>
