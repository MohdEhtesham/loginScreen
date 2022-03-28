

import React from 'react';
import {
 StyleSheet,SafeAreaView,View,Text,TextInput,TouchableOpacity, Image,Dimensions,ScrollView,ImageBackground,
 
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const App  = () => {
  return (
    <SafeAreaView >
      <ScrollView>

      <View>
        <Image source={require('./letter-m-symbol-round-logo-vector-5665206.jpeg')} style={styles.Image} />
      </View>
      <View>

      </View>
      <View style={styles.container}>
      
        <Text style={styles.title}>Login Now</Text>
        <Text>Please enter the details for log in</Text>
      </View>
      <View>
        <Text style={styles.em}>Email:</Text>
        <TextInput keyboardType="email-address"  style={styles.input} placeholder='john@gami.com'/>
      </View> 
      <View>
        <Text  secureTextEntry={true} style={styles.em  }>Password:</Text>
        <TextInput secureTextEntry={true} style={styles.pass} placeholder='enter your password'/>
      </View>
      <View>
        
        <TouchableOpacity>
          <Text style={styles.forgot}>forgot password?</Text>
        </TouchableOpacity >
      </View>
      <View>
        <TouchableOpacity onPress={() => {
    alert('successfully login');
  }} style={styles.buttoncontainer}>
        <Text style={styles.logintext}>LOGIN</Text>

        </TouchableOpacity>
      </View>
      
      
     
     
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingTop:20,
    justifyContent:'center',
    alignItems: 'center',
  },
  title:{
    textShadowColor:'black',
    fontSize:20,
    fontWeight:'bold',
    
  },
  Image:{
        height:140,
        width:150,
        alignSelf:'center',
        marginTop:10,
        borderRadius:400,
  },
  em:{
    fontSize:15,
    marginTop:20,
  },
  input:{
    borderWidth:1,
    borderColor:'black',
    padding:8,
    borderRadius:10,
    margin:5,
    backgroundColor:'lightgrey',
  },
  pass:{
    borderWidth:1,
    borderColor:'black',
    padding:8,
    borderRadius:10,
    margin:5,
    backgroundColor:'lightgrey',

  },
  forgot:{
    textAlign:'right',
    margin:5,
    fontWeight:'bold',
  },
  buttoncontainer:{
    borderWidth:2,
    marginTop:15,
    alignItems:'center',
    padding:8,
    borderRadius:10,
    margin:5,
    backgroundColor:'lightpink',
    
  
  },
  logintext:{
    fontWeight:'bold',
  }
});

export default App;
