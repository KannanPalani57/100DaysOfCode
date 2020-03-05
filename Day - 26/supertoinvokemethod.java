class Animal{
    void eat(){
        System.out.println("The Animal is Eating");
    }

   /* void action(){
        eat(); //calling like this also possible in Java.
    }  
    public static void main(String[] args){
        Animal obj = new Animal();
        obj.action();
    }  */
}

class Dog extends Animal{
    void bark(){
        System.out.println("The Animal is Barking");
    }
    void action(){
        super.eat();
        bark();
    }
}

class TestSuper{
    public static void main(String[] args){
        Dog obj = new Dog();    
        obj.action();
        }
}