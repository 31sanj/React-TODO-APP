import React from 'react';

class Notes extends React.Component{
    render(){
        return(
            <div className="note" onClick={this.props.deletedMethod}>
                {this.props.text}
            </div>

        );
    }
}

export default Notes;