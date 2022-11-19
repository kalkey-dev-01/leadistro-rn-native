import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {Text,View} from 'react-native'
 
const App = () => {
return (
    <NavigationContainer>
        <View style={{
           backgroundColor: '#fff',
           flex:1,
           justifyContent:'center',
           alignItems:'center'
        }}>
            <Text style={{color:'#000'}}>
                Hello Leadistro
            </Text>
        </View>
    </NavigationContainer>
)
}

export default App