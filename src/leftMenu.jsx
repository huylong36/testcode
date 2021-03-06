import { Button, Modal } from "react-bootstrap";
import { Component } from "react";
import { connect } from "react-redux";
import { addUserAction, resetIndex, locNguoiDungTheoTruong } from "./Action/Action";
import { ToastContainer, toast } from 'react-toastify';
import Autosuggest from './Autosuggest'
import 'react-toastify/dist/ReactToastify.css';

class leftMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            showUser: {},
            value: '',
            valueSearch: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClose = (reset) => {
        this.setState({ show: false, showUser: {} })
        this.props.dispatch(resetIndex(reset))
    }
    handleShow = () => {
        this.setState({ show: true, showUser: {} })
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
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
        for (let year = 1950; year <= 2021; year++) {
            years.push(year);
        }
        for (let month = 1; month <= 12; month++) {
            months.push(month);
        }
        for (let date = 1; date <= 31; date++) {
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
            birthDay: birthDay.getTime(),
            mail: this.refs.mail.value,
            phone: this.refs.phone.value,
            address: this.refs.address.value,
        }

        if (userInfo.name === "") {
            toast("Nh???p t??n hi???n th??? !", {
                autoClose: 1000,
                position: "top-center",
                appearance: 'error',
            })
            return;
        }
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userInfo.mail)) {
        } else {
            toast("Email kh??ng h???p l??? !", {
                autoClose: 1000,
                position: "top-center",
                appearance: 'error',
            })
            return;
        }
        if (/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/.test(userInfo.phone) && userInfo.phone.length === 10) {

        } else {
            toast("S??? ??i???n tho???i kh??ng h???p l??? ! ", {
                autoClose: 1000,
                position: "top-center",
                appearance: 'error',
            })
            return;
        }
        if (/^[a-zA-Z0-9\s,.'-]{3,}$/.test(userInfo.addUser)) {

        } else {
            toast("Nh???p ?????a ch??? !", {
                autoClose: 1000,
                position: "top-center",
                appearance: 'error',
            })
            return;
        }
        if (this.props.editIndex === -1) {
            toast.warning("Th??m m???i th??nh c??ng !", {
                position: "top-center",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else if (this.props.editIndex > -1) {
            toast.info("C???p nh???t th??nh c??ng !", {
                position: "top-center",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        setTimeout(() => {
            this.setState({
                value: "",
                show: false,
            })
        }, 2000)
        this.props.dispatch(addUserAction(userInfo))

    }

    getDayFromDate(day) {
        let date = new Date(day)
        let showDate = date.getDate();
        return showDate;
    }
    getMonthFromDate(month) {
        let date = new Date(month)
        let showMonth = date.getMonth();
        return showMonth;
    }
    getYearFromDate(year) {
        let date = new Date(year)
        let showYear = date.getFullYear();
        return showYear;
    }
    showFillter = () => {
        let abc = this.props.listUser
        let listFilter = this.refs.filter_.value;
        let newArr = abc.filter(e => e.gender === listFilter)
        this.props.dispatch(locNguoiDungTheoTruong(newArr))
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.editIndex > -1) {
            let xxxxx = ''
            xxxxx = this.props.listUser[nextProps.editIndex]
            this.setState({
                show: true,
                showUser: xxxxx,
            })
        }
    }
    render(User) {
        return (
            <div className="col-xs-12 col-md-2 leftMenu">

                <p className="title">Ph???n m???m qu???n l?? ng?????i d??ng </p>
                <Button variant="primary" className="addUser" onClick={() => this.handleShow()}>
                    Th??m m???i
                </Button>
                <div className="chooseFilter">
                    <select ref="filter_">
                        <option key={0} value={"Nam"}>Gi???i t??nh Nam</option>
                        <option key={1} value={"N???"}>Gi???i t??nh N???</option>
                    </select>
                    <Button className="btn btn-danger btn-md" onClick={() => { this.showFillter() }}>L???c</Button>
                </div>
                <div className="zIndex"><Autosuggest /></div>
                <Modal id="modal-view" className="total-modal" show={this.state.show} onHide={() => this.handleClose()} backdrop="static" keyboard="{false}">
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body className="xxxxadsd">
                        <div>
                            <div className="name xyz">
                                <div>T??n :</div>
                                <input defaultValue={this.state.showUser.name} ref="name" placeholder="t??n hi???n th???" />
                            </div>
                            <div className="genders xyz">
                                <div> Gi???i t??nh : </div>
                                <div className="gt">
                                    <select ref="gender">
                                        <option key={0} value={"Nam"}>
                                            Nam
                                        </option>
                                        <option key={1} value={"N???"}>
                                            N???
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>Ng??y sinh : </div>
                            <div className="xxx">
                                <div className="date">
                                    <select ref="day" >
                                        <option>Ng??y </option>
                                        {this.date().dates.map((value) => (<option key={value} selected={this.getDayFromDate(this.state.showUser.birthDay) === value}>{value}</option>))}
                                    </select>
                                </div>
                                <div className="date">
                                    <select ref="month">
                                        <option>Th??ng</option>
                                        {this.date().months.map((value) => (<option key={value} selected={this.getMonthFromDate(this.state.showUser.birthDay) === value}>{value}</option>))}
                                    </select>
                                </div>
                                <div className="date">
                                    <select ref="year">
                                        <option>N??m</option>
                                        {this.date().years.map((value) => (<option key={value} selected={this.getYearFromDate(this.state.showUser.birthDay) === value}>{value}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div className="mail xyz">
                                <div>Email : </div>
                                <input defaultValue={this.state.showUser.mail} ref="mail" type="email" placeholder="Email" />
                            </div>
                            <div className="sdt xyz">
                                <div>S??T : </div>
                                <input defaultValue={this.state.showUser.phone} ref="phone" type="number" placeholder="s??? ??i???n tho???i" />
                            </div>
                            <div className="address xyz">
                                <div>?????a ch??? </div>
                                <input defaultValue={this.state.showUser.address} ref="address" placeholder="?????a ch???" />
                            </div>
                            <div className="btn-add">
                                <button style={{ backgroundColor: "#4CAF50" }} onClick={() => { this.addUser() }}>{this.props.editIndex > -1 ? "S???a" : "Th??m m???i"}</button>
                                <ToastContainer
                                    autoClose="2000" />
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        listUser: state.useReducers.listUser,
        editIndex: state.useReducers.editIndex,
        listUserLoc: state.useReducers.listUserLoc,
    }
}
export default connect(mapStateToProps)(leftMenu);