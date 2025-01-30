msg="It is Time"
print(msg.upper())
print(msg.lower())
print(msg)
tmp=msg.upper()
print(tmp)
print(tmp.find('T')) # 1, T의 인덱스번호 반환 
print(tmp.count('T')) # 2
print(msg[:2]) # It
print(msg[3:5]) # is, 3,4만 추출
print(len(msg)) # 10
# 이거랑 아래랑 똑같다
for i in range(len(msg)):
    print(msg[i], end=' ') # I t   i s   T i m e 
print()

for x in msg:
    print(x, end=' ') # I t   i s   T i m e 
print()

for x in msg:
    if x.isupper(): # 대문자이면 True
        if x.islower(): # 소문자이면 True
            print(x, end=' ')
print()

for x in msg:
    if x.isalpha(): # 알파벳이면 true
        print(x, end='')
print()

tmp='AZ'
for x in tmp:
    print(ord(x)) # ord는 아스키넘버 출력
    

tmp=65
print(chr(tmp)) # A 출력함
ruru=66
print(chr(ruru)) # B 출력함