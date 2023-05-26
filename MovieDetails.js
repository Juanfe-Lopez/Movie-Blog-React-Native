import React from 'react';
import { View, Text } from 'react-native';

const MovieDetails = ({ route }) => {
  const { movie } = route.params;

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>{movie.title}</Text>
      <Text style={{ marginBottom: 5 }}>Sinopsis: {movie.synopsys}</Text>
      <Text style={{ marginBottom: 5 }}>Género: {movie.genre}</Text>
    </View>
  );
};

export default MovieDetails;
