import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import PeopleIcon from '@material-ui/icons/People';
import SpeedIcon from '@material-ui/icons/Speed';
import { RecipesService } from '../service/index';
import CardListItem from './CardListItem';

const ingredientAmmount = (ingredient) => {
  if (ingredient.litres) {
    return `${ingredient.litres} litros`;
  } else if (ingredient.grams) {
    return `${ingredient.grams} gramos`;
  } else if (ingredient.units) {
    return `${ingredient.units} uds`;
  } else {
    return null;
  }
}

export default function ListRecipes() {

  const [ { recipes, ingredients }, setData ] = useState({ recipes: [], ingredients: [] });
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    async function listRecipes() {
      setLoading(true);
      try {
        const [recipes, ingredients] = await Promise.all([
          RecipesService.listRecipes(),
          RecipesService.listIngredients(),
        ]);
        debugger;
        setData({ 
          recipes: recipes.rows, 
          ingredients: ingredients.rows
        });
      } catch (ex) {
        console.error('error getting recipes list', ex);
      }
      setLoading(false);
    }

    listRecipes()
  }, [])

  return (<React.Fragment>
    { !loading && 
      (<Typography variant="h4" component="h2" gutterBottom>
        { recipes.length 
          ? ('Estas son las recetas que tenemos para ti') 
          : ('Vaya, parece que no tenemos ninguna receta para mostrarte ahora mismo')
        }
      </Typography>)
    }
    

    { loading &&
      (<React.Fragment>
        <Typography variant="h4" component="h2" gutterBottom>
          Un segundito, estamos consultando las recetas disponibles...
        </Typography>
        <LinearProgress />
      </React.Fragment>)
    }

    { recipes.map((recipe, idx) => (
        <Box mt={2} key={idx}>
          <CardListItem 
              key={ idx }
              id={ recipe.id }
              title={ recipe.name }
              description={ recipe.description }
              attachment={ recipe.attachments.length ? recipe.attachments[0] : null }
              metainfo={ (<React.Fragment>
                <ListItem button>
                  <ListItemIcon>
                    <AvTimerIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `${recipe.total_time} minutos` } />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `${recipe.minimum_dinners} y ${recipe.maximum_dinners}` } />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <SpeedIcon />
                  </ListItemIcon>
                  <ListItemText primary={ `${recipe.difficulty === 1 ? 'Fácil' : (recipe.difficulty === 3 ? 'Media' : 'Difícil' )}` } />
                </ListItem>
                </React.Fragment>)
              }

              collapseContent={ (<Grid container spacing={3}>
                { recipe.ingredients && 
                  (<Grid item xs={12} sm={6}>
                    <List>
                      { recipe.ingredients
                          .map((ingredient) => ({
                            ...ingredient,
                            ...(ingredients || []).find(ing => ing.id === `ingredient:${ingredient.id}`)
                          }))
                          .map((ingredient, idx) => {
                            const ammount = ingredientAmmount(ingredient);
                            return (
                                <Grid container spacing={1} key={idx}> 
                                  <Grid component="b" item xs={ammount ? 6 : 12}>{ ingredient.name }</Grid>
                                  { ammount && (<Grid component="span" item xs={'auto'}>{ `Cantidad: ${ammount}` }</Grid>) }
                                </Grid>
                              )
                            })
                      }
                    </List>
                  </Grid>)
                }
                { recipe.steps &&
                  (<Grid item xs={12} sm={6}>
                    <List>
                      <Typography key={idx} variant="body" component="h4" gutterBottom>
                        Pasos a seguir
                      </Typography>
                      { recipe.steps.map((step, idx) => (
                            <Typography key={idx} variant="body" component="p" gutterBottom>
                              { step }
                            </Typography>
                          ))
                      }
                    </List>
                  </Grid>)
                }
                </Grid>)
              }
            />
        </Box>
     )) }
  </React.Fragment>);
}