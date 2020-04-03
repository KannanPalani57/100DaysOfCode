
file = open("txtfile.txt","r+")    #open a file for doing Operations.

# do the stuff with the file

print(file)
print(file.readlines())
contentOfTheFile = file.read(6)

#once it's read one byte, the it's go to the next one.


print(contentOfTheFile)
print(file.read(6))
print(file.read())

write = file.write("I used a write function in Python to write this line..")

#you should close the file after it used.
file.close()  