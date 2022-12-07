const defaultState = {
    isLoggedIn: false,
    username: '',
    name: '',
    firstName: '',
    middleName: '',
    firstLastName: '',
    secondLastName: '',
    photo: null,
    token: '',
    refreshToken: '',
    expires_in: null,
    identification: '',
    typeIdentification: '',
    matchSdqs: '',
    existSdqs: '',
    latitude: null,
    longitude: null,
    address: '',
    birthdate: '',
    cellPhone: '',
    email: '',
    state: ''
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.data.username,
                name: action.data.name,
                firstName: action.data.firstName,
                middleName: action.data.middleName,
                firstLastName: action.data.firstLastName,
                secondLastName: action.data.secondLastName,
                photo: action.data.photo,
                token: action.data.token,
                refreshToken: action.data.refreshToken,
                expires_in: action.data.expires_in,
                identification: action.data.identification,
                typeIdentification: action.data.typeIdentification,
                matchSdqs: action.data.matchSdqs,
                existSdqs: action.data.existSdqs,
                latitude: action.data.latitude,
                longitude: action.data.longitude,
                address: action.data.address,
                birthdate: action.data.birthdate,
                cellPhone: action.data.cellPhone,
                email: action.data.email,
                state: action.data.state
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: '',
                name: '',
                firstName: '',
                middleName: '',
                firstLastName: '',
                secondLastName: '',
                photo: '',
                token: '',
                refreshToken: '',
                expires_in: null,
                identification: '',
                typeIdentification: '',
                matchSdqs: '',
                existSdqs: '',
                latitude: null,
                longitude: null,
                address: '',
                birthdate: '',
                cellPhone: '',
                email: '',
                state: ''
            });
        case 'INIT':
            return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.data.username,
                name: action.data.name,
                firstName: action.data.firstName,
                middleName: action.data.middleName,
                firstLastName: action.data.firstLastName,
                secondLastName: action.data.secondLastName,
                photo: action.data.photo,
                token: action.data.token,
                refreshToken: action.data.refreshToken,
                expires_in: action.data.expires_in,
                identification: action.data.identification,
                typeIdentification: action.data.typeIdentification,
                matchSdqs: action.data.matchSdqs,
                existSdqs: action.data.existSdqs,
                latitude: action.data.latitude,
                longitude: action.data.longitude,
                address: action.data.address,
                birthdate: action.data.birthdate,
                cellPhone: action.data.cellPhone,
                email: action.data.email,
                state: action.data.state
            });

        default:
            return state;
    }
}
