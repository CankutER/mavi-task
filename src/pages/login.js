import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="d-flex align-items-center justify-content-center">
      <section>
        <h4 className="text-center mb-4">Giriş</h4>
        <form className="row row-cols-1 g-3 w-50 mx-auto">
          <div className="col">
            <label htmlFor="name" className="form-label">
              Kullanıcı Adı
            </label>
            <input
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
          <Link to="/form" className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-50">
              Giriş
            </button>
          </Link>
        </form>
      </section>
    </main>
  );
}
