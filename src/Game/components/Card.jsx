import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useNavigate } from "react-router-dom";

export default function MediaControlCard({ setBgColor }) {
  const navigate = useNavigate();

  const handlePlayRoulette = () => {
    setBgColor("bg-roulette");
    navigate("/challenge");
  };

  return (
    <div className="bg-color">
      <div
        className="container py-5 d-flex flex-column justify-content-center align-items-center"
        style={{ flex: "1 0 auto" }}
      >
        <div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-5">
          <h1 className="d-flex justify-content-center text-white mb-4">
            ¡Modo de juego!
          </h1>
          <Card
            sx={{
              display: "flex",
              marginBottom: "10px",
              backgroundColor:
                "background-color: #85FFBD; background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Ruleta
                </Typography>
              </CardContent>
            </Box>
            <CardContent style={{ paddingBottom: "0px" }}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                This impressive paella is a perfect party dish and a fun meal to
                cook together.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "right" }}>
                <IconButton
                  type="submit"
                  sx={{ margin: "0px" }}
                  onClick={() => handlePlayRoulette()}
                >
                  <PlayCircleFilledIcon
                    sx={{ fontSize: "3rem" }}
                  ></PlayCircleFilledIcon>
                </IconButton>
              </Box>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              marginBottom: "10px",
              backgroundColor:
                "#8BC6EC; background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Cartas
                </Typography>
              </CardContent>
            </Box>
            <CardContent style={{ paddingBottom: "0px" }}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                This impressive paella is a perfect party dish and a fun meal to
                cook together.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "right" }}>
                <IconButton type="submit" sx={{ margin: "0px" }}>
                  <PlayCircleFilledIcon
                    sx={{ fontSize: "3rem" }}
                  ></PlayCircleFilledIcon>
                </IconButton>
              </Box>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              marginBottom: "10px",
              backgroundColor:
                "#FBAB7E; background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Verdad o Reto
                </Typography>
              </CardContent>
            </Box>
            <CardContent style={{ paddingBottom: "0px" }}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                This impressive paella is a perfect party dish and a fun meal to
                cook together.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "right" }}>
                <IconButton type="submit" sx={{ margin: "0px" }}>
                  <PlayCircleFilledIcon
                    sx={{ fontSize: "3rem" }}
                  ></PlayCircleFilledIcon>
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
