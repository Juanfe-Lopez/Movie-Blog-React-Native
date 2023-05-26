import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './Menu';
import BlogScreen from './MovieBlog';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MovieDetail from './MovieDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: 'Menu' }}
        />
        <Stack.Screen
          name="Blog"
          component={BlogScreen}
          options={{ title: 'Blog' }}
        />
        <Stack.Screen
          name="MovieForm"
          component={MovieForm}
          options={{ title: 'Add Movie' }}
        />
        <Stack.Screen
          name="MovieList"
          component={MovieList}
          options={{ title: 'Movie List' }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{ title: 'Movie Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
