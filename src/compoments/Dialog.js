import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import PropTypes from 'prop-types';

DialogParent.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
};
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function DialogParent({ onClose, open, onSend }) {
  return (
    <div>
      <form>
        <Dialog open={open} onClose={onClose}>
          <div>
            <DialogContent>
              <DialogContentText>Màn hình rộng</DialogContentText>
              <Box>
                <FormControl sx={{ mt: 2, minWidth: 120 }}>
                  <select onChange={onSend}>
                    <option value="xl">xl</option>
                    <option value="lg">lg</option>
                    <option value="md">md</option>
                  </select>
                </FormControl>
                <DialogContentText>Chế độ sáng tối</DialogContentText>
                <div>
                  <Switch {...label} defaultChecked />
                </div>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button type="submit" value="Send">
                send
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </form>
    </div>
  );
}
