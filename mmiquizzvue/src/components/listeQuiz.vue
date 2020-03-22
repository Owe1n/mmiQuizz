<template>
  <div class="container">
    <div class="row">
      <div id="card" class="col-6 d-flex quiz-title-bloc flex-column" v-if="theme">
        <h3 class="text-left m-3">Liste Quizz</h3>
        <ul>
          <li class="mt-n1" v-for="quiz in theme.listeQuiz" :key="quiz.id">
            <a class="px-4" @click="selectQuiz(quiz.id)" href>{{quiz.titre}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getTheme } from "../data/quizz";
export default {
  name: "listeQuiz",
  props: ["idTheme"],
  data: function() {
    return {};
  },
  computed: {
    theme: function() {
      console.log(getTheme(this.idTheme));
      return getTheme(this.idTheme);
    }
  },
  methods: {
    selectQuiz(quizId) {
      event.preventDefault();
      this.$emit("select-quiz",quizId);
    }
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

#card {
  border-radius: 20px;
  background-color: #73c4be;
}
@import url("https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,700,800&display=swap%27");

.container {
  font-family: "Raleway", sans-serif;
}

ul {
  margin: 0 !important;
  padding: 0 !important;
}

h3 {
  font-weight: 600;
  color: white;
}

li {
  list-style: none;
  margin: 30px;
}

a {
  padding: 10px;
  text-decoration: none;
  border-radius: 20px;
  background-color: #20a88e;
  border: none;
  box-shadow: 13px 15px 12px -10px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  font-size: 1.2em;
  color: white;
}
</style>
