#Filter Function(Array methods)


numbers = [1,2,3,4,5]


evens = list(filter((lambda num:num%2==0), numbers))
odds = list(filter((lambda num:num%2==1), numbers))

print(evens)
print(odds)