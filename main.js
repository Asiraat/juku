// データを JavaScript オブジェクトとして定義
const problemData = {
    1: "卑弥呼が魏へ使い",
    2: "百済から仏教伝来",
    3: "冠位十二階",
    4: "憲法十七条",
    5: "小野妹子が遣隋使として派遣",
    6: "中大兄皇子が蘇我氏滅ぼす",
    7: "白村江の戦い",
    8: "壬申の乱",
    9: "藤原京へ遷都",
    10: "大宝律令",
    11: "平城京へ遷都",
    12: "三世一身法",
    13: "墾田永年私財法",
    14: "平安京へ遷都",
    15: "菅原道真が遣唐使廃止提言",
    16: "平将門の乱",
    17: "藤原純友の乱",
    18: "白河上皇が院政開始",
    19: "保元の乱",
    20: "平治の乱",
    21: "平清盛が太政大臣に",
    22: "壇ノ浦の戦い",
    23: "源頼朝が征夷大将軍に",
    24: "承久の乱",
    25: "御成敗式目"
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
