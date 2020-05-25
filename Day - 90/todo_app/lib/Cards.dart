import "package:flutter/material.dart";
import "package:http/http.dart" as http;
import "dart:async";
import "dart:convert";

class Cards extends StatefulWidget {
  State createState() => CardsState();
}

class CardsState extends State<Cards> {
  List data;

  Future<String> getData() async {
    var response = await http.get(
        Uri.encodeFull("https://deckofcardsapi.com/api/deck/new/draw/?count=1"),
        headers: {"Accept": "application/json"});

    setState(() {
      var displayData = jsonDecode(response.body);
      data = displayData['cards'];
      print(data[0]['image']);
    });
  }

  @override
  void initState() {
    super.initState();
  }

  Widget build(BuildContext context) {
    return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Container(
            padding: EdgeInsets.fromLTRB(125, 20, 10, 10),
            child: RaisedButton(
              child: Text(
                "Generate a Card",
                style: TextStyle(
                    color: Colors.white,
                    fontSize: 14.0,
                    fontWeight: FontWeight.bold),
              ),
              color: Theme.of(context).primaryColor,
              onPressed: () => getData(),
            ),
          ),
          SizedBox(
            height: 5.0,
          ),
          Expanded(
              child: ListView.builder(
                  itemCount: data == null ? 0 : data.length,
                  itemBuilder: (BuildContext context, int index) {
                    return Column(children: <Widget>[
                      Text(
                        data[index]['code'],
                        style: TextStyle(
                            color: Colors.blueGrey,
                            fontSize: 16.0,
                            fontWeight: FontWeight.bold),
                      ),
                      SizedBox(
                        height: 5.0,
                      ),
                      Image.network(data[index]['image']),
                    ]);
                  }))
        ]);
  }
} //   ListView.builder(
//       itemCount: data == null ? 0 : data.length,
//       itemBuilder: (BuildContext context, index) {
//         return Image.network(data[index]['image']);
//       })
// ]);

//print(data['cards']);
// return ListView.builder(
//     itemCount: data == null ? 0 : data.length,
//     itemBuilder: (BuildContext context, index) {
//       return
//         title: Text(data[index]['image']),
//        ,
//       );
//     });
