import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MyComponent = () => (
    <ScrollView>
        <View style={styles.container}>
            <View>
                <Text style={styles.txt}>Notre savoir faire</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Card.Cover style={styles.img} source={require('../../assets/couteauOrange.png')} />
                </View>
                <View style={{ flex: 2 }}>
                    <Card style={styles.card}>
                        <Card.Content style={{ flex: 1 }}>
                            <Paragraph style={styles.paragraph}>The Benchmade Knife Company est un fabricant de couteaux américain situé à Oregon City, dans l’Oregon.
                                Ses produits sont vendus sur de nombreux marchés, tels que le transport quotidien, les sports de plein air, les couverts, le sauvetage, l’application de la loi, les arts martiaux et l’armée.
                            </Paragraph>
                        </Card.Content>
                    </Card>
                </View>
            </View>
            <Card style={styles.card}>
                <Card.Content style={{ flex: 1 }}>
                    <Paragraph style={styles.paragraph}>Benchmade a une longue tradition d’intégration de la conception de couteaux de coutelliers personnalisés renommés dans leurs modèles de production. Il s’agit notamment de Jody Samson, Ernest Emerson, Allen Elishewitz, Mel Pardue, Bill McHenry, Mike Snody, Jason Williams, Warren Osborne, Ken Steigerwalt et Bob Lum. [16] Plusieurs modèles benchmade de production basés sur le travail de ces designers sont devenus influents au sein de l’industrie.
                    </Paragraph>
                </Card.Content>
            </Card>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
    },
    img: {
        width: 120,
        height: 120,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
        backgroundColor: 'none',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        backgroundColor: '#495057',
        borderRadius: 15,
        boxShadow: '0px 0px 10px #000000',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        marginTop: 15,
    },
    paragraph: {
        fontSize: 20,
        textAlignVertical: 'center',
        color: '#F8F9FA',
    }
});


export default MyComponent;
