import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { collection, addDoc} from "firebase/firestore";
import { db } from './firebase';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [genre, setGenre] = useState('');

  const addToFirebase = async ({ objectToSave }, collectionName) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), objectToSave);
      console.log(
        "Document written to table " + collectionName + " with ID: ",
        docRef.id
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleAddMovie = () => {
    if (title && synopsis && genre) {
      const new_movie={
        title: title,
        synopsys: synopsis,
        genre: genre,}
      addToFirebase({ objectToSave:{new_movie}},"My-Movies")
        .then(() => {
          // Resetear los campos del formulario después de guardar
          setTitle('');
          setSynopsis('');
          setGenre('');
          Alert.alert('Película guardada exitosamente');
        })
        .catch((error) => {
          Alert.alert('Error al guardar la película', error.message);
        });
    } else {
      Alert.alert('Campos requeridos', 'Por favor completa todos los campos');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        style={{ marginVertical: 10, paddingHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <TextInput
        placeholder="Sinopsis"
        value={synopsis}
        onChangeText={setSynopsis}
        style={{ marginVertical: 10, paddingHorizontal: 10, height: 100, borderColor: 'gray', borderWidth: 1 }}
        multiline
      />
      <TextInput
        placeholder="Género"
        value={genre}
        onChangeText={setGenre}
        style={{ marginVertical: 10, paddingHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button title="Guardar Película" onPress={handleAddMovie} />
    </View>
  );
};

export default MovieForm;
