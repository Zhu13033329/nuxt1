export const state = () => ({
    num: 0,
    age:12
  })
export const mutations = {
    increment (state) {
      state.num ++
    },
    decrement (state) {
      state.num --
    },
    define (state,aaa){
        console.log(aaa);
        state.num = aaa;
        console.log(state.age);
    }
  }