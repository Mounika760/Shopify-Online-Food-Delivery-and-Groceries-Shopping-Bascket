import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const About = () => {
  return (
    <div
      style={{ textAlign: "center", height: "100%", backgroundColor: "white" }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          borderRadius: "5px",
          backgroundColor: "royalblue",
          color: "white",
          fontWeight: "bold",
        }}
      >
        About Us
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          lineHeight: "1.5",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
        metus molestie, efficitur dolor vitae, dictum velit. Fusce vel felis
        sapien. Aenean dictum varius dolor, eu laoreet leo maximus eu. Donec
        vitae velit id enim placerat vestibulum. Pellentesque aliquam sodales
        lorem, eu cursus velit. Sed sollicitudin felis id purus congue bibendum.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <a href="#" style={{ marginRight: "1rem", fontSize: "1.5rem" }}>
          <FaFacebook style={{ color: "blue" }} />
        </a>
        <a href="#" style={{ marginRight: "1rem", fontSize: "1.5rem" }}>
          <FaTwitter style={{ color: "blue" }} />
        </a>
        <a href="#" style={{ marginRight: "1rem", fontSize: "1.5rem" }}>
          <FaInstagram style={{ color: "violet" }} />
        </a>
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem 2rem",
            backgroundColor: "orange",
            color: "white",
            borderRadius: "5px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Subscribe to our Newsletter
        </h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "0.8rem",
              width: "100%",
              marginBottom: "1.5rem",
              border: "2px solid blue",
              borderRadius: "10px",
              backgroundColor: "#f5f5f5",
              color: "#333",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.5rem 2rem",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
      </form>
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem 2rem",
          backgroundColor: "green",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "2rem",
        }}
      >
        Download Our App <FaGooglePlay style={{ marginLeft: "1rem" }} />
        <FaApple style={{ marginLeft: "1rem" }} />
      </a>
      <div style={{ marginBottom: "2rem" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            marginBottom: "1rem",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Our Locations
        </h3>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
          We have locations in the following cities:
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            margin: "0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <li style={{ marginRight: "1rem", fontWeight: "bold", fontSize: "1rem" }}>
            New York
          </li>
          <li style={{ marginRight: "1rem", fontWeight: "bold", fontSize: "1rem" }}>
            Los Angeles
          </li>
          <li style={{ marginRight: "1rem", fontWeight: "bold", fontSize: "1rem" }}>
            Chicago
          </li>
          <li style={{ marginRight: "1rem", fontWeight: "bold", fontSize: "1rem" }}>
            San Francisco
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
