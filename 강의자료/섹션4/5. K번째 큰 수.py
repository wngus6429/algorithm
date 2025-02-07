def solution(n, k, card):
    tmp = set()
    
    # 3개의 숫자를 조합하여 합을 구함
    for i in range(n):
        for j in range(i + 1, n):
            for g in range(j + 1, n):
                tmp.add(card[i] + card[j] + card[g])

    # set을 리스트로 변환 후 내림차순 정렬
    a = sorted(tmp, reverse=True)
    print("a:", a)
    
    return a[k - 1]  # k번째로 큰 값 반환 (인덱스는 0부터 시작하므로 k-1)

arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]
print(solution(10, 3, arr))
