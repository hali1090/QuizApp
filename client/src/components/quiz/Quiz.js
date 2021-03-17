import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const quiz = (props) => {
  return <div>
    <Link to='/quizselect' className='btn btn-primary my-1'>
            Select a quiz.
          </Link>
    <h1 id='question' >

</h1>
  
  <p id='category'>

    </p>
    <p id='difficulty' >

    </p>
    <p id='question'>

    </p>
    <button id='answer1' className='btn btn-primary my-1'>

    </button>
    <button id='answer2' className='btn btn-primary my-1'>
      
    </button>
    <button id='answer3' className='btn btn-primary my-1'>
      
    </button>
    <button id='answer4' className='btn btn-primary my-1'>
      
    </button>
    </div>;
    
};

window.onload = sendApiRequest

async function sendApiRequest(){
  let response = await fetch('https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple');
  console.log(response)
  let data = await response.json()
  console.log(data)
  UseApiData(data)
  CheckCorrect()
  
}

 function UseApiData(data){
  document.querySelector('#category').innerHTML = `Category: ${data.results[0].category}`
  document.querySelector('#difficulty').innerHTML = `Difficulty: ${data.results[0].difficulty}`
  document.querySelector('#question').innerHTML = `Question: ${data.results[0].question}`
  document.querySelector('#answer1').innerHTML = data.results[0].correct_answer
  document.querySelector('#answer2').innerHTML = data.results[0].incorrect_answers[0]
  document.querySelector('#answer3').innerHTML = data.results[0].incorrect_answers[1]
  document.querySelector('#answer4').innerHTML = data.results[0].incorrect_answers[2]

}


function CheckCorrect(){
  const correctButton = document.querySelector("#answer1")
  const incorrectButton = document.querySelector('#answer2', '#answer3', '#answer4')
correctButton.addEventListener("click",()=>{
  alert('Correct!')
  sendApiRequest()
})
incorrectButton.addEventListener("click",()=>{
  alert('Sorry that was incorrect')
  sendApiRequest()
})
}

quiz.propTypes = {};

export default quiz;
