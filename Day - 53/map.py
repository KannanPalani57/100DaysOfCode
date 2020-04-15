

def addFive(x):
    return x + 1


numbers = [1,2,3,4,5]
mappedList = list(map(addFive, numbers))

print("The mapped list are , "+str(mappedList))

list2 = list(map((lambda x: x+2), numbers))

print(list2)