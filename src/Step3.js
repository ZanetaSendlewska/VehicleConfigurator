import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseRimColor } from "./rootSlice";

import color1 from "./photo/color1.jpg";
import color2 from "./photo/color2.png";
import color3 from "./photo/color3.png";
import "./index.scss";

const onChange = () => {
  document.getElementById("buttonNext").disabled = false;
};

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rimColor = useSelector((state) => state.rimColor);
  const { register, handleSubmit } = useForm({ defaultValues: { rimColor } });

  const onSubmit = (data) => {
    dispatch(chooseRimColor(data.rimColor));
    history.push("./step4");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="rimColor">
          <h4>3.Wybór lakieru obręczy</h4>
        </label>

        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={color1} alt="color black" />
            <div class="description">
              <figcaption>Kolor 1, cena 10$</figcaption>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={color2} alt="color red" />
            <div class="description">
              <figcaption>Kolor 2, cena 20$</figcaption>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={color3} alt="color blue" />
            <div class="description">
              <figcaption>Kolor 3, cena 30$</figcaption>
            </div>
          </div>
        </div>

        <select
          id="rimColor"
          name="rimColor"
          ref={register}
          onChange={onChange}
        >
          <option value='{"name":"Kolor obręczy 1","price":10}'>
            Kolor 1, cena 10$
          </option>
          <option value='{"name":"Kolor obręczy 2","price":20}'>
            Kolor 2, cena 20$
          </option>
          <option value='{"name":"Kolor obręczy 3 ","price":30}'>
            Kolor 3, cena 30$
          </option>
        </select>
      </div>
      <button id="buttonNext" disabled={true}>
        Next
      </button>
    </form>
  );
};
