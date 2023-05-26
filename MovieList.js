import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();


  const getFromFirebase = async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const documents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return documents;
    } catch (e) {
      console.error("Error getting documents: ", e);
      return null;
    }
  };

  useEffect(() => {
    // Obtener los datos de películas desde Firebase
    const fetchMovies = async () => {
      try {
        const movieData = await getFromFirebase("My-Movies");
        if (movieData) {
          const movieList = Object.keys(movieData).map((key) => ({
            id: key,
            ...movieData[key],
          }));
          setMovies(movieList);
        }
      } catch (error) {
        console.error("Error al obtener las películas", error);
      }
    };

    fetchMovies();
  }, []);
const handleMoviePress = (movie) => {
    console.log(movie.title);
    navigation.navigate('MovieDetail', { movie });

  };

  return (
    <View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleMoviePress(item.new_movie)}>
            <View>
              <Text>{item.new_movie.title}</Text>
              <Text style={{ marginBottom: 10 }}>{item.new_movie.genre}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MovieList;
