class Animal{
    void eat(){
        System.out.println("The Animal is Eating Now..");
    }
}

class Dog extends Animal{
    void bark(){
        System.out.println("The Dog is Barking Now");
    }
}


class SingleInheritance{
    public static void main(String[] args){
       Dog obj = new Dog();
       obj.bark();
       obj.eat();
    }
}