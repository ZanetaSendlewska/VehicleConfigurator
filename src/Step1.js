import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseEngine } from "./rootSlice";
import foto1 from "./photo/foto1.jpg";
import foto2 from "./photo/foto2.jpg";
import foto3 from "./photo/foto3.jpg";
import "./index.scss";

export const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const engine = useSelector((state) => state.engine);
  const { register, handleSubmit } = useForm({ defaultValues: { engine } });

  const onSubmit = (data) => {
    dispatch(chooseEngine(data.engine));
    history.push("./step2");
  };

  const onChange = () => {
    document.getElementById("buttonNext").disabled = false;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="engine">
          <h1>Konfigurator pojazdu</h1>
          <h4>1.Wybór typu silnika</h4>
        </label>

        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={foto1} alt="engine" />
            <div class="description">
              <figcaption>Silnik 1, cena 1000$</figcaption>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={foto2} alt="engine" />
            <div class="description">
              <figcaption>Silnik 2, cena 2000$</figcaption>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 onePhoto">
            <img src={foto3} alt="engine" />
            <div class="description">
              <figcaption>Silnik 3, cena 3000$</figcaption>
            </div>
          </div>
        </div>

        <select id="engine" name="engine" ref={register} onChange={onChange}>
          <option value='{"name":"Silnik typ-1","price":1000}'>
            Silnik 1, cena 1000$
          </option>
          <option value='{"name":"Silnik typ-2","price":2000}'>
            Silnik 2, cena 2000$
          </option>
          <option value='{"name":"Silnik typ-3","price":3000}'>
            Silnik 3, cena 3000$
          </option>
        </select>
      </div>
      <button id="buttonNext" disabled={true}>
        Next
      </button>
    </form>
  );
};
