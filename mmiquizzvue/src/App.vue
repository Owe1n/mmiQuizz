<template>
  <div id="app" class="container">
    <div class="row col-12">
      <h1 class="theme-title m-5 col-12">LE SUPER QUIZZ MMI</h1>
      <div class="col-6">
        <themeSelect @select-theme="onSelectTheme" :list_theme="listeThemes" />
        <listeQuiz @select-quiz="onSelectQuiz" :idTheme="idTheme" />
      </div>
      <quiz class="col-6" :idQuiz="idQuiz" :idTheme="idTheme" />
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import listeQuiz from "./components/listeQuiz.vue";
import themeSelect from "./components/ThemeSelect.vue";
import quiz from "./components/Quiz.vue";
import { get_listTheme } from "./data/quizz";

export default {
  name: "App",
  data: function() {
    return {
      idTheme: "0",
      idQuiz: "0"
    };
  },
  components: {
    //HelloWorld,
    listeQuiz,
    themeSelect,
    quiz
  },
  computed: {
    listeThemes: function() {
      console.log(get_listTheme());
      return get_listTheme();
    }
  },
  methods: {
    onSelectQuiz: function(idQuiz) {
      this.idQuiz = idQuiz;
    },
    onSelectTheme: function(idTheme) {
      this.idTheme = idTheme;
    }
  }
};
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

@import url("https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,700,800&display=swap%27");

.container {
  font-family: "Raleway", sans-serif;
}

h1 {
  font-weight: 800;
}
</style>
