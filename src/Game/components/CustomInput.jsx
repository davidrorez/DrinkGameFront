import React from 'react';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import TextField from '@mui/material/TextField';

function CustomInput({ playerName, setErrorMessage, setPlayerName }) {
  return (
    <FormControl fullWidth variant="outlined" className='mt-'>
      <TextField
        fullWidth
        id="input-with-icon-textfield"
        label="Nombre del jugador"
        variant="filled"
        autoComplete=''
        InputProps={{
          endAdornment: playerName ? (
            <IconButton type="submit" position="end" style={{ color: 'white' }}>
              <PersonAddAlt1Icon/>
            </IconButton>
          ) : null,
          style: { color: 'white', backgroundColor: '#c9c9c959' },
        }}
        InputLabelProps={{
          style: { color: '#A0AAB4' },
        }}
        value={playerName}
        onChange={(e) => {
          const inputText = e.target.value;
          if (inputText.length <= 10) {
            setErrorMessage('');
            setPlayerName(inputText);
          } else {
            setErrorMessage('El nombre no puede tener más de 10 caracteres');
          }
        }}
      />
    </FormControl>
  );
}

export default CustomInput;