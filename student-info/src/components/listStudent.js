import {Component} from "react";

export class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                    ID: 1,
                    Name: 'Nguyễn Văn A',
                    Age: 18,
                    Address: 'Hà Nội'
                },
                {
                    ID: 2,
                    Name: 'Nguyễn Văn B',
                    Age: 19,
                    Address: 'Đà Nẳng'
                },
                {
                    ID: 3,
                    Name: 'Nguyễn Văn C',
                    Age: 21,
                    Address: 'Huế'
                },
            ]
        };
    }

    render() {
        return (
            <>
                {this.state.studentList.map((student, index) => (
                        <tr>
                            <td>{student.ID}</td>
                            <td>{student.Name}</td>
                            <td>{student.Age}</td>
                            <td>{student.Address}</td>
                        </tr>
                    )
                )}
            </>
        );
    }
}
