n = int(input())

found = False
for i in range(2, int(n**0.5) + 1):
    if n % i == 0:
        print(i)
        found = True
        break

if not found:
    print(n)