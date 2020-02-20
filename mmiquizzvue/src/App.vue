<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
   
    <listeQuiz @select-quiz="onSelectQuiz" idTheme="2" /> 
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import listeQuiz from './components/listeQuiz.vue'
//import themeSelect from  './components/ThemeSelect.vue'

export default {
  name: 'App',
  data: function(){
    return {
      idQuiz : null,
    }
  },
  components: {
    //HelloWorld,
    listeQuiz,
    
  },
  methods:{
    onSelectQuiz : function(idQuiz){
      this.idQuiz = idQuiz;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
