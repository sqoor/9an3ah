import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, AsyncStorage } from "react-native";
import Header from "./Header";
import WorkerListItem from "./WorkerListItem";
import axios from "axios";

const HomeScreen = props => {
  // Hook State To Contain Array Of Workers.
  const [workers, setWorkers] = useState("");
  const [originalWorkers, setOriginalWorkers] = useState("");

  // @METHOD GET
  // Fetch Workers Data From Database.
  function fetchData() {
    axios
      .get("https://san3ah.herokuapp.com/workers")
      .then(response => {
        setWorkers(response.data);
        setOriginalWorkers(response.data);
      })
      .catch(error => {
        alert(error);
      });
  }

  const filterWorkers = filter => {
    if (!originalWorkers) return "originalWorkers empty";

    const filteredWorkers = originalWorkers.filter(worker => {
      const locationCondition = filter.location
        ? worker.location === filter.location
        : true;
      const fieldCondition = filter.field
        ? worker.field === filter.field
        : true;

      return locationCondition && fieldCondition;
    });
    setWorkers(filteredWorkers);
  };

  // Execute "fetchData" Method Once The Component Open.
  useEffect(() => fetchData(), [props.navigation.getParam("user")]);

  return (
    <View>
      <Header {...props} filterWorkers={filterWorkers} />
      <View style={styles.list}>
        {/* Workers List */}

        <FlatList
          keyExtractor={item => item._id}
          data={workers}
          numColumns={2}
          renderItem={result => (
            <WorkerListItem
              img={result.item.img} // Undefined
              name={result.item.fullName}
              phoneNumber={result.item.phoneNumber}
              field={result.item.field}
              location={result.item.location}
              experience={result.item.experience}
              fare={result.item.hourlyFare}
              {...props}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 225
  }
});

export default HomeScreen;
