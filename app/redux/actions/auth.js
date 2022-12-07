import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
var CryptoJS = require("crypto-js");

export const login = (userSession) => {
    var cipherToken = CryptoJS.AES.encrypt(userSession.token, 'zap31k4d3+e51tNEFSiX@o^-2+B[Y').toString();
    var cipherRefreshToken = CryptoJS.AES.encrypt(userSession.refreshToken, 'zap31k4d3+e51tNEFSiX@o^-2+B[Y').toString();
    var expires = userSession.expires_in + new Date().getTime() / 1000;
    let object = {
        birthdate: userSession.birthdate,
        cellPhone: userSession.cellPhone,
        email: userSession.email,
        firstLastName: userSession.firstLastName,
        firstName: userSession.firstName,
        name: userSession.name,
        identification: userSession.identification,
        typeIdentification: userSession.typeIdentification,
        username: userSession.username,
        middleName: userSession.middleName,
        secondLastName: userSession.secondLastName,
        photo: userSession.photo,
        token: cipherToken,
        refreshToken: cipherRefreshToken,
        expires_in: expires,
        matchSdqs: userSession.matchSdqs,
        existSdqs: userSession.existSdqs,
        latitude: userSession.latitude,
        longitude: userSession.longitude,
        address: userSession.address,
        state: userSession.state,
        validationState: userSession.validationState
    };
    AsyncStorage.setItem('USER', JSON.stringify(object));
    return {
        type: 'LOGIN',
        data: object
    };
};

export const logout = () => {
    let object = null;
    if (Platform.OS === 'android') {
        AsyncStorage.multiGet(["recoverPass", "notificationOpened"]).then(response => {
            AsyncStorage.clear();
            response[0][1] ? AsyncStorage.setItem("recoverPass", response[0][1]): null;
            response[1][1] ? AsyncStorage.setItem("notificationOpened", response[1][1]): null;
            AsyncStorage.setItem("uniquekey", JSON.stringify({"value": "true"}));
        })
    } else {
        AsyncStorage.clear();
        AsyncStorage.setItem("uniquekey", JSON.stringify({ "value": "true" }));
    }
    return {
        type: 'LOGOUT',
        data: object
    };
};

export const init = (userSession) => {
    let object = {
        username: userSession.username,
        name: userSession.name,
        firstName: userSession.firstName,
        middleName: userSession.middleName,
        firstLastName: userSession.firstLastName,
        secondLastName: userSession.secondLastName,
        photo: userSession.photo,
        token: userSession.token,
        refreshToken: userSession.refreshToken,
        expires_in: userSession.expires_in,
        identification: userSession.identification,
        typeIdentification: userSession.typeIdentification,
        matchSdqs: userSession.matchSdqs,
        existSdqs: userSession.existSdqs,
        latitude: userSession.latitude,
        longitude: userSession.longitude,
        address: userSession.address,
        birthdate: userSession.birthdate,
        cellPhone: userSession.cellPhone,
        email: userSession.email,
        state: userSession.state,
        validationState: userSession.validationState
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
        firstName: userSession.firstName,
        middleName: userSession.middleName,
        firstLastName: userSession.firstLastName,
        secondLastName: userSession.secondLastName,
        photo: userSession.photo,
        token: userSession.token,
        refreshToken: userSession.refreshToken,
        expires_in: userSession.expires_in,
        identification: userSession.identification,
        typeIdentification: userSession.typeIdentification,
        matchSdqs: userSession.matchSdqs,
        existSdqs: userSession.existSdqs,
        latitude: userSession.latitude,
        longitude: userSession.longitude,
        address: userSession.address,
        birthdate: userSession.birthdate,
        cellPhone: userSession.cellPhone,
        email: userSession.email,
        state: userSession.state,
        validationState: userSession.validationState
    };
    AsyncStorage.setItem('USER', JSON.stringify(object));
    return {
        type: 'LOGIN',
        data: object
    };
};


