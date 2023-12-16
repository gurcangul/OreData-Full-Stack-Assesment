import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function SignUp() {
    return (
        <Box sx={{  mt:4 }}>
         <Box sx={{ flexGrow: 1, display: 'flex',
        justifyContent: 'center', }}>

            <Stack spacing={2}>
                <Typography variant="h3" component="h2">
                   Sign Up
                </Typography>
                     <TextField id="name" label="Name" variant="outlined" />
                     <TextField id="email" label="Outlined" variant="outlined" />
                     <TextField id="password" label="Password" variant="outlined" />
                     <Button variant="contained">Sign Up</Button>
            </Stack>
            </Box>
        </Box>
    );
}