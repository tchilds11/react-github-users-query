import React, { Component } from "react";
import UserCardList from "./UserCardList";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'tchilds11',
            user: [],
            isLoading: false
        };
    }

    _handleChange = (user) => {
        this.setState({
            username: user,
        });
    };

    _handleClick = async (event) => {
        event.preventDefault();
        const {username} = this.state;
        const userData = await this._fetchUser;
        this.setState({
            user: [...this.state.user, userData],
            userName: "",
    })}

    _fetchUser = () => {
        this.setState({
            isLoading: true,
        }, () => {
            const url = 'https://api.github.com/users/tchilds11';
            fetch(url)
                .then(response => response.json())
                .then(userJson => {
                    this.setState({
                        user: userJson.value,
                        isLoading: false
                    }, () => {
                        console.log('New user stored');
                        
                    });
                })
        })
    }
    
    render() {
        const { username } = this.state;
        return (
            <>
            <form class="input-group mb-3">
                <input type="text" value={this.state.username} class="form-control" placeholder="Github Username" aria-label="Github username" aria-describedby="button-addon2"></input>
                <button type="button" onClick={this._handleClick}>Search</button>
            </form>
            <UserCardList users={this.state.user} />
            </>
        );
    }
}

export default SearchForm;