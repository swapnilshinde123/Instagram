import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from "native-base";

class CardComponent extends Component {
  render() {
    const images = {
      1: require("../../assets/feed_images/1.jpg"),
      2: require("../../assets/feed_images/2.jpg"),
      3: require("../../assets/feed_images/3.jpg"),
      4: require("../../assets/feed_images/4.jpeg"),
    };
    const thumbnailImages = {
      1: require("../../assets/Swapnil.jpeg"),
      2: require("../../assets/Prathmesh.jpeg"),
      3: require("../../assets/nikhil.jpg"),
      4: require("../../assets/jatin.jpeg"),
    };
    const Name = {
      1: "Swapnil shinde",
      2: "Prathmesh Kulkarni",
      3: "Nikhil Ramrakhyani",
      4: "Jatin Udasi",
    };
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={thumbnailImages[this.props.imageSource]} />
            <Body>
              <Text>{Name[this.props.imageSource]} </Text>
              <Text note>1 Nov 2020</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>

              <Ionicons name="md-heart" size={24} color="black" />

            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={{ color: "black" }} />

            </Button>
            <Button transparent>
              <Icon name="ios-send-outline" style={{ color: "black" }} />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{ height: 20 }}>
          <Text>{this.props.likes} likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              {Name[this.props.imageSource]} We all are Front-End developers,
              Here i am putting random things that i don't know. Hope you like
              our project☺️❤️
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
export default CardComponent;
