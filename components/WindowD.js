import React from 'react'
import { Text, useWindowDimensions } from 'react-native'

export default function WindowD() {
    const window = useWindowDimensions();
    return (
        <>
            <Text>Window Dimensions</Text>
            <Text>Height: {window.height}</Text>
            <Text>Width: {window.width}</Text>
            <Text>Font scale: {window.fontScale}</Text>
        </>
    )
}
