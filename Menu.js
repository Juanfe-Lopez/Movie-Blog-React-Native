import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const RetractableNavbar = ({ onSelectOption }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };
  const handleOptionSelection = (option) => {
    onSelectOption(option);
    setIsExpanded(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleNavbar}>
        <Text style={styles.menuText}>Menu</Text>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => handleOptionSelection("Blog")}>
            <Text style={styles.option}>Blog</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelection("MovieForm")}>
            <Text style={styles.option}>MovieForm</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelection("MovieList")}>
            <Text style={styles.option}>MovieList</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    paddingTop: 20,
    paddingRight: 20,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  navbar: {
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  navItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  navText: {
    fontSize: 16,
    color: "black",
  },
});

export default RetractableNavbar;
