import React, { useState } from "react";
import { View, FlatList, StyleSheet, Alert, Button } from "react-native";
import AddGoalForm from "./components/AddGoalForm";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddGoal = goalTitle => {
    setGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
    setModalVisible(false);
  };

  function setModalVisibleShow() {
    setModalVisible(true);
  }

  const handleDeleteGoal = goalId => {
    Alert.alert("Delete Goal", "Are you sure you want to delete this goal?", [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setGoals(currentGoals => {
            return currentGoals.filter(goal => goal.key !== goalId);
          });
        }
      }
    ]);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={setModalVisibleShow} />
      <AddGoalForm
        visible={modalVisible}
        onAddGoal={handleAddGoal}
        onCancel={() => setModalVisible(false)}
      />
      <FlatList
        data={goals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            onDelete={() => handleDeleteGoal(itemData.item.key)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

export default App;
