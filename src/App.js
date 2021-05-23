import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavigationDrawer from './components/NavigationDrawer';
import ListRecipes from './components/ListRecipes';
import ListIngredients from './components/ListIngredients';
import Dashboard from './components/Dashboard';
import { RecipesService } from './service';


const routes = [
  {
    path: "/ingredients",
    component: ListIngredients
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/",
    component: ListRecipes
  },
  /*{
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }*/
];

function App() {
  return (
    <Router>
      <NavigationDrawer>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Typography component="div" style={{ backgroundColor: '#c', paddingTop: '64px' }}>
            <Switch>
              {routes
                .map((route, i) => (
                  <Route key={i} {...route} />
                ))
              }
            </Switch>
            </Typography>
          </Container>
        </React.Fragment>
      </NavigationDrawer>
    </Router> 
  );
}

export default App;
