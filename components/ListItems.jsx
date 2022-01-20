import React from "react";
import {View, Text,StyleSheet, TouchableOpacity} from "react-native";

 const ListItems = props =>
{ return (

    <TouchableOpacity onPress={props.onDelete}>
    <View style={styles.listStyle}>

            <Text>{props.title}</Text>

    </View>
    </TouchableOpacity>
);
};

const styles = StyleSheet.create({
    listStyle:{
        marginVertical:10,
        padding:10,
        borderColor:"red",
        borderWidth:5,
        backgroundColor:"lightgrey",
      }
});

export default ListItems;