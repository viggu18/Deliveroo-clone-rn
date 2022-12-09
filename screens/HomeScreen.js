import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";
import sanityClient from "../sanity";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"]{
      ...,restaurant[]->
      {
        ...,dishes[]->
        }
      }`
      )
      .then((data) => setFeaturedCategory(data));
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header  */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
        <View>
          <Image
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            source={{
              uri: "https://links.papareact.com/wru",
            }}
          />
        </View>
        <View className="flex-1">
          <Text className="font-bold text-grey-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl justify-self-center">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}

      <View className="flex-row items-center mx-2 space-x-2 pb-2 px-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <FontAwesome
            name="search"
            className="justify-self-center items-center pt-4"
            color={"gray"}
            size={20}
          />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <Ionicons name="md-options" size={30} color="#00ccbb" />
      </View>

      {/* Body */}

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 120,
          // marginBottom: 10,
        }}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        className="bg-white"
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuredCategory?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>

      <StatusBar hidden={true} />
    </SafeAreaView>
  );
};

export default HomeScreen;
