import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
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
import { TouchableOpacity } from "react-native-gesture-handler";

const MovieList = () => {
  const [movies, setMovies] = useState([]);



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

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => onMovieSelect(item.new_movie)}>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: "bold" }}>{item.new_movie.title}</Text>
        <Text>{item.new_movie.synopsys}</Text>
        <Text>Género: {item.new_movie.genre}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No hay películas disponibles</Text>
      )}
    </View>
  );
};

export default MovieList;
