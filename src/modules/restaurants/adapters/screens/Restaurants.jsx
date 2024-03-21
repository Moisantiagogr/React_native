import { StyleSheet, FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import FlatListRestaurant from "./components/FlatListRestaurant";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../../../config/util/firebaseConnection";
import Loading from '../../../../kernel/components/Loading'
export default function Restaurants() {
  /* const restaurants = [
     {
       uid: 1,
       title: "Rincon del bife",
       description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius necessitatibus perspiciatis iste exercitationem cupiditate magni. Iure accusantium eos quibusdam, minus eius, repudiandae veritatis iusto animi aut at quas omnis nulla?"
       ,
       rating: 4,
       image: "https://via.placeholder.com/124x124"
     },
     {
       uid: 2,
       title: "El boti",
       description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius necessitatibus perspiciatis iste exercitationem cupiditate magni. Iure accusantium eos quibusdam, minus eius, repudiandae veritatis iusto animi aut at quas omnis nulla?",
       rating: 4.5,
       image: "https://via.placeholder.com/124x124"
     }
   ]*/
  const db = getFirestore(app);
  const [restaurants, setRestaurants] = useState(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    try {
      (async () => {
        const querySnapshot = await getDocs(collection(db, "restaurants"));
        const arrayRestaurants = [];

        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          arrayRestaurants.push({
            uid: doc.id,
            title: doc.data()["title"],
            description: doc.data()["description"],
            rating: doc.data()["rating"],
            image: doc.data()["image"]
          });
          setRestaurants(arrayRestaurants);
        });

      })();
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false)
    }



  }, []);

  return (

    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) =>
          <FlatListRestaurant

            image={item.image}
            title={item.title}
            description={item.description}
            rating={item.rating} />
        }
        keyExtractor={item => item.uid.toString()}
      />
      <Loading isShow={loading} title={"cargando restaurantes"} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16
  },

});
