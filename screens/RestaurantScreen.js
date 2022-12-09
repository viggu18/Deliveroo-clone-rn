import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { urlFor } from "../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketLength } from "../features/basketSlice";
import { setRestaurant } from "../features/restaurantSlice";

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
  const basketLength = useSelector(selectBasketLength);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurant(route.params));
  }, []);
  return (
    <>
      {basketLength > 0 && <BasketIcon />}

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

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row space-x-2 my-1">
                <StarIcon size={22} color="green" opacity={0.5} />
                <Text className="text-s text-gray-500">
                  <Text className="text-green-500">{rating}</Text>
                  {genre && "•"} {genre}
                </Text>
              </View>
              <View className="flex-row space-x-2 my-1">
                <StarIcon size={22} color="gray" opacity={0.5} />
                <Text className="text-s text-gray-500">{address}</Text>
              </View>
            </View>
            <Text className="mt-4 pb-4 text-gray-500">{short_description}</Text>
          </View>

          <TouchableOpacity
            className="flex-row p-4 space-x-2 items-center border-y border-gray-300"
            activeOpacity={0.6}
          >
            <QuestionMarkCircleIcon color={"gray"} opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy ?
            </Text>
            <ChevronRightIcon color="gray" opacity={0.6} size={20} />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* Dish row */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
