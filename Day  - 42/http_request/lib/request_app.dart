import "package:flutter/material.dart";
import 'dart:async';
import "package:http/http.dart" as http;
import 'dart:convert';

class RequestApp extends StatefulWidget {
  State createState() => RequestAppState();
}

class RequestAppState extends State<RequestApp> {
  String url = "https://randomuser.me/api/?results=13";

  List data;

  Future<String> doRequest() async {
    var response = await http
        .get(Uri.encodeFull(url), headers: {"Accept": "application/json"});

    //print(response.body);

    setState(() {
      var displayData = jsonDecode(response.body);
      data = displayData['results'];
    });

    // print(data[0]['name']['first']);
  }

  @override
  void initState() {
    this.doRequest();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Making HTTP Requests"),
        centerTitle: true,
      ),
      body: Center(
        child: ListView.builder(
            itemCount: data == null ? 0 : data.length,
            itemBuilder: (BuildContext context, index) {
              return ListTile(
                title: Text(data[index]['name']['first']),
                subtitle: Text(data[index]['phone']),
                leading: CircleAvatar(
                    backgroundImage:
                        NetworkImage(data[index]['picture']['thumbnail'])),
                onTap: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (BuildContext context) =>
                              FetchData(data[index])));
                },
              );
            }),
      ),
    );
  }
}

class FetchData extends StatelessWidget {
  FetchData(this.data);
  final data;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Show Name"),
          centerTitle: true,
        ),
        body: Center(
          child: Container(
            width: 150.0,
            height: 150.0,
            decoration: BoxDecoration(
              color: const Color(0xff7c94b6),
              image: new DecorationImage(
                  image: NetworkImage(data["picture"]["large"]),
                  fit: BoxFit.cover),
              borderRadius: BorderRadius.all(new Radius.circular(4.0)),
            ),
          ),
        ));
  }
}
