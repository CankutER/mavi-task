import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Preview({ formState, info }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
  }, []);
  return (
    <main className="row container-fluid mx-0 justify-content-center  ">
      <article className="align-self-end ">
        <div className="row justify-content-center gx-5 position-relative">
          <div
            className="col-auto d-flex justify-content-center"
            onMouseOver={() => {
              setIsOpen(true);
            }}
            onMouseOut={() => {
              setIsOpen(false);
            }}
          >
            <section className=" text-center mb-2 me-5">
              <h4>İl</h4>
              <p className="text-capitalize">
                {formState.cities || "Seçim Yapılmadı"}
              </p>
            </section>
            <section className=" text-center mb-2 ">
              <h4>İlçe</h4>
              <p className="text-capitalize">
                {formState.province || "Seçim Yapılmadı"}
              </p>
            </section>
          </div>
          <div
            className={`col-auto ${
              !isOpen && "d-none"
            } position-absolute top-100 start-50 translate-middle-x`}
          >
            <div className="row justify-content-center gx-5 ">
              <section className="col-md-auto text-center mb-2">
                <h4>Plaka</h4>
                <p className="text-capitalize">
                  {formState.plate || "Seçim Yapılmadı"}
                </p>
              </section>
              <section className="col-md-auto  text-center mb-2">
                <h4>Nüfus</h4>
                <p className="text-capitalize">
                  {formState.population || "Seçim Yapılmadı"}
                </p>
              </section>
              <section className="col-md-auto text-center mb-2">
                <h4>Bölge</h4>
                <p className="text-capitalize">
                  {formState.zones || "Seçim Yapılmadı"}
                </p>
              </section>
            </div>
          </div>
        </div>
      </article>

      <div className="col-12 p-0 align-self-end">
        <aside className="ms-4">
          <p>Kullanıcı Adı: {info.id}</p>
          <p>Giriş Tarihi: {info.time}</p>
        </aside>
      </div>
    </main>
  );
}
