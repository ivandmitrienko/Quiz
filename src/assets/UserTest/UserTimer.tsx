import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const UserTimer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval!);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <Typography variant='h2' gutterBottom>
        {formatTime(time)}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button
          variant='contained'
          color='primary'
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={handlePause}
          disabled={!isRunning}
          sx={{ ml: 2 }}
        >
          Pause
        </Button>
        <Button variant='contained' onClick={handleReset} sx={{ ml: 2 }}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default UserTimer;
