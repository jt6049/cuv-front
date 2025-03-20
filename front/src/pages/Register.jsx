import styles from "../styles/login.module.css";
import { register } from "../services/index";
import { useState } from "react";
//react hot toast for error and success message
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    terms: false,
  });
  const registerHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const response = await register({ data: formData });
      if (response.ok) {
        toast.success("Account credited Successfully");
        navigate("/login");
      } else {
        toast.error("Something got wrong");
      }
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..!!");
      setIsLoading(false);
    }
  };
  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        className={styles.leftContainer}
        style={{
          width: "50vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          paddingLeft: "100px",
        }}
      >
        <div>
          <h1> Create an Account</h1>
          <h3
            style={{
              color: "#525252",
            }}
          >
            Your personal job finder is here
          </h3>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <input
              style={{
                padding: "10px",
                width: "40vw",
                maxwidth: "400px",
                borderRadius: "7px",
                border: "1px solid #C2C2C2",
              }}
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Name"
            />

            <input
              style={{
                padding: "10px",
                width: "40vw",
                maxwidth: "400px",
                borderRadius: "7px",
                border: "1px solid #C2C2C2",
              }}
              type="text"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              placeholder="Mobile"
            />

            <input
              style={{
                padding: "10px",
                width: "40vw",
                maxwidth: "400px",
                borderRadius: "7px",
                border: "1px solid #C2C2C2",
              }}
              type="text"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="email"
            />

            <input
              style={{
                padding: "10px",
                width: "40vw",
                maxwidth: "400px",
                borderRadius: "7px",
                border: "1px solid #C2C2C2",
              }}
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="password"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <input
                type="checkbox"
                name="terms"
                id="terms"
                style={{
                  color: "#525252",
                }}
                checked={formData.terms}
                onChange={(e) =>
                  setFormData({ ...formData, terms: e.target.checked })
                }
              />
              <label htmlFor="terms">
                {" "}
                I agree to the terms and conditions
              </label>
            </div>

            <button
              disabled={isLoading}
              style={{
                width: "40%",
                background: "#ED5353",
                color: "white",
                borderRadius: "5px",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              type="submit"
              onClick={registerHandler}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
              Create Account
            </button>
            <h3
              style={{
                color: "#525252",
              }}
            >
              Already have an account?
              <span
                style={{
                  color: "black",
                  textDecoration: "underline",
                  textUnderlineOffset: "6px",
                  cursor: "pointer",
                }}
              >
                Sign in?
              </span>
            </h3>
          </form>
        </div>
      </div>
      <div className={styles.rightContainer}></div>
    </div>
  );
}
