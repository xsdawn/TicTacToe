/**
 * Modify: change class Square to be a function component
 */

// import React, { Component } from 'react'

// export default class Square extends Component {
//     /* DELETE, no longer keeps track of the game's state

//     //Add a constructor to initialize the state
//     constructor(props){
//         //a constructor should start with a super(props) call
//         super(props);
//         this.state = {
//             value:null,
//         };
//     }
//     */

//     render() {
//         return (
//             <button className='square' onClick={()=> this.props.onClick()} >
                    
//                 {/* Passing Data Through Props */}
//                 {this.props.value}
//             </button>
//         )
//     }
// }

function Square(props){
    return (
        <button className='square' onClick={()=> props.onClick()} >
            {props.value}
        </button>
    );
}

export default Square