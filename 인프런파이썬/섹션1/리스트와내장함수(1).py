import random as r

# a=[]
# print(a)

b=list()
print(b) # []

a=[1,2,3,4,5]
print(a)
print(a[0]) # 1

b=list(range(1,11))
print(b) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

c=a+b
print(c) # [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

a.insert(3, 7) # 3번 인덱스에 7 들어감
print(a)

a.pop()
print('pop(3)빼기전', a)
a.pop(3) # 3번 인덱스 뺴버림
print('pop(3)뺀후', a)
#! 아니 pop은 인덱스위치를 없애고 remove는 값 자체를 찾네
a.remove(4) # 4라는 값을 없앰
print('remove', a)

# print(a.index(5)) # 5 라는값이 어느 인덱스에 있는지

print('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ')
z = list(range(1,11))
print(z)
print(sum(z)) #! ?? 이게 된다고?
print(max(z)) # 제일 큰 값 찾아줌
print(min(z)) # 제일 작은 값 찾아줌
print(min(7, 5, 8)) # 7하고 5, 8중에 젤 작은거, 5

r.shuffle(z) # z 배열값 무작위로 섞음, 게임만들때 ㅋㅋ
print(z) # [1, 3, 4, 2, 9, 5, 6, 8, 10, 7]

z.sort()
print(z) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
z.sort(reverse=True) # 내림차순으로 만듬
print(z) # [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
z.clear() # 다 없앰
print(z) # []