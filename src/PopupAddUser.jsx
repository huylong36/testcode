import { Component } from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import { addUserAction } from "./Action/Action";

class PopupAddUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            showPopup: true,
            close: true,
        }
    }
    date = () => {
        let dates = [];
        let months = [];
        let years = [];
        let total = {
            dates: dates,
            months: months,
            years: years,
        };
        for (var year = 1950; year <= 2021; year++) {
            years.push(year);
        }
        for (var month = 1; month <= 12; month++) {
            months.push(month);
        }
        for (var date = 1; date <= 30; date++) {
            dates.push(date)
        }
        return total;
    }
    addUser = () => {
        let day = this.refs.day.value
        let month = this.refs.month.value
        let year = this.refs.year.value
        let birthDay = new Date(year, month, day);
        var userInfo = {
            name: this.refs.name.value,
            gender: this.refs.gender.value,
            birthDay: birthDay.getDate() + "/" + birthDay.getMonth() + "/" + birthDay.getFullYear(),
            mail: this.refs.mail.value,
            phone: this.refs.phone.value,
            address: this.refs.address.value,
        }
        if (userInfo.name === "") {
            alert("nhập tên hiển thị ");
            return;
        } else if (userInfo.gender === "") {
            alert("chọn giới tính")
        } else if (userInfo.phone === "") {
            alert("nhập số điện thoại")
            return;
        } else if (userInfo.address === "") {
            alert("nhập địa chỉ")
        }
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userInfo.mail)) {
        } else {
            alert("Email không hợp lệ !")
            return;
        }
        this.setState({
            value: "",
        })
        this.props.dispatch(addUserAction(userInfo))
    }
    render() {
        return (
            <div className="header">
                <Popup modal trigger={<button className="modal">Thêm mới</button>} position="right center">

                </Popup>
                <button>Gửi mail</button>
                <div className="search-user">
                    <input />
                    <button>Tìm kiếm </button>
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        listUser: state.useReducers.listUser,
    }
}
export default connect(mapStateToProps)(PopupAddUser);
// export default PopupAddUser;