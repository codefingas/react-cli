import React, { Component } from 'react';

class AddNinja extends Component {
        state = {
            name : null,
            age : null,
            belt : null
        }

        handleChange = (e) => {//this function handles the submiting of the text field
            this.setState({//this evaluates the id and set it to the target value in the form field
                [e.target.id] : e.target.value
            })
        };

        handleSubmit = (e) => {
            e.preventDefault();//stopping the form from submitting

            console.log(this.state);
        }




        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input type="text" name="text" id="name" onChange={this.handleChange}/>

                    <label htmlFor="age">
                        Age:
                    </label>
                    <input type="text" name="text" id="age" onChange={this.handleChange}/>

                    <label htmlFor="belt">
                        Belt:
                    </label>
                    <input type="text" name="text" id="belt" onChange={this.handleChange}/>
                    <button>submit</button>
                </form>
            )
        }
}

export default AddNinja;