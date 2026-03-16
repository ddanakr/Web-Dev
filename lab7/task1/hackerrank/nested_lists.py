if __name__ == '__main__':
    students = []
    scores = set()
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
        scores.add(score)
        
    scores_sorted = sorted(scores)
    second_lowest = scores_sorted[1]
    
    for student in sorted(students):
        if student[1] == second_lowest:
            print(student[0])
        