class Bike {
    Bike() {
        System.out.println("The Bike Speed is " + speed);
    }

    int speed;

    {
        speed = 200;
    }

    public static void main(String[] args) {
        Bike b1 = new Bike();
        Bike b2 = new Bike();
    }
}
