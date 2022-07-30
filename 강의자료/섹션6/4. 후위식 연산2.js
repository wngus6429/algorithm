function solution(str) {
  let answer = '';
  let stack = [];
  for (let x of str) {
    // 숫자이면 넣는다.
    if (!isNaN(x)) stack.push(Number(x));
    else {
      console.log(stack, 'x', x);
      // 첫번쨰로 나오는게 오른쪽이 되어야함.
      // 누가 빼기를 당하고 나눔 당하는지가 중요하니까.
      let rt = stack.pop();
      let lt = stack.pop();
      console.log('rt,lt', rt, lt);
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
