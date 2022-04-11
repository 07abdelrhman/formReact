import React, { Component } from "react";
import "./App.css";
const nameReg=RegExp( /^[a-zA-Z]\s* $/ );
const phoneNumReg= RegExp(/^[0-9]{11}$/);
const passportReg=RegExp(/^[0-9a-zA-Z]$/);
const idReg=RegExp( /^[0-9]{14}$/);
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: null,
      passport:null,
      lastName: null,
      nation_id:null,
      phoneNumb:null,
      memberShip:null,
      front_img:null,
      back_img:null,
      email: null,
      password: null,
      formErrors: {
        fullName: "",
        lastName: "",
        passport:'',
        nation_id:'',
        phoneNumb:'',
        memberShip:'',
        front_img:'',
        back_img:'',
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    // if (formValid(this.state)) {
    //   console.log(`
    //     --SUBMITTING--
    //     fullName: ${this.state.fullName}
    //     Last Name: ${this.state.lastName}
    //     Email: ${this.state.email}
    //     Password: ${this.state.password}
    //   `);
    // } else {
    //   console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    // }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "FullName":
        formErrors.fullName =nameReg.test(value)
        ? ""
        : "invalid Full name";
        break;
      case "phone":
        formErrors.phoneNumb =
        phoneNumReg.test(value)
        ? ""
        : "invalid phone num";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case 'passprot':
        formErrors.passport= passportReg.test(value)?'':'invalid passport id';break;
      case 'nation_id':
        formErrors.nation_id=idReg.test(value)?'':'invalid nation id';break;
      case 'membership':
        formErrors.memberShip= this.state.memberShip ? 'invalid membership':'';break;
      case 'front_img':
        formErrors.front_img=this.state.front_img?'invalid img': '';break;
      case 'back_img':
        formErrors.back_img=this.state.back_img?'invalid img':'';break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
       
        
        <div className="form-wrapper">
       
          <h1>updating data</h1>
         
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="fullName">
              <label htmlFor="fullName">FullName</label>
              <input
                className={formErrors.fullName.length > 0 ? "error" : null}
                placeholder="fullName"
                type="text"
                name="fullName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.fullName.length > 0 && (
                <span className="errorMessage">{formErrors.fullName}</span>
              )}
            </div>
        
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="Mobile">
              <label htmlFor="Number">Mobile Number</label>
              <input
                className={formErrors.phoneNumb > 0 ? "error" : null}
                placeholder="number"
                type="number"
                name="mobile"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.phoneNumb.length > 0 && (
                <span className="errorMessage">{formErrors.phoneNumb}</span>
              )}
            </div>
            <div className="Membership">
              <label htmlFor="Membership">Member Ship</label>
              <input
                
                placeholder="Your member ship"
                type="number"
                name="membership"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.memberShip.length > 0 && (
                <span className="errorMessage">{formErrors.memberShip}</span>
              )}
            </div>
            <div className="member_club">
              <label htmlFor="Number">Member Club</label>
                <select name="member_club" className="member_club">
                  <option value="Rehab">Rehab</option>
                  <option value="Madinty">Madinty</option>

                </select>
              {formErrors.front_img.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="national_id">
              <label htmlFor="Number">National ID or passport number</label>
              <input
                
                placeholder="National ID or passport number"
                type="text"
                name="id_num"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.nation_id.length > 0 && (
                <span className="errorMessage">{formErrors.nation_id}</span>
              )}
            </div>
            <div className="F_img">
              <label htmlFor="Number">ID or Passport Front Image</label>
              <input
                
                placeholder="ID or Passport Front Image"
                type="file"
                name="F_Img"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.front_img.length > 0 &&(
                <span className="errorMessage">{formErrors.front_img}</span>
              )}
             
            </div>
            <div className="B_img">
              <label htmlFor="Number">ID or Passport Front Image</label>
              <input
                
                placeholder="ID or Passport Front Image"
                type="file"
                name="b_Img"
                noValidate
                onChange={this.handleChange}
              />
             {formErrors.back_img.length > 0 &&(
                <span className="errorMessage">{formErrors.back_img}</span>
              )}
            </div>
            
            <div className="send">
              <button type="submit">SEND</button>
             
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
