b = input()[::-1]
n = 0
for i in range(len(b)):
    if b[i] == '1':
        n += pow(2, i)
print(n)
