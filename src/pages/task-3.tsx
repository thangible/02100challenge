import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function TaskThree() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Very Nice!
      </Typography>
      <img
        src="/borat-very.gif"
        alt="Very Nice"
        style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
      />
    </Box>
  );
}