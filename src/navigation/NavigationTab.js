import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import SavoirScreen from '../screens/SavoirScreen';
import RealisationScreen from '../screens/RealisationScreen';
import ContactScreen from '../screens/ContactScreen';


const HomeRoute = () => <HomeScreen />;

const SavoirRoute = () => <SavoirScreen />;

const RealisationRoute = () => <RealisationScreen />;

const ContactRoute = () => <ContactScreen />;

const MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Home', title: 'Accueil', icon: 'home', color: '#343A40' },
        { key: 'Savoir', title: 'Savoir Faire', icon: 'hammer', color: '#343A40' },
        { key: 'Realisation', title: 'Réalisation', icon: 'knife-military', color: '#343A40' },
        { key: 'Contact', title: 'Contact', icon: 'contacts', color: '#343A40' },

    ]);

    const renderScene = BottomNavigation.SceneMap({
        Home: HomeRoute,
        Savoir: SavoirRoute,
        Realisation: RealisationRoute,
        Contact: ContactRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default MyComponent;