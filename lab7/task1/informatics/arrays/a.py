n = int(input())
arr = list(map(int, input().split()))
res = arr[::2]
print(*res)