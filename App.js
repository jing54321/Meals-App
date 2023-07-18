import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoryScreen from './screens/CategoryScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
// import FavoritesContextProvider from './Store/context/favoriteContext';
import { Provider } from 'react-redux';
import { store } from './Store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#fff',
        sceneContainerStyle: { backgroundColor: '#e5f1e3' },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        drawerContentContainerStyle: { backgroundColor: '#469b4c' },
        drawerContentStyle: { backgroundColor: '#d6d0b8' },
        drawerActiveBackgroundColor: 'transparent',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
      }}
    >
      <Drawer.Screen
        name="categories"
        component={CategoryScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="favorites"
        component={FavoriteScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Meals Categories"
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: '#fff',
              contentStyle: { backgroundColor: '#e5f1e3' },
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Meals Overview" component={MealsOverViewScreen} />
            <Stack.Screen name="Meals Detail" component={MealsDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
