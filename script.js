const questions = [
    {
        question: "ফুটবল খেলার মাঠের দৈর্ঘ্য কত মিটার হতে পারে?",
        options: ["90-100 মিটার", "100-110 মিটার", "110-120 মিটার", "80-90 মিটার"],
        answer: "100-110 মিটার"
    },
    {
        question: "ফুটবল খেলার মাঠের প্রস্থ কত মিটার হতে পারে?",
        options: ["50-60 মিটার", "64-75 মিটার", "70-80 মিটার", "80-90 মিটার"],
        answer: "64-75 মিটার"
    },
    {
        question: "ফুটবল গোলের উচ্চতা কত?",
        options: ["2.24 মিটার", "2.44 মিটার", "2.64 মিটার", "2.84 মিটার"],
        answer: "2.44 মিটার"
    },
    {
        question: "ফুটবল গোলের প্রস্থ কত?",
        options: ["7.12 মিটার", "7.22 মিটার", "7.32 মিটার", "7.42 মিটার"],
        answer: "7.32 মিটার"
    },
    {
        question: "ফুটবল পেনাল্টি স্পট থেকে গোল লাইন পর্যন্ত দূরত্ব কত?",
        options: ["9 মিটার", "11 মিটার", "12 মিটার", "13 মিটার"],
        answer: "11 মিটার"
    },
    {
        question: "কাবাডি খেলার মাঠের দৈর্ঘ্য পুরুষদের জন্য কত?",
        options: ["11 মিটার", "12 মিটার", "13 মিটার", "14 মিটার"],
        answer: "13 মিটার"
    },
    {
        question: "কাবাডি খেলার মাঠের প্রস্থ পুরুষদের জন্য কত?",
        options: ["8 মিটার", "9 মিটার", "10 মিটার", "11 মিটার"],
        answer: "10 মিটার"
    },
    {
        question: "কাবাডি খেলার মাঠের দৈর্ঘ্য মহিলাদের জন্য কত?",
        options: ["10 মিটার", "11 মিটার", "12 মিটার", "13 মিটার"],
        answer: "12 মিটার"
    },
    {
        question: "কাবাডি খেলার মাঠের প্রস্থ মহিলাদের জন্য কত?",
        options: ["8 মিটার", "9 মিটার", "10 মিটার", "11 মিটার"],
        answer: "8 মিটার"
    },
    {
        question: "কাবাডি খেলায় 'বোনা লাইন' গোল লাইন থেকে কত দূরে থাকে?",
        options: ["1 মিটার", "1.75 মিটার", "2.75 মিটার", "3.25 মিটার"],
        answer: "3.75 মিটার" // Common for both men and women's Kabaddi.
    },
    {
        question: "কাবাডি খেলায় 'সেন্টার লাইন' থেকে 'বোনা লাইন' পর্যন্ত দূরত্ব কত?",
        options: ["3.75 মিটার", "4.75 মিটার", "5.75 মিটার", "6.75 মিটার"],
        answer: "3.75 মিটার"
    },
    {
        question: "কাবাডি খেলায় 'লবি' এর প্রস্থ কত?",
        options: ["0.5 মিটার", "1 মিটার", "1.5 মিটার", "2 মিটার"],
        answer: "1 মিটার"
    },
    {
        question: "ফুটবল খেলার একটি অফিশিয়াল ম্যাচে কয়জন খেলোয়াড় থাকে (প্রতি দলে)?",
        options: ["9 জন", "10 জন", "11 জন", "12 জন"],
        answer: "11 জন"
    },
    {
        question: "কাবাডি খেলার একটি অফিশিয়াল ম্যাচে কয়জন খেলোয়াড় থাকে (প্রতি দলে)?",
        options: ["5 জন", "6 জন", "7 জন", "8 জন"],
        answer: "7 জন"
    },
    {
        question: "ফুটবল খেলায় কর্নার কিক কোন স্থান থেকে নেওয়া হয়?",
        options: ["মাঠের মাঝামাঝি", "পেনাল্টি বক্সের কোণ", "কর্নার আর্ক", "গোল এলাকার বাইরে"],
        answer: "কর্নার আর্ক"
    },
    {
        question: "কাবাডি খেলায় রাইডারকে কত সেকেন্ডের মধ্যে রেড শেষ করতে হয়?",
        options: ["20 সেকেন্ড", "25 সেকেন্ড", "30 সেকেন্ড", "35 সেকেন্ড"],
        answer: "30 সেকেন্ড"
    },
    {
        question: "ফুটবল খেলায় লাল কার্ডের অর্থ কী?",
        options: ["সাবধান করা", "সাময়িক বরখাস্ত", "পুরোপুরি বরখাস্ত", "পেনাল্টি কিক"],
        answer: "পুরোপুরি বরখাস্ত"
    },
    {
        question: "কাবাডি খেলায় একটি সফল ট্যাগ করার পর কত পয়েন্ট পাওয়া যায়?",
        options: ["1 পয়েন্ট", "2 পয়েন্ট", "3 পয়েন্ট", "কোনো পয়েন্ট নেই"],
        answer: "1 পয়েন্ট"
    },
    {
        question: "ফুটবল খেলায় 'অফসাইড' এর নিয়ম কখন প্রযোজ্য হয়?",
        options: ["যখন খেলোয়াড় গোল লাইনের পেছনে থাকে", "যখন খেলোয়াড় প্রতিপক্ষের শেষ ডিফেন্ডারের আগে থাকে", "যখন খেলোয়াড় মাঝমাঠ অতিক্রম করে", "যখন খেলোয়াড় নিজেদের পেনাল্টি বক্সে থাকে"],
        answer: "যখন খেলোয়াড় প্রতিপক্ষের শেষ ডিফেন্ডারের আগে থাকে"
    },
    {
        question: "কাবাডি খেলায় 'লোনা' হলে কত পয়েন্ট দেওয়া হয়?",
        options: ["1 পয়েন্ট", "2 পয়েন্ট", "3 পয়েন্ট", "কোনো পয়েন্ট নেই"],
        answer: "2 পয়েন্ট"
    },
    {
        question: "ফুটবল খেলার হাফ টাইম বিরতি কত মিনিটের হয়?",
        options: ["10 মিনিট", "15 মিনিট", "20 মিনিট", "25 মিনিট"],
        answer: "15 মিনিট"
    },
    {
        question: "কাবাডি খেলার প্রতি হাফ কত মিনিটের হয় (পুরুষদের জন্য)?",
        options: ["15 মিনিট", "20 মিনিট", "25 মিনিট", "30 মিনিট"],
        answer: "20 মিনিট"
    },
    {
        question: "ফুটবল মাঠের কেন্দ্র বৃত্তের ব্যাসার্ধ কত?",
        options: ["9.15 মিটার", "10 মিটার", "11 মিটার", "12 মিটার"],
        answer: "9.15 মিটার"
    },
    {
        question: "কাবাডি খেলায় 'অতিরিক্ত সময়' (Extra Time) দেওয়া হলে, প্রতিটি হাফ কত মিনিটের হয়?",
        options: ["3 মিনিট", "5 মিনিট", "7 মিনিট", "10 মিনিট"],
        answer: "5 মিনিট"
    },
    {
        question: "ফুটবল খেলায় একটি দল সর্বোচ্চ কতজন খেলোয়াড় বদলাতে পারে (সাধারণ ম্যাচে)?",
        options: ["2 জন", "3 জন", "4 জন", "5 জন"],
        answer: "3 জন" // Note: This rule can vary in different competitions (e.g., 5 substitutions in some leagues/tournaments). Default FIFA rule is 3.
    }
];
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0;
let selectedOption = null;
let answeredQuestions = new Array(questions.length).fill(false);
let questionTimerInterval;
const questionTimeLimit = 30;
let questionTimeLeft;
let userName = ''; // ব্যবহারকারীর নাম সংরক্ষণের জন্য ভেরিয়েবল

