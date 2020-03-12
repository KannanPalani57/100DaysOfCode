interface Print{
    void print();
}

interface Show extends Print{
    void show();
}

class Display implements Show{
    public void print(){
        System.out.println("Print it");
    }
    public void show(){
        System.out.println("Show it");
    }

    public static void main(String[] args){
        Display obj = new Display();
        obj.print();
        obj.show();
    }
}