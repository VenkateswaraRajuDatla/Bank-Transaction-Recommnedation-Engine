import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Signup} from "../actions/pranithActions";


class SignUp extends Component {

    renderField(field) {
        const className = `form-control input-login ${field.meta.touched && field.meta.error ? 'border-red' : ''}`
        return (
            <div className="form-group form-group-custom">
                <input
                    className={className}
                    type={field.type}
                    {...field.input}
                    placeholder={field.label}
                />
                <div className="error-message">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
       console.log(values);
        this.props.Signup(values, () => {
            this.props.history.push('/home');
        });
    }

    render() {

        const {handleSubmit} = this.props;
        return (
            <div className="total">
                <div className="m-auto login-container">

                    <div className="logo-header">
                        <div className="logo-inside">
                            <img className="login-logo" src={require('../assets/btreIcon2.png')}/>
                            <hr/>
                        </div>
                    </div>

                    <div className="text-center mt-2">
                        <strong><h6>Sign up for <i>free</i> today!</h6></strong>
                    </div>

                    <div className="logo-body">
                            <img className="fb-button"  src={require('../assets/google_signin.png')} ></img>


                        <div className="hr-divider">
                            <hr data-content="OR" className="hr-text"/>
                        </div>

                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field
                                label="Email Address"
                                name="email"
                                component={this.renderField}
                                type="email"
                            />

                            <Field
                                label="Username"
                                name="username"
                                component={this.renderField}
                                type="text"
                            />

                            <Field
                                label="Password"
                                name="password"
                                component={this.renderField}
                                type="password"
                            />

                            <Field
                                label="Confirm Password"
                                name="confirmPassword"
                                component={this.renderField}
                                type="password"
                            />

                            <div className="input-group hire-work">
                                <div className="input-group-prepend hire">
                                    <div className="input-group-text hire50 font-size-14">
                                        <input type="radio"
                                               name="profession"
                                               aria-label="Radio button for following text input"
                                               id="hire"
                                        />
                                        <span> Banker</span>
                                    </div>
                                </div>

                                <div className="input-group-append work">
                                    <div className="input-group-text work50 font-size-14">
                                        <input type="radio"
                                               name="profession"
                                               aria-label="Radio button for following text input"
                                               id="work"
                                        />
                                        <span> User</span>
                                    </div>
                                </div>
                            </div>

                            <button className="login-button" type="submit">Create Account</button>


                            <p className="font-size-13">By registering you confirm that you accept the
                                <Link to=""> Terms and Conditions </Link>
                                and
                                <Link to=""> Privacy Policy</Link>
                            </p>

                        </form>

                        <br/>
                        <br/>
                        <hr/>

                        <div className="text-center">
                            <span>Already a BTRE member?
                                <Link to="/login"> Log In</Link>
                            </span>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}


//helper for validation
//values are details that user enter in form
function validate(values) {

    //object that returns errors, if errors is empty the form will be submitted, else it wont be submitted
    //if errors has any properties, redux from assumes that form is invalid
    const errors = {};

    //names are associated to fields in the redux form names
    if (!values.username) {
        errors.username = "Enter a title!";
    }
    if (!values.password) {
        errors.password = "Enter some cats";
    }
    return errors;
}

function mapStateToProps(state) {
    return {
        login: state.login

    }
}

export default reduxForm({
    validate,
    form: 'SignUpForm'
})(
    connect(mapStateToProps, {Signup})(SignUp)
);
