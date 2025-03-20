import styles from "../styles/login.module.css";
import { login } from "../services";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    console.log("token found");
    navigate("/listing");
  }
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const response = await login({ data: formData });
      if (response.ok) {
        toast.success("Login Successful");
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/jobs");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Somethinf went wrong");
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
          <h1> Already have an account?</h1>
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
            <button
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
              disabled={isLoading}
              onClick={loginHandler}
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
            <h3
              style={{
                color: "#525252",
              }}
            >
              Dont have an account
              <span
                style={{
                  color: "black",
                  textDecoration: "underline",
                  textUnderlineOffset: "6px",
                  cursor: "pointer",
                }}
              >
                Sign up?
              </span>
            </h3>
          </form>
        </div>
      </div>
      <div className={styles.rightContainer}></div>
    </div>
  );
}
