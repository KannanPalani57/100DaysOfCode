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

class BabyDog extends Dog{
    void weep(){
        System.out.println("It is Weeping Now..Do Something..");
    }
}

class MultipleInheritance{
    public static void main(String[] args){
       Dog obj = new Dog();
       obj.weep();
       obj.bark();
       obj.eat();
    }
}