const quizData = [{
    question: "What does S.H.I.E.L.D stand for?",
    a: "Space Human Investigation on Energy, Light and Deities.",
    b: "Strategic Hero Intervention, Enforcement and Logistics Division",
    c: "Strategic Homeland Intervention, Enforcement and Logistics Division",
    d: "Stones Hidden In Extraterrestrial Lands and Demographics",
    correct: "c",

},
{
    question: "In which order are the Infinity Stones revealed in the Marvel Cinematic Universe?",
    a: "Time Stone, Space Stone, Power Stone, Soul Stone, Reality Stone and Mind Stone",
    b: "Power Stone, Reality Stone, Time Stone, Space Stone, Mind Stone and Soul Stone",
    c: "Reality Stone, Time Stone, Mind Stone, Soul Stone, Power Stone and Space Stone",
    d: "Space Stone, Mind Stone, Reality Stone, Power Stone, Time Stone and Soul Stone",
    correct: "d",

},
{
    question: "During which war did Captain America get his superhuman abilities?",
    a: "Civil War",
    b: "World War I",
    c: "Worlds War II",
    d: " The Cold War",
    correct: "c",
  
},
{
    question: "Which of the following characters did not disappear during the ”blip”?",
    a: "Thanos",
    b: "Spider Man",
    c: "Doctor Strange",
    d: "Rocket",
    correct: "d",
 
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);