import { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLOR_BLACK, COLOR_GRAY_MEDIUM, COLOR_PRIMARY, COLOR_WHITE_W,  } from "../../constants/colors";

class Card extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            this.props.myPublication && !this.props.premium ?
                null:
                <View key={this.props.keyId} style={[styles.shadow, styles.container]} testID="view-card">
                    <View style={styles.header} testID="card-header">
                        {this.props.user ?
                            <View style={styles.flexRow} testID="user-info">
                                <Image
                                    style={styles.imageUser}
                                    source={require('../../images/user.png')}
                                />
                                <View style={styles.containerTitle}>
                                    <Text style={styles.title}>{this.props.user.name}</Text>
                                    <Text style={styles.subtitle}>{this.props.user.typeCyclist}</Text>
                                </View>
                            </View>:
                            <View/>
                        }
                        {this.props.user && this.props.isLoggedIn ?
                            <TouchableOpacity testID="btn-seguir"
                                style={styles.touchFollow}
                                onPress={() => this.props.navigation.openDrawer()}>
                                <Text style={styles.textFollow}>Seguir</Text>
                            </TouchableOpacity>: null
                        }
                        {!this.props.user ?
                            <TouchableOpacity testID="btn-editar"
                                onPress={this.props.onPress} 
                                style={[styles.shadow, styles.touchCircleButtonEdit]}>
                                <Image
                                    style={styles.imageCircleButton}
                                    source={require('../../images/pencil.png')}
                                />
                            </TouchableOpacity>:null
                        }
                    </View>
                    <Image
                        testID="image"
                        style={styles.imagePublication}
                        source={{uri: this.props.image}}
                    />
                    <Text testID="description">{this.props.description}</Text>
                    {this.props.isLoggedIn ?
                        <View style={styles.flexRow} testID="card-bottom">
                            <TouchableOpacity testID="btn-like"
                                onPress={this.props.onPress} 
                                style={[styles.shadow, styles.touchCircleButton]}>
                                <Image
                                    style={styles.imageCircleButton}
                                    source={require('../../images/hearth.png')}
                                />
                            </TouchableOpacity>
                            {this.props.premium ?
                                <View style={[styles.flexRow, styles.justify]} testID="btns-bottom-premium">
                                    <View style={styles.flexRow}>
                                        <TouchableOpacity testID="btn-share"
                                            onPress={this.props.onPress} 
                                            style={[styles.shadow, styles.touchCircleButton]}>
                                            <Image
                                                style={styles.imageCircleButton}
                                                source={require('../../images/share.png')}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity testID="btn-comentar"
                                            onPress={this.props.onPress} 
                                            style={[styles.shadow, styles.touchCircleButton]}>
                                            <Image
                                                style={styles.imageCircleButton}
                                                source={require('../../images/speech-bubble.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    {this.props.myPublication ?
                                        <TouchableOpacity testID="btn-remove"
                                            onPress={this.props.onPress} 
                                            style={[styles.shadow, styles.touchCircleButtonRem]}>
                                            <Image
                                                style={styles.imageCircleButtonRem}
                                                source={require('../../images/remove.png')}
                                            />
                                        </TouchableOpacity>: null
                                    }                                
                                </View>:null
                            }
                        </View>: null
                    }
                </View>
        );
    }
}

export default Card;

const styles = StyleSheet.create({
    shadow: {
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#000000',  
        shadowOpacity: 0.2,  
        shadowRadius: 3, 
        backgroundColor: 'white',  
        elevation: 20
    },
    container:{
        borderRadius: 5,
        padding:10,
        margin:10
    },
    header: {flex:1, flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:5},
    flexRow: {flexDirection:"row"},
    imageUser: {width: 20, height: 20, borderRadius: 50, backgroundColor: COLOR_GRAY_MEDIUM, padding:18},
    containerTitle: {marginLeft:10},
    title: {fontSize:12, color:COLOR_BLACK},
    subtitle: {fontSize:10},
    touchFollow: {backgroundColor:COLOR_PRIMARY, borderRadius:5, paddingHorizontal:10, paddingVertical:5},
    textFollow: {color:COLOR_WHITE_W},
    imagePublication: {width:"100%", height:150, marginBottom:5},
    touchCircleButton: {
        borderRadius: 30,
        padding:10,
        margin:5
    },
    imageCircleButton: {width: 20, height: 20},
    touchCircleButtonEdit: {
        borderRadius: 30,
        padding:10,
        margin:5, 
        alignSelf:"flex-end"
    },
    touchCircleButtonRem: {
        borderRadius: 30,
        padding:0,
        margin:5, 
        // alignSelf:"flex-end",
        // justifySelft: "end",
        marginLeft:"auto"
    },
    imageCircleButtonRem: {width: 40, height: 40},
    justify: {flex:1, justifyContent:"space-between"}
    
})