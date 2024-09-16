// データを JavaScript オブジェクトとして定義
const problemData = {
    1: "りんご",
    2: "バナナ",
    3: "オレンジ",
    4: "ぶどう",
    5: "メロン",
    6: "いちご",
    7: "パイナップル",
    8: "キウイ",
    9: "もも",
    10: "さくらんぼ",
    11: "マンゴー",
    12: "パパイヤ",
    13: "レモン",
    14: "ライム",
    15: "スイカ",
    16: "ブルーベリー",
    17: "ラズベリー",
    18: "ブラックベリー",
    19: "アボカド",
    20: "ざくろ",
    21: "ドラゴンフルーツ",
    22: "パッションフルーツ",
    23: "ライチ",
    24: "グアバ",
    25: "ココナッツ"
};

function getRandomNumbers(min, max, count) {
    const numbers = [];
    let attempts = 0;
    const maxAttempts = 1000;

    while (numbers.length < count && attempts < maxAttempts) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            const isValid = numbers.every(existingNum => Math.abs(num - existingNum) <= 20);
            if (isValid) {
                numbers.push(num);
            }
        }
        attempts++;
    }

    if (numbers.length < count) {
        return getRandomNumbers(min, max, count);
    }

    return numbers;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateProblem() {
    const problems = [];
    for (let i = 0; i < 10; i++) {
        const numbers = getRandomNumbers(1, 25, 4);
        problems.push(shuffleArray([...numbers]));
    }
    return problems;
}

// 前のコードの大部分は変更なし。createProblemHTML関数を以下のように修正します。

// 前のコードの大部分は変更なし。createProblemHTML関数を以下のように修正します。

function createProblemHTML(problems) {
    const container = document.getElementById('problem-container');
    const labels = ['ア', 'イ', 'ウ', 'エ'];

    problems.forEach((problem, index) => {
        const boxNumber = index + 1;
        
        // 問題と回答を含むコンテナを作成
        const problemContainer = document.createElement('div');
        problemContainer.className = 'problem-container';

        // 問題ボックスの作成
        const box = document.createElement('div');
        box.className = `box box${boxNumber}`;

        const content = `（${boxNumber}）${problem.map((num, i) => `${labels[i]} ${problemData[num]}`).join('　')}`;
        box.innerHTML = content;
        problemContainer.appendChild(box);

        // 回答ボックスの作成
        const answerBox = document.createElement('div');
        answerBox.className = 'answer';
        answerBox.innerHTML = '<p>ㅤㅤ→ㅤㅤ→ㅤㅤ→ㅤㅤ</p>';
        problemContainer.appendChild(answerBox);

        container.appendChild(problemContainer);
    });
}

const problems = generateProblem();
createProblemHTML(problems);