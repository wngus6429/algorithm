// 5 文字のワード
// 英字 5 文字からなる文字列について、以下のような条件を考えます。

// 以下に挙げる文字しか含まない。
// ABCDEFGJKMPQTVWXYZ
// どこかに A を含むが 2 文字目ではない。
// どこかに E を含むが 4 文字目ではない。
// どこかに T を含むが 2 文字目ではない。
// ※同じ文字を 2 回以上含んでもよい。特に、A, E, T を 2 回以上含んでもよい。

// ※英単語として意味をもつ必要はない。

// これらの全ての条件を満たす文字列の個数を答えてください。

function solution(words) {
  let answer = Array.from({ length: 5 }, () => '');
  console.log(answer);
  for (let i = 0; i < words.length; i++) {
    answer.push(words[i]);
    if (words[i] !== 'A'){

    }
    if (words[i] !== 'T'){
        
    }
    if (words[i] !== 'E'){
        
    }
    answer.push(words[])
  }
  return answer;
}
let word = 'ABCDEFGJKMPQTVWXYZ';
console.log(solution(word));
