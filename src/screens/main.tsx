import { Box, Container, Text, TouchableOpacity } from '@/atoms'
import HeaderBar from '@/components/headerbar'
import FeatherIcon from '@/components/icon'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback } from 'react'


type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "Main">, NativeStackScreenProps<RootStackParamList>>

export default function MainScreen({ navigation }: Props) {
    const handleSidebarToggle = useCallback(() => {
        navigation.toggleDrawer()
    }, [navigation])
    return (
        <Container justifyContent={'center'} alignItems={'center'}>
            <Text color={'ebony'} fontSize={45}>Leadistro Main Screen</Text>
            <HeaderBar>
                <TouchableOpacity m='xs' p={'xs'} rippleBorderless onPress={handleSidebarToggle}>
                    <FeatherIcon name='menu' size={22} />
                </TouchableOpacity>
                <Box alignItems={'center'} flex={1} ><Text>Leadistro</Text></Box>
                <TouchableOpacity m='xs' p={'xs'} rippleBorderless>
                    <FeatherIcon name='more-vertical' size={22} />
                </TouchableOpacity>
            </HeaderBar>
        </Container>
    )
}