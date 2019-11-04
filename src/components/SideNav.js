import React, { Component } from 'react';

export default class SideNav extends Component {
    constructor(props) {
        super();
        this.state = {
            display: false
        }
    }

    onClickHandler = () => {
        this.setState({
            display: !this.state.display
        }, () => console.log(this.state.display))
    }

    render() {
        return (
            <div className="columns wrapper">
                <div className="column is-narrow">
                    <aside className="menu" style={{ left: `${this.state.display ? '0' : '-20rem'}` }}>
                        <p className="menu-label">
                            General
</p>
                        <ul className="menu-list">
                            <li><a>Dashboard</a></li>
                            <li><a>Customers</a></li>
                        </ul>
                        <p className="menu-label">
                            Administration
</p>
                        <ul className="menu-list">
                            <li><a>Team Settings</a></li>
                            <li>
                                <a className="is-active">Manage Your Team</a>
                                <ul>
                                    <li><a>Members</a></li>
                                    <li><a>Plugins</a></li>
                                    <li><a>Add a member</a></li>
                                </ul>
                            </li>
                            <li><a>Invitations</a></li>
                            <li><a>Cloud Storage Environment Settings</a></li>
                            <li><a>Authentication</a></li>
                        </ul>
                        <p className="menu-label">
                            Transactions
</p>
                        <ul className="menu-list">
                            <li><a>Payments</a></li>
                            <li><a>Transfers</a></li>
                            <li><a>Balance</a></li>
                        </ul>
                    </aside>
                </div>
                <div className="column">
                    <button className="button" onClick={this.onClickHandler}>Toggle Menu</button>
                </div>
            </div>  
        )
    }
}
