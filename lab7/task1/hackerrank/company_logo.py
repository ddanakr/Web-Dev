if __name__ == '__main__':
    s = input()
    chars = {}
    
    for c in s:
        chars[c] = chars.get(c, 0) + 1
        
    sorted_dict = sorted(chars.items(), key = lambda x: (-x[1], x[0]))

    for x, y in sorted_dict[:3]:
        print(x, y)