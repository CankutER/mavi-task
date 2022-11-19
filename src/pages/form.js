import { useNavigate } from "react-router-dom";
import cities from "../utilities/cities";
import zones from "../utilities/zones";
import decimalize from "../utilities/decimalize";
import { useEffect } from "react";
export default function Form({ info, setForm, formState }) {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
  }, []);
  const inputHandler = (e) => {
    if (e.target.name === "population") {
      if (
        !Number(
          e.target.value
            .split("")
            .filter((letter) => letter !== ",")
            .join("")
        )
      ) {
        console.log(e.target.value);
        let temp = e.target.value.split("");
        temp.pop();
        let result = temp.join("");
        setForm({
          ...formState,
          [e.target.name]: result,
        });
        return;
      }

      let value = decimalize(e.target.value);
      console.log(value);
      setForm({ ...formState, [e.target.name]: value });
      return;
    }

    if (e.target.name === "plate") {
      if (e.target.value.length > 2) {
        console.log("hey");
        let temp = e.target.value.split("");
        temp.pop();
        console.log(temp.join(""));
        setForm({ ...formState, [e.target.name]: temp.join("") });
        return;
      }
    }
    setForm({ ...formState, [e.target.name]: e.target.value });
  };
  const submitHandler = () => {
    navigate("/preview");
  };
  return (
    <main className="row container-fluid mx-0  justify-content-center ">
      <div className="col-lg-6 col-sm-10 col-md-8 align-self-end">
        <form
          className="row g-3 mx-auto justify-content-center"
          onSubmit={submitHandler}
        >
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
                    value={i === 0 ? "" : city}
                    required
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
              required
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
              type="number"
              className="form-control"
              name="plate"
              id="plate"
              required
              onChange={inputHandler}
              value={formState.plate}
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="population" className="form-label">
              Nüfus
            </label>
            <input
              type="text"
              className="form-control"
              name="population"
              id="population"
              required
              onChange={inputHandler}
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
      </div>
      <div className="col-12 p-0 align-self-end">
        <aside className="ms-4">
          <p>Kullanıcı Adı: {info.id}</p>
          <p>Giriş Tarihi: {info.time}</p>
        </aside>
      </div>
    </main>
  );
}
