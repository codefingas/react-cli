import React from 'react';


class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = this.props
    }

    
     handleLoginClick() {
         this.setState({isLoggedIn: true});

     }


     handleLogoutClick() {
         this.setState({isLoggedIn : false});
     }

    

     render (props) {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn) {
             button = <button onClick={this.handleLogoutClick}>Logout</button>
        } else {
            button = <button onClick={this.handleLoginClick}>Login</button>
        }


        return (
            <div>

                    {button}
            </div>
        )
    }

};

export default Greeting;