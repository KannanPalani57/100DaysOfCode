import 'dart:ui' as prefix0;

import "package:flutter/material.dart";
import "dart:math";
import 'main.dart';

double randomBorderRadius() {
  return Random().nextDouble() * 64;
}

double randomMargin() {
  return Random().nextDouble() * 64;
}

Color randomColor() {
  return Color(0xFFFFFFFF & Random().nextInt(0xFFFFFFFF));
}

class Animate extends StatefulWidget {
  State createState() => AnimateState();
}

class AnimateState extends State<Animate> {
  double borderRadius, margin;
  Color color;

  @override
  void initState() {
    super.initState();
    borderRadius = randomBorderRadius();
    margin = randomMargin();
    color = randomColor();
  }

  var imageUrl =
      "https://www.indiewire.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-10-at-8.23.49-AM.png?w=780";

  double opacity = 0;

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: <Widget>[
          Image.network(imageUrl),
          SizedBox(height: 10.0),
          AnimatedOpacity(
            curve: Curves.easeInOutBack,
            opacity: opacity,
            duration: Duration(seconds: 2),
            child: Text(
              "His name is Simba",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
          ),
          SizedBox(height: 10.0),
          MaterialButton(
            onPressed: () => setState(() {
                  opacity = 1.0;
                }),
            child: Text(
              "Hey!, What's his Name?",
              style: TextStyle(
                  color: Colors.white,
                  fontSize: 14.0,
                  fontWeight: FontWeight.bold),
            ),
            color: Theme.of(context).primaryColor,
          ),
          SizedBox(
            height: 10,
          ),
          SizedBox(
            height: 158,
            width: 158,
            child: Container(
              child: AnimatedContainer(
                margin: EdgeInsets.all(margin),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(borderRadius),
                  color: color,
                ),
                duration: Duration(milliseconds: 400),
                curve: Curves.easeInOutBack,
              ),
            ),
          ),
          SizedBox(
            height: 10,
          ),
          MaterialButton(
            color: Theme.of(context).primaryColor,
            child: Text(
              'Modify It!',
              style: TextStyle(
                  color: Colors.white,
                  fontSize: 14.0,
                  fontWeight: FontWeight.bold),
            ),
            onPressed: () => setState(() {
                  color = randomColor();
                  borderRadius = randomBorderRadius();
                  margin = randomMargin();
                }),
          ),
          SizedBox(
            height: 10.0,
          )
        ],
      ),
    );
  }
}
