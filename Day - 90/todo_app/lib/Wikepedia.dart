import 'package:flutter/material.dart';
import 'package:dartpedia/dartpedia.dart' as wiki;
import "package:http/http.dart";

class Wikipedia extends StatefulWidget {
  State createState() => DataState();
}

class DataState extends State<Wikipedia> {
  // Future<String> get() async {}

  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      child: Text("Hello Wikipedia Page"),
      onPressed: () async {
        var relatedTopics = await wiki.search('California');
        print(relatedTopics);
      },
    );
  }
}
