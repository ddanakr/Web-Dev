n = int(input())

s = 2
while s <= n:
    if n % s == 0:
        print(s)
        break
    else:
        s += 1