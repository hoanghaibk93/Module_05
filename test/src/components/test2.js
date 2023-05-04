import {Component} from "react";

export class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <>
                <p>Bạn đã bấm {this.state.count}</p>

                <button onClick={()=> this.setState({count: this.state.count +1})}> Bấm vào tôi</button>

            </>
        );
    }
}