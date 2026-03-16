m = int(input())
a = set(map(int, input().split()))
n = int(input())
b = set(map(int, input().split()))

res = a.difference(b).union(b.difference(a))

for i in sorted(res):
    print(i)