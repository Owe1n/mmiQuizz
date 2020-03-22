<template>
  <div class="col-6">
    <div id="questions" class="col-12 h-100" v-if="idQuiz!=0">
      <h3 class="text-left mt-0 mb-5 pt-2">Quizz</h3>
      <p class="mx-auto my-auto">
        LE QUIZZ AURAIT DU S'AFFICHER LA MAIS LE PARSING DU JSON NE S'EFFECTUE PAS ET ON COMPREND PAS POURQUOI.
        <br />On a quand même reussi à parser un fichier sur le net :
        <br />
        User id : {{listeQuestions.userId}}
        <br />
        Title : {{listeQuestions.title}}
        <br />
        Completed : {{listeQuestions.completed}}
        <br />Le lien du json en question :
        https://jsonplaceholder.typicode.com/todos/1
      </p>
    </div>
  </div>
</template>

<script>
import { getTheme } from "../data/quizz";
import { getQuizAjax } from "../data/ajax";

export default {
  name: "quiz",
  props: ["idQuiz"],
  data: function() {
    return {
      listeQuestions: null
    };
  },
  watch: {
    idQuiz: function() {
      if (this.idQuiz) {
        getQuizAjax(this.idQuiz).then(json => {
          this.listeQuestions = json;
        });
      }
    }
  },
  computed: {
    theme: function() {
      console.log(getTheme(this.idTheme));
      return getTheme(this.idTheme);
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quiz-title-bloc {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

@import url("https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,700,800&display=swap%27");

.container {
  font-family: "Raleway", sans-serif;
}

.quiz-title-text {
  margin: 0;
}

h3 {
  font-weight: 600;
  color: white;
}

p {
  color: white;
  font-weight: 500;
}

#questions {
  border-radius: 20px;
  background-color: #f9d778;
}
</style>
