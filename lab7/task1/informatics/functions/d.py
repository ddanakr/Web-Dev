def election(x, y, z):
    cnt1 = 0
    cnt2 = 0
    if x == 1:
        cnt1 += 1
    else:
        cnt2 += 1
    
    if y == 1:
        cnt1 += 1
    else:
        cnt2 += 1

    if z == 1:
        cnt1 += 1
    else:
        cnt2 += 1

    if cnt1 > cnt2:
        return 1
    else:
        return 0
    
x, y, z = map(int, input().split())
print(election(x, y, z))