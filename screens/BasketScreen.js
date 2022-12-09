import { View, Text, SafeAreaView } from "react-native";
import React, { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketItems } from "../features/basketSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  const [groupedItemsInBasket, setGroupedInBasketItems] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedInBasketItems(groupedItems);
  }, [items]);
  return (
    <SafeAreaView>
      <View>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
