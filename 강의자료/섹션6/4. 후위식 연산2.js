function solution(str) {
  let answer = "";
  let stack = [];
  for (let x of str) {
    // 숫자이면 넣는다.
    if (!isNaN(x)) stack.push(Number(x));
    else {
      console.log(stack, "부호", x);
      // 첫번쨰로 나오는게 오른쪽이 되어야함.
      // 누가 빼기를 당하고 나눔 당하는지가 중요하니까.
      let rt = stack.pop();
      let lt = stack.pop();
      console.log("rt,lt", rt, lt);
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

// 352 먼저 넣고, + 나오면 5랑 2 꺼내서 + 해주면 7되고 그 다음에 * 이니까
// 들어가 있던 3이랑 7 을 * 해주면 21되고. 그 다음에 9 들어가고 마지막에 -
// 나오니까. 21 - 9 하니까 12가 나오는거임
let str = "352+*9-";
console.log(solution(str));
// 20250312 복습
