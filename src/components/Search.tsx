import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <View style={styles.searchContainer}>
      <Searchbar placeholder="Search" value={searchQuery} autoComplete={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 16,
  },
});
