class Animal{
    String skinColor = "black";
}

class Dog extends Animal{
    String skinColor = "Gray";

    void showSkinColor(){
        System.out.println(skinColor);
        System.out.println(super.skinColor); //refers the parent class instance variable.
    }
}



class SuperKeyword{
    public static void main(String[] args){
        Dog obj= new Dog();
        obj.showSkinColor();
    }
}