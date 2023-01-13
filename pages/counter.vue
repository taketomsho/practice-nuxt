<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <div>
        <hr>
        <Counter></Counter>
        <hr>
        <Counter></Counter>
        <hr>
        <Counter></Counter>
        <hr>

      </div>
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
import Counter from '~/components/Counter.vue'
export default {
  components: {
    Counter
  },
  name: 'InspirePage',
}
</script>
