import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/TaskContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const taskPost = state.find(
    taskPost => taskPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>{taskPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;