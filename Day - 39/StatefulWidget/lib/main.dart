import "package:flutter/material.dart";
import 'practice_state.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: ThemeData(
          primarySwatch: Colors.deepPurple,
        ),
        title: "Fractice With Flutter",
        home: Scaffold(
          appBar: AppBar(
            title: Text("NumbersApp"),
            centerTitle: true,
          ),
          body: StateApp(),
        ));
  }
}
