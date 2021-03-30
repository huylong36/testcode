import { Component } from "react";
import { connect } from "react-redux";
import { timKiemUser, reSearch } from "./Action/Action";

const INPUT_TIMEOUT = 300; //ms - It's our input delay
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            predictions: [],
        };

        this.onChange = this.onChange.bind(this);
    }

    getPredictions(value) {
        return this.props.listUser.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }

    onChange(e) {
        clearTimeout(this.timeout);
        const value = e.target.value;
        this.setState({
            value
        });

        if (value.length > 0) {
            this.timeout = setTimeout(() => {
                const predictions = this.getPredictions(value);
                this.setState({
                    predictions
                });
            }, INPUT_TIMEOUT);
        } else {
            this.setState({
                predictions: []
            });
        }
        if (value.length === 0) {
            this.props.dispatch(reSearch(reSearch))
        }
    }
    xxxxxxx = (item) => {
        let hhh;
        this.props.listUser.forEach(xxx => {
            if (xxx.name === item) {
                hhh = xxx;
            }
        });
        this.props.dispatch(timKiemUser(hhh))
    }
    renderItemSearch(item, index) {
        return (
            <div className="wrewrew" key={index + item}>
                <div onClick={() => this.xxxxxxx(item)} className="itemUserx_">{item}</div>
            </div>
        )
    }
    render() {
        return (
            <div className="cxv">
                <div className="searchUser">
                    <input type="text" value={this.state.value} placeholder="search..." onChange={this.onChange} />
                </div>
                <div className="itemmmmm_">
                    {
                        this.state.predictions.map((item, index) => {
                            return this.renderItemSearch(item.name, index)
                        })
                    }
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        listUser: state.useReducers.listUser,
        editIndex: state.useReducers.editIndex,
        listUserLoc: state.useReducers.listUserLoc,
        type: state.useReducers.type,
        userSearch: state.useReducers.userSearch,
    }
}
export default connect(mapStateToProps)(TodoApp);