// DOM Elements
const nameInputScreen = document.getElementById('nameInputScreen');
const userNameInput = document.getElementById('userNameInput');
const proceedToStartScreenButton = document.getElementById('proceedToStartScreenButton');
const nameInputMessage = document.getElementById('nameInputMessage');

const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');

const totalQuestionsInfo = document.getElementById('totalQuestionsInfo');
const fullMarksInfo = document.getElementById('fullMarksInfo');
const timeLimitInfo = document.getElementById('timeLimitInfo');

const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const scoreDisplayElem = document.getElementById('scoreDisplay');
const questionIndexDisplayElem = document.getElementById('questionIndexDisplay');

const questionTextBox = document.getElementById('questionTextBox');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');
const nextButton = document.getElementById('nextButton');
const skipButton = document.getElementById('skipButton');
const submitButton = document.getElementById('submitButton');

const questionTimerTextElem = document.getElementById('questionTimer');
const progressRingBar = document.querySelector('.progress-ring-bar');
const circumference = 2 * Math.PI * 35;
progressRingBar.style.strokeDasharray = circumference;
progressRingBar.style.strokeDashoffset = circumference;

const rankListElem = document.getElementById('rankList');

// Set initial info on start screen
totalQuestionsInfo.textContent = questions.length;
fullMarksInfo.textContent = questions.length;
timeLimitInfo.textContent = Math.ceil(questions.length * questionTimeLimit / 60);

