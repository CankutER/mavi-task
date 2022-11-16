import { useEffect, useState } from "react";
import cities from "../utilities/cities";
import zones from "../utilities/zones";

export default function Form() {
  const [formState, setForm] = useState({});
  const inputHandler = (e) => {
    if (e.target.name === "population") {
      let value;
      if (!e.target.value) {
        value = `${e.key}.000`;
      } else {
        let trimmedArr = e.target.value.split("");
        trimmedArr.splice(-4);
        let trimmedStr = trimmedArr.join("");
        value = trimmedStr + e.key + ".000";
      }
      setForm({ ...formState, [e.target.name]: value });
      return;
    }
    setForm({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <main className="d-flex align-items-center justify-content-center position-relative">
      <form className="row  g-3 mx-auto justify-content-center">
        <div className="col-lg-6">
          <label htmlFor="cities" className="form-label">
            Şehir
          </label>
          <select
            name="cities"
            id="cities"
            onChange={inputHandler}
            value={formState.cities}
            className="form-select"
          >
            {cities.map((city, i) => {
              return (
                <option
                  value={city}
                  hidden={i === 0 ? true : false}
                  selected={i === 0 ? true : false}
                  key={i}
                >
                  {city}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-lg-6">
          <label className="form-label" htmlFor="province">
            İlçe
          </label>
          <input
            type="text"
            name="province"
            id="province"
            className="form-control"
            maxLength={35}
            onChange={inputHandler}
            value={formState.province}
          />
        </div>
        <div className="col-lg-6">
          <label htmlFor="plate" className="form-label">
            Plaka
          </label>
          <input
            type="text"
            className="form-control"
            name="plate"
            id="plate"
            onChange={inputHandler}
            value={formState.plate}
            maxLength={2}
          />
        </div>
        <div className="col-lg-6">
          <label htmlFor="population" className="form-label">
            Nüfus
          </label>
          <input
            type="number"
            className="form-control"
            name="population"
            id="population"
            onKeyDown={inputHandler}
            value={formState.population}
          />
        </div>
        <div className="col-lg-6">
          <label htmlFor="zones" className="form-label">
            Bölge
          </label>
          <select
            name="zones"
            id="zones"
            onChange={inputHandler}
            value={formState.zones}
            className="form-select"
          >
            {zones.map((zone, i) => {
              return (
                <option
                  value={zone}
                  hidden={i === 0 ? true : false}
                  selected={i === 0 ? true : false}
                  key={i}
                >
                  {zone}
                </option>
              );
            })}
          </select>
        </div>
        <div className="Col-lg-6 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Devam
          </button>
        </div>
      </form>
      <aside className="position-absolute bottom-0 start-0 ms-5 mb-5 ">
        <p>Kullanıcı Adı:</p>
        <p>Giriş Tarihi:</p>
      </aside>
    </main>
  );
}
