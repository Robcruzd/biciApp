import { Component } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLOR_BLUE_DARK, COLOR_BLUE_LINK, COLOR_GREEN_LIGHT, COLOR_ORANGE, COLOR_PURPLE, COLOR_WHITE_W,  } from "../../constants/colors";

class Card extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection:"row", backgroundColor: COLOR_WHITE_W }}>
                    <TouchableOpacity style={[styles.touchableShort, {backgroundColor: COLOR_BLUE_LINK }]}><Text style={styles.text}>Red Social</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.touchableShort, { backgroundColor: COLOR_ORANGE, marginRight: 10 }]}><Text style={styles.text}>Rutas</Text></TouchableOpacity>
                </View >
                <TouchableOpacity style={[styles.touchableLarge, {backgroundColor:COLOR_GREEN_LIGHT}]}><Text style={styles.text}>Tu Salud</Text></TouchableOpacity>
                <View style={{ flex: 1, flexDirection:"row", backgroundColor: COLOR_WHITE_W }}>
                    <TouchableOpacity style={[styles.touchableShort, {backgroundColor: COLOR_BLUE_LINK }]}><Text style={styles.text}>Red Social</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.touchableShort, { backgroundColor: COLOR_ORANGE, marginRight: 10 }]}><Text style={styles.text}>Rutas</Text></TouchableOpacity>
                </View >
                <TouchableOpacity style={[styles.touchableLarge, {backgroundColor:COLOR_PURPLE}]}><Text style={styles.text}>Eventos</Text></TouchableOpacity>
            </View>
        );
    }
}

export default Card;

const styles = StyleSheet.create({
    safeArea:{
        flex: 1, 
        backgroundColor: COLOR_WHITE_W
    },
    viewGeneral: {
        flex: 1
    },
    touchableLarge: {
        margin:10,
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 2,
        borderColor: "#edeef0",
        shadowColor: "#edeef0",
        shadowOffset: {
            width: 2,
            height: -2
        },
        elevation: 5,
        padding: 10
    },
    touchableShort: {
        marginLeft:10,
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 2,
        borderColor: "#edeef0",
        shadowColor: "#edeef0",
        shadowOffset: {
            width: 2,
            height: -2
        },
        elevation: 5,
        padding: 10
    },
    text:{
        fontSize:30,
        color: COLOR_WHITE_W
    }
    
})