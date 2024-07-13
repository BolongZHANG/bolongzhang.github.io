const questions = [
    {
        id: 1,
        text: "你觉得自己目前的情绪状态如何？",
        choices: [
            { text: "开心", nextQuestion: 2 },
            { text: "一般", nextQuestion: 3 },
            { text: "沮丧", nextQuestion: 4 }
        ]
    },
    {
        id: 2,
        text: "你觉得开心的原因是什么？",
        choices: [
            { text: "工作顺利", nextQuestion: 5 },
            { text: "家庭幸福", nextQuestion: 5 },
            { text: "其他", nextQuestion: 5 }
        ]
    },
    {
        id: 3,
        text: "你觉得一般的原因是什么？",
        choices: [
            { text: "工作压力", nextQuestion: 5 },
            { text: "人际关系", nextQuestion: 5 },
            { text: "其他", nextQuestion: 5 }
        ]
    },
    {
        id: 4,
        text: "你觉得沮丧的原因是什么？",
        choices: [
            { text: "工作不顺", nextQuestion: 5 },
            { text: "家庭问题", nextQuestion: 5 },
            { text: "健康问题", nextQuestion: 5 }
        ]
    },
    {
        id: 5,
        text: "测评完成，谢谢参与！",
        choices: []
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const choicesContainer = document.getElementById('choices-container');
    const nextButton = document.getElementById('next-button');

    // 清空现有内容
    questionContainer.innerHTML = '';
    choicesContainer.innerHTML = '';

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<p>${currentQuestion.text}</p>`;

    currentQuestion.choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.innerText = choice.text;
        choiceButton.onclick = () => {
            currentQuestionIndex = questions.findIndex(q => q.id === choice.nextQuestion);
            displayQuestion();
        };
        choicesContainer.appendChild(choiceButton);
    });

    nextButton.style.display = currentQuestion.choices.length === 0 ? 'none' : 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    }
}

window.onload = displayQuestion;