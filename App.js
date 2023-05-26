import React from "react";
import { View } from "react-native";
import Menu from "./Menu";
import Blog from "./MovieBlog";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      selectedMovie: null,
    };
  }


  handleOptionSelect = (option) => {
    if (option === "MovieList") {
      this.setState({
        selectedOption: option,
        selectedMovie: null,
      });
    } else {
      this.setState({ selectedOption: option });
    }
  };
  
  handleMovieSelect = (movie) => {
    this.setState({
      selectedOption: "MovieDetails",
      selectedMovie: movie,
    });
  };


  renderSelectedComponent = () => {
    const { selectedOption } = this.state;

    if (selectedOption === "Blog") {
      return <Blog />;
    } else if (selectedOption === "MovieForm") {
      return <MovieForm />;
    } else if (selectedOption === "MovieList") {
      return <MovieList onMovieSelect={this.handleMovieSelect} />;
  } else if (selectedOption === 'MovieDetails' && selectedMovie) {
    return <MovieDetails movie={selectedMovie} />;
  }

    return null;
  };
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Menu onSelectOption={this.handleOptionSelect} />
        {this.renderSelectedComponent()}
      </View>
    );
  }
}

export default App;
