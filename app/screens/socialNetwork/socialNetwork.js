import { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Card from "../../components/card/Index";
import Header from "../../components/header/Index";
import LargeButton from "../../components/largeButton/Index";
import { COLOR_WHITE_W } from "../../constants/colors";
import database from '@react-native-firebase/database';

class SocialNetwork extends Component {

    constructor(props){
        super(props);
        this.state={
            publications:[]
        }
    }

    componentDidMount(){
        database()
        .ref('/publications')
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
                    navigation={this.props.navigation}
                />
            ))
        )
    }

    render() {
        return(
            <SafeAreaView style={{ flex: 1, backgroundColor: COLOR_WHITE_W }}>
                <ScrollView>
                    <Header 
                        navigation={this.props.navigation}    
                    />
                    <LargeButton/>
                    {this.cards()}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default SocialNetwork;

const styles = StyleSheet.create({
    
})