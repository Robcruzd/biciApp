import { Component } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Header from "../../components/header/Index";
import ImageButton from "../../components/imageButton/Index";
import { COLOR_WHITE_W } from "../../constants/colors";
import database from '@react-native-firebase/database';

let width = Dimensions.get("window").width;

class WhoFollow extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        if(this.props.user){
            let users = []
            console.log("user:: ",this.props.user);
            this.props.user.follow.forEach( user => {
                database()
                .ref('/users/'+user.username)
                .once('value')
                .then(snapshot => {
                    console.log('User data: ', snapshot.val());
                    users.push(snapshot.val());
                    this.setState({users:users});
                    // this.forceUpdate();
                    console.log("follows: ", this.state.users);
                })
            });
        }
    }

    button = () => {
        console.log("buttons: ", this.state.users);
        return (
            this.state.users.map(user => (
                <ImageButton
                    title={user.name}
                    subtitle={user.typeCyclist}
                    photo={user.photo}
                />
            )))
    }

    render(){
        return(
            <SafeAreaView style={{ flex: 1, backgroundColor: COLOR_WHITE_W }}>
                <Header/>
                <View style={{flexWrap:"wrap", flexDirection:"row"}}>
                    {this.button()}
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(WhoFollow);

const styles = StyleSheet.create({
    containerTitle:{marginTop:20},
    title:{},
    subtitle:{}
})