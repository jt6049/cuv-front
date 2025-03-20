export default function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        background: "#ED5353",
        borderBottomLeftRadius: "4rem",
        borderBottomRightRadius: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "2rem",
        position: "relative",
        fontWeight: "bold",
      }}
    >
      <>
        <div
          style={{
            position: "relative",
            zIndex: "10",
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <p>Jobfinder</p>
          <div
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            <button
              style={{
                background: "transparent",
                color: "white",
                border: "2px solid white",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "0.5rem",
              }}
            >
              Login
            </button>
            <button
              style={{
                background: "white",
                color: "#ED5353",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "0.5rem",
                border: "none",
              }}
            >
              Register
            </button>
          </div>
        </div>
      </>
    </div>
  );
}
