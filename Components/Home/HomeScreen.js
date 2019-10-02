import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
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


  const filterWorkers = (filter) => {
    if(!originalWorkers) 
      return "originalWorkers empty"
    
    const filteredWorkers = originalWorkers.filter(worker => {
        const locationCondition = filter.location ? worker.location === filter.location : true; 
        const fieldCondition = filter.field ? worker.field === filter.field : true; 

        return locationCondition && fieldCondition  
      }
    )

    setWorkers(filteredWorkers)
  }

  // Execute "fetchData" Method Once The Component Open.
  useEffect(() => fetchData(), []);

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
              field={result.item.field}
              location={result.item.location}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#FFE346",
    height: "28%",
    width: "100%"
  },
  searchSection: {
    marginTop: 38,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    flex: 2.5,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#FFF",
    color: "#424242",
    borderRadius: 25
  },
  profileIcon: {
    flex: 0.5,
    width: 40,
    height: 40,
    resizeMode: "contain"
  },
  list: {
    marginTop: 200
  }
});

export default HomeScreen;