// --- Event Listeners ---
proceedToStartScreenButton.addEventListener('click', handleNameInputAndShowStartScreen);
startButton.addEventListener('click', startQuiz);

nextButton.addEventListener('click', handleNextQuestion);
skipButton.addEventListener('click', handleSkipQuestion);
submitButton.addEventListener('click', handleSubmitQuiz);


// --- Name Input and Screen Flow ---
function handleNameInputAndShowStartScreen() {
    const inputName = userNameInput.value.trim();
    if (inputName === '') {
        nameInputMessage.textContent = "আপনার নাম লিখুন কুইজ শুরু করার জন্য।";
        return;
    }
    userName = inputName; // ব্যবহারকারীর নাম সংরক্ষণ করুন
    nameInputMessage.textContent = ''; // মেসেজ মুছে ফেলুন

    nameInputScreen.classList.remove('active');
    startScreen.classList.add('active'); // নাম ইনপুট করার পর startScreen দেখান
}


function startQuiz() { // startScreen থেকে কুইজ শুরু করার ফাংশন
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    resetQuizState(); // কুইজ স্টেট রিসেট করুন কুইজ শুরু করার আগে
    loadQuestion();
    scoreDisplayElem.textContent = score;
}

function resetQuizState() {
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    skippedCount = 0;
    selectedOption = null;
    answeredQuestions = new Array(questions.length).fill(false);
    clearInterval(questionTimerInterval); // নিশ্চিত করুন কোনো টাইমার চলছে না
}


function updateQuestionTimerDisplay() {
    questionTimerTextElem.textContent = questionTimeLeft;

    const offset = circumference - (questionTimeLeft / questionTimeLimit) * circumference;
    progressRingBar.style.strokeDashoffset = offset;

    // Change color based on time left
    if (questionTimeLeft <= 10) {
        progressRingBar.style.stroke = '#FF6347';
    } else if (questionTimeLeft <= 20) {
        progressRingBar.style.stroke = '#FFD700';
    } else {
        progressRingBar.style.stroke = '#28a745';
    }
}

function startQuestionTimer() {
    clearInterval(questionTimerInterval);
    questionTimeLeft = questionTimeLimit;
    updateQuestionTimerDisplay();
    questionTimerInterval = setInterval(() => {
        questionTimeLeft--;
        updateQuestionTimerDisplay();
        if (questionTimeLeft <= 0) {
            clearInterval(questionTimerInterval);
            // Only proceed if the question hasn't been answered yet
            if (!answeredQuestions[currentQuestionIndex]) {
                handleTimeUp();
            }
        }
    }, 1000);
}


function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        handleSubmitQuiz();
        return;
    }
    clearInterval(questionTimerInterval);
    startQuestionTimer();

    const currentQuestion = questions[currentQuestionIndex];
    questionIndexDisplayElem.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

    questionTextBox.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    feedbackMessage.textContent = '';
    feedbackMessage.style.color = 'transparent';
    selectedOption = null;

    nextButton.style.display = 'none';
    skipButton.style.display = 'inline-block';
    submitButton.style.display = 'none';

    if (currentQuestionIndex === questions.length - 1) {
        submitButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
        skipButton.style.display = 'none';
    }

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(button, option));
        optionsContainer.appendChild(button);
    });

    enableOptions();
}


