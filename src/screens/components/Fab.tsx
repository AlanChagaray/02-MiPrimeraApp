import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View , Platform } from 'react-native'

interface Props {
    title : string,
    position ?: 'bl' | 'br',
    onPress: () => void;
}

export const Fab = ({title , onPress, position='br'}: Props) => {

    const ios = () => {
        return (<TouchableOpacity 
            onPress={onPress}
            style = { 
                [   styles.fabPosition ,
                (position === 'bl')? styles.fabLeft: styles.fabRight ]}>
            <View style={ styles.fab }>
                <Text style= { styles.fabText }>{title}</Text>
            </View>
        </TouchableOpacity>)
    }

    const android =() => {
        return (<View
            style = { 
                [   styles.fabPosition ,
                (position === 'bl')? styles.fabLeft: styles.fabRight ]}>
            <TouchableNativeFeedback 
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple('white',false, 30)}>
            <View style={ styles.fab }>
                <Text style= { styles.fabText }>{title}</Text>
            </View>
            </TouchableNativeFeedback>
        </View>)
    }

    return ( Platform.OS === 'android') ? android() : ios();

}

const styles = StyleSheet.create({
    fabPosition :{
        position: 'absolute',
        bottom: 25,
    }, 
    fabRight :{ right: 25},
    fabLeft :{ left: 25},
    fab : {
        backgroundColor : 'blue',
        width : 60,
        height : 60,
        borderRadius : 100,
        justifyContent: 'center'
        ,shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
    },
    fabText : {
        color : 'white',
        fontSize : 25,
        fontWeight : 'bold',
        alignSelf : 'center'
    }
})