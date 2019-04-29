import React, { Component } from 'react';
import TopNavBar from './topNavBar';
import BelowTopNavBar from './belowTopNavBar';
import BodyLogin from '../loginpk';
import Footer from './footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { checkSession } from '../../actions';
import { connect } from 'react-redux';
import './footer.scss';
import './login.scss';


class LoginPage extends Component {
  componentWillMount() {
    console.log('checkc called');
    // this.props.checkSession(this.props.posts);
    console.log('dint wait');
    console.log(this.props.posts);
    console.log(this.props.posts.sessionchecking);
  }


  render() {
    console.log(this.props.posts);
    {
      return (
        <div className="container">
          <div className="row">
            <div className="col-2" />
            <div className="loginbody col-9">

              {/* <MuiThemeProvider> */}
              {/* <TopNavBar/> */}
              {/* </MuiThemeProvider> */}
              {/* <BelowTopNavBar type="dashboard"/> */}
              <BodyLogin />
            </div>
            {/* <Footer/> */}
          </div>

        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return { posts: state.login };
}

export default connect(mapStateToProps, { checkSession })(LoginPage);
