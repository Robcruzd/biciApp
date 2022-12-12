import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerOptions from './components/drawer/drawer';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login/login';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

const store = configureStore();
const Stack = createNativeStackNavigator();
// const store = configureStore();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render () {
        return (
            // <SafeAreaView style={styles.safeArea}>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false, gestureEnabled: true}}>
                    {/* <Scene key="root" navigationBarStyle={styles.navigationBarStyle}> */}
                        {/* <Stack.Screen name="containerGabo" component={ContainerGabo}/> */}
                        <Stack.Screen
                            name="Drawer"
                            component={DrawerOptions}
                            options={{ headerShown: false }}
                        />

                        {/* login */}
                        {/* <Stack.Screen name="home" component={Home}/> */}
                        <Stack.Screen name="login" component={Login}/>
                        {/* <Stack.Screen name="socialNetwork" component={SocialNetwork}/> */}
              
                    {/* </Scene> */}
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
            // </SafeAreaView>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    
});