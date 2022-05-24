import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MyComponent = () => (
    <ScrollView>
        <View style={styles.container}>
            <View>
                <Text style={styles.txt}>Presentaion</Text>
            </View>
            <Card style={styles.card}>
                <Card.Content style={{ flex: 1 }}>
                    <Card.Cover style={styles.img} source={require('../../assets/couteauOrange.png')} />
                    <Paragraph style={styles.paragraph}>The Benchmade Knife Company est un fabricant de couteaux américain situé à Oregon City, dans l’Oregon.
                        Ses produits sont vendus sur de nombreux marchés, tels que le transport quotidien, les sports de plein air, les couverts, le sauvetage, l’application de la loi, les arts martiaux et l’armée.
                    </Paragraph>
                </Card.Content>
            </Card>
            <View>
                <Text style={styles.txt}>Histoire</Text>
            </View>
            <Card style={styles.card}>
                <Card.Content style={{ flex: 1 }}>
                    <Card.Cover style={{width: 200, height: 200, backgroundColor: 'none'}} source={require('../../assets/couteauMarron.png')} />
                    <Paragraph style={styles.paragraph}>Benchmade a commencé en Californie en 1979 sous le nom de Bali-Song, et en 1988 a changé son nom en The Pacific Cutlery Corporation. En 1990, l’entreprise déménage à Clackamas, en Oregon.
                        En 1996, l’entreprise a déménagé dans une installation de 144 000 pieds carrés à Oregon City, en Oregon. Benchmade s’est fait connaître principalement en tant que fabricant de couteaux papillon, ou balisongs, qui sont devenus très populaires et qui continuent d’être fabriqués sous leur nom de marque déposée « Bali-Song ».
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
    paragraph : {
        fontSize: 20,
        textAlign: 'justify',
        color: '#F8F9FA',
    }
});


export default MyComponent;
