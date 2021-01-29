import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: 'auto',
        MaxWidth: 600,
        color: theme.palette.text.secondary,
      },
    },
  }));

  

const Auth = () => {
    const classes = useStyles();
    return (
      <div className="Auth">
          <form className={classes.root} noValidate autoComplete="off">

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.authblock}>
                    <Paper className={classes.paper}>
                    <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                        <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        />

                    </Paper>
                        <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                        <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        />
                    </Grid>
                </Grid>
        
    </div>
          </form>
    

      </div>
      
    );
  }
  
  export default Auth;