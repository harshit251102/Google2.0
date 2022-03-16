import React from 'react'
import { Switch , Route , Redirect} from 'react-router-dom';
import Results from './Results.jsx';
import Maps from './Maps';

const Routes = () => {
  return (
    <div className='p-4'>
    <Switch>
        <Route exact path='/'>
          <Redirect to='/search'/>
        </Route>
        <Route exact path={['/search','/images','/news','/videos']}>
          <Results/>
        </Route>
        <Route exact path='/maps'>
          <Maps/>
        </Route>
    </Switch>
    </div>
  )
}

export default Routes
