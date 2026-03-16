def min(a, b, c, d):
    min = a
    if b < min:
        min = b
    if c < min:
        min = c
    if d < min:
        min = d
    
    return min


arr = list(map(int, input().split()))

print(min(arr[0], arr[1], arr[2], arr[3]))