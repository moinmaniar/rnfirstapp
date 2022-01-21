// import { StatusBar } from 'expo-status-bar';
// import { Alert, StyleSheet, Text, View ,Button, TextInput,Image } from 'react-native';


//  function App() {
//     return (
//         <View style = {styles.container}>
//         <Text allowFontScaling ={true}> Hello world </Text>
//       <StatusBar style = "auto"/>
//       <Text style= {styles.steelblue}>created by moin</Text>
//       <Separator />
//      <Button title='click me'
//      onPress={()=> {Alert.alert('you clicked the button')}}
//      color="#ff0000"
//      />
//      <Separator/>
//       <TextInput  numberOfLines={3}
//                     style={{height: 100,backgroundColor: 'azure', fontSize: 10}}  
//                     placeholder="Enter your Email " 


//                 />  

//                 <Image source={require("./assets/favicon.png")}/>
//                 {/* <FlatList
//   ItemSeparatorComponent={
//     Platform.OS !== 'android' &&
//     (({ highlighted }) => (
//       <View
//         style={[
//           style.separator,
//           highlighted && { marginLeft: 0 }
//         ]}
//       />
//     ))
//   }
//   data={[{
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   }]}
//   renderItem={({ item, index, separators }) => (
//     <TouchableHighlight
//       key={item.key}
//       onPress={() => this._onPress(item)}
//       onShowUnderlay={separators.highlight}
//       onHideUnderlay={separators.unhighlight}>
//       <View style={{ backgroundColor: 'white' }}>
//         <Text>{item.title}</Text>
//       </View>
//     </TouchableHighlight>
//   )}
// /> */}
//     </View>    
//     );
// }

// const Separator = () => (
//     <View style={styles.separator} />
//   );

// const styles = StyleSheet.create({
//     steelblue: {
//         color: "steelblue",
//       },
//       separator: {
//         marginVertical: 20,
//         borderBottomColor: '#737373',
//         borderBottomWidth: StyleSheet.hairlineWidth,
//       },
//     container: {
//         flex: 1,
//         backgroundColor: '#fff000',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

// export default App;





// function App(){
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const [currentState, updatedState] = useState("hello moin")
//   return(
//   <View style={styleqq.container}>
//      <StatusBar style="auto" />

//  <TextInput style={styleqq.textInputStyle}
//  placeholder='Email'
//  placeholderTextColor='#ffffff'
//  onChangeText={(email) => setEmail(email)}/>


//  <TextInput style={styleqq.textInputStyle}
//  placeholder='Password'
//  placeholderTextColor='#ffffff'
//  secureTextEntry={true}
//  onChangeText={(password) => setPassword(password)}/>

// <TextInput style={styleqq.textInputStyle}
//  placeholder='Confirm password'
//  placeholderTextColor='#ffffff'
//  secureTextEntry={true}/>

//  {/* <Button style={styleqq.btnLogin} title='Register'
//  /> */}

//  <TouchableOpacity>
//    <Text style={styleqq.btnLogin} onPress={() =>Alert.alert(" you show do further steps...",message,
//          [
//           {
//             text: "Cancel",
//             onPress: () => console.log("Cancel Pressed"),
//             style: "cancel"
//           },
//           { text: "OK", onPress: () => console.log("OK Pressed") },
//           { onPress: () => console.log("my handmade button"), text: " hand-made"}
//         ]
//   )}>Login</Text>
//  </TouchableOpacity>
// <Text style ={styleqq.container}>{currentState}</Text>
//  <Button title="please press me"onPress={() => updatedState('hello moin maniar. this is the updated state')}/> 
//   </View>

//   );
// }
//  var message = " finally you got string"
// const myToastApp = () =>  {
// ToastAndroid.showWithGravity("button with gravity",ToastAndroid.LONG,0)
// }

//  function Mylist()
// {
// return(

//   <View style={styleqq.container}>
//     <FlatList data={[
//       {key: 'moin'},
//       {key: 'maniar'},
//       {key: 'peter'},
//       {key: 'mark'},
//       {key: 'eddie'},
//     ]}

//     renderItem={({item}) => <Text style={styleqq.container}>{item.key}</Text>}
//     />
//   </View>
// );
// }

// const styleqq = StyleSheet.create({

//   container:{
// flexGrow:1,
// padding:33,
// alignItems:'center',
// justifyContent:'center',
// //marginTop:40,
//   },

//   textInputStyle: {
//     height: 40,
//     width: "70%",
//     margin: 15,
//     padding: 10,
//     borderRadius:30,
//     backgroundColor: '#ff0000',
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   btnLogin:{
//     width: "80%",
//     height: 50,
//     backgroundColor: "#FF1493",

//   }
// });

// export default App;


import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, StyleSheet, ToastAndroid, Alert, Text, TouchableOpacity, Button, TextInput, FlatList, ScrollView } from 'react-native';
import ListItems from './components/ListItems';
import { registerRootComponent } from 'expo';
import InputItems from './components/InputItems';



export default App = () => {

  //const [gotGoal, updatedGoal] = useState();
  const [currentGoal, updatedArrayGoal] = useState([]);
  const [isVisible, setIsVisible] = useState(false);



  const printValueInConsole = (receiveInputFromInputItems, x) => {
    //  console.log(x)  

    if(receiveInputFromInputItems.length === 0 ){
      return null;
    }
    else{
    updatedArrayGoal([
      ...currentGoal,
      { id: Math.random().toString(), value: receiveInputFromInputItems }
    ]); // made an empty array and done no changes in it(passed ...currentGoal). Thereafter,
    // added gotGoal which is our "string"

    setIsVisible(false);
  }
  };

  const deleteId = (goalId) => {
    updatedArrayGoal((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== goalId) // all ids in goal.id
    })
  }

  const onClickCancel = () => {
    setIsVisible(false);
  }

  return (


    <View style={styles.mainContainer}>

      <StatusBar
        backgroundColor="#b3e6ff"
        barStyle="light-content"
        hidden={false}
        translucent={true}
      />


      <Button title='Add Item' onPress={() => setIsVisible(true)} />


      <InputItems addItem={printValueInConsole} myvisible={isVisible} myonCancel={onClickCancel} />

      <View>

        <FlatList data={currentGoal}
          renderItem={(myItem) => (
            <ListItems onDelete={deleteId.bind(this, myItem.item.id)} title={myItem.item.value} />
          )
          } />

      </View>

    </View>

  );

}


const styles = StyleSheet.create({
  mainContainer: {
    padding: 20, marginTop: 10
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textStyle: {
    marginTop: 30,
    marginLeft: 5,
    width: '80%',
    marginRight: 5,
    padding: 10, borderWidth: 1
  },

})

registerRootComponent(App);