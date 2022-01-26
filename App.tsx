import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Search } from "./src/components/Search";

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Search />
        <View style={styles.listContainer}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    backgroundColor: "blue",
    flex: 1,
  },
});
