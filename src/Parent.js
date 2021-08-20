import React, {useState} from 'react';
import { Child } from './Child';
import { Sibling } from './Sibling';

// export class Parent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { name: 'Frarthur' };

//     this.changeName = this.changeName.bind(this);
//   }

//   changeName(newName) {
//     this.setState({
//       name: newName
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Child 
//           name={this.state.name} 
//           onChange={this.changeName} />
//         <Sibling name={this.state.name} />
//       </div>
//     );
//   }
// }

export function Parent(){
    const [name, setName] = useState('Frarthur')

    const changeName = (newName) => {
        setName(newName)
      }

    return (
        <div>
          <Child 
            name={name} 
            onChange={changeName} />
          <Sibling name={name} />
        </div>
      )
}