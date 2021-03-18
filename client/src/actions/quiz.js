// This file is unused but i'm scared of deleting it 
window.onload = sendApiRequest

async function sendApiRequest(){
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple');
    console.log(response)
    let data = await response.json()
    console.log(data)
    UseApiData(data)
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

let correctButton = document.querySelector('#answer1')

correctButton.addEventListener("click", ()=> {
    alert("Correct!")
    sendApiRequest()
})