function selectOption(selectedButton, selectedAnswer) {
    if (answeredQuestions[currentQuestionIndex]) return; // Already answered, do nothing

    clearInterval(questionTimerInterval); // Stop the timer as soon as an option is selected

    disableOptions(); // Disable options to prevent multiple clicks

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    selectedButton.classList.add('selected');

    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add('correct');
        score += 1;
        correctCount++;
        feedbackMessage.textContent = 'সঠিক উত্তর!';
        feedbackMessage.style.color = '#28a745';
    } else {
        selectedButton.classList.add('wrong');
        score -= 0.33;
        wrongCount++;
        feedbackMessage.textContent = `ভুল উত্তর। সঠিক উত্তর: ${correctAnswer}`;
        feedbackMessage.style.color = '#dc3545';

        // Highlight the correct answer if the selected one was wrong
        Array.from(optionsContainer.children).forEach(optionBtn => {
            if (optionBtn.textContent === correctAnswer) {
                optionBtn.classList.add('correct');
            }
        });
    }

    scoreDisplayElem.textContent = score.toFixed(2);
    answeredQuestions[currentQuestionIndex] = true; // Mark as answered

    // Show appropriate buttons
    nextButton.style.display = 'inline-block';
    skipButton.style.display = 'none';
    submitButton.style.display = (currentQuestionIndex === questions.length - 1) ? 'inline-block' : 'none';
}


function handleTimeUp() {
    // This check is crucial for preventing double-skips or skips after an answer
    if (answeredQuestions[currentQuestionIndex]) return;

    skippedCount++;
    answeredQuestions[currentQuestionIndex] = true; // Mark as answered/skipped

    showAnswer(); // Show the correct answer
    disableOptions(); // Disable options

    // Automatically move to the next question after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000); // 2 seconds delay
}

function showAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    Array.from(optionsContainer.children).forEach(optionBtn => {
        optionBtn.style.pointerEvents = 'none'; // Ensure no further clicks
        if (optionBtn.textContent === correctAnswer) {
            optionBtn.classList.add('correct'); // Highlight correct answer
        }
    });
    feedbackMessage.textContent = `সঠিক উত্তর: ${correctAnswer}`;
    feedbackMessage.style.color = '#ffc107'; // Yellow/Orange color for skipped answer

    // Ensure buttons are correctly displayed after showing answer
    nextButton.style.display = 'inline-block';
    skipButton.style.display = 'none';
    submitButton.style.display = (currentQuestionIndex === questions.length - 1) ? 'inline-block' : 'none';
}


function disableOptions() {
    Array.from(optionsContainer.children).forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
}

function enableOptions() {
    Array.from(optionsContainer.children).forEach(opt => {
        opt.style.pointerEvents = 'auto';
        opt.classList.remove('selected', 'correct', 'wrong');
    });
}


function handleNextQuestion() {
    // If user clicks Next without selecting an option, treat as skipped
    if (!answeredQuestions[currentQuestionIndex]) {
        clearInterval(questionTimerInterval); // Stop timer
        skippedCount++;
        answeredQuestions[currentQuestionIndex] = true;
        showAnswer(); // Show answer for skipped question
        disableOptions(); // Disable options
        // Wait briefly before moving to next question for skipped questions
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1000); // Shorter delay for manual skip
    } else {
        // If already answered, just move to next
        currentQuestionIndex++;
        loadQuestion();
    }
}

function handleSkipQuestion() {
    // This is essentially the same as handleTimeUp, but triggered by button click
    if (!answeredQuestions[currentQuestionIndex]) {
        clearInterval(questionTimerInterval);
        skippedCount++;
        answeredQuestions[currentQuestionIndex] = true;

        showAnswer();
        disableOptions();

        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1000); // Shorter delay for manual skip
    }
}


function handleSubmitQuiz() {
    clearInterval(questionTimerInterval); // Stop any running timer
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    document.getElementById('finalTotalQuestions').textContent = questions.length;
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('wrongAnswers').textContent = wrongCount;
    document.getElementById('skippedQuestions').textContent = skippedCount;
    document.getElementById('finalScore').textContent = score.toFixed(2);
    document.getElementById('finalFullMarks').textContent = questions.length;

    // Firebase-এ ফলাফল সেভ করুন এবং র‍্যাঙ্কিং লোড করুন
    saveQuizResult();
    displayRankings();
}

