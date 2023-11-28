import React from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

function CenteredFooter({ company, light }) {
  const { href, name } = company;

  const year = new Date().getFullYear();

  

  return (
    <MKBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {/* {renderLinks} */}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: 'center' }}>
          <MKTypography variant="body2" color={light ? 'white' : 'secondary'}>
            Copyright &copy; {year} ayushsingh312003@gmail.com{' '}
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}

CenteredFooter.defaultProps = {
  company: { href: '#', name: 'Ayush Singh' },
  light: false,
};

CenteredFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  light: PropTypes.bool,
};

export default CenteredFooter;
