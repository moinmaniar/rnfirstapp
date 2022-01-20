import React, { useState } from "react";

import { View, TextInput, Button, Modal, StyleSheet, TouchableOpacity } from "react-native";

const InputItems = (props) => {

  const [currentInput, setInput] = useState();

  const getFunctionGoal = (input) => {
    setInput(input);

  };

  function passAddedItem() {
    //  props.addItem.bind(this, currentInput,2);

    props.addItem(currentInput);
    setInput('');
  };


  return (
    <Modal visible={props.myvisible} animationType="slide">
      <View style={styles.subView}>
        <TextInput style={styles.textStyle}
          placeholder=" Enter the goal item"
          onChangeText={getFunctionGoal}
          value={currentInput} />

        <View style={styles.addBTN}>

          <View style={styles.individualBTN}>

            <Button style={{
              marginTop: 50,
              padding: 10
            }}
              title="Add"
              onPress={passAddedItem} />


          </View>
          <View  style={styles.individualBTN}>
            <Button style={{ marginTop: 10 }} title="cancel" color="red" onPress={props.myonCancel} />
          </View>

        </View>



      </View >
    </Modal>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20, marginTop: 10
  },
  subView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    marginTop: 30,
    marginLeft: 5,
    width: '80%',
    marginRight: 5,
    padding: 10, borderWidth: 1
  },
  addBTN: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-around',
    width: '80%'

  }, 
  individualBTN:
  {
    width:'40%'
  }
})
export default InputItems;
