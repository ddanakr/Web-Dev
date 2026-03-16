class Animal:
    def __init__(self, name, age, sound = "No sound"):
        self.name = name
        self.age = age
        self.sound = sound
    
    def make_sound(self):
        print("Animal makes sound: " + self.sound)

    def get_name(self):
        return self.name
    
    def __str__(self):
        return f"Animal:[name: {self.name} age: {self.age}]"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age)
        self.breed = breed
    
    def get_breed(self):
        return self.breed

    def make_sound(self):
        print("Woof woof")


class Cat(Animal):
    def __init__(self, name, age, food):
        super().__init__(name, age)
        self.food = food
    
    def eat_food(self, meal):
        return meal == self.food
    
    def make_sound(self):
        print("Meow meow")
    