import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setisPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemWithId(state, id));
  const dispatch = useDispatch();

  const addItemtoBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        className={`bg-white p-4 border-gray-200 flex-row ${
          isPressed && "border-b-0"
        }`}
        onPress={() => setisPressed(!isPressed)}
      >
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400 mt-2">₹ {price}</Text>
        </View>
        <View>
          <Image
            style={{ borderWidth: 1, borderColor: "#f3f3f4" }}
            className="w-20 h-20 bg-gray-300 p-4"
            source={{ uri: urlFor(image).url() }}
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              activeOpacity={items.length > 0 ? 0.6 : 1}
            >
              <MinusCircleIcon
                color={items.length > 0 ? "#00ccbb" : "gray"}
                // color="#00ccbb"
                size={40}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemtoBasket}>
              <PlusCircleIcon size={40} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
