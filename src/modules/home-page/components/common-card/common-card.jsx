import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  withStyles,
  Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 'auto',
    marginTop: 10,
  },
  media: {
    height: 230,
  },
  cardAction: {
    width: '100%',
  },
};

const CommonCard = ({ classes, header, description, img, link = '' }) => (
  <Grid item xs={12} sm={6} md={6} lg={3}>
    <Card className={classes.card}>
      <CardActionArea className={classes.cardAction}>
        <CardMedia className={classes.media} image={img} title={header} />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {header}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={link}>
          Learn more
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

CommonCard.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default onlyUpdateForKeys(['header', 'decription', 'img', 'link'])(withStyles(styles)(CommonCard));
