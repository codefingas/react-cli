import React from 'react';

const Ninjas = (prop) => {//in functional components have to be explicitly Referenced 
    //we can destructure the parameter directly by passing {ninjas} instead of props and destructuring afterwards
        const {ninjas} = prop,
                ninjaList = ninjas.map(ninja => {
                    //using tenary operator to 
                   return ninja.age > 20 ? (
                        <div className="ninja" key={ninja.id}>
                            <div>Name : {ninja.name}</div>
                                <div>Age : {ninja.age}</div>
                                <div>Belt : {ninja.belt}</div>
                        </div>
                   ) : null;
                })

            // ninjaList = ninjas.map(ninja => {
            //     if (ninja.age > 20) {
            //         return (
            //             <div className="ninja" key={ninja.id}>
                                {/* <div>Name : {ninja.name}</div>
                                    <div>Age : {ninja.age}</div>
                                    <div>Belt : {ninja.belt}</div>
                            </div> */}
            //         )
            //     } else {
            //         return null
            //     }
            // });



        return (
           <div className="ninja-list">
               {ninjaList}
           </div>
        )
}

export default Ninjas;