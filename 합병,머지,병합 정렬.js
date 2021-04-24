let mergeSort = function (array) {
  if (array.length < 2) return array; // 원소가 하나일 때는 그대로 돌려보냄
  let pivot = Math.floor(array.length / 2); // 대략 반으로 쪼개는 코드
  let left = array.slice(0, pivot); // 쪼갠 왼쪽
  let right = array.slice(pivot, array.length); // 쪼갠 오른쪽
  return merge(mergeSort(left), mergeSort(right)); // 재귀적으로 쪼개고 합칩니다.
};
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    //left, right 배열 어느 한쪽이 없어질때까지 돌린다.
    if (left[0] <= right[0]) {
      // 두 배열의 첫 원소를 비교하여
      result.push(left.shift()); // 더 작은 수를 결과에 넣어줍니다.
    } else {
      result.push(right.shift()); // 오른쪽도 마찬가지
    }
  } //left right어느 한쪽 배열이 사라져서 남아있는 배열을 result에 넣어준다.
  while (left.length) result.push(left.shift()); // left가 남은경우
  while (right.length) result.push(right.shift()); // right가 남은경우
  return result;
}
console.log(mergeSort([5, 2, 4, 7, 6, 1, 3, 8]));
//shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
