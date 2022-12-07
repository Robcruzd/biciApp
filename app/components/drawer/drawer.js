import React, {Component} from "react";
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet, PixelRatio, TouchableOpacity, Text } from 'react-native';
import Home from "../../screens/home/home";
import SocialNetwork from "../../screens/socialNetwork/socialNetwork";
import { COLOR_GRAY, COLOR_GRAY_DRAK, COLOR_SECONDARY } from "../../constants/colors";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CustomIcon from "../customIcons/Index";
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

class DrawerOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    CustomDrawerContent = (props) => {
        return (
            <DrawerContentScrollView safeArea>
                <View style={{flex:1, flexDirection:'column'}}>
                    <Text style={styles.text_title}>Invitado SuperCADE</Text>
                    <TouchableOpacity
                        onPress= { () => {}}
                        style={{ width: '100%', flexDirection: 'row', alignItems:'center', marginBottom:5, marginTop: 10 }}>
                        <View style={{ width: 60, height: 40, alignSelf: 'flex-start', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            {/* <CustomIcon name='home_red' style={{ width: 31, height: 30, marginLeft:5 }} /> */}
                        </View>
                        <Text style={{fontSize: 15, textAlignVertical: 'center'}}>Inicio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress= { () => {}}
                        style={{ width: '100%', flexDirection: 'row', alignItems:'center', marginBottom:5 }}>
                        <View style={{ width: 60, height: 40, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                            {/* <CustomIcon name='micuenta' style={{ width: 46, height: 30 }} /> */}
                        </View>
                        <Text style={{fontSize: 15, textAlignVertical: 'center'}}>Mi cuenta</Text>
                    </TouchableOpacity>
                    </View>
            </DrawerContentScrollView>)
    }

    render () {
        return(
            <Drawer.Navigator drawerContent={(props) => this.CustomDrawerContent(props)} screenOptions={{headerShown: false, gestureEnabled: true, drawerPosition:"right"}}>
                <Stack.Screen name="home" component={Home}/>
                <Drawer.Screen name="socialNetwork" component={SocialNetwork}/>
            </Drawer.Navigator>
        );
    }
}

export default DrawerOptions;

const styles = StyleSheet.create({
    tabBar: {
        borderTopColor: COLOR_GRAY,
        backgroundColor: COLOR_GRAY,
        height: 60
    },
    navigationBarStyle: {
        backgroundColor: COLOR_SECONDARY,
    },
    statusBar: {
        backgroundColor: COLOR_SECONDARY,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    text_title:{
        color: COLOR_GRAY_DRAK,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
        flexWrap: 'wrap'
    }
});
