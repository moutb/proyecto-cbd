import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { RecipesService } from '../service';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarGridList() {
  const classes = useStyles();
  const [ ingredients, setIngredients ] = useState([]);
  useEffect(() => {
    async function listIngredients() {
      try {
        const response = await  RecipesService.listIngredients();
        console.log('ingredients', response);
        setIngredients(response.rows);
      } catch (ex) {
        console.error('error getting ingredients list', ex);
      }
    }

    listIngredients()
  }, [])

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h2" gutterBottom>
        { ingredients.length 
          ? ('Lista de ingredientes') 
          : ('Vaya, parece que no tenemos ningun ingrediente que mostrarte')
        }
      </Typography>

      <GridList cols={4} cellHeight={180} className={classes.gridList}>
      
        {ingredients.map((ingredient) => (
          <GridListTile key={ingredient.id}>

          {ingredient.attachments && ingredient.attachments.length > 0 && 
            (<img src={ `http://localhost:3000/api/recipes/${ingredient.id}/attachment?name=${ingredient.attachments[0]}` } alt={ingredient.name} />)
          }

            <GridListTileBar
              title={ingredient.name}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}