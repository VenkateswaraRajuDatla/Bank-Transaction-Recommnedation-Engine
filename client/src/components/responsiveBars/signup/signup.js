import React, {Component} from 'react';
import Input from '../../responsiveBars/Input/Input';
import Button from '../../responsiveBars/Button/Button';
import Spinner from '../../responsiveBars/Spinner/Spinner';
import './signup.scss';

class Signup extends Component{
  state = {
        orderForm: {
            FirstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name'
                },
                value: ''
            },
            LastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name'
                },
                value: ''
            },
            displayName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Display Name'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your address'
                },
                value: ''
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your zipcode'
                },
                value: ''
            },
            UserType: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Banker', displayValue: 'Banker'},
                        {value: 'Customer', displayValue: 'Customer'}
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const SignupData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            SignupData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            orderData: SignupData

        }
        console.log(SignupData);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    }


  render(){
    const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
    let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success">Signup</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={'signup'}>
                <h4>Signup form</h4>
                {form}
            </div>
        );
  }
}

export default Signup;
