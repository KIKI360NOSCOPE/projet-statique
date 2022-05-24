import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const MyComponent = () => (
    <ScrollView>
    <View style={{ flex: 1}}>
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
            <View style={{ marginLeft: 25 }}>
                <Avatar.Image style={{ backgroundColor: '#ADB5BD' }} size={150} source={require('../../assets/couteauBeige.png')} />
            </View>
            <View style={{ marginRight: 25 }}>
                <Avatar.Image style={{ backgroundColor: '#ADB5BD' }} size={150} source={require('../../assets/couteauMarron.png')} />
            </View>
        </View>
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
            <View style={{ marginLeft: 25 }}>
                <Avatar.Image style={{ backgroundColor: '#ADB5BD' }} size={150} source={require('../../assets/couteauBeige.png')} />
            </View>
            <View style={{ marginRight: 25 }}>
                <Avatar.Image style={{ backgroundColor: '#ADB5BD' }} size={150} source={require('../../assets/couteauMarron.png')} />
            </View>
        </View>
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
            <View style={{ marginLeft: 25 }}>
                <Avatar.Image style={{ backgroundColor: '#ADB5BD' }} size={150} source={require('../../assets/couteauBeige.png')} />
            </View>
            <View style={{ marginRight: 25 }}>
                <Avatar.Image style={{ backgroundColor: '#ADB5BD' }} size={150} source={require('../../assets/couteauMarron.png')} />
            </View>
        </View>
    </View>
    </ScrollView>
);
export default MyComponent