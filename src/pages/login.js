import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const url = "https://jsonplaceholder.typicode.com/posts";

export default function Login({ setInfo, info }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
  const formRef = useRef();
  const userRef = useRef();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const formData = new FormData(formRef.current);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw "Request failed";
      }
      const data = await response.json();
      console.log(data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    const date = new Date();
    setIsDisabled(false);
    const loginInfo = {
      id: userRef.current.value,
      time: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${
        String(date.getMinutes()).length === 1
          ? "0" + date.getMinutes()
          : date.getMinutes()
      }`,
    };
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));

    navigate("/form", { replace: true });
  };
  useEffect(() => {
    if (loginInfo) {
      navigate("/form");
      return;
    }
  }, []);
  return (
    <main className="d-flex align-items-center justify-content-center">
      <section>
        <h4 className="text-center mb-4">Giriş</h4>
        <form
          ref={formRef}
          onSubmit={submitHandler}
          className="row row-cols-1 g-3 w-50 mx-auto"
        >
          <div className="col">
            <label htmlFor="name" className="form-label">
              Kullanıcı Adı
            </label>
            <input
              ref={userRef}
              type="text"
              required
              name="name"
              id="name"
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="password" className="form-label">
              Şifre
            </label>
            <input
              type="password"
              required
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          <div className="col d-flex justify-content-center">
            <button
              disabled={isDisabled && true}
              type="submit"
              className="btn btn-primary w-50"
            >
              Giriş
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
