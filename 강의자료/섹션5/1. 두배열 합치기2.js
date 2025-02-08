function mergeSortedArrays(arr1, arr2) {
  let mergedArray = []; // 결과를 저장할 배열
  let i = 0; // 두 배열을 탐색할 인덱스 포인터
  let j = 0; // 두 배열을 탐색할 인덱스 포인터

  // 두 배열을 비교하면서 작은 값을 mergedArray에 추가
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]); // arr1[i]가 더 작다면 추가
      i++; // arr1의 포인터 이동
    } else {
      mergedArray.push(arr2[j]); // arr2[j]가 더 작거나 같다면 추가
      j++; // arr2의 포인터 이동
    }
  }

  // arr1의 남은 요소들 추가 (만약 arr2가 먼저 끝났다면)
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // arr2의 남은 요소들 추가 (만약 arr1이 먼저 끝났다면)
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  // 결과 출력 (공백으로 연결된 문자열)
  console.log(mergedArray.join(" "));
}

// 예제 입력
const arr1 = [1, 3, 5]; // 첫 번째 정렬된 배열
const arr2 = [2, 3, 6, 7, 9]; // 두 번째 정렬된 배열

// 병합 함수 실행
mergeSortedArrays(arr1, arr2);
// 출력: 1 2 3 3 5 6 7 9
