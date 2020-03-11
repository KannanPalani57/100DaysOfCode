interface Print{
    void print();
}

class Show implements Print{
    public void print(){
        System.out.println("Hello Interface");
    }

    public static void main(String[] args){
        Show obj = new Show();
        obj.print();
    }


}