class Character:
  def __init__(self, health, mana, strength, agility):
    self.health = health
    self.age = mana
    self.strength = strength
    self.agility = agility


peter = Character(10, 10, 10, 10)

#print(peter.health)




numerator: int = 100
denominator: str = "a"


try:
     print(numerator + denominator)

except:
    print('An error caught'); 
    print("Error message:")

