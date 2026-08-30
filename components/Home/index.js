import React from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

const STUDIO_URL =
  process.env.NEXT_PUBLIC_STUDIO_URL || 'http://localhost:2021';
const DOCS_URL = 'https://sling.biz/documentation';

const useStyles = makeStyles(() => ({
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff8f0',
    padding: '48px 24px',
    fontFamily: 'Open Sans, Helvetica Neue, Arial, sans-serif',
  },
  card: {
    width: 'min(560px, 100%)',
    background: '#fff',
    border: '1px solid #f0e4d4',
    borderRadius: 16,
    padding: '40px 36px 32px',
  },
  brand: {
    margin: '0 0 16px',
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.04em',
    color: '#ff9800',
  },
  title: {
    margin: '0 0 10px',
    fontSize: 28,
    lineHeight: 1.2,
    fontWeight: 700,
    color: '#163a5f',
  },
  copy: {
    margin: '0 0 28px',
    fontSize: 15,
    lineHeight: 1.5,
    color: '#4a5d73',
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
  },
  primary: {
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
    borderRadius: 8,
    padding: '10px 18px',
    background: '#ff9800',
    color: '#fff',
  },
  secondary: {
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
    borderRadius: 8,
    padding: '10px 18px',
    background: '#fff',
    color: '#ff9800',
    border: '1px solid #ff9800',
  },
}));

const HomeComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.page}>
      <Box className={classes.card}>
        <p className={classes.brand}>sling.biz</p>
        <h1 className={classes.title}>Your site is live</h1>
        <p className={classes.copy}>
          This is the storefront. Open Studio to edit this page, or use Create
          to generate a new one.
        </p>
        <div className={classes.actions}>
          <a className={classes.primary} href={STUDIO_URL}>
            Open Studio
          </a>
          <a className={classes.secondary} href={DOCS_URL}>
            Documentation
          </a>
        </div>
      </Box>
    </Box>
  );
};

export default HomeComponent;
