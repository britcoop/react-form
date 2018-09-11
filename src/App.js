import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidedrawer from './Sidedrawer'
import Backdrop from './Backdrop'
import Header from './Header'
import SideNav from './SideNav'
import FormErrors from './FormErrors'
import Footer from './Footer'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sideDrawerOpen: false,
      fullName: "",
      emailAddress:"",
      address: "",
      city: "",
      province: "",
      country: "",
      postalCode: "",
      zipCode: "",
      phone: "",
      formErrors: {postalCode: ""},
      postalCodeValid: false,
      formValid: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}; 
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  sideDrawerNavClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }


  // the handleChange function uses the name attribute that was assigned to the different input elements to determine what to do based on the value of the event.target.value
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value}, 
      () => { this.validateField(name, value) });
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let postalCodeValid = this.state.postalCodeValid;
  
    switch(fieldName) {
      case 'postalCode':
        postalCodeValid = value.match(/^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/);
        fieldValidationErrors.postalCode = postalCodeValid ? '': ' invalid postal code';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    postalCodeValid: postalCodeValid,
                  }, this.validateForm);
  }
  
  hasPostalCode() {
    if (this.state.country === "Canada" ) {
      return (
      <div className={`form-group col-md-2 ${this.errorClass(this.state.formErrors.postalCode)}`}>
       <label htmlFor="postalCode">Postal Code</label>
        <input 
          type="text" 
          className="form-control" 
          name="postalCode" 
          id="postalCode" 
          value={this.state.postalCode} 
          onChange={this.handleChange} 
          placeholder="A1A 1A1" />
      </div>
     )
    } else {
      return (
      <div className="form-group col-md-2">
       <label htmlFor="zipCode">Zip Code</label>
       <input 
          type="text" 
          className="form-control" 
          name="zipCode" 
          id="zipCode" 
          value={this.state.zipCode} 
          onChange={this.handleChange} 
          placeholder="12345"/>
      </div>
      )
    }
 }

  validateForm() {
    this.setState({formValid: this.state.postalCodeValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }


  render() {
     
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div className="App">
       <Navbar 
          drawerClickHandler={this.drawerToggleClickHandler}/>
        <Sidedrawer 
          show={this.state.sideDrawerOpen} 
          drawerClickHandler={this.sideDrawerNavClickHandler}/>
        {backdrop}
        <div className="container-fluid">
          <div className="row">
              <SideNav />
            <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <Header />
                <FormErrors formErrors={this.state.formErrors} />
                <div className="form-group">
                  <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">Name</label>
                    <input type="text" className="form-control" name="fullName" id="fullName" value={this.state.fullName} onChange={this.handleChange} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="emailAddress">Email address</label>
                    <input type="email" className="form-control" name="emailAddress" id="emailAddress" placeholder="name@example.com" value={this.state.emailAddress} onChange={this.handleChange} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" name="address" id="address" value={this.state.address} onChange={this.handleChange} />
                  </div>
                    <div className="form-row">
                      <div className="form-group col-md-3">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" name="city" id="city" value={this.state.city} onChange={this.handleChange} />
                      </div>
                      <div className="form-group col-md-3">
                        <label htmlFor="city">State / Province</label>
                        <input type="text" className="form-control" name="province" id="province" value={this.state.province} onChange={this.handleChange} />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="country">Country</label>
                        <select className="form-control" name="country" id="country" value={this.state.country} onChange={this.handleChange}>
                          <option value="choose">Choose...</option>
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                        </select>
                      </div>
                    {this.hasPostalCode()} 
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input type="text" className="form-control" name="phone" id="phone" value={this.state.phone} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary" value="Submit" disabled={!this.state.formValid} />
                    </div>
                  </form>
                </div>
                <div className="formData">
                  <p>{this.state.fullName}</p>
                  <p>{this.state.emailAddress}</p>
                  <p>{this.state.address}</p>
                  <p>{this.state.city}</p>
                  <p>{this.state.country}</p>
                  <p>{this.state.province}</p>
                  <p>{this.state.postalCode}</p>
                  <p>{this.state.phone}</p>
                </div>
             
            </main>
          </div>
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
