#Normal add function
def add(a,b):
    return a+b

#Normal Subract Function    
def minus(a,b):
    return a-b

a = add(55,5)
b = minus(50,10)

print(a)
print(b)


print((lambda z: z+3) (3))

#mulitiply with lambda function

m = (lambda x,y: x*y)(3,4)

print(m)


#dividing with lambda function with a variable

divide = lambda x,y: x/y


print(divide(100,5))  #20