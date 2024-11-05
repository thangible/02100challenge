import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/react-router-dom';
import { LooksOne, LooksTwo, Looks3 } from '@mui/icons-material';

const NAVIGATION = [
  {
    kind: 'page',
    title: 'Main items',
  },
  {
    segment: 'task-1',
    title: 'Form',
    icon: <LooksOne />,
  },
  {
    segment: 'task-2',
    title: 'Saved Responses',
    icon: <LooksTwo />,
  },
  { segment: 'task-3',
    title: 'Great Sucess', 
    icon: <Looks3 /> },
];

const BRANDING = {
  title: ' ',
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span>Coding challenge</span>
      <img src="logo.svg" alt="Logo" style={{ width: '80px', height: '80px' }} />
    </div>
  ),
};

export default function App() {
  return (
    <AppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </AppProvider>
  );
}
