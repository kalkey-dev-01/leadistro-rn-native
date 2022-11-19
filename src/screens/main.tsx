import React from 'react'
import { Text, View } from 'react-native'



export default function MainScreen() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{color: '#000'}}>
                Hello World
            </Text>
        </View>
    )
}