import { CardItem } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";

export default function App({ navigation }) {
  var [fullPath, setFullPath] = useState("");

  var path = {
    str: navigation.state.params.string,
  };

  useEffect(() => {
    setFullPath(navigation.state.params.storyImages[path.str]);
    var id = setInterval(change, 3000);
    function change() {
      path.str = path.str + 1;
      if (path.str >= navigation.state.params.storyImages.length) {
        clearInterval(id);
        navigation.navigate("HomeTab");
      } else {
        setFullPath(navigation.state.params.storyImages[path.str]);
      }
    }
  }, []);
  return (
    <View style={styles.containers}>
      <View style={styles.backGround}></View>
      <CardItem cardBody>
        <Image source={fullPath} style={styles.imageStyle} />
      </CardItem>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    justifyContent: "center",
    flex: 1,
  },
  backGround: {
    backgroundColor: "#4CAF50",
    width: 80,
    height: 30,
    position: "absolute",
  },
  imageStyle: {
    height: 500,
    width: null,
    flex: 1,
  },
});
