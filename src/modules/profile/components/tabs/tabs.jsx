import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Typography, Tab, Tabs, withStyles } from '@material-ui/core';
import VacancyItem from '../../containers/vacancy-item';

const TabContainer = ({ children }) => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
);

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 10,
    marginBottom: 10,
  },
  tabContainer: {
    textAlign: 'center',
  },
});

class ScrollableTabsButtonAuto extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, vacancies } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            fullWidth
          >
            <Tab label="Vacancies" />
            <Tab label="Companies" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            {vacancies.map((vacancy) => <VacancyItem key={vacancy.id} vacancy={vacancy}/>)}
          </TabContainer>
        )}
        {value === 1 &&
          <TabContainer>
            <Typography className={classes.tabContainer} variant="body2">Company favorites coming soon</Typography>
          </TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(ScrollableTabsButtonAuto);
