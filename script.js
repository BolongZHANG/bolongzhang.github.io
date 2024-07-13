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
        ],
        image: "https://example.com/happy.jpg" // 替换为实际图片URL
    },
    {
        id: 3,
        text: "你觉得一般的原因是什么？",
        choices: [
            { text: "工作压力", nextQuestion: 5 },
            { text: "人际关系", nextQuestion: 5 },
            { text: "其他", nextQuestion: 5 }
        ],
        image: "https://example.com/stress.jpg" // 替换为实际图片URL
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
        text: "请输入你的年龄：",
        input: {
            type: "number",
            nextQuestion: (value) => value >= 18 ? 6 : 7
        }
    },
    {
        id: 6,
        text: "你已经成年。",
        choices: []
    },
    {
        id: 7,
        text: "你未满18岁。",
        choices: []
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