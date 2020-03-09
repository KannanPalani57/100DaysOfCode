class Bike{
    void run(){
        System.out.println("The bike is Standing in the Signal");
    }
}

class Apache extends Bike{
    void run(){
        System.out.println("Now, The Bike is running Safely with 60km Speed");
    }

    public static void main(String[] args){
        //calling the run method by the reference variable of parent class.
        Bike a = new Apache();  //runtime polymorphism
        a.run();
    }
}