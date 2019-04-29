import React, { Component } from 'react';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { history } from '../store/index';
import { loginSubmit } from '../actions';
// import {login} from "../reducers/reducer_login";
import { signIn } from '../actions/pranithActions';
import '././pk/login.scss';

class Login extends Component {
  renderField(field) {
    const className = `form-control input-login ${field.meta.touched && field.meta.error ? 'border-red' : ''}`;
    return (
      <div className="form-group form-group-custom">
        <input
          className={className}
          {...field.input}
          placeholder={field.label}
          type={field.type}
        />
        <div className="error-message">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
  }

  onSubmit(values) {
    console.log(this.props.login);
    this.props.signIn(values);
  }

  componentDidMount() {

  }

  render() {
    const disnone = {
      display: 'none'
    };
    const errorstyle = {
      color: 'red',
      fontSize: 12
    };

    const { handleSubmit, load, pristine, reset, submitting } = this.props;
    return (
      <div className="total">
        <div className="m-auto login-container container">
          <div className="row">
            <div className="col-md-12">
              <div className="logo-header">
                <div className="logo-inside">
                  <img className="login-logo" src={require('../assets/btreIcon2.png')} />
                  <hr />
                </div>
              </div>

              <div className="logo-body">
                <img className="fb-button"  src={require('../assets/google_signin.png')} ></img>

                <div className="hr-divider">
                  <hr data-content="OR" className="hr-text" />
                </div>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <Field
                    label="Email or Username"
                    name="username"
                    component={this.renderField}
                    type="text"
                  />

                  <Field
                    label="Password"
                    name="password"
                    type="password"
                    component={this.renderField}
                  />

                  <button className="login-button" type="submit">Log In</button>

                </form>
                <div
                  style={this.props.login.errorMsg != 'password incorrect' ? disnone : errorstyle}
                  role="alert"
                >
                  <span>
        Invalid Username or Password
                  </span>
                </div>
                <br />
                <br />
                <hr />

                <div className="text-center">
                  <span>Don't have an account?
                    <Link to="/signup"> Sign Up</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// helper for validation
// values are details that user enter in form
function validate(values) {
  // object that returns errors, if errors is empty the form will be submitted, else it wont be submitted
  // if errors has any properties, redux from assumes that form is invalid
  const errors = {};

  // names are associated to fields in the redux form names
  if (!values.username) {
    errors.username = 'Please enter your username or email';
  }
  if (!values.password) {
    errors.password = 'Please enter your password';
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    login: state.login
  };
}


function dispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ signIn }, dispatch)
  };
}


Login = reduxForm({ form: 'loginForm', enableReinitialize: true, validate })(Login);


const selector = formValueSelector('searchForm');
Login = connect(mapStateToProps, dispatchToProps)(Login);

export default (Login);
