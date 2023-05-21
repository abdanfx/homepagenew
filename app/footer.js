import { AppBar, Toolbar, Typography } from "@mui/material";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Container
      maxWidth="100%"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: "20px 0",
        marginTop: "auto",
        width: "100%",
        height: "80px",
      }}
    >
      <Typography variant="body1" color="textSecondary" align="center">
        &copy; All right reserved <br /> Made by Abdan Syakuran
      </Typography>
    </Container>
  );
};

export default Footer;
