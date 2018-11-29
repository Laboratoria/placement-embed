import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Embed from './Embed';
import logo from './logo.svg';

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center',
    maxWidth: '960px',
    margin: '0 auto',
  },
  header: {
    margin: '15px 0'
    
  }
}
const App = ({ classes }) => (
  <Grid container className={classes.root}> 
     <Grid item xs={12}>
     <header>
      <img className={classes.header} src={logo} alt="Logo" />
     </header>

    <Typography variant="h2" gutterBottom>
      O que é o Placement Embed?
    </Typography>

    <Typography paragraph>
      Placement Embed tem o objetivo de ajudar você, como? Aumentando a probabilidade com que as empresas encontrem seu perfil no app.talento, da hora neh?
    </Typography>

    <Typography variant="h2" gutterBottom>
      Como?
    </Typography>

    <Typography paragraph>
      Basta você inserir um codigo super simple em seus projetos ou até mesmo em seu Readme do Github?
    </Typography>


    <Typography variant="h2" gutterBottom>
      Como gerar o código?
    </Typography>

    <Typography paragraph>
      Inserá seu email no campo abaixo, que geramos o código para você
    </Typography>

    <Embed />

    <Typography variant="h2" gutterBottom>
      Como inserir em meu projeto?
    </Typography>

    <Typography paragraph>
      Basta copiar o código gerado e colar no HTML se seu projeto
    </Typography>

    <Typography variant="h2" gutterBottom>
      Como inserir em meu projeto do Github?
    </Typography>

    <Typography paragraph>
      Basta copiar o código gerado e colar no HTML se seu projeto
    </Typography>

     </Grid>
  </Grid>
);

export default withStyles(styles)(App);
