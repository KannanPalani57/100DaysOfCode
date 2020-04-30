import "package:flutter/material.dart";
import "dart:convert";

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.deepPurple,
      ),
      home: HomePage());
  }
}


class HomePage extends StatefulWidget{
  State createState() => HomePageState(); 
}

class HomePageState extends State<HomePage>{
  List data;
   @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
         title: Text("Working With Local JSON",),
       centerTitle: true,
       ),
      body: Container(
          child: Center(
            child: FutureBuilder(
              future: DefaultAssetBundle  
              .of(context)
              .loadString('load_json/person.json'),
              builder: (context, snapshot){
                var myData = json.decode(snapshot.data.toString());

                return ListView.builder(
                  itemBuilder: (BuildContext context, int index){
                    return Card(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          Text("Name "+myData[index]['name']),
                          Text("Age "+myData[index]['age']),
                          Text("Height "+myData[index]['height']),
                          Text("Hair-Color "+myData[index]['hair-color']),
                        ],
                      ),
                    );
                  },
                  itemCount: myData == null?0: myData.length,
                  );
              }
            ),
          )
      )
    );
  }
}