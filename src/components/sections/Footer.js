import {React, forwardRef} from 'react';
import {Phone, Email, GitHub, LinkedIn} from '@mui/icons-material'
import Stack from '@mui/material/Stack'


const Footer = forwardRef((props, ref) => {
    return (
      <div style={styles.footerContainer} ref={ref}>
        <div style={{width: "200px",margin: "auto"}}>
          <h3 style={{color: "white"}}>You can find me at:</h3>
          <a href="mailto: leo@tremblay.hk" style={styles.footerLink}>
            <Stack direction="row" alignItems="center">
              <Email style={{marginRight: "10px"}} />leo@tremblay.hk
            </Stack>
          </a>
          <a href="https://www.linkedin.com/in/leo-tremblay/" style={styles.footerLink}>
            <Stack direction="row" alignItems="center">
              <LinkedIn style={{marginRight: "10px"}} />Leo Tremblay
            </Stack>
          </a>
          <a href="https://github.com/Exz0tikWaffle/" style={styles.footerLink}>
            <Stack direction="row" alignItems="center">
              <GitHub style={{marginRight: "10px"}} />Exz0tikWaffle
            </Stack>
          </a>
        </div>
      </div>
    );

});

const styles = {
  footerContainer: {
    width: "100%",
    padding: "50px",
    background: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(8px)",
  },

  footerLink: {
    textDecoration: "none",
    color: "white",
    display: "block",
    marginTop: "20px",
    marginLeft: "0px",
    "&:last-child": {
      marginBottom: "20px"
    }
  }

}

export default Footer;