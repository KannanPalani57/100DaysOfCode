class A {
    A() {
        System.out.println("Parent Constructor Invokked");
    }
}

class B extends A {
    B() {
        super();
        System.out.println("Child Constructor INvoked");
    }

    B(int a) {
        super();

        System.out.println(a);
    }

    {
        System.out.println("Instance Initializer Invoked");
    }

    public static void main(String[] args) {
        B b = new B();
        B a = new B(3);
    }
}