import React from 'react';
import {useRouter} from 'next/router';
import {initialUrl} from '../../utils/constants/AppConst';

const pageStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff8f0',
  padding: '48px 24px',
  fontFamily: 'Open Sans, Helvetica Neue, Arial, sans-serif',
};

const cardStyle = {
  width: 'min(520px, 100%)',
  background: '#fff',
  border: '1px solid #f0e4d4',
  borderRadius: 16,
  padding: '40px 36px 32px',
};

const brandStyle = {
  margin: '0 0 16px',
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '0.04em',
  color: '#ff9800',
};

const titleStyle = {
  margin: '0 0 10px',
  fontSize: 28,
  lineHeight: 1.2,
  fontWeight: 700,
  color: '#163a5f',
};

const bodyStyle = {
  margin: '0 0 28px',
  fontSize: 14,
  lineHeight: 1.5,
  color: '#4a5d73',
};

const buttonStyle = {
  fontSize: 14,
  fontWeight: 600,
  fontFamily: 'inherit',
  textTransform: 'none',
  border: 'none',
  borderRadius: 8,
  padding: '10px 18px',
  background: '#ff9800',
  color: '#fff',
  cursor: 'pointer',
};

const SlingMissingPage = ({
  title = 'This page is not here',
  children,
  ctaLabel = 'Go home',
}) => {
  const router = useRouter();

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <p style={brandStyle}>sling.biz</p>
        <h1 style={titleStyle}>{title}</h1>
        <div style={bodyStyle}>
          {children ||
            'That URL does not match a published storefront page. Go home, or open another link.'}
        </div>
        <button
          type='button'
          style={buttonStyle}
          onClick={() => router.push(initialUrl || '/')}>
          {ctaLabel}
        </button>
      </div>
    </div>
  );
};

export default SlingMissingPage;
