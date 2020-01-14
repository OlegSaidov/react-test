import React, { Fragment } from 'react'; // Importing react and Fragment named export
import './App.scss'; //importing App.scss
import { Query, Builder, Preview, Serialize } from './RuleBuilder' //importing compoents from ./Rulebuilder, indicating export in Rulbuilder/index.js
import { defaultConfig} from './config' //importing default configuration file, the initial state

function App() { //App.js rendered with index.js into into ../public/index.html
  return (//functional component
    <div className="App">
      <Query config={defaultConfig}>               {/*Query component is getting defaultConfig object as a prop  */}
        {(config, state, actions) => {             /*Render Function passed into Query component's render,  with 3 parameters, argumentspassed from Query component*/
          
          return (
            <Fragment>                                        {/*Just a container as a div element*/}
              <Preview config={config} tree={state}>     {/* Preview conponent is getting config and state arguments from Query component as a prop*/}
                {query => (                                    //This yet another render function, Preview component is processing its own props config and state with queryString.js and passing the result to Render function as a paramenter.
                  
                  <code className="query-preview">
                    {query || 'Use the builder below to create a search query.'} {/*Here is shown what is coming back from queryString*/}
                  </code>
                )}
              </Preview>
              <div className="query-builder">
                <Builder config={config} tree={state} actions={actions}/> {/*This is Builder component, still within the 1 st render function, it is getting the 3 arguments passed by the Query component*/}
             </div>
             <Serialize state={state}/>
            </Fragment>
             
          )
          
        }
          
        }
          
      </Query>
      
    </div>
  );
}

export default App;
