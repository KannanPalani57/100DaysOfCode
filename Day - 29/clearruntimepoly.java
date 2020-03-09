//clear understanding of runtime polymorphism
 
class Animal{
    void eat(){
        System.out.println("The Animal is Eating");
    }
}

class Tiger extends Animal{
    void eat(){
        System.out.println("The tiger is eating");
    }
}

class BabyTiger extends Tiger{
    public static void main(String[] args){
        Animal a;
        a = new BabyTiger();
        a.eat();
    }
}