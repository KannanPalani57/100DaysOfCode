interface DoThis{
    //default method in interface.
    default void message(){
        System.out.println("This Method contains Message");
    }

    //static method in interface.
    static int cube(int x){
        return x*x*x;
    }

    void show();
}

class GettingShow implements DoThis{
    public void show(){
        System.out.println("It showing something");
    }

    public static void main(String[] args){
        DoThis obj = new GetttingShow();
        obj.message();
         obj.show();
         System.out.println("The Cube value of 3 is "+ DoThis.cube(3));
    }
} 