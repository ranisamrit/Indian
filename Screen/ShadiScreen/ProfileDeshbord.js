import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    Image,
    ImageBackground
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class app extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ backgroundColor: 'red' }}>
                <SafeAreaView >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', alignSelf: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 10 }}>My Shaadi</Text>
                    <ScrollView>
                        <View style={{ backgroundColor: 'white' }}>
                            <ImageBackground style={{ width: '100%', height: 200, flexDirection: 'row', alignItems: 'center' }} blurRadius={25} resizeMode='stretch'
                                source={require('../../Imagess/AllImage.jpg')}   >
                                <View style={{ marginLeft: 40, }}>
                                    <ImageBackground style={{ width: 50, height: 50, overflow: 'hidden', borderRadius: 25,alignItems:'center',justifyContent:'flex-end',marginTop:10 }}
                                        source={require('../../Imagess/AllImage.jpg')} >
                                        <TouchableOpacity style={{ borderWidth: 0.3,  alignItems: 'center',justifyContent:'center',  borderRadius: 10, backgroundColor: 'green', width: 20, height: 20 }}>
                                            <Text style={{ fontSize: 15, color: 'white' }}>+</Text>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    
                                </View>
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{fontSize:14,fontWeight:'500',color:'white'}}>Rani Samrit</Text>
                                    <View style={{ flexDirection: 'row',marginTop:10 }}>
                                        <Text style={{fontSize:14,fontWeight:'500',color:'white'}}>SH69951946</Text>
                                        <TouchableOpacity>
                                            <Text style={{marginLeft:10,color:'green',fontSize:16}}>Edit Profile</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{fontSize:14,fontWeight:'500',marginTop:5,color:'white'}}>Account Diamond</Text>
                                    <Text style={{fontSize:14,fontWeight:'500',marginTop:5,color:'white'}}>Expiry -23-may-21</Text>
                                </View>
                            </ImageBackground>
                            <Text style={{marginLeft:20,fontSize:16,fontWeight:'600',marginTop:10}}>complete Your Profile</Text>
                            <View>
                                
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HeaderText: {
        fontSize: 16
    }
});