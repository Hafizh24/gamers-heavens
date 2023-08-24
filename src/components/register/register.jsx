"use client";

import { useState } from "react";
import styles from "./register.module.css";
import { signIn } from "next-auth/react";

const Register = () => {
  let [loading, setLoading] = useState(false);
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: "/" });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <div className="container">
        <div className={styles.header}>Welcome</div>
        <div className="form">
          <form className={styles.form} onSubmit={onSubmit}>
            <div className="mb-3 col-7 form-floating ">
              <input
                required
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="form-control"
                id="floatingName"
                placeholder="John Doe"
              />
              <label htmlFor="floatingName">Name</label>
            </div>
            <div className="mb-3 col-7 form-floating ">
              <input
                required
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="mb-3 col-7 form-floating ">
              <input
                required
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary" disabled={loading}>
              {loading ? "loading..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