// Firebase-এ ফলাফল সেভ করুন
function saveQuizResult() {
    // নিশ্চিত করুন ব্যবহারকারীর নাম আছে
    if (!userName) {
        console.error("ব্যবহারকারীর নাম পাওয়া যায়নি। ফলাফল সেভ করা যাবে না।");
        alert("আপনার নাম ছাড়া ফলাফল সেভ করা যাবে না।");
        return;
    }

    // Firebase-এর 'quizResults' পাথে এবং QUIZ_ID এর অধীনে ডেটা পুশ করুন
    // খেয়াল রাখবেন QUIZ_ID কে অবশ্যই index.html এ সংজ্ঞায়িত করতে হবে।
    database.ref('quizResults/' + QUIZ_ID).push({
        name: userName, // কুইজের শুরুতে নেওয়া নাম
        score: score.toFixed(2), // স্কোর দশমিক সংখ্যা হিসেবে সেভ করুন
        correct: correctCount,
        wrong: wrongCount,
        skipped: skippedCount,
        totalQuestions: questions.length,
        timestamp: new Date().toISOString() // কখন কুইজ দেওয়া হয়েছে
    })
    .then(() => {
        console.log("ফলাফল সফলভাবে Firebase-এ সেভ হয়েছে!");
    })
    .catch((error) => {
        console.error("ফলাফল সেভ করতে সমস্যা হয়েছে:", error);
        alert("ফলাফল সেভ করতে সমস্যা হয়েছে।");
    });
}

// Firebase থেকে র‍্যাঙ্কিং লোড এবং প্রদর্শন করুন (প্রতি ব্যবহারকারীর সর্বোচ্চ স্কোর)
function displayRankings() {
    rankListElem.innerHTML = '<li>র‍্যাঙ্কিং লোড হচ্ছে...</li>';

    // Firebase-এর 'quizResults/QUIZ_ID' পাথে থেকে ডেটা লোড করুন
    database.ref('quizResults/' + QUIZ_ID).once('value', (snapshot) => {
        const userHighestScores = {}; // প্রতিটি ব্যবহারকারীর সর্বোচ্চ স্কোর সংরক্ষণের জন্য

        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            // Undefined বা invalid নাম এন্ট্রি বাদ দিন
            if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
                // Optionally log to see bad data
                // console.warn("Invalid name found in Firebase data:", data);
                return; // Skip this entry
            }
            // Invalid স্কোর এন্ট্রি বাদ দিন
            const userScore = parseFloat(data.score);
            if (isNaN(userScore)) {
                // Optionally log to see bad data
                // console.warn("Invalid score found for user:", data.name, data.score);
                return; // Skip this entry
            }
            
            const userName = data.name;

            // যদি এই ব্যবহারকারী প্রথমবারের মতো আসে অথবা বর্তমান স্কোর পূর্ববর্তী সর্বোচ্চ স্কোরের চেয়ে বেশি হয়
            if (!userHighestScores[userName] || userScore > userHighestScores[userName].score) {
                userHighestScores[userName] = {
                    name: userName,
                    score: userScore
                };
            }
        });

        // userHighestScores অবজেক্ট থেকে অ্যারে তৈরি করুন
        const rankings = Object.values(userHighestScores);

        // স্কোর অনুযায়ী ডিসেন্ডিং অর্ডারে সর্ট করুন
        rankings.sort((a, b) => b.score - a.score);

        rankListElem.innerHTML = '';
        if (rankings.length === 0) {
            rankListElem.innerHTML = '<li>এখনো কোনো র‍্যাঙ্কিং নেই।</li>';
        } else {
            rankings.forEach((entry, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${index + 1}. ${entry.name} - স্কোর: ${entry.score.toFixed(2)}`;
                rankListElem.appendChild(listItem);
            });
        }
    })
    .catch((error) => {
        console.error("র‍্যাঙ্কিং লোড করতে সমস্যা হয়েছে:", error);
        rankListElem.innerHTML = '<li>র‍্যাঙ্কিং লোড করা যায়নি।</li>';
    });
}
