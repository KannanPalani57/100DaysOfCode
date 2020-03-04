class Vehicle{
    void status(){
        System.out.println("The Vehicle is Running");
    }
}

class Bike extends Vehicle{
    void status(){
        System.out.println("The Bike is running Safely");
    }

    public static void main(String[] args){
        Bike obj = new Bike();

        obj.status();
    }
}