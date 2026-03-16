from models import Animal, Dog, Cat 

a1 = Dog("Rex", 3, "smth")
a2 = Cat("Murka", 4, "Alice")
a3 = Animal("Bob", 2)

animals = [a1, a2, a3]

for a in animals:
    print(a)
    a.make_sound()