import { Component } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLOR_WHITE_W } from "../../constants/colors";

class SocialNetwork extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <SafeAreaView style={{ flex: 1, backgroundColor: COLOR_WHITE_W }}>
                <ScrollView>
                    <View>
                        <View style={{flex:1, flexDirection:"row"}}>
                            <Image
                                style={{width: 20, height: 20}}
                                source={require('../../images/user.png')}
                            />
                            <Text>Janet Perkins</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Image
                                    style={{width: 20, height: 20}}
                                    source={require('../../images/menu.png')}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity><Text>Crear publicación</Text></TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={{width: 20, height: 20}}
                                    source={require('../../images/mas.png')}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={{flex:1, flexDirection:"row"}}>
                            <Image
                                style={{width: 20, height: 20}}
                                source={require('../../images/user.png')}
                            />
                            <View>
                                <Text>Janet Perkins</Text>
                                <Text>Janet Perkins</Text>
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Text>Seguir</Text>
                            </TouchableOpacity>
                        </View>
                        <Image>

                        </Image>
                        <Text>Greyhound divisively hello couldly wonderfully marginally far upon excluding.</Text>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity 
                                onPress={this.props.onPress} 
                                style={this.props.styleContent}>
                                <Image
                                    style={{width: 20, height: 20}}
                                    source={require('../../images/mas.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={this.props.onPress} 
                                style={this.props.styleContent}>
                                <Image
                                    style={{width: 20, height: 20}}
                                    source={require('../../images/mas.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={this.props.onPress} 
                                style={this.props.styleContent}>
                                <Image
                                    style={{width: 20, height: 20}}
                                    source={require('../../images/mas.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default SocialNetwork;

const styles = StyleSheet.create({

})