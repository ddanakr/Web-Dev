n = int(input())

isPowOf2 = True
while n > 1:
    if n % 2 != 0:
        isPowOf2 = False
        break
    n //= 2

if isPowOf2:
    print("YES")
else:
    print("NO")