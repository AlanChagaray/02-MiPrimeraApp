import React from 'react'
import { Dimensions, View, StyleSheet, Text, useWindowDimensions } from 'react-native'

export const DimensionScreen = () => {

    const { width , height } = useWindowDimensions();

    return (
    <View >
        <View style={styles.container}>
            <View style={styles.CajaVioleta}/>
            <View style={{...styles.CajaGreen, width: width * 0.5}}/>
        </View>
        <Text>W: {width} , H: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 200,
        backgroundColor: 'red'
    },
    CajaGreen: {
        backgroundColor: 'green',
        width : '50%',
        height : '50%'
    },
    CajaVioleta : {
        width : '50%',
        height : '50%'
    }
})
