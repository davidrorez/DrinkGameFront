import React from "react";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function CustomInput({ playerName, setErrorMessage, setPlayerName }) {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF5733",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth variant="outlined">
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Nombre del jugador"
          color="primary"
          focused
          autoComplete=""
          sx={{ backgroundColor: "transparent" }}
          InputProps={{
            inputProps: {
              style: { color: 'white' }},
            endAdornment: playerName ? (
              <IconButton
                type="submit"
                position="end"
                style={{ color: "white" }}
              >
                <PersonAddAlt1Icon />
              </IconButton>
            ) : null,
          }}
          InputLabelProps={{
            style: { color: "#A0AAB4" },
          }}
          value={playerName}
          onChange={(e) => {
            const inputText = e.target.value;
            if (inputText.length <= 10) {
              setErrorMessage("");
              setPlayerName(inputText);
            } else {
              setErrorMessage("El nombre no puede tener más de 10 caracteres");
            }
          }}
        />
      </FormControl>
    </ThemeProvider>
  );
}

export default CustomInput;
