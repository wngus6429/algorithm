for i in range(5):
    print('i:', i, sep='', end=' ')
    for j in range(5):
        print('j:', j, sep='', end=' ')
    print()
    

for i in range(5):
    for j in range(i+1):
        print('*', end=" ")
    print()
    
print("@@@@@@@@@@@@@@@@")

for i in range(5):
    for j in range(5 - i):
        print("*", end=" ")
    print()