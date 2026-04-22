function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "white",
        padding: "15px",
        textAlign: "center",
        marginTop: "30px"
      }}
    >
      <p>⛏ Mine Production Tracker System</p>
      <p style={{ fontSize: "12px", opacity: 0.7 }}>
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;