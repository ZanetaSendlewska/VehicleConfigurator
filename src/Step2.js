import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseBody } from "./rootSlice";
import color1 from "./photo/color1.jpg";
import color2 from "./photo/color2.png";
import color3 from "./photo/color3.png";
import "./index.scss";

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const body = useSelector((state) => state.body);
  const { register, handleSubmit } = useForm({ defaultValues: { body } });

  const onSubmit = (data) => {
    dispatch(chooseBody(data.body));
    history.push("./step3");
  };

  const onChange = () => {
    document.getElementById("buttonNext").disabled = false;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="body">
          <h4>2.Wybór lakieru nadwozia</h4>
        </label>

        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={color1} alt="color black" />
            <div class="description">
              <figcaption>Kolor 1, cena 100$</figcaption>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={color2} alt="color red" />
            <div class="description">
              <figcaption>Kolor 2, cena 200$</figcaption>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={color3} alt="color blue" />
            <div class="description">
              <figcaption>Kolor 3, cena 300$</figcaption>
            </div>
          </div>
        </div>

        <select id="body" name="body" ref={register} onChange={onChange}>
          <option value='{"name":"Kolor nadwozia 1","price":100}'>
            Kolor 1, cena 100$
          </option>
          <option value='{"name":"Kolor nadwozia 2","price":200}'>
            Kolor 2, cena 200$
          </option>
          <option value='{"name":"Kolor nadwozia 3 ","price":300}'>
            Kolor 3, cena 300$
          </option>
        </select>
      </div>
      <button id="buttonNext" disabled={true}>
        Next
      </button>
    </form>
  );
};
