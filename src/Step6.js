import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseUpholstery } from "./rootSlice";

import color1 from "./photo/color1.jpg";
import color2 from "./photo/color2.png";
import color3 from "./photo/color3.png";
import "./index.scss";

const onChange = () => {
  document.getElementById("buttonNext").disabled = false;
};

export const Step6 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const upholstery = useSelector((state) => state.upholstery);
  const { register, handleSubmit } = useForm({ defaultValues: { upholstery } });

  const onSubmit = (data) => {
    dispatch(chooseUpholstery(data.upholstery));
    history.push("./Step7");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="upholstery">
          <h4>6.Wybór koloru tapicerki</h4>
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
          id="upholstery"
          name="upholstery"
          ref={register}
          onChange={onChange}
        >
          <option value='{"name":"Kolor tapicerki 1","price":10}'>
            Kolor tapicerki 1, cena 10$
          </option>
          <option value='{"name":"Kolor tapicerki 2","price":20}'>
            Kolor tapicerki 2, cena 20$
          </option>
          <option value='{"name":"Kolor tapicerki 3 ","price":30}'>
            Kolor tapicerki 3, cena 30$
          </option>
        </select>
      </div>
      <button id="buttonNext" disabled={true}>
        Next
      </button>
    </form>
  );
};
