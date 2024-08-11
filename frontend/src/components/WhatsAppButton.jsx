import React from "react";

function WhatsAppButton() {
  const whatsappNumber = "+919815226665"; // Replace with your WhatsApp number in international format
  const message = "Hello, Thanks for reaching out to us. How can we help you!";
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
        Contact Us on WhatsApp
      </button>
    </a>
  );
}

export default WhatsAppButton;
