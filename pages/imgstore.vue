<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <img src="~/assets/chart1.png" alt="chart" class="mb-5" />
      <div>
        <!-- <p>{{ $store.state.message }}</p> -->
        <p>{{ $store.state.hello.message }}</p>
        <!-- <button v-on:click="$store.commit('updateMessage')">Update</button> -->
        <!-- <button v-on:click="$store.commit('updateMessage', 'Commit with payload')">Update</button> -->
        <!-- <button v-on:click="$store.dispatch('updateMessageAction')">dispatch</button> -->
        <!-- <button v-on:click="$store.dispatch('updateMessageAction', 'Dispatch with payload')">dispatch</button> -->
        <button v-on:click="$store.dispatch('hello/updateMessageAction', 'Dispatch with payload')">dispatch</button>
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
export default {
  name: 'InspirePage',
}
</script>
