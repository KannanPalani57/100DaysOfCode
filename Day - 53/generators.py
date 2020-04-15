def makeWord():
    word = ""
    for ch in "Kannan":
        word = word+ch
        yield word            #Cool, Something happen here.


print(list(makeWord()))
