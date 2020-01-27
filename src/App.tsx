import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Main from 'components/Main';

import './sass/styles.scss';
// import ComponentOne from 'components/ComponentOne';
const ComponentOne = lazy(() => import('components/ComponentOne'))


const App = () => {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading</div>}>
        <Router>
          <ul className="links">
            <li><Link className='link' to='/main'>Main Page <br /></Link></li>
            <li><Link className='link' to='/component1'>ComponentOne <br /></Link></li>
          </ul>
          <Route path="/component1" component={ComponentOne} />
          <Route path="/main" exact component={Main} />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
