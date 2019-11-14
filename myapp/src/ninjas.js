import React from 'react';

const Ninjas = (props) => {//in functional components have to be explicitly Referenced 
    //we can destructure the parameter directly by passing {ninjas} instead of props and destructuring afterwards
        const {ninjas} = this.props,
            ninjaList = ninjas.map(ninja => {
                return (
                     <div className="ninja" key={ninja.id}>
                        <div>Name : {ninja.name}</div>
                        <div>Age : {ninja.age}</div>
                        <div>Belt : {ninja.belt}</div>
                    </div>
                )
            });

        return (
           <div className="ninja-list">
               {ninjaList}
           </div>
        )
}

export default Ninjas;