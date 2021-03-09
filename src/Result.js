import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Result = () => {
  let state = useSelector((state) => state);
  let engine = JSON.parse(state.engine);
  let rimColor = JSON.parse(state.rimColor);
  let body = JSON.parse(state.body);
  let rimSize = JSON.parse(state.rimSize);
  let armchair = JSON.parse(state.armchair);
  let upholstery = JSON.parse(state.upholstery);

  let summaryCost =
    engine.price +
    rimColor.price +
    body.price +
    rimSize.price +
    armchair.price +
    upholstery.price;

  let accessories = state.accessories;
  accessories = accessories.replace("[", "");
  accessories = accessories.replace("]", "");
  let accessoriesList = accessories.split("}");
  let accessoriesPrice = 0;

  accessories = "";
  for (let index = 0; index < accessoriesList.length; index++) {
    if (accessoriesList[index].length < 3) {
      continue;
    }
    accessoriesList[index] = accessoriesList[index] + "}";
    accessoriesList[index] = accessoriesList[index].replace(",{", "{");

    accessories += JSON.parse(accessoriesList[index]).name + " ";
    accessoriesPrice += JSON.parse(accessoriesList[index]).cost;
  }
  summaryCost += accessoriesPrice;
  if (accessoriesPrice === 0) {
    accessories = "Brak wwyposażenia dodatkowego";
  }

  if (engine.name === "") {
    return (
      <>
        <pre>Zapraszamy ponownie</pre>
        <Link to="/">Konfiguruj ponownie</Link>
      </>
    );
  } else {
    return (
      <>
        <pre>
          {" "}
          {engine.name} : {engine.price}
        </pre>
        <pre>
          {rimColor.name} : {rimColor.price}
        </pre>
        <pre>
          {body.name} : {body.price}
        </pre>
        <pre>
          {rimSize.name} : {rimSize.price}
        </pre>
        <pre>
          {armchair.name} : {armchair.price}
        </pre>
        <pre>
          {upholstery.name} : {upholstery.price}
        </pre>
        <pre>
          {accessories} : {accessoriesPrice}
        </pre>
        <pre>Łączny koszt : {summaryCost}</pre>
        <Link to="/">Konfiguruj ponownie</Link>
      </>
    );
  }
};
