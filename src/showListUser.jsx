import { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { editUserActionOk, pagination, removeUserAction } from "./Action/Action";

class showListUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 1,
            currentPage: 0,
        }
    }
    formatDateTime(birthDay) {
        let date = new Date(birthDay)
        let showDate = date.getDate();
        let showMonth = date.getMonth();
        let showYear = date.getFullYear();
        return showDate + "/" + showMonth + "/" + showYear;
    }
    editUserOk = (editIndex) => {
        this.props.dispatch(editUserActionOk(editIndex))
    }
    removeUser = (removeUser) => {
        this.props.dispatch(removeUserAction(removeUser))
    }
    renderItem(User, index, start) {
        return (
            <div key={"xxxxxx=" + index}>
                <div className="itemUser">
                    <div className="id">{index + start}</div>
                    <div className="username">{User.name}</div>
                    <div className="gender">{User.gender}</div>
                    <div className="birthday">{this.formatDateTime(User.birthDay)}</div>
                    <div className="mail">{User.mail}</div>
                    <div className="phoneNumber">{User.phone}</div>
                    <div className="address">{User.address}</div>
                    <div className="zyx">
                        <Button onClick={() => this.editUserOk(index)} variant="success">Sửa</Button>
                        <Button onClick={() => {
                            if (window.confirm('bạn chắc chắn xoá  ? ')) {
                                this.removeUser(User)
                            }
                        }} variant="success"> Xoá </Button>
                    </div>
                </div>
            </div>
        )
    }

    clickPageNumber = (page) => {
        this.setState({
            currentPage: page,
        })

        // this.props.dispatch(pagination())
    }
    showPageNumber = (userTemp, currentPage, page) => {
        const pageNumber = []
        let limitUser = 10;
        for (let i = 0; i <= Math.ceil(userTemp.length) / limitUser; i++) {
            pageNumber.push(i)
        }

        return (
            <div className="btn-bagination">
                {pageNumber.map((v, i) => (currentPage ?
                    <button className="active" onClick={() => this.clickPageNumber(v)} key={i}>{v}</button> :
                    <button onClick={() => this.clickPageNumber(v)} key={i}>{v}</button>))}
            </div>
        )
    }
    render() {
        let userTemp = []
        if (this.props.type === 1) {
            userTemp = this.props.listUserLoc
        } else if (this.props.type === 2) {
            userTemp = this.props.userSearch
        } else if (this.props.type === 0) {
            userTemp = this.props.listUser
        }
        let mangMoi = []
        let limit = 10;
        let page = this.state.currentPage;
        let start = page * limit;
        let end = (page + 1) * limit;
        let total = userTemp.length;
        if (end > total) {
            end = total
        }
        for (let i = start; i < end; i++) {
            mangMoi.push(userTemp[i])
        }
        return (
            <div>
                <div className="menu-">
                    <div className="id">ID</div>
                    <div className="username">Tên người dùng</div>
                    <div className="gender">Giới tính</div>
                    <div className="birthday">Ngày sinh</div>
                    <div className="mail">Email</div>
                    <div className="phoneNumber">Số điện thoại</div>
                    <div className="address">Địa chỉ</div>
                    <div className="zyx">Chức năng </div>

                </div>
                {
                    mangMoi.map((User, index) => {
                        return this.renderItem(User, index, start);
                    })
                }
                {this.showPageNumber(userTemp)}
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
export default connect(mapStateToProps)(showListUser);
