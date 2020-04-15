def countToFive():
    i = 1
    while i <= 5:
        yield i
        i = i+1

for i in countToFive():
    print(i)