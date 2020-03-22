<template>
  <div id="app">
     
    <themeSelect @select-theme="onSelectTheme" :list_theme="listeThemes"/>
    <listeQuiz @select-quiz="onSelectQuiz" :idTheme="idTheme" />
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import listeQuiz from './components/listeQuiz.vue'
import themeSelect from  './components/ThemeSelect.vue'
import { get_listTheme } from "./data/quizz";
export default {
  name: 'App',
  data: function(){
    return {
      idTheme :"0",
      idQuiz : "test",
      
  
    }
  },
  components: {
    //HelloWorld,
    listeQuiz,
    themeSelect
    
    
  },
  computed:{
    listeThemes: function() {
      console.log(get_listTheme())
      return get_listTheme();
    }
  },
  methods:{
    onSelectQuiz : function(idQuiz){
      this.idQuiz = idQuiz;
    },
    onSelectTheme : function(idTheme){
      this.idTheme = idTheme;
      
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
