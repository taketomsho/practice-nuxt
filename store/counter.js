export const state = () => ({
    counter: 0
})

export const mutations = {
    incrementCounter: function(state) {
        state.counter++
      },
    resetCounter: function(state) {
        state.counter = 0
    }
}

// export const actions = {
//     updateMessageAction(context, payload){
//         context.commit('updateMessage', payload)
//       }
// }