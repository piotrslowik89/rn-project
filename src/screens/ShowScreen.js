import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';

const ShowScreen = () =>{
    return(
        <View><Text>ShowScreen</Text></View>
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
  
  export default ShowScreen;