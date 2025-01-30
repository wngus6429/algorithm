# 특정 숫자까지 더한 결과 문제
n = int(input())
sum = 0
for i in range (1, n+1):
    sum += i
print(sum)

# 약수 구하는 문제,
n = int(input())
for i in range(1, n+1):
    if n%i==0:
        print(i, end=' ')

# 약구 구하는 함수
def print_divisors():
    n = int(input("Enter a number: "))
    divisors = [i for i in range(1, n + 1) if n % i == 0]
    print("Divisors of", n, "are:", divisors)

print_divisors()