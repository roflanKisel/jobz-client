import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = {
  width: '100%',
};

const VacancyItem = () => (
  <ExpansionPanel>
    <ExpansionPanelSummary>
      <Typography>Vacancy 1</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      Deatils of vacancy 1
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default withStyles(styles)(VacancyItem);
