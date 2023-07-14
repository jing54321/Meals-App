import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './screens/CategoryScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import { CATEGORIES } from './data/dummy-data';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Meals Categories"
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: '#fff',
            contentStyle: { backgroundColor: '#c46352' },
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="Meals Categories"
            component={CategoryScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="Meals Overview"
            component={MealsOverViewScreen}
            // options={({ route, navigation }) => {
            //   const { categoryId } = route.params;
            //   const [category] = CATEGORIES.filter(c => c.id === categoryId);
            //   return {
            //     title: category.title,
            //   };
            // }}
          />
          <Stack.Screen name="Meals Detail" component={MealsDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
