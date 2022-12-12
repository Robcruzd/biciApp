import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
// import firebase from '../database/firebase';
import auth from '@react-native-firebase/auth';
import Toast from "react-native-simple-toast";
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';

class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false,
      register: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {

      Alert.alert('Enter details to signin!')
    } else if(!this.state.register) {
      this.setState({
        isLoading: true,
      })
      auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          Toast.showWithGravity("Ha iniciado sesión correctamente", Toast.LONG, Toast.CENTER);
          const username = this.state.email.slice(0, this.state.email.indexOf("@"));
          database()
          .ref('/users/'+username)
          .once('value')
          .then(snapshot => {
              console.log('User data: ', snapshot.val());
              const user = snapshot.val();
              const userSession = {
                username: username,
                name: user.name,
                email:user.email,
                premium:user.premium,
                follow:user.follow
              };
              this.props.onLogin(userSession);
              this.props.navigation.navigate('home')
              this.setState({
                isLoading: false,
              });
          })
          
        })
        .catch(error => {
            if (error.code === 'auth/invalid-email') {
              Toast.showWithGravity("El correo electrónico es inválido", Toast.LONG, Toast.CENTER);
            } else if(error.code === 'auth/user-not-found'){
              Toast.showWithGravity("El correo ingresado no existe", Toast.LONG, Toast.CENTER);
            } else if(error.code === 'auth/worng-password'){
              Toast.showWithGravity("El correo ingresado no existe", Toast.LONG, Toast.CENTER);
            } else {
              Toast.showWithGravity("Tenemos problemas, intenta más tarde", Toast.LONG, Toast.CENTER);
              console.error(error);
            }
            this.setState({
              isLoading: false,
            });
        });
    }else {
      this.setState({
        isLoading: true,
      })
      auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          Toast.showWithGravity("Su usuario ha sido creado y se ha iniciado su sesión", Toast.LONG, Toast.CENTER);
          this.props.navigation.navigate('home');
          this.setState({
            isLoading: false,
          });
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              Toast.showWithGravity("El correo electrónico ya está en uso", Toast.LONG, Toast.CENTER);
            } else if (error.code === 'auth/invalid-email') {
              Toast.showWithGravity("El correo electrónico es inválido", Toast.LONG, Toast.CENTER);
            }  else {
              Toast.showWithGravity("Tenemos problemas, intenta más tarde", Toast.LONG, Toast.CENTER);
              console.error(error);
            }
            this.setState({
              isLoading: false,
            });
        });
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}> 
        {this.state.register ?
          <Text >
            Ingresa tus datos para registrarte
          </Text> :null
        } 
        <TextInput
          style={styles.inputStyle}
          placeholder="Correo Electrónico"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Contraseña"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title= {this.state.register ? "Registrar":"Iniciar sesión"}
          onPress={() => this.userLogin()}
        /> 
        {!this.state.register ?
          <Text 
            style={styles.loginText}
            onPress={() => this.setState({register: true})}>
            No tienes una cuenta? Registrate aquí
          </Text>:
          <Text 
            style={styles.loginText}
            onPress={() => this.setState({register: false})}>
            Ya tengo una cuenta, iniciar sesión
          </Text>
        }                        
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLogin: (userSession) => {
          dispatch(login(userSession));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});