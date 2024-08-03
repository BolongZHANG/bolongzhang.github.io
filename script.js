const questions = [
    {
        id: 1,
        text: "病人通气方式",
        choices: [
            { text: "自主呼吸", nextQuestion: 2 },
            { text: "机械通气", nextQuestion: 3 },
        ]
        // image: "media/心脏1.gif" // 替换为实际图片URL
    },
    {
        id: 2,
        text: "是否有心输出量检测仪器",
        choices: [
            { text: "有", nextQuestion: 6 },
            { text: "无", nextQuestion: 7 },
        ],
    },
    {
        id: 3,
        text: "是否有心输出量检测仪器",
        choices: [
            { text: "有", nextQuestion: 4 },
            { text: "无", nextQuestion: 5 },
        ],
    },
    {
        id: 4,
        text: "CO监测仪器是否可校正",
        choices: [
            { text: "可校正的CO监测仪器", nextQuestion: 8 },
            { text: "不可校正的CO监测仪器", nextQuestion: 12 },
        ]
    },
    {
        id: 5,
        text: "LOVT VTI是否可获取",
        choices: [
            { text: "是", nextQuestion: 9 },
            { text: "否", nextQuestion: 10 },
        ]
    },
    {
        id: 6,
        text: "CO监测仪器是否可校正",
        choices: [
            { text: "可校正的CO监测仪器", nextQuestion: 11 },
            { text: "不可校正的CO监测仪器", nextQuestion: 12 },
        ]
    },
    {
        id: 7,
        text: "LOVT VTI是否可获取",
        choices: [
            { text: "是", nextQuestion: 13 },
            { text: "否", nextQuestion: 97 },
        ]
    },
    {
        id: 8,
        text: "自主呼吸情况",
        choices: [
            { text: "自主呼吸强", nextQuestion: 11 },
            { text: "自主呼吸不太强", nextQuestion: 14 },
        ]
    },
    {
        id: 9,
        text: "自主呼吸和心率情况",
        choices: [
            { text: "深度镇静镇痛且无心律失常", nextQuestion: 15 },
            { text: "非深度镇静镇痛（存在自主呼吸）或心律失常", nextQuestion: 16 },
        ]
    },
    {
        id: 10,
        text: "自主呼吸和心率情况",
        choices: [
            { text: "深度镇静镇痛且无心律失常", nextQuestion: 25 },
            { text: "非深度镇静镇痛（存在自主呼吸）或心律失常", nextQuestion: 97 },
        ]
    },
    {
        id: 11,
        text: "IAP是否超过16",
        choices: [
            { text: "IAP < 16", nextQuestion: 17 },
            { text: "IAP >= 16", nextQuestion: 18 },
        ]
    },
    {
        id: 12,
        text: "IAP是否超过16",
        choices: [
            { text: "IAP < 16", nextQuestion: 19 },
            { text: "IAP >= 16", nextQuestion: 28 },
        ]
    },
    {
        id: 13,
        text: "IAP是否超过16",
        choices: [
            { text: "IAP < 16", nextQuestion: 22 },
            { text: "IAP >= 16", nextQuestion: 21 },
        ]
    },
    {
        id: 14,
        text: "IAP是否超过16",
        choices: [
            { text: "IAP < 16", nextQuestion: 23 },
            { text: "IAP >= 16", nextQuestion: 24 },
        ]
    },
    {
        id: 15,
        text: "以下是可供选择的检测方法（可任选其一）：",
        choices: [
            { text: "FC", nextQuestion: 21 },
            { text: "PLR", nextQuestion: 22 },
            { text: "PPV", nextQuestion: 25 },
        ]
    },
    {
        id: 16,
        text: "以下是可供选择的检测方法（可任选其一）：",
        choices: [
            { text: "FC", nextQuestion: 21 },
            { text: "PLR", nextQuestion: 22 },
        ]
    },
    {
        id: 17,
        text: "以下是可供选择的检测方法（可任选其一）：",
        choices: [
            { text: "FC", nextQuestion: 28 },
            { text: "mini-FC", nextQuestion: 27 },
            { text: "PLR", nextQuestion: 26 },
        ]
    },
    {
        id: 18,
        text: "以下是可供选择的检测方法（可任选其一）：",
        choices: [
            { text: "FC", nextQuestion: 28 },
            { text: "mini-FC", nextQuestion: 27 },
        ]
    },
    {
        id: 19,
        text: "以下是可供选择的检测方法（可任选其一）：",
        choices: [
            { text: "FC", nextQuestion: 28 },
            { text: "PLR", nextQuestion: 26 },
        ]
    },
    // {
    //     id: 20,
    //     text: "以下是可供选择的检测方法（可任选其一）：",
    //     choices: [
    //         { text: "FC", nextQuestion: 28 },
    //     ]
    // },
    {
        id: 21,
        text: "检测方法：FC<br>请输入 LOVT VTI base 和 LOVT VTI end",
        inputs: [
            { label: "LOVT VTI base：", type: "number", id: "base" },
            { label: "LOVT VTI end：", type: "number", id: "end" }
        ],
        nextQuestion: (values) => (values["end"] - values["base"])/values["base"] > 0.15 ? 99 : 98
    },
    {
        id: 22,
        text: "检测方法：PLR<br>请输入 LOVT VTI base 和 LOVT VTI end",
        inputs: [
            { label: "LOVT VTI base：", type: "number", id: "base" },
            { label: "LOVT VTI end：", type: "number", id: "end" }
        ],
        nextQuestion: (values) => (values["end"] - values["base"])/values["base"] > 0.11 ? 99 : 98
    },
    {
        id: 23,
        text: "以下是可供选择的检测方法（可任选其一）：",
        choices: [
            { text: "FC", nextQuestion: 28 },
            { text: "mini-FC", nextQuestion: 27 },
            { text: "PLR", nextQuestion: 26 },
            { text: "EEO", nextQuestion: 29 },
        ]
    },
    {
        id: 24,
        text: "以下是可供选择的检测方法（可任选其一）：",
        choices: [
            { text: "mini-FC", nextQuestion: 27 },
            { text: "EEO", nextQuestion: 29 },
        ]
    },
    {
        id: 25,
        text: "PPV是否超过9",
        choices: [
            { text: "PPV < 9", nextQuestion: 30 },
            { text: "IAP >= 9", nextQuestion: 99 },
        ]
    },
    {
        id: 26,
        text: "检测方法：PLR<br>请输入 CI base 和 CI max",
        inputs: [
            { label: "CI base：", type: "number", id: "base" },
            { label: "CI max：", type: "number", id: "max" }
        ],
        nextQuestion: (values) => (values["max"] - values["base"])/values["base"] > 0.1 ? 99 : 98
    },
    {
        id: 27,
        text: "检测方法：mini-FC<br>请输入 CI base 和 CI max",
        inputs: [
            { label: "CI base：", type: "number", id: "base" },
            { label: "CI max：", type: "number", id: "max" }
        ],
        nextQuestion: (values) => (values["max"] - values["base"])/values["base"] > 0.05 ? 99 : 98
    },
    {
        id: 28,
        text: "检测方法：FC<br>请输入 CI base 和 CI end",
        inputs: [
            { label: "CI base：", type: "number", id: "base" },
            { label: "CI end：", type: "number", id: "end" }
        ],
        nextQuestion: (values) => (values["end"] - values["base"])/values["base"] > 0.15 ? 99 : 98
    },
    {
        id: 29,
        text: "检测方法：EEO<br>请输入 CI max 和 CI end",
        inputs: [
            { label: "CI base：", type: "number", id: "base" },
            { label: "CI max：", type: "number", id: "max" }
        ],
        nextQuestion: (values) => (values["max"] - values["base"])/values["base"] > 0.05 ? 99 : 98
    },
    {
        id: 30,
        text: "检测方法：PPV TVC<br>将潮气量从6ml/kg升到8ml/kg并持续一分钟，请输入PPV TVC base和PPV TVC max",
        inputs: [
            { label: "PPV TVC base：", type: "number", id: "base" },
            { label: "PPV TVC max：", type: "number", id: "max" }
        ],
        nextQuestion: (values) => (values["max"] - values["base"])/values["base"] >= 3 ? 99 : 98
    },

    {
        id: 97,
        text: "无可用检测方法",
    },
    {
        id: 98,
        text: "<strong>无液体反应性</strong>",
    },
    {
        id: 99,
        text: "<strong>有液体反应性</strong>",
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
            inputElement.type = 'text';
            inputElement.id = input.id;
            inputElement.inputMode = 'decimal'; // 确保在移动设备上弹出数字键盘
            inputElement.pattern = '\\d*\\.?\\d+'; // 限制输入格式
            label.appendChild(inputElement);
            inputContainer.appendChild(label);

            // 为新的输入框添加事件监听器
            inputElement.addEventListener('input', function (e) {
                let value = e.target.value;

                // 记录光标位置
                const cursorPosition = e.target.selectionStart;

                // 替换掉所有非数字和非小数点字符
                value = value.replace(/[^0-9.]/g, '');

                // 确保只有一个小数点
                const parts = value.split('.');
                if (parts.length > 2) {
                    value = parts[0] + '.' + parts.slice(1).join('');
                }

                // 更新输入框的值
                e.target.value = value;

                // 设置光标位置
                e.target.setSelectionRange(cursorPosition, cursorPosition);
            });
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

window.onload = function() {
    displayQuestion();

    // 添加事件监听器，确保输入框只接受数字和小数点
    const numericInput = document.getElementById('numeric-input');
    if (numericInput) {
        numericInput.addEventListener('input', function (e) {
            let value = e.target.value;

            // 记录光标位置
            const cursorPosition = e.target.selectionStart;

            // 替换掉所有非数字和非小数点字符
            value = value.replace(/[^0-9.]/g, '');

            // 确保只有一个小数点
            const parts = value.split('.');
            if (parts.length > 2) {
                value = parts[0] + '.' + parts.slice(1).join('');
            }

            // 更新输入框的值
            e.target.value = value;

            // 设置光标位置
            e.target.setSelectionRange(cursorPosition, cursorPosition);
        });
    }
}