import { Component } from "react";
import '../css/style.css';
import ShowListUser from '../showListUser';
import LeftMenu from '../leftMenu'
import { connect } from "react-redux";
import { pagination } from "../Action/Action";
class View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            newsPerPage: 3
        }
    }
    render() {
        return (
            <div className="xxwerwer">
                <LeftMenu />
                <div className="col-xs-12 col-sm-12 col-md-10">
                    <ShowListUser />
                </div>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        listUser: state.useReducers.listUser,
        page: state.useReducers.page,
    }
}
export default connect(mapStateToProps)(View);