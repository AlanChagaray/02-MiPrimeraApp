import React from 'react'
import { View , StyleSheet } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.cajaMorada}></View>
        <View style = {styles.cajaNaranja}></View>
        <View style = {styles.cajaAzul}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        //justifyContent: 'center' ,// TAREA 2
        //flexDirection: 'row',
        //justifyContent:'space-evenly',
    },
    cajaMorada: {
        //alignSelf:'flex-end', //TAREA 2
        //top: 0,
        //right: 0,
        //top:50,

        width: 100,
        height:100,
        //height: 700,
        backgroundColor: 'violet',
        borderWidth: 10,
        borderColor: 'white'
    },
    cajaNaranja: {
        //left:150,
        //top:50,
        
        width: 100,
        height:100,
        //height: 700,
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: 'white'
    },
    cajaAzul: {
        //alignSelf:'center', //TAREA 2
        //position: 'absolute',
        //bottom: 0,
        //top:50,
        
        width: 100,
        height:100,
        //height: 700,
        backgroundColor: 'blue',
        borderWidth: 10,
        borderColor: 'white'
    }
})
