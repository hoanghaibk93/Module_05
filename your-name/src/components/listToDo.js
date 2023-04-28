import {Component} from "react";

export class ListToDo extends Component {
    constructor() {
        super();
        this.state = {
            item: '',
            list: ['Read book', 'Listen to music']
        };
    }

    handleInputItems(value) {
        this.setState({
            item: value
        });
    }

    handleAddItems() {
        this.setState({
            list: [...this.state.list, this.state.item],
            item: ''
        });
    }

    render() {
        return (
            <>
                <input
                    value={this.state.item}
                    onChange={(event => this.handleInputItems(event.target.value))}
                />
                <button onClick={() => this.handleAddItems()}>Add</button>
                {this.state.list.map((item, index) => (
                    <tr key={index}>
                        <td>{item}</td>
                    </tr>
                ))}

            </>

        );
    }

}