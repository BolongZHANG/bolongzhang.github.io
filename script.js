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
        text: "请输入病人的年龄：",
        input: {
            type: "number",
            nextQuestion: (value) => value <= 30 ? 6 : 7
        }
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
                currentQuestionIndex = questions.findIndex(q => q.id === choice.nextQuestion);
                displayQuestion();
            };
            choicesContainer.appendChild(choiceButton);
        });
    }

    if (currentQuestion.input) {
        const inputElement = document.createElement('input');
        inputElement.type = currentQuestion.input.type;
        inputElement.id = 'user-input';
        inputContainer.appendChild(inputElement);

        nextButton.style.display = 'block';
        nextButton.onclick = () => {
            const inputValue = Number(document.getElementById('user-input').value);
            currentQuestionIndex = questions.findIndex(q => q.id === currentQuestion.input.nextQuestion(inputValue));
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

window.onload = displayQuestion;