import "package:flutter/material.dart";

class StateApp extends StatefulWidget {
  State createState() => StateAppUI();
}

class StateAppUI extends State<StateApp> {
  int number = 0;

  void addIt() {
    setState(() {
      number++;
    });
  }

  void minusIt() {
    setState(() {
      number--;
    });
  }

  void clearIt() {
    setState(() {
      number = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
            Text(
              "Choose What I Want To Do!!",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 25.0,
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Text(
              "The Number is $number",
              style: TextStyle(fontSize: 17.0, fontWeight: FontWeight.bold),
            ),
            SizedBox(
              height: 20.0,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                RaisedButton(
                  textColor: Colors.white,
                  color: Colors.deepOrange,
                  child: Text("Increment it!"),
                  onPressed: addIt,
                ),
                SizedBox(
                  width: 15.0,
                ),
                RaisedButton(
                  textColor: Colors.white,
                  color: Colors.deepPurple,
                  child: Text("Decrement it!"),
                  onPressed: minusIt,
                ),
                SizedBox(
                  width: 15.0,
                ),
                RaisedButton(
                  textColor: Colors.white,
                  color: Colors.green,
                  child: Text("Clear it!"),
                  onPressed: clearIt,
                ),
              ],
            )
          ])),
    );
  }
}
