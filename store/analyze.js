export const state = () => ({
    message: '分析してみましょう、下のボタンを押してください'
})

export const mutations = {
    updateResult: function(state,payload) {
        state.message = payload
      }
}

export const actions = {
    analyze(context, payload){
        context.commit('updateResult', '分析中')
        const axios = require('axios')
        let apiUrl = 'https://asia-northeast1-yomeru-354309.cloudfunctions.net/scraping-test'
        axios.get(apiUrl
          ,{params:{
            keyword: "プログラミングスクール",
            url: "https://coeteco.jp/articles/10835"
          }})
              .then((res) => {
                console.log("aaaa")
                context.commit('updateResult', res.data)
              })
              .catch((e => {
                context.commit('updateResult', '失敗')
                console.log(e.response.status)
                console.log(e.message)
                error({data:e.response.status, message: e.message})
              }))
    }
}