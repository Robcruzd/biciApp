import { Component } from "react";
import { Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
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
                            style={{}}
                            source={require('../../images/user.png')}
                        />
                            <Text></Text>
                            <TouchableOpacity>
                                <Image></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TextInput>

                            </TextInput>
                            <TouchableOpacity></TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View>

                        </View>
                        <Image>

                        </Image>
                        <Text></Text>
                        <View></View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default SocialNetwork;