import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseAccessories } from "./rootSlice";
import { Multiselect } from "multiselect-react-dropdown";
import "./index.scss";

import color1 from "./photo/accessories1.jpg";
import color2 from "./photo/accessories2.jpg";
import color3 from "./photo/accessories3.jpg";

export const Step7 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const accesories = useSelector((state) => state.accesories);
  const { handleSubmit } = useForm({ defaultValues: { accesories } });
  let myList = [];
  const onSubmit = (data) => {
    dispatch(chooseAccessories(JSON.stringify(myList)));
    history.push("./result");
  };

  let state = {
    options: [
      { name: "dynamiczne reflektory LED", cost: 100 },
      { name: "system dźwiękowy premium", cost: 2999 },
      { name: "zawieszenie sportowe", cost: 11999 },
    ],
  };

  const onSelect = (selectedList, selectedItem) => {
    myList = selectedList;
  };

  const onRemove = (selectedList, removedItem) => {
    myList = selectedList;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="accesories">
          <h4>7. Wyposażenie dodatkowe: </h4>
        </label>

        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={color1} alt="accessories" />
            <div class="description">
              <figcaption>Dynamiczne reflektory LED, cena 100$</figcaption>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={color2} alt="color red" />
            <div class="description">
              <figcaption>System dźwiękowy premium, cena 2999$</figcaption>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={color3} alt="color blue" />
            <div class="description">
              <figcaption>Zawieszenie sportowe, cena 11999$</figcaption>
            </div>
          </div>
        </div>

        <Multiselect
          options={state.options} // Options to display in the dropdown
          selectedValues={state.selectedValue} // Preselected value to persist in dropdown
          onSelect={onSelect} // Function will trigger on select event
          onRemove={onRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
        />
      </div>
      <button id="buttonNext">Next</button>
    </form>
  );
};
