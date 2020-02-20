import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


//
/*
async function recupereQuiz(id){
  const res = await fetch(`../src/data/quizz${id}/quizz.json`); // On va chercher le quizz.json
  console.log(res)
  if(res.ok){
      const json = await res.json(); // Si ça s'est bien passé on va le transformaer en obj JS
      return json
  }
}
*/
/* Recupere et affiche dans l'html
recupereQuiz(1).then( (quizz) => {
  console.log(quizz);
  console.log (quizz.questions);
  let questionsVu = document.querySelector('#questions');
  quizz.questions.forEach(question => {
      
      questionsVu.innerHTML = questionsVu.innerHTML + "<br>" + question.titre

  });
})
*/