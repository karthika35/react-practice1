import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters:[
            {id:1,value:3},
            {id:2,value:7},
            {id:3,value:13},

            {id:4,value:6}



        ]
    };

    render() {

        return(
           <div>

               {this.state.counters.map(counter=> <Counter id= {counter.id} value={counter.value} key={counter.id}/>)}

           </div>
        );


    }


}

export default Counters;