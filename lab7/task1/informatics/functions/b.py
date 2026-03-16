def power(a, n):
    if n == 0:
        return 1
    if n % 2 == 0:
        return power(a*a, n // 2)
    else:
        return a * power(a, n - 1)


arr = input().split()
a = float(arr[0])
n = int(arr[1])

print(power(a, n))