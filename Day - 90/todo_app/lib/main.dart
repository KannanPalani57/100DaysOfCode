import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import "dart:core";
import "Wikepedia.dart";
import "ImplicitAnim.dart";
import "Todo.dart";
import "Cards.dart";

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: ThemeData(
          primarySwatch: Colors.deepPurple,
        ),
        debugShowCheckedModeBanner: false,
        home: DefaultTabController(
            length: 3,
            child: Scaffold(
                resizeToAvoidBottomPadding: false,
                appBar: AppBar(
                  centerTitle: true,
                  title: Text("My Practicing App"),
                  bottom: TabBar(tabs: [
                    Tab(
                      child: Text("To-do",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 16)),
                    ),
                    Tab(
                      child: Text("Cards",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 16)),
                    ),
                    Tab(
                      child: Text("Animate",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 16)),
                    ),
                  ]),
                ),
                body: TabBarView(children: [
                  Todo(),
                  Cards(),
                  Animate(),
                ]))));
  }
}
