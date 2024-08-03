const questions = [
    {
        id: 1,
        text: "病人目前的状态如何？",
        choices: [
            { text: "开心飞起", nextQuestion: 6 },
            { text: "有点难受", nextQuestion: 2 },
            { text: "完全昏迷", nextQuestion: 3 }
        ]
    },
    {
        id: 2,
        text: "难受的原因是什么？",
        choices: [
            { text: "没吃饭", nextQuestion: 4 },
            { text: "吃撑了", nextQuestion: 4 },
        ],
        image: "media/心脏1.gif" // 替换为实际图片URL
    },
    {
        id: 3,
        text: "尝试了哪些手段？",
        choices: [
            { text: "爱的呼唤", nextQuestion: 5 },
            { text: "电击疗法", nextQuestion: 5 },
            { text: "放弃治疗", nextQuestion: 5 }
        ],
        image: "media/心脏2.jpeg" // 替换为实际图片URL
    },
    {
        id: 4,
        text: "病人胃口如何",
        choices: [
            { text: "茶饭不思", nextQuestion: 5 },
            { text: "酒囊饭袋", nextQuestion: 5 },
            { text: "生吞大象", nextQuestion: 5 }
        ]
    },
    {
        id: 5,
        text: "请输入病人的血压和心率：",
        inputs: [
            { label: "血压：", type: "number", id: "blood-pressure" },
            { label: "心率：", type: "number", id: "heart-rate" }
        ],
        nextQuestion: (values) => values["blood-pressure"] > 120 ? 6 : 7
    },
    {
        id: 6,
        text: "洒洒水啦",
        choices: [
            { text: "重新测试", nextQuestion: 1 },
        ]
    },
    {
        id: 7,
        text: "赶紧手术",
        choices: [
            { text: "重新测试", nextQuestion: 1 },
        ]
    }
];

let currentQuestionIndex = 0;
let questionHistory = [];

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const imageContainer = document.getElementById('image-container');
    const choicesContainer = document.getElementById('choices-container');
    const inputContainer = document.getElementById('input-container');
    const nextButton = document.getElementById('next-button');

    // 清空现有内容
    questionContainer.innerHTML = '';
    imageContainer.innerHTML = '';
    choicesContainer.innerHTML = '';
    inputContainer.innerHTML = '';

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<p>${currentQuestion.text}</p>`;

    if (currentQuestion.image) {
        imageContainer.innerHTML = `<img src="${currentQuestion.image}" alt="说明图片" style="max-width: 100%;">`;
    }

    if (currentQuestion.choices) {
        currentQuestion.choices.forEach(choice => {
            const choiceButton = document.createElement('button');
            choiceButton.innerText = choice.text;
            choiceButton.onclick = () => {
                questionHistory.push(currentQuestionIndex);
                currentQuestionIndex = questions.findIndex(q => q.id === choice.nextQuestion);
                displayQuestion();
            };
            choicesContainer.appendChild(choiceButton);
        });
    }

    if (currentQuestion.inputs) {
        currentQuestion.inputs.forEach(input => {
            const label = document.createElement('label');
            label.innerText = input.label;
            const inputElement = document.createElement('input');
            inputElement.type = input.type;
            inputElement.id = input.id;
            label.appendChild(inputElement);
            inputContainer.appendChild(label);
        });

        nextButton.style.display = 'block';
        nextButton.onclick = () => {
            const inputValues = {};
            currentQuestion.inputs.forEach(input => {
                inputValues[input.id] = Number(document.getElementById(input.id).value);
            });
            questionHistory.push(currentQuestionIndex);
            currentQuestionIndex = questions.findIndex(q => q.id === currentQuestion.nextQuestion(inputValues));
            displayQuestion();
        };
    } else {
        nextButton.style.display = 'none';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    }
}

function goBack() {
    if (questionHistory.length > 0) {
        currentQuestionIndex = questionHistory.pop();
        displayQuestion();
    }
}

function goHome() {
    questionHistory = [];
    currentQuestionIndex = 0;
    displayQuestion();
}

window.onload = displayQuestion;