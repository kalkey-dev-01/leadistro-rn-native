import * as React from 'react'
import { BoxProps } from '@shopify/restyle'
import { Theme } from '@/themes'
import Box from './box'


const Container:React.FC<BoxProps<Theme> & {children:React.ReactNode}> = props => (
    <Box props={...props} ></Box>
)
    
    