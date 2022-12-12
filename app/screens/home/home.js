import { Component } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/header/Index";
import { COLOR_BLUE_LINK, COLOR_GREEN_LIGHT, COLOR_ORANGE, COLOR_PURPLE, COLOR_WHITE_W } from "../../constants/colors";
import { connect } from 'react-redux';

class Home extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("user: ", this.props.user);
    }

    goToLogin(){
        this.props.navigation.navigate('login');
    }

    goToSocialNetwork(){
        this.props.navigation.navigate('socialNetwork');
    }

    eventos(){
        if(this.props.user.isLoggedIn){
            if(!this.props.user.premium){
                Alert.alert('Debes comprar un plan premium')
            }else {
                Alert.alert('Funcionalidad en desarrollo');
            }
        }else {
            Alert.alert('Debes iniciar sesión');
        }
    }

    saludyrutas(){
        if(this.props.user.isLoggedIn){
            Alert.alert('Funcionalidad en desarrollo');
        }else {
            Alert.alert('Debes iniciar sesión');
        }
    }

    render() {
        return(
            <SafeAreaView style={styles.safeArea}>
                <Header 
                        isLoggedIn={this.props.user.isLoggedIn}
                        name= {this.props.user.name}
                        navigation={this.props.navigation}    
                    />
                <View style={{ flex: 1 }}>
                    <TouchableOpacity 
                        onPress={() => this.saludyrutas()}
                        style={[styles.touchableLarge, {backgroundColor:COLOR_GREEN_LIGHT}]}><Text style={styles.text}>Tu Salud</Text></TouchableOpacity>
                    <View style={{ flex: 1, flexDirection:"row", backgroundColor: COLOR_WHITE_W }}>
                        <TouchableOpacity 
                            onPress={() => this.goToSocialNetwork()} 
                            style={[styles.touchableShort, {backgroundColor: COLOR_BLUE_LINK }]}><Text style={styles.text}>Red Social</Text></TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.saludyrutas()}
                        style={[styles.touchableShort, { backgroundColor: COLOR_ORANGE, marginRight: 10 }]}><Text style={styles.text}>Rutas</Text></TouchableOpacity>
                    </View >
                    <TouchableOpacity 
                    onPress={() => this.eventos()}
                    style={[styles.touchableLarge, {backgroundColor:COLOR_PURPLE}]}><Text style={styles.text}>Eventos</Text></TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    };
  }

export default connect(mapStateToProps)(Home);

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