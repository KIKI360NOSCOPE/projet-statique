import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import MapView from 'react-native-maps';


/* Formulaire de contact Localisation google map  */
export default class ContactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                        <View style={{ marginBottom: 15, marginTop: 15, textAlign: 'center' }}>
                            <Text style={styles.text}>
                                BENCHMADE
                            </Text>
                            <Text style={styles.text}>
                                6 rue du chateau
                            </Text>
                            <Text style={styles.text}>
                                75001 Paris
                            </Text>
                            <Text style={styles.text}>
                                Tél : 02.35.46.16.01
                            </Text>
                            <Text style={styles.text}>
                                Email : benchmade@toto.com
                            </Text>
                        </View>
                        <Text style={styles.title}>Contact</Text>
                        <TextInput
                            style={styles.input}
                            label="Nom"
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                        />
                        <TextInput
                            style={styles.input}
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                        <TextInput
                            style={styles.input}
                            label="Message"
                            value={this.state.message}
                            onChangeText={message => this.setState({ message })}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Home')}
                        >
                            <Text style={styles.buttonText}>Envoyer</Text>
                        </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <MapView style={styles.map} 
                    initialRegion={{
                        latitude: 45.3335856,
                        longitude: -122.5929416,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#343A40',
        paddingVertical: 15,
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    map: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 25,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: 350,
        height: 350,
    },
});