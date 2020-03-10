abstract class Shape{
    abstract void draw();
}

class Ellipse extends Shape{
    void draw(){
        System.out.println("Drawing Ellipse");
    }
}

class Polygon extends Shape{
    void draw(){
        System.out.println("Drawing Polygon");
    }
}

class TestAbstract {
    public static void main(String[] args){
        Shape s = new Ellipse();
        s.draw();
    }
}