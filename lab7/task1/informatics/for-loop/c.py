a = int(input())
b = int(input())

s = int(a**0.5)
if s**2 < a:
    s += 1

e = int(b**0.5)
for i in range(s, e + 1):
    print(i**2, end=' ')