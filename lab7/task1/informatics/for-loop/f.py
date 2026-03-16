n = input()
reversed = ""

for i in range(len(n) - 1, -1, -1):
    reversed += n[i]

print(int(reversed))