
class Animal:
    def move(self):
        pass 

class Dog(Animal):
    def move(self):
        print("The dog runs 🐕")

class Bird(Animal):
    def move(self):
        print("The bird flies 🦅")


class Fish(Animal):
    def move(self):
        print("The fish swims 🐠")


dog = Dog()
bird = Bird()
fish = Fish()


animals = [dog, bird, fish]

for animal in animals:
    animal.move()  
