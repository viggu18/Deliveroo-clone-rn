import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard
        imgUrl="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg"
        title="Pizza"
      />
      <CategoryCard
        imgUrl="https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/4:3/w_1440,h_1080,c_limit/Burgers-Mumbai-Delivery.jpg"
        title="Burgir"
      />
      <CategoryCard
        imgUrl="https://www.foodandwine.com/thmb/jJupeS5vHMkh9TBsJkwdaG1uPY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg"
        title="Chicken"
      />
      <CategoryCard
        imgUrl="https://images.everydayhealth.com/images/what-is-a-vegan-diet-benefits-food-list-beginners-guide-alt-1440x810.jpg?sfvrsn=1d260c85_1"
        title="Vegetarian"
      />
      <CategoryCard
        imgUrl="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN"
        title="Cakes"
      />
      <CategoryCard
        imgUrl="https://media.istockphoto.com/id/1185515984/photo/christmas-baking-table-scene-with-assorted-sweets-and-cookies-top-view-over-a-rustic-wood.jpg?s=612x612&w=0&k=20&c=cWVTyQfwrge2OfuWsRCAlDbZ9fSZO6pg_yuiGq9naLs="
        title="Desert"
      />
    </ScrollView>
  );
};

export default Categories;
