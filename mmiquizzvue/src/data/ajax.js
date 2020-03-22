export async function getQuizAjax(idQuiz) {
  console.log(idQuiz);
  // MARCHE PAS const res = await fetch(`../data/quizz${idQuiz}/quizz.json`);
  // MARCHE  
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)

  
  console.log(res);
  if (res.ok) {
    const json = await res.json();
    console.log(json);
    return json;
  } else throw new Error(res.status);
}
