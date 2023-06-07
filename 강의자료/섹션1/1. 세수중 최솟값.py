def solution(a, b, c):
    answer = 0
    if a < b:
        answer = a
    else: answer = b
    if c < answer:
        answer = c
    return answer

print(solution(234, 523, 1112))