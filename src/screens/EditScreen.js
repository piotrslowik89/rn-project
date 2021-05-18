
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import { Context } from '../context/TaskContext';

import TaskForm from '../components/TaskForm';


const CreateScreen = () =>{
    return(
        <View><Text>IndexScreen</Text></View>
    )
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderTopWidth: 1,
      borderColor: 'gray'
    },
    title: {
      fontSize: 18
    },
    icon: {
      fontSize: 24
    }
  });
  
  export default CreateScreen;