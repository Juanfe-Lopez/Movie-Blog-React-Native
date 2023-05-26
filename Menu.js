import React from 'react';
import { View, Button } from 'react-native';

const Menu = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Blog"
        onPress={() => navigation.navigate('Blog')}
      />
      <Button
        title="Movie Form"
        onPress={() => navigation.navigate('MovieForm')}
      />
      <Button
        title="Movie List"
        onPress={() => navigation.navigate('MovieList')}
      />
    </View>
  );
};

export default Menu;
