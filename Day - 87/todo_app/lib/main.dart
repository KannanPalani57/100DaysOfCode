import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import "dart:core";

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  State createState() => MyAppState();
}

class MyAppState extends State<MyApp> {
  List<String> list = new List<String>();

  final controller = TextEditingController();

  void dispose() {
    controller.dispose();
    super.dispose();
  }

  void updateTodo() {
    setState(() {
      list.add(controller.text);
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
            resizeToAvoidBottomPadding: false,
            body: Padding(
                padding: EdgeInsets.fromLTRB(8.0, 8, 8, 8),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      SizedBox(height: 50),
                      Container(
                          padding: EdgeInsets.only(left: 105.0),
                          child: Text(
                            "Todo-App",
                            textAlign: TextAlign.justify,
                            style: TextStyle(
                              color: Colors.pink,
                              fontSize: 30.0,
                              fontWeight: FontWeight.bold,
                            ),
                          )),
                      SizedBox(
                        height: 10,
                      ),
                      Container(
                        padding: EdgeInsets.fromLTRB(30, 1, 10, 20),
                        child: Text(
                          "Hurry, Put your Todo & Start Work Now...",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.grey,
                            fontSize: 15,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      SizedBox(
                        height: 5.0,
                      ),
                      Container(
                        padding: EdgeInsets.fromLTRB(135, 0, 30, 5),
                        child: Text("Add a Event"),
                      ),
                      SizedBox(
                        height: 5.0,
                      ),
                      Container(
                        decoration: BoxDecoration(
                            color: Color(0XFFEFF3F6),
                            borderRadius: BorderRadius.circular(10.0),
                            boxShadow: [
                              BoxShadow(
                                color: Color.fromRGBO(0, 0, 0, 0.1),
                                offset: Offset(6, 2),
                                blurRadius: 6.0,
                                spreadRadius: 3.0,
                              ),
                              BoxShadow(
                                  color: Color.fromRGBO(255, 255, 255, 0.9),
                                  offset: Offset(-6, -2),
                                  blurRadius: 6.0,
                                  spreadRadius: 3.0)
                            ]),
                        child: TextField(
                          controller: controller,
                          decoration: InputDecoration(
                              border: InputBorder.none,
                              contentPadding: EdgeInsets.all(17.0),
                              hintText: "Type Your Next Activity & Finish It"),
                        ),
                      ),
                      SizedBox(
                        height: 20.0,
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Container(
                              padding: EdgeInsets.all(0),
                              child: Center(
                                child: RaisedButton(
                                  shape: StadiumBorder(),
                                  child: Text("Add Action"),
                                  color: Colors.pink,
                                  textColor: Colors.white,
                                  padding: EdgeInsets.fromLTRB(43, 20, 43, 20),
                                  onPressed: () => updateTodo(),
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                      Container(
                        padding: EdgeInsets.fromLTRB(117.0, 14.0, 5, 5),
                        child: Text("Activities Left",
                            style: TextStyle(
                              fontSize: 17.0,
                              color: Colors.grey,
                            )),
                      ),
                      SizedBox(
                        height: 1.0,
                      ),
                      Expanded(
                          child: ListView.builder(
                              itemCount: list.length,
                              itemBuilder: (BuildContext context, int index) {
                                var item = list[index];
                                return Dismissible(
                                    key: Key(item),
                                    onDismissed: (direction) {
                                      setState(() {
                                        list.removeAt(index);
                                      });
                                      Scaffold.of(context).showSnackBar(
                                          SnackBar(
                                              content:
                                                  Text('$item dismissed')));
                                    },
                                    background: Container(color: Colors.red),
                                    child: ListTile(
                                      title: Text('$item',
                                          style: TextStyle(fontSize: 25.0)),
                                      subtitle: Text(
                                        "Swipe it to remove ",
                                      ),
                                      trailing:
                                          Icon(Icons.keyboard_arrow_right),
                                    ));
                              }))
                    ]))));
  }
}
