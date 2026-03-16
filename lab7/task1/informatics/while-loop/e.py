n = int(input())

base = 1
cnt = 0
while True:
    if base >= n:
        print(cnt)
        break
    else:
        base *= 2
        cnt += 1