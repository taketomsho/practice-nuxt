<template>
    <section>
        <h2>{{ title }}</h2>
        counter: {{ $store.state.counter.counter }}
        <v-btn elevation="1" v-on:click="$store.commit('counter/incrementCounter')">+1</v-btn>
        <v-btn v-on:click="$store.commit('counter/resetCounter')">reset</v-btn>
    </section>
</template>

<script>
    export default {
        data: function() {
            return {
                title: 'Counter App'
            }
        }
    }
</script>