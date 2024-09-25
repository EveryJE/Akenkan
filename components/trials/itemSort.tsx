import React, { Component } from "react";
import {
  Button,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  UIManager,
  View,
} from "react-native";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const data = [
  { id: "item 1" },
  { id: "item 2" },
  { id: "item 3" },
  { id: "item 4" },
  { id: "item 5" },
  { id: "item 6" },
  { id: "item 7" },
  { id: "item 8" },
  { id: "item 9" },
  { id: "item 10" },
  { id: "item 15" },
  { id: "item 16" },
  { id: "item 17" },
  { id: "item 18" },
  { id: "item 19" },
  { id: "item 20" },
];

export default class PinItemsAtTop extends Component {
  state = { data: data };

  onAction = (item) => {
    const { data } = this.state;
    const newData = [...data];
    const index = newData.findIndex((x) => x.id == item.id);
    newData[index].pinned = !newData[index].pinned;
    LayoutAnimation.easeInEaseOut();
    this.setState({ data: newData });
  };

  renderItem = (item) => {
    return (
      <View key={item.id} style={styles.item}>
        <Text>{item.id}</Text>
        <Button
          title={item.pinned ? "unpin" : "pin"}
          onPress={() => this.onAction(item)}
        />
      </View>
    );
  };

  render() {
    const { data } = this.state;
    const pinnedItems = data.filter((x) => x.pinned);
    const restItems = data.filter((x) => !x.pinned);
    return (
      <View>
        <ScrollView>
          {pinnedItems.length > 0 && (
            <Text style={styles.heading}>Pinned items</Text>
          )}
          {pinnedItems.map((item) => this.renderItem(item))}
          {restItems.length > 0 && (
            <Text style={styles.heading}>All items</Text>
          )}
          {restItems.map((item) => this.renderItem(item))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 1,
    backgroundColor: "#eee",
  },
  heading: {
    marginLeft: 15,
  },
});
