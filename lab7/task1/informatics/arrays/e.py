n = int(input())
arr = list(map(int, input().split()))

isOkay = False
for i in range(1, n):
    if arr[i - 1] < 0 and arr[i] < 0:
        isOkay = True
    elif arr[i - 1] > 0 and arr[i] > 0:
        isOkay = True

if isOkay:
    print("YES")
else:
    print("NO")