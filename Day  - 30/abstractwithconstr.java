abstract class StatusOfBike{
    abstract void run();
    StatusOfBike(){
        System.out.println("The Bike is Started");
    }
    void changeGear(){
        System.out.println("The gear was changed");
    }
}

class TVS extends StatusOfBike{
    void run(){
        System.out.println("The Bike is running Smoothly");
    }
}

class TestIt{
    public static void main(String[] args){
        StatusOfBike status = new TVS();

        status.run();
        status.changeGear();
    }
}