abstract class OurBike{
    abstract void run();
}

class Honda extends OurBike{
    void run(){
        System.out.println("The bike is running safely");
    }
    public static void main(String[] args){
        OurBike a = new Honda();
        a.run();
    }
}