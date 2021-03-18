// This file is unused but i'm scared of deleting it 

function sendVote(choiceID){
var request = new XMLHttpRequest();

request.open('POST', 'https://polls.apiblueprint.org/questions/12/choices/' & choiceID)

request.onreadystatechange = function () {
    if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
}
};

request.send();
}

