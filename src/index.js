import '../css/styles.css';
import ApiRequest from './Dino-game.js'

// UI Logic

ApiRequest.send()
  .then(response => {
    console.log(response);
    useApiData(response);
  })
  .catch(error => console.log('Error:', error));

// Fetch the data from API
function useApiData(data) {

  //Display general information about the question
  document.querySelector('#category').innerHTML = `Category: ${data.results[0].category}`;
  document.querySelector('#difficulty').innerHTML = `Difficulty: ${data.results[0].difficulty}`;
  document.querySelector('#question').innerHTML = `Question: ${data.results[0].question}`;

  //Display optional answers
  document.querySelector('#answer1').innerHTML = `${data.results[0].correct_answer}`;
  document.querySelector('#answer2').innerHTML = `${data.results[0].incorrect_answers[0]}`;
  document.querySelector('#answer3').innerHTML = `${data.results[0].incorrect_answers[1]}`;
  document.querySelector('#answer4').innerHTML = `${data.results[0].incorrect_answers[2]}`;
};

let correctAnswer = document.querySelector('#answer1')

correctAnswer.addEventListener('click', () => {
  //Show message 'you got 1 point

  //Generate a new trivia question
})