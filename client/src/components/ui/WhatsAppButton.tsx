const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5519984088833"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        width: "40px",
        height: "40px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "30px",
        textDecoration: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      💬
    </a>
  );
};

export default WhatsAppButton;
