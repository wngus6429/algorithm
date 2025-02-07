function countMentoringPairs(testResults) {
  let count = 0;
  let pairs = []; // 멘토-멘티 쌍 저장
  let TestCount = testResults.length; // 시험 횟수 3번
  let StudentCount = testResults[0].length; // 학생 수 4명
  // 모든 (멘토, 멘티) 쌍을 탐색
  for (let mentor = 1; mentor <= StudentCount; mentor++) {
    for (let mentee = 1; mentee <= StudentCount; mentee++) {
      if (mentor === mentee) continue; // 같은 학생은 멘토-멘티 불가
      let validPair = true;

      // 모든 시험에서 멘토가 멘티보다 앞서는지 확인
      for (let test = 0; test < TestCount; test++) {
        let rank = testResults[test];
        if (rank.indexOf(mentor) > rank.indexOf(mentee)) {
          validPair = false;
          break;
        }
      }
      if (validPair) {
        count++;
        pairs.push([mentor, mentee]); // 멘토-멘티 쌍 추가
      }
    }
  }

  console.log("총 가능한 멘토-멘티 쌍 개수:", count);
  console.log("가능한 멘토-멘티 쌍:");
  pairs.forEach((pair) => console.log(`멘토: ${pair[0]}, 멘티: ${pair[1]}`));
}

const testResults = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

countMentoringPairs(testResults);
