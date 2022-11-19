import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
    return (
        <View style={{
            backgroundColor: 'black',
            flex: 1
        }}>
            <Text style={{ color: '#fff' }}>
                Hello Leadistro Drawer
            </Text>
        </View>
    )
}

export default Sidebar