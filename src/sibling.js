import React from 'react';

// export class Sibling extends React.Component {
//   render() {

//     return (
//       <div>
//         <h1>Hey, my name is {this.props.name}!</h1>
//         <h2>Don't you think Frarthur is the prettiest name ever?</h2>
//         <h2>Sure am glad that my parents picked Frarthur!</h2>
//       </div>
//     );
//   }
// }


export function Sibling(props){


    return (
        <div>
          <h1>Hey, my name is {props.name}!</h1>
          <h2>Don't you think {props.name} is the prettiest name ever?</h2>
          <h2>Sure am glad that my parents picked {props.name}!</h2>
        </div>
      )
}