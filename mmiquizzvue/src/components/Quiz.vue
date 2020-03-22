<template>
  <div>
    <div>
        
        
            <div id="questions" v-if="idQuiz!=0">
                LE QUIZZ AURAIT DU S'AFFICHER LA MAIS LE PARSING DU JSON NE S'EFFECTUE PAS ET ON COMPREND PAS POURQUOI. <br>
                On a quand même reussi à parser un fichier sur le net : <br>

                User id : {{listeQuestions.userId}}<br>
                Title : {{listeQuestions.title}}<br>
                Completed : {{listeQuestions.completed}}<br>
                Le lien du json en question : 
                https://jsonplaceholder.typicode.com/todos/1
              

            </div>
      
        
        
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
      listeQuestions : null,
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
      console.log(getTheme(this.idTheme))
      return getTheme(this.idTheme);
    },
    
  },
  methods: {
    
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quiz-title-bloc {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.quiz-title-text {
  margin: 0;
}
</style>
