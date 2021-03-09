import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseRimSize } from "./rootSlice";

import hoop1 from "./photo/hoop1.jpg";
import hoop2 from "./photo/hoop2.jpg";
import hoop3 from "./photo/hoop3.jpg";
import "./index.scss";

const onChange = () => {
  document.getElementById("buttonNext").disabled = false;
};

export const Step4 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rimSize = useSelector((state) => state.rimSize);
  const { register, handleSubmit } = useForm({ defaultValues: { rimSize } });

  const onSubmit = (data) => {
    dispatch(chooseRimSize(data.rimSize));
    history.push("./step5");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="rimSize">
          <h4>4.Wybór rozmiaru obręczy</h4>
        </label>

        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={hoop1} alt="hoop" />
            <div class="description">
              <figcaption>Rozmiar 10 , cena 199$</figcaption>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={hoop2} alt="hoop" />
            <div class="description">
              <figcaption>Rozmiar 20, cena 299$</figcaption>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={hoop3} alt="hoop" />
            <div class="description">
              <figcaption>Rozmiar 30, cena 399$</figcaption>
            </div>
          </div>
        </div>

        <select id="rimSize" name="rimSize" ref={register} onChange={onChange}>
          <option value='{"name":"Rozmiar obręczy 10","price":199}'>
            Rozmiar 10 , cena 199$
          </option>
          <option value='{"name":"Rozmiar obręczy 20","price":299}'>
            Rozmiar 20, cena 299$
          </option>
          <option value='{"name":"Rozmiar obręczy 30","price":399}'>
            Rozmiar 30, cena 399$
          </option>
        </select>
      </div>
      <button id="buttonNext" disabled={true}>
        Next
      </button>
    </form>
  );
};
