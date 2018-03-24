<template>
  <section class="container">
    <table>
      <tbody>
        <tr>
            <td>{{ $store.state.num }}</td>
            <td>{{ $store.state.plus.plusNum }}</td>
            <br>
            <td>{{ $store.state.age }}</td>
        </tr>
        <tr class="mutation-fun">
          <td @click="$store.commit('increment')">increment</td>
          <br>
          <td @click="$store.commit('decrement')">decrement</td>
          <br>
          <td @click="$store.commit('minus/minus')">minus</td>
          <td @click="printf">打印对象</td>
      </tr>
        </tbody>
    </table>
    <p>朱建皇爱周春燕</p>
  </section>
</template>
<script>
  import axios from 'axios';
  export default {
    asyncData(context){
      axios.post('/api/area/getAll').then(
        (res) =>{
         
        }
      );
      return {
        age:1111
      }
    },
    async fetch ({store}){
      let num =1234;
      store.commit("define",num)
    },
    data (){
      return {
        testMsg:"朱建煌"
      }
    },
    head(){
      return {
        title: this.testMsg,
        meta:[
          { hid: 'description', name: 'description',
           content: 'My custom description' }
        ]
      }
    },
   
    methods:{
      printf(){
        console.log(this.$store)
      }
    }
  }
</script>


