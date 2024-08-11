import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const whatsappNumber = "+919815226665"; // Replace with your WhatsApp number in international format
  const message = "Hello";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#25D366",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        <FaWhatsapp /> &nbsp; WhatsApp
      </button>
    </a>
  );
}

export default WhatsAppButton;
