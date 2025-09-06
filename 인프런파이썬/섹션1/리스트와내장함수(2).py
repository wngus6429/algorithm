a=[23, 12, 36, 53, 19]
print(a[:3])
print(a[1:4])
print(len(a))

for i in range(len(a)):
    print(a[i], end=' ') # 23 12 36 53 19
print()

for x in a:
    print(x, end=' ') # 23 12 36 53 19
print()

for x in a:
    if x % 2 != 0 : # 홀수값 내놔라
        print(x, end=' ') # 23 53 19
print()

for x in enumerate(a):
    print(x, end=' ') # 튜플 형태 (0, 23) (1, 12) (2, 36) (3, 53) (4, 19)
    
b = (1,2,3,4,5) # 튜플값 못 바꿈
print(b[0])
# b[0]=7 # 에러남

c = [1,2,3,4,5] # 리스트값 바꿀 수 있음
c[0] = 99
print(c)

for x in enumerate(a):
    print(x[0], x[1], end=' ') # 0 23 1 12 2 36 3 53 4 19
print()

for index, value in enumerate(a):
    print(index, value, end=' ') # 0 23 1 12 2 36 3 53 4 19
print()

# X의 모든 값이 60 이하인지 확인, 참이면 출력
if all(60 > x for x in a):
    print('YES')
else:
    print('NO')

# 한번이라도 참인 경우는 YES를 출력
if any(15 > x for x in a):
    print('YES')
else:
    print('NO')