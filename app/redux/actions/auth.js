import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
// var CryptoJS = require("crypto-js");

export const login = (userSession) => {
    // var cipherToken = CryptoJS.AES.encrypt(userSession.token, 'zap31k4d3+e51tNEFSiX@o^-2+B[Y').toString();
    // var cipherRefreshToken = CryptoJS.AES.encrypt(userSession.refreshToken, 'zap31k4d3+e51tNEFSiX@o^-2+B[Y').toString();
    // var expires = userSession.expires_in + new Date().getTime() / 1000;
    console.log("usersession: ",userSession);
    let object = {
        username: userSession.username,
        name: userSession.name,
        email:userSession.email,
        premium:userSession.premium,
        follow:userSession.follow
    };
    AsyncStorage.setItem('USER', JSON.stringify(object));
    return {
        type: 'LOGIN',
        data: object
    };
};

export const logout = () => {
    let object = null;
    AsyncStorage.clear();
    return {
        type: 'LOGOUT',
        data: object
    };
};

export const init = (userSession) => {
    let object = {
        username: userSession.username,
        name: userSession.name,
        email:userSession.email,
        premium:userSession.premium,
        follow:userSession.follow
    };
    AsyncStorage.setItem('USER', JSON.stringify(object));
    return {
        type: 'INIT',
        data: object
    };
};

export const setId = (userSession) => {
    let object = {
        username: userSession.username,
        name: userSession.name,
        email:userSession.email,
        premium:userSession.premium,
        follow:userSession.follow
    };
    AsyncStorage.setItem('USER', JSON.stringify(object));
    return {
        type: 'LOGIN',
        data: object
    };
};


