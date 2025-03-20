import React from "react";
import Navbar from "../Components/navbar";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function Listing() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          height: "20vh",
          width: "80vw",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: " #FF202040 0px 3px 8px",
          textAlign: "center",
          marginTop: "2rem",
          paddingTop: "2rem",
        }}
      >
        <div
          style={{
            border: "1px solid #E3E3E3",
            width: "65vw",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "1rem",
            display: "flex",
            padding: "0.5rem",
            alignItems: "center",
          }}
        >
          <HiMiniMagnifyingGlass
            style={{
              fontSize: "2rem",
            }}
          />
          <input
            style={{
              width: "63vw",
              border: "none",
              height: "3rem",
              fontSize: "1.5rem",
              color: "#9C9C9C",
            }}
            type="text"
            name=""
            placeholder="Type any job title"
          />
        </div>
      </div>
    </div>
  );
}
