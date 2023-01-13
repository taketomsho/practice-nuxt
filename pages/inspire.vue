<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <div>
        <!-- {{ users[0].id  }}, {{ users[0].name }} -->
        <ul>
          <li v-for="user in users" :key="user.id">
            {{ user.id  }}, {{ user.company.name }}
          </li>
        </ul>
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
const axios = require('axios')
let url = 'https://jsonplaceholder.typicode.com/users'
// let url = 'https://jsonplaceholder.typicode.com/usersxxxx'

export default {
  asyncData({params, error}){
    return axios.get(url)
      .then((res) => {
        return {users: res.data}
      })
      .catch((e => {
        // console.log(e.response.status)
        error({users:e.response.status, message: e.message})
      }))
  },
  name: 'InspirePage',
}
</script>
