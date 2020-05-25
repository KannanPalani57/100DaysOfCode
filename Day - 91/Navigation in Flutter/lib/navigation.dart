import 'package:flutter/material.dart';

final Color darkBlue = Color.fromARGB(255, 18, 32, 47);

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark().copyWith(scaffoldBackgroundColor: darkBlue),
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Center(
          child: AppState(),
        ),
      ),
    );
  }
}

class AppState extends StatefulWidget{
  State createState() => MyWidget();
}

class Person{
   
  int id;
  String name;
  
  Person(this.id, this.name);
  
  
}

class MyWidget extends State<AppState> {
  @override
  Widget build(BuildContext context) {
     return RaisedButton(
     child: Text("Go to Next on"),
       onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (context) => SecondPage(person: Person(5, "Kannan")) )),
     );
  }
}


class SecondPage extends StatelessWidget{
  
  final Person person;
  SecondPage({Key key, @required this.person}): super(key: key);
   Widget build(BuildContext context){
     return Scaffold(
       body: Center(
         child: Column(
           mainAxisAlignment: MainAxisAlignment.center,
         children: <Widget>[Text("${person.name}  and ${person.id}"),
              RaisedButton(
              child: Text("Back to Home"),
                onPressed: () => Navigator.pop(context),
              )
       ]))
     );
   }

}
