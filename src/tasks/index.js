import React from 'react';
import {Route, Link} from 'react-router-dom';

import {Task as UIIntegration} from "./01-ui-integration";
import {Task as ReactRedux} from "./02-react-redux";
import {Task as Middleware} from "./03-middleware-enhancers";
import {Task as SideEffects} from "./04-side-effects";

const tasks = [
    {title : "UI Integration", component : UIIntegration},
    {title : "React-Redux", component : ReactRedux},
    {title : "Middleware", component : Middleware},
    {title : "Side Effects", component : SideEffects}
].map(e => ({
  ...e,
  slug: e.title
    .split(' ')
    .join('-')
    .toLowerCase(),
}))

function Tasks({match}) {
  return (
    <div>
      {tasks.map(({slug, component}) => (
        <Route key={slug} path={`/task/${slug}`} component={component} />
      ))}
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
}

function List() {
  return (
    <div>
      <ul style={{paddingLeft: 0}}>
        {tasks.map(({slug, title}) => (
          <li key={slug}>
            <Link to={`/task/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks

export {List}
