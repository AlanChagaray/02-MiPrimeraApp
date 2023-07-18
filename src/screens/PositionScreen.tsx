import React  from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaNaranja}></View>
        <View style={styles.cajaRoja}></View>
        <View style={styles.cajaVerde}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    cajaRoja: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaNaranja: {
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: 'white',
        ...StyleSheet.absoluteFillObject
    }
})
