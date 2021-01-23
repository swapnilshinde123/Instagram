import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Container, Content, Icon, Thumbnail } from "native-base";
import CardComponent from "./CardComponent";

//TouchableOpacity wrapper is used to reduce the opacity of button
import { TouchableOpacity } from "react-native-gesture-handler";

function HomeTab({ navigation }) {
  var storyImages = [
    require("../../assets/Swapnil.jpeg"),
    require("../../assets/Prathmesh.jpeg"),
    require("../../assets/jatin.jpeg"),
    require("../../assets/nikhil.jpg"),
    require("../../assets/StoriesHeaderThumbnails/2.jpg"),
    require("../../assets/StoriesHeaderThumbnails/4.jpg"),
    require("../../assets/StoriesHeaderThumbnails/6.jpg"),
    require("../../assets/StoriesHeaderThumbnails/7.jpg"),
  ];

  var PressHandler = (string) => {
    navigation.navigate("DisplayStories", {
      string: string,
      storyImages: storyImages,
    });
  };
  return (
    <Container style={styles.container}>
      <Content>
        <View style={{ height: 100 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 7,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Stories</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="md-play" style={{ fontSize: 14 }}></Icon>
              <Text style={{ fontWeight: "bold" }}> Watch All</Text>
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingStart: 5,
                paddingEnd: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  PressHandler(0);
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2,
                  }}
                  source={storyImages[0]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  PressHandler(1);
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2,
                  }}
                  source={storyImages[1]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  PressHandler(2);
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2,
                  }}
                  source={storyImages[2]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  PressHandler(3);
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2,
                  }}
                  source={storyImages[3]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  PressHandler(4);
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2,
                  }}
                  source={storyImages[4]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  PressHandler(5);
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2,
                  }}
                  source={storyImages[5]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  PressHandler(6);
                }}
              >
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2,
                  }}
                  source={storyImages[6]}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <CardComponent imageSource="1" likes="101" />
        <CardComponent imageSource="2" likes="201" />
        <CardComponent imageSource="3" likes="301" />
        <CardComponent imageSource="4" likes="401" />
      </Content>
    </Container>
  );
}
export default HomeTab;

const styles = StyleSheet.create({
  containers: {
    justifyContent: "center",
    backgroundColor: "black",
  },
  imageStyle: {
    height: 100,
    width: null,
    flex: 1,
  },
});
