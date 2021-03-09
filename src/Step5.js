import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseArmchair } from "./rootSlice";

import armchair1 from "./photo/armchair1.jpg";
import armchair2 from "./photo/armchair2.jpg";
import armchair3 from "./photo/armchair3.jpg";
import "./index.scss";

const onChange = () => {
  document.getElementById("buttonNext").disabled = false;
};

export const Step5 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const armchair = useSelector((state) => state.armchair);
  const { register, handleSubmit } = useForm({ defaultValues: { armchair } });

  const onSubmit = (data) => {
    dispatch(chooseArmchair(data.armchair));
    history.push("./step6");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="armchair">
          <h4>5.Wybór fotela</h4>
        </label>

        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={armchair1} alt="armchair" />
            <div class="description">
              <figcaption>Fotel 1, cena 10$</figcaption>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={armchair2} alt="armchair" />
            <div class="description">
              <figcaption>Fotel 2, cena 20$</figcaption>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={armchair3} alt="armchair" />
            <div class="description">
              <figcaption>Fotel 3, cena 30$</figcaption>
            </div>
          </div>
        </div>

        <select
          id="armchair"
          name="armchair"
          ref={register}
          onChange={onChange}
        >
          <option value='{"name":"Fotel 1","price":10}'>
            Fotel 1, cena 10$
          </option>
          <option value='{"name":"Fotel 2","price":20}'>
            Fotel 2, cena 20$
          </option>
          <option value='{"name":"Fotel 3 ","price":30}'>
            Fotel 3, cena 30$
          </option>
        </select>
      </div>
      <button id="buttonNext" disabled={true}>
        Next
      </button>
    </form>
  );
};
