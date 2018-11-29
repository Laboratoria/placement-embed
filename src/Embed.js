import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = {
  code: {
    padding: 15,
    margin: 20,
  }
}

class Embed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({email: event.target.value })
  }

  render (){
    const { classes } = this.props;

    return (
      <React.Fragment>
        <form noValidate autoComplete="off">
          <TextField
              id="standard-name"
              label="Email"
              value={this.state.email}
              onChange={this.handleChange}
              margin="normal"
            />
          <Button variant="contained" color="primary">
            Gerar código
          </Button>
        </form>

        <Paper className={classes.code}>
        {'<a href="https://app.talento.laboratoria.la/profile/rJCC6EFBZUQ5qU3eRWvGvU58lH22" title="Gloria Valencia"><img src="../src/images/laboratoria-horizontal-yellow.svg" alt="Gloria Valencia"></a>'}
        </Paper>
      </React.Fragment>
    )
  }
};

export default withStyles(styles)(Embed)