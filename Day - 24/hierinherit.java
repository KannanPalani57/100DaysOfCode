class Animal{
    void introducing(){
        System.out.println("Hey there, look here it is the Animal");
    }
}


class Dog extends Animal{
    void bark(){
        System.out.println("The Dog is barking");
    }
}

class Cat extends Animal{
    void meowing(){
           System.out.println("The Cat is Meowing");
    }
}

class Hierarchical{
    public static void main(String[] args){
        Cat getAction = new Cat();
      //  getAction.bark();
        getAction.introducing();
        getAction.meowing();
    }
}