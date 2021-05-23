import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

export default function CardListItem({
  id, title, attachment, description, metainfo, collapseContent
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            { title.charAt(0) }
          </Avatar>
        }
        title={ title }
      />

      { attachment && expanded && 
        (<CardMedia
          className={classes.media}
          image={ `http://localhost:3000/api/recipes/${id}/attachment?name=${attachment}` }
          title={ title }
        />)
      }
      
      { description && 
        (<CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            { description }
          </Typography>
        </CardContent>)
      }

      <CardActions disableSpacing>
        { metainfo && metainfo }
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      { collapseContent && 
        (<Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            { collapseContent }
          </CardContent>
        </Collapse>)
      }
    </Card>
  );
}