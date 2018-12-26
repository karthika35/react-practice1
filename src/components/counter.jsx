import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
        tags: ['tag1', 'tag2', 'tag3', 'tag4']
    }
    style = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    // constructor() {
    //     super();
    //     console.log(this.state.count);
    // }

    countFormat() {
        const {count} = this.state
        if (count === 0) {
            return 'zero';
        }
        return count;
    }

    getBadgeClass() {

        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    handleIncrement = (counterId) => {
        console.log(this.state.count,counterId);
        this.setState({count:this.state.count+1})
    }

    render() {
        console.log(this.props);

        return (
            <React.Fragment>
                <span
                    style={this.style}
                    className={this.getBadgeClass()}
                >{this.countFormat()}</span>
                <button className='btn-secondary btn-sm' onClick={()=>this.handleIncrement({id:this.props.id})}> Increment</button>
            </React.Fragment>

        );
    }

}

export default Counter;