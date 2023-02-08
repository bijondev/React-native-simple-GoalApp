import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={props.onDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc"
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default GoalItem;
