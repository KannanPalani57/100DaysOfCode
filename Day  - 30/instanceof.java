class Simple{
    public static void main(String[] args){
        Simple s = new Simple();
        //Note that the space is not occured in between of the instance & of..
        System.out.println(s instanceof Simple); //returns true or false.
    }
}
class Simple1{
    public static void main(String[] args){
        Simple1 s1 = null;
        System.out.println(s1 instanceof Simple1);
    }
}