import { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLOR_GRAY_MEDIUM } from "../../constants/colors";

class LargeButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.viewComponent}>
                <TouchableOpacity style={styles.firstTouch}>
                    <Text style={styles.textButton}>Crear publicación</Text></TouchableOpacity>
                <TouchableOpacity style={styles.secondTouch}>
                    <Image
                        style={styles.image}
                        source={require('../../images/mas.png')}
                    ></Image>
                </TouchableOpacity>
            </View>
        );
    }
}

export default LargeButton;

const styles = StyleSheet.create({
    viewComponent:{flexDirection: "row", justifyContent:"center", marginVertical:10},
    firstTouch:{alignItems:"center", justifyContent:"center"},
    textButton: {
        backgroundColor:COLOR_GRAY_MEDIUM,
        borderRadius:20,
        paddingHorizontal:50,
        paddingVertical:2},
    secondTouch: {
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#000000',  
        shadowOpacity: 0.2,  
        shadowRadius: 3, 
        backgroundColor: 'white',  
        borderRadius: 30,
        padding:10,
        elevation: 20,
        marginLeft:-15
    },
    image: {width: 20, height: 20}
})