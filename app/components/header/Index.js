import { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLOR_GRAY_MEDIUM, COLOR_PRIMARY, COLOR_WHITE_W } from "../../constants/colors";

const menu = require('../../images/menu.png');
const user = require('../../images/user.png');

class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View 
                style={styles.viewComponent}>
                <Image
                    style={styles.image}
                    source={user}
                />
                <Text style={styles.textTitle}>Janet Perkins</Text>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.openDrawer()}>
                    <Image
                        style={styles.menu}
                        source={menu}
                    ></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Header;

const styles = StyleSheet.create({
    viewComponent: {
        flex:1, 
        flexDirection:"row", 
        backgroundColor:COLOR_PRIMARY, 
        height:60, 
        alignItems:"center", 
        justifyContent:"space-between",
        paddingHorizontal:10
    },
    image: {
        width: 20, 
        height: 20, 
        borderRadius: 50, 
        backgroundColor: COLOR_GRAY_MEDIUM, 
        padding:18
    },
    textTitle: {
        color:COLOR_WHITE_W
    },
    menu: {
        width: 20, 
        height: 20
    }
})