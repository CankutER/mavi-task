import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Preview({ list }) {
  const [isOpen, setIsOpen] = useState(null);
  const navigate = useNavigate();
  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
  console.log(list);
  useEffect(() => {
    console.log(loginInfo);
    if (!loginInfo) {
      navigate("/");
      return;
    }
  }, []);
  return (
    <main className="row container-fluid mx-0 justify-content-center  ">
      <article className="align-self-end ">
        {/*  */}
        {list.map((item, i) => {
          return (
            <div className="d-flex justify-content-center">
              <div
                className="row justify-content-center gx-5 w-25"
                onMouseOver={() => {
                  setIsOpen(i);
                }}
                onMouseOut={() => {
                  setIsOpen(null);
                }}
              >
                <div className="col-12 d-flex justify-content-around">
                  <section className="text-center mb-2 w-50">
                    <h4>İl</h4>
                    <p className="text-capitalize">
                      {item.cities || "Seçim Yapılmadı"}
                    </p>
                  </section>
                  <section className=" text-center mb-2 w-50">
                    <h4>İlçe</h4>
                    <p className="text-capitalize">
                      {item.province.toUpperCase() || "Seçim Yapılmadı"}
                    </p>
                  </section>
                </div>
                <div
                  className={`col-12 ${
                    isOpen === i ? null : "d-none"
                  } dropdown`}
                >
                  <div className="row justify-content-center gx-5 ">
                    <section className="col-md-6 text-center mb-2">
                      <h4>Plaka</h4>
                      <p className="text-capitalize">
                        {item.plate || "Seçim Yapılmadı"}
                      </p>
                    </section>
                    <section className="col-md-6  text-center mb-2">
                      <h4>Nüfus</h4>
                      <p className="text-capitalize">
                        {item.population || "Seçim Yapılmadı"}
                      </p>
                    </section>
                    <section className="col-md-6 text-center mb-2">
                      <h4>Bölge</h4>
                      <p className="text-capitalize">
                        {item.zones || "Seçim Yapılmadı"}
                      </p>
                    </section>
                    <section className="col-md-6 text-center mb-2">
                      <h4>İlçe Sayısı</h4>
                      <p className="text-capitalize">
                        {item.provnum || "Seçim Yapılmadı"}
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/*  */}

        {/*  */}
        {/* <div className="row justify-content-center gx-5 position-relative">
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
                {formState.province.toUpperCase() || "Seçim Yapılmadı"}
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
              <section className="col-md-auto text-center mb-2">
                <h4>İlçe Sayısı</h4>
                <p className="text-capitalize">
                  {formState.provnum || "Seçim Yapılmadı"}
                </p>
              </section>
            </div>
          </div>
        </div> */}
        {/*  */}
      </article>

      <div className="col-12 p-0 align-self-end">
        <aside className="ms-4">
          <p>Kullanıcı Adı: {loginInfo?.id}</p>
          <p>Giriş Tarihi: {loginInfo?.time}</p>
        </aside>
      </div>
    </main>
  );
}
