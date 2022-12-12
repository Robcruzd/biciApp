import React, {Component} from "react";
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet, PixelRatio, TouchableOpacity, Text, Image } from 'react-native';
import Home from "../../screens/home/home";
import SocialNetwork from "../../screens/socialNetwork/socialNetwork";
import { COLOR_GRAY, COLOR_GRAY_DRAK, COLOR_GRAY_MEDIUM, COLOR_SECONDARY } from "../../constants/colors";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { logout } from '../../redux/actions/auth';
import WhoFollow from "../../screens/socialNetwork/whofollow";
import myPublications from "../../screens/socialNetwork/myPublications";

// import CustomIcon from "../customIcons/Index";
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const following = require("../../images/following.png");
const heart = require("../../images/heart.png");
const pointer = require("../../images/pointer.png");
const login = require("../../images/login.png");
const logoutIm = require("../../images/logout.png");
const article = require("../../images/article.png");
const followers = require("../../images/followers.png");
const events = require("../../images/events.png");

class DrawerOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    logout(){
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        this.props.onLogout();
    }

    CustomDrawerContent = (props) => {
        return (
            <DrawerContentScrollView safeArea>
                <View style={{flex:1, flexDirection:'column'}}>
                    <Text style={styles.text_title}>BiciApp</Text>
                    {this.props.user.isLoggedIn ?
                        <View>
                            <TouchableOpacity
                                onPress= { () => this.props.navigation.navigate("whoFollow")}
                                style={{ width: '100%', flexDirection: 'row', alignItems:'center', marginBottom:10, marginTop: 10 }}>
                                <Image
                                        style={styles.image}
                                        source={following}
                                    />
                                <Text style={{fontSize: 15, textAlignVertical: 'center'}}>A quien sigo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress= { () => {}}
                                style={{ width: '100%', flexDirection: 'row', alignItems:'center', marginBottom:10 }}>
                                <Image
                                        style={styles.image}
                                        source={heart}
                                    />
                                <Text style={{fontSize: 15, textAlignVertical: 'center'}}>Salud</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress= { () => {}}
                                style={{ width: '100%', flexDirection: 'row', alignItems:'center', marginBottom:10 }}>
                                <Image
                                        style={styles.image}
                                        source={pointer}
                                    />   
                                <Text style={{fontSize: 15, textAlignVertical: 'center'}}>Rutas</Text>
                            </TouchableOpacity>
                        </View>:null
                    }
                    {this.props.user.isLoggedIn && this.props.user.premium ?
                        <View>
                            <TouchableOpacity
                                onPress= { () => this.props.navigation.navigate("myPublications")}
                                style={{ width: '100%', flexDirection: 'row', alignItems:'center', marginBottom:10 }}>
                                <Image
                                        style={styles.image}
                                        source={article}
                                    /> 
                                <Text style={{fontSize: 15, textAlignVertical: 'center'}}>Mis publicaciones</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress= { () => this.props.navigation.navigate("login")}
                                style={{ width: '100%', flexDirection: 'row', alignItems:'center', marginBottom:10 }}>
                                <Image
                                        style={styles.image}
                                        source={followers}
                                    />  
                                <Text style={{fontSize: 15, textAlignVertical: 'center'}}>Seguidores</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress= { () => this.props.navigation.navigate("login")}
                                style={{ width: '100%', flexDirection: 'row', alignItems:'center', marginBottom:10 }}>
                                <Image
                                        style={styles.image}
                                        source={events}
                                    />  
                                <Text style={{fontSize: 15, textAlignVertical: 'center'}}>Eventos</Text>
                            </TouchableOpacity>
                        </View> : null
                    }
                    {this.props.user.isLoggedIn ?
                        <TouchableOpacity
                            onPress= { () => this.logout()}
                            style={{ width: '100%', flexDirection: 'row', alignItems:'center', marginBottom:10 }}>
                            <Image
                                    style={styles.image}
                                    source={logoutIm}
                                />   
                            <Text style={{fontSize: 15, textAlignVertical: 'center'}}>Cerrar sesión</Text>
                        </TouchableOpacity> :
                        <TouchableOpacity
                            onPress= { () => this.props.navigation.navigate("login")}
                            style={{ width: '100%', flexDirection: 'row', alignItems:'center', marginBottom:10 }}>
                            <Image
                                    style={styles.image}
                                    source={login}
                                />   
                            <Text style={{fontSize: 15, textAlignVertical: 'center'}}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                    }
                </View>
            </DrawerContentScrollView>)
    }

    render () {
        return(
            <Drawer.Navigator drawerContent={(props) => this.CustomDrawerContent(props)} screenOptions={{headerShown: false, gestureEnabled: true, drawerPosition:"right"}}>
                <Stack.Screen name="home" component={Home}/>
                <Drawer.Screen name="socialNetwork" component={SocialNetwork}/>
                <Drawer.Screen name="whoFollow" component={WhoFollow}/>
                <Drawer.Screen name="myPublications" component={myPublications}/>
            </Drawer.Navigator>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(logout());
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DrawerOptions);

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
    },
    image: {
        width: 20, 
        height: 20, 
        marginHorizontal:10
        // borderRadius: 50, 
        // padding:18
    }
});
