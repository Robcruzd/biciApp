import { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Card from "../../components/card/Index";
import Header from "../../components/header/Index";
import LargeButton from "../../components/largeButton/Index";
import { COLOR_WHITE_W } from "../../constants/colors";
import database from '@react-native-firebase/database';
import { connect } from "react-redux";

class MyPublications extends Component {

    constructor(props){
        super(props);
        this.state={
            publications:[]
        }
    }

    componentDidMount(){
        database()
        .ref('/users/'+this.props.user.username+"/publications")
        .once('value')
        .then(snapshot => {
            console.log('User data: ', snapshot.val());
            this.setState({publications: snapshot.val()});
        })
    }

    cards = () => {
        return (
            this.state.publications.map((publication, index) => (
                <Card 
                    key = {index}
                    user={publication.user}
                    image={publication.image}
                    description={publication.description}
                    isLoggedIn={this.props.user.isLoggedIn}
                    premium={this.props.user.premium}
                    navigation={this.props.navigation}
                    myPublication={true}
                />
            ))
        )
    }

    render() {
        return(
            <SafeAreaView style={{ flex: 1, backgroundColor: COLOR_WHITE_W }}>
                <ScrollView>
                    <Header 
                        isLoggedIn={this.props.user.isLoggedIn}
                        name= {this.props.user.name}
                        navigation={this.props.navigation}  
                    />
                    {this.props.user.isLoggedIn && this.props.user.premium ?
                        <LargeButton/>: null
                    }
                    {this.cards()}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    };
  }

export default connect(mapStateToProps)(MyPublications);

const styles = StyleSheet.create({
    
})