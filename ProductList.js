import React from "react";
import { observer } from "mobx-react";
import { Text, View } from "react-native";
import productStore from "./productStore";

const ProductList = observer(() => {
  const products = productStore.products;
  const startingIndex = 1;
  console.log(products);
  return (
    <>
      {products.slice(startingIndex).map((product) => (
        <Text key={product.id}>
          {product.name} - {product.price}
        </Text>
      ))}
    </>
  );
});

export default ProductList;
