import "package:flutter/material.dart";
import 'request_app.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Http Requests App",
      theme: ThemeData(
        primarySwatch: Colors.orange,
      ),
      home: RequestApp(),
    );
  }
}
