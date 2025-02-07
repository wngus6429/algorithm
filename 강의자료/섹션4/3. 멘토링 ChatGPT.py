def count_mentoring_pairs(N, M, test_results):
    count = 0

    # 모든 (멘토, 멘티) 쌍을 탐색
    for mentor in range(1, N + 1):
        for mentee in range(1, N + 1):
            if mentor == mentee:
                continue  # 같은 학생은 멘토-멘티 불가

            valid_pair = True  # 모든 테스트에서 유효해야 함

            # 모든 시험에서 멘토가 멘티보다 높은 등수인지 확인
            for test in range(M):
                rank = test_results[test]
                if rank.index(mentor) > rank.index(mentee):
                    valid_pair = False
                    break
            
            if valid_pair:
                count += 1

    return count

# 예제 입력
N, M = 4, 3
test_results = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2]
]

print(count_mentoring_pairs(N, M, test_results))  # 출력: 3
