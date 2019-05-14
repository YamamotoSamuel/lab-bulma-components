import React from 'react';

class CoolButton extends React.Component{
    render(){
        return(
            <div>
                <a class={this.props.classes} href="#">Cool</a>
            </div>
        )
    }
}

export default CoolButton;