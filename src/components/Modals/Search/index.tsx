import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';
import SearchSelect from './Input';

import { ISearchModalProps } from './types';
import { Divider } from '@mui/material';
import NrthwoodsLogo from '../../Logo';

const SearchModal: React.FC< ISearchModalProps > = ({ open, onClose }) => {
    const theme = useTheme();
    return (
    <Dialog
        open={ open }
        maxWidth="lg"
        fullWidth={ true }
        onClose={ onClose }
        PaperProps={{
            style: {
                backgroundColor: `${ theme.palette.background.default }`
            },
        }}
    >
        <DialogTitle sx={{ textTransform: 'uppercase' }}>
            <Box display="flex" alignItems="center">
                <NrthwoodsLogo height="3rem" />
                <Box pl={ 2 }>
                    <span>
                        Search For Northwoods Products
                    </span>
                </Box>
            </Box>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ padding: '4rem 0' }}>
            <DialogContentText>
            You can set my maximum width and whether to adapt or not.
            </DialogContentText>
                <Box
                noValidate
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    m: 'auto',
                    width: 'fit-content',
                }}
            >
                <SearchSelect />
            </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
            <Button variant="outlined" onClick={onClose}>Close</Button>
        </DialogActions>
    </Dialog>
  );
}

export default SearchModal;