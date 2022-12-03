import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

var images = {
    basicos_correcto: require('supercade/app/icons/basicos/Basicos_correcto.png'),
    basicos_incorrecto:  require('supercade/app/icons/basicos/Basicos_incorrecto.png'),
    menu_twitter: require('supercade/app/icons/basicos/twitter.png'),
    password_eye: require('supercade/app/icons/basicos/Basicos_eye.png'),
}

class CustomIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playImage: '',
        }
    }

    componentDidMount() {
        this.setState({playImage: this.props.name});
    }

    render() {
        //si se quiere el icono como botón
        if(this.props.onPress){
            return (
                <TouchableOpacity 
                    onPress={this.props.onPress} 
                    style={this.props.styleContent} 
                    disabled={this.props.disabled}>
                    <Image
                        style={[styles.icon, this.props.style]}
                        source={images[this.props.name]  ? images[this.props.name] : images["default"]}
                    />
                </TouchableOpacity>
            )
        }else {
            //si solo se necesita la imagen
            return (
                <Image
                    style={[styles.icon, this.props.style]}
                    source={images[this.state.playImage]  ? images[this.state.playImage] : images["default"]}
                />
            )
        }
    }
}

export default CustomIcon;

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50
    }
});
