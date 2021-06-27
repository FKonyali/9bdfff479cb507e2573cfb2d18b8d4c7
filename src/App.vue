<template>
    <div id="app">
        <Header/>
        <div class="wrapper">
            <div class="container">
                <Progressbar v-if="getPageStatus.name !== 'result'" />
                <router-view />
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

    ul {
        list-style: none;
    }
</style>
