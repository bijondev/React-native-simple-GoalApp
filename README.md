# React native simple GoalApp
This is a basic React Native app that implements a to-do list for adding and deleting goals. The app has two main components: App and AddGoalForm.


The App component holds the state for the list of goals, which is stored in the goals state, and the modal visibility, which is stored in the modalVisible state. The component also defines two functions: handleAddGoal and handleDeleteGoal, which are used to add and delete goals from the goals state, respectively.

The AddGoalForm component is a modal that allows the user to enter a new goal and add it to the list of goals. It takes two props: visible and onAddGoal, which are used to control the visibility of the modal and add a new goal to the goals state, respectively.

When the "Add New Goal" button is pressed, the setModalVisible function is called to set the modalVisible state to true, which in turn makes the AddGoalForm modal visible. When the user enters a new goal and presses the "ADD" button, the handleAddGoal function is called to add the new goal to the goals state. The list of goals is displayed using a FlatList component.

The user can also delete a goal by pressing the "X" button next to each goal in the list. This triggers the handleDeleteGoal function, which filters the deleted goal out of the goals state.

![Add Goal](https://raw.githubusercontent.com/bijondev/React-native-simple-GoalApp/master/assets/Screenshot_20230208_153545.png)

![Home Page](https://raw.githubusercontent.com/bijondev/React-native-simple-GoalApp/master/assets/Screenshot_20230208_153501.png)
