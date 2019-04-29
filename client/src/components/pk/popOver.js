import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Person from 'material-ui/svg-icons/social/person';
import Divider from 'material-ui/Divider';
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {clearSession} from "../../actions";

class PopoverExampleAnimation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };
    handleClick1 = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.props.clearSession(this.props);
    };
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {


        return (
            <div>
                <RaisedButton
                    backgroundColor="#a4c639"
                    onClick={this.handleClick}
                    label="V"
                    fullWidth={true}
                    labelStyle={{fontSize: '20px'}}
                    style={{fontSize: '16px'}}
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
                    targetOrigin={{horizontal: 'middle', vertical: 'center'}}
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationVertical}
                >
                    <Menu>
                        <div className="side-bar-image">
                            <img src="https://www.buira.org/assets/images/shared/default-profile.png"
                            alt="..." className="side-bar-inside-image"/>
                        </div>
                        <Divider/>
                        <MenuItem primaryText="Refresh" leftIcon={<Person/>}/>
                        <MenuItem primaryText="Help &amp; feedback"/>
                        <MenuItem primaryText="Settings"/>
                        <MenuItem primaryText="Log out" onClick={this.handleClick1} />
                    </Menu>
                </Popover>
            </div>
        );
    }
}

export default (
    connect(null, {clearSession}))(PopoverExampleAnimation);