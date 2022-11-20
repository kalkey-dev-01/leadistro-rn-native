import { Box, Container, Text, TouchableOpacity } from '@/atoms'
import HeaderBar from '@/components/headerbar'
import FeatherIcon from '@/components/icon'
import React from 'react'




export default function MainScreen() {
    return (
        <Container justifyContent={'center'} alignItems={'center'}>
            <Text color={'ebony'} fontSize={45}>Leadistro Main Screen</Text>
            <HeaderBar>
                <TouchableOpacity m='xs' p={'xs'} rippleBorderless>
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