import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Modal,
  Alert
} from "react-native";

const AddGoalForm = props => {
  const [goal, setGoal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleGoalInput = enteredGoal => {
    setGoal(enteredGoal);
  };

  const handleAddGoal = () => {
    if (!goal) {
      Alert.alert("Error", "Goal cannot be empty", [
        { text: "Okay", style: "default" }
      ]);
      return;
    }
    props.onAddGoal(goal);
    setModalVisible(false);
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Add New Goal</Text>
        <TextInput
          style={styles.input}
          placeholder="Goal"
          onChangeText={handleGoalInput}
          value={goal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 22,
    marginBottom: 10
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default AddGoalForm;
