import React from 'react';
import { Paper, Grid, withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { lifecycle } from 'recompose';
import AuthorInfo from '../author-info/author-info';
import designerAvatar from '../../../../../public/images/dev-1.jpg';
import mainDeveloperAvatar from '../../../../../public/images/dev-2.jpg';
import ceoAvatar from '../../../../../public/images/dev-3.jpg';

const styles = {
  root: {
    marginTop: 15,
  },
  paper: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
  },
};

const InfoPage = ({ classes }) => (
  <Grid container justify="center">
    <Grid className={classes.root} item xs={11} md={6} lg={5}>
      <Paper className={classes.paper}>
        <Typography variant="title">Our amazing team</Typography>
        <Typography gutterBottom variant="caption">We are awesome</Typography>
        <Typography variant="body1">
          We created this app with love. Also you can star us at{' '}
          {
            <a
              href="https://github.com/roflanKisel/jobz-client"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          }{' '}
          {'<3'}
        </Typography>
      </Paper>
      <Paper className={classes.paper}>
        <AuthorInfo
          avatar={designerAvatar}
          header="Our Amazing Designer"
          description="Created main application concept and color palette"
        />
        <AuthorInfo
          avatar={mainDeveloperAvatar}
          header="Our Amazing Developer"
          description="The man who spent a thousand sleepless nights"
        />
        <AuthorInfo
          avatar={ceoAvatar}
          header="Our Amazing CEO"
          description="The man to whom we all obey and not transgress"
        />
      </Paper>
    </Grid>
  </Grid>
);

InfoPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default lifecycle({
  componentDidMount() {
    this.props.dispatchSetTitle('About');
  },
})(withStyles(styles)(InfoPage));
