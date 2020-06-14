import React from 'react';
import UserService from '../../services/UserService/UserService';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            users: []
        };

        this.userService = new UserService();
    }

    componentDidMount() {
        this.userService.getAllUsers().then(Response => {
            this.setState({ users: Response });
        });
    }

    renderUsers() {
        return this.state.users.map((user, key) => {
            return (
                <li key={key}>
                    <Link className='link' to={`/user/${user.id}`} > {user.name}</Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

export default Home;