import React from "react";

import {
  Text,
  View,
  SafeAreaView,
  Image
} from "react-native"

function App(){
  return(
    <SafeAreaView>
      <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png', }}
        style = {{width: 200, height:200}}
      />
      <View>
        <Text>Hello world!</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;

