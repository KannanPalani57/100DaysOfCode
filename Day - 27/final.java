final class FinalClass { // final class declaration
    final int MYFAVNUMBER = 5; // final variable declaration

    final void showFavNumber() { // final method declaration
        System.out.println(MYFAVNUMBER);
    }

    // final means that values can't be changed.
    public static void main(String[] args) {
        FinalClass obj = new FinalClass(); // object creation here
        obj.showFavNumber(); // calling the final method here.
    }
}