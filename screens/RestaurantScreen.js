import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestaurantScreen = ({ route }) => {
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="relative">
        <Image
          className="w-full h-56 bg-gray-300 p-4"
          source={{ uri: urlFor(imgUrl).url() }}
        />
        <TouchableOpacity
          className="absolute top-4 left-2 p-2 bg-gray-100 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color="#00ccbb" />
        </TouchableOpacity>
      </View>
      <View></View>
    </ScrollView>
  );
};

export default RestaurantScreen;
