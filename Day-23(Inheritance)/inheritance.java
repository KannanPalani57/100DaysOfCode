class Employe{
   float salary = 40000;
}

class Programmar extends Employe{
    int bonus = 10000;
    public static void main(String[] args){
        Programmar obj = new Programmar();
            //Subclass, accessing the properties of Parent object with its Object.
        System.out.println("The Salary of Employe is "+obj.salary);
        System.out.println("The bonus Money of Programmar is "+obj.bonus);
    }
}