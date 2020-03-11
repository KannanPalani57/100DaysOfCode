interface Showable{
    void show();
}
interface Printable{
    void print();
}  //multiple inheritance achieved through Interface's Here.
class DoThis implements Printable,Showable{ 
    public void print(){
        System.out.println("Print it");
    }
    public void show(){
        System.out.println("Show it");
    }

    public static void main(String[] args){
        DoThis obj = new DoThis();
        obj.print();
        obj.show();
    }
}