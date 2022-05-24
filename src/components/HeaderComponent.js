import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { View, ScrollView, StyleSheet } from 'react-native';

const HeaderComponent = () => (
    <Appbar.Header style={{backgroundColor: '#343A40'}}>
       <Appbar.Content title="BENCHMADE" style={styles.container} />
    </Appbar.Header>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});



export default HeaderComponent;
