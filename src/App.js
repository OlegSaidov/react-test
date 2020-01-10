import React, { Fragment } from 'react';
import './App.scss';
import { Query, Builder, Preview, Serialize } from './RuleBuilder'
import { defaultConfig} from './config'

function App() {
  return (
    <div className="App">
      <Query config={defaultConfig}>
        {(config, state, actions) => {
          return (
            <Fragment>
              <Preview config={config} tree={state}>
                {query => (
                  <code className="query-preview">
                    {query || 'Use the builder below to create a search query.'}
                  </code>
                )}
              </Preview>
              <div className="query-builder">
                <Builder config={config} tree={state} actions={actions}/>
              </div>
            </Fragment>
          )
        }
        }
      </Query>
      <Serialize />
    </div>
  );
}

export default App;
