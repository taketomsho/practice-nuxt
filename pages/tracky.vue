<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <div>
        {{ data }}
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
let url = 'https://scraping-euy6vi4i2a-an.a.run.app'

export default {
  async asyncData({params, error}){
    return await axios.get(url
                ,{params:{
                  keyword: "プログラミングスクール",
                  url: "https://coeteco.jp/articles/10835"
                }}
        )
      .then((res) => {
        return {data: res.data}
      })
      .catch((e => {
        // console.log(e.response.status)
        error({data:e.response.status, message: e.message})
      })

      )

  },
  name: 'InspirePage',
}
</script>
