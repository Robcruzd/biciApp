const defaultState = {
    isLoggedIn: false,
    username: '',
    name: '',
    email:'',
    premium:false,
    follow:{}
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.data.username,
                name: action.data.name,
                email:action.data.email,
                premium:action.data.premium,
                follow:action.data.follow
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: '',
                name: '',
                email:'',
                premium:false,
                follow:{}
            });
        case 'INIT':
            return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.data.username,
                name: action.data.name,
                email:action.data.email,
                premium:action.data.premium,
                follow:action.data.follow
            });

        default:
            return state;
    }
}
