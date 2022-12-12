import { Component } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { COLOR_BLACK } from "../../constants/colors";

let width = Dimensions.get("window").width;

class ImageButton extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("did imagebutton: ", this.props);
    }

    render(){
        console.log("render imagebutton: ", this.props);
        return(
            <View style={{width:width/2, height:width/2}}>
                <Image
                    style={{width:"100%", height:"100%"}}
                    source={{uri: this.props.photo}}
                />
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.subtitle}>{this.props.subtitle}</Text>
                </View>
            </View>
        );
    }
}

export default ImageButton;

const styles = StyleSheet.create({
    containerTitle:{marginTop:-50},
    title: {
        fontSize:14, 
        color:'#FFFFFF',
        paddingLeft:10,
        paddingRight:10,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    subtitle: {
        fontSize:12,
        color:'#FFFFFF',
        paddingLeft:10,
        paddingRight:10,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10
    },
})