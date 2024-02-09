import React from 'react';
import {AppBar, Toolbar, Button, Link} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function VerAppBar() {

  const pages = ['MaterialUI', 'Work In Progress..'];

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Link href="/">
          <Button variant="contained" color="primary">
            <HomeIcon />
          </Button>
        </Link>
        {pages.map((page) => (
          <Link href={`/${page}`} key={page}>
            <Button variant="contained" color="primary">
              {page}
            </Button>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default VerAppBar;