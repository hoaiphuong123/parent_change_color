import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';

DialogParent.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onSend: PropTypes.func.isRequired,
};
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function DialogParent({ onClose, open, onSend }) {
  const [maxWidth, setMaxWidth] = React.useState('sm');
  // const handleMaxWidthChange = (event) => {
  //   setMaxWidth(
  //     // @ts-expect-error autofill of arbitrary value is not handled.
  //     event.target.value,
  //   );
  // };
  return (
    <div>
      <form>
        <Dialog open={open}>
          <div>
            <DialogContent>
              <DialogContentText>Màn hình rộng</DialogContentText>
              <Box>
                <FormControl sx={{ mt: 2, minWidth: 120 }}>
                  <Select
                    onChange={onSend}
                    value={maxWidth}
                    inputProps={{
                      name: 'max-width',
                      id: 'max-width',
                    }}
                  >
                    <MenuItem value="xs">xs</MenuItem>
                    <MenuItem value="sm">sm</MenuItem>
                    <MenuItem value="md">md</MenuItem>
                    <MenuItem value="lg">lg</MenuItem>
                    <MenuItem value="xl">xl</MenuItem>
                  </Select>
                </FormControl>
                <DialogContentText>Chế độ sáng tối</DialogContentText>
                <div>
                  <Switch {...label} defaultChecked />
                </div>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button type="submit" value="Send" onClick={onClose}>
                SEND
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </form>
    </div>
  );
}
