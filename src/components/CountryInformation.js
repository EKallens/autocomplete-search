import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { red } from '@material-ui/core/colors';
import { CountryContext } from '../context/CountryContext';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 460,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    margin: '30px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const CountryInformation = () => {

  const classes = useStyles();
  const countryContext = useContext(CountryContext);

  if(!countryContext) return null;

  const { countryInfo } = !!countryContext && countryContext;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            { countryInfo?.alpha2Code }
          </Avatar>
        }
        title={ countryInfo?.name }
        subheader={`Capital: ${ countryInfo?.capital }  |  Population: ${countryInfo?.population}`}
      />
      <CardMedia
        className={classes.media}
        image={countryInfo?.flag}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Borders of {countryInfo?.name}:
          <ul>
            { countryInfo?.borders.map( border => (
              <li key={border}>{ border }</li>
            ) )}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CountryInformation;