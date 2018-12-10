import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  withStyles,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  width: '100%',
  button: {
    marginRight: 12,
  }
};

class VacancyItem extends React.Component {
  onRemoveVacancy = () => {
    const { dispatchRemoveVacancy, vacancy } = this.props;

    dispatchRemoveVacancy(vacancy.id);
  }

  render() {
    const { vacancy, classes } = this.props;

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography variant="display1">{vacancy.employeePosition} - {vacancy.estimatedSalary}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Button className={classes.button} size="small" variant="contained" color="primary" component={Link} to={`/vacancies/get/${vacancy.id}`}>More</Button>
          <Button className={classes.button} size="small" variant="contained" color="secondary" onClick={this.onRemoveVacancy}>Remove</Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(VacancyItem);
