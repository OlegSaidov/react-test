import React, { Component } from 'react';

export class Serialize extends Component {

    logState(){
        console.log(this.props.state);
      }

    render() {
       
        return (
            <div>
                <button onClick={this.logState()} className='btn btn-primary shadow'>Serialize</button>
            </div>

        )
    }
}

