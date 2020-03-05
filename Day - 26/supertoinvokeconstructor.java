class Animal{
    Animal(){
            System.out.println("The Animal is created");
    }
}

class DogClass extends Animal{
    DogClass(){
        super();
        System.out.println("The DogClass is created");
    }

   public static void main(String[] args){
       DogClass obj = new DogClass();
   }

}


