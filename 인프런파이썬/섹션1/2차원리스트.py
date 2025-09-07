# a = [0] * 3
# print(a) [0, 0, 0]

a = [[0] * 3 for _ in range(3)]
print(a) # [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
a[0][1]=1
print(a) # [[0, 1, 0], [0, 0, 0], [0, 0, 0]]
a[1][1]=2
print(a) # [[0, 1, 0], [0, 2, 0], [0, 0, 0]]

for x in a:
    print(x, end=' ') # [0, 1, 0] [0, 2, 0] [0, 0, 0]
print()
print('ㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗ')
for x in a:
    for y in x:
        print(y, end=' ')
    print()
    
def isPrime(x):
    for i in range(2, x):
        if x % i == 0:
            return False
    return True
# isPrime(x): 2부터 x-1까지 나눠서 약수가 있으면 False, 
# 없으면 True를 반환합니다.

a = [12, 13, 7, 9, 19]
for y in a:
    if isPrime(y):
        print(y, end=' ')
print()

def plus_one(x):
    return x+1

plus_two = lambda x: x+2
print(plus_two(99))

a = [1,2,3]
print(list(map(plus_one, a))) # [2, 3, 4]
print(list(map(lambda x: x * 8, a))) # [8, 16, 24]