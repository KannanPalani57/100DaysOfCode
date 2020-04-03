try:
    x = 0
    print(x)
    print(9/0)
except (ValueError, TypeError):
    print("A Value Error & Type Error Occured")    
except ZeroDivisionError:
    print("An Error occured")
    print("Zero Division Error")
finally:
    print("it runs after it")


    
