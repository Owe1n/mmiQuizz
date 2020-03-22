<template>
  <div>
    <div class="d-flex align-items-end quiz-title-bloc" v-if="theme">
      <ul>
        <li v-for="quiz in theme.listeQuiz" :key="quiz.id">
          <a  @click="selectQuiz(quiz.id)" href="">{{quiz.titre}}</a>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import { getTheme } from "../data/quizz";
export default {
  name: "listeQuiz",
  props: ["idTheme"],
  data: function() {
    return {
      
    };
  },
  computed: {
    theme: function() {
      console.log(getTheme(this.idTheme))
      return getTheme(this.idTheme);
    }
  },
  methods: {
    selectQuiz(quizId) {
      event.preventDefault();
      this.$emit("select-quiz", quizId.id);
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
</style>
