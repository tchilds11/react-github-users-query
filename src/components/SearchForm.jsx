import React, { Component } from "react";
import UserCardList from "./UserCardList";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            user: [],
        };
    }

    _handleChange = (user) => {
        this.setState({
            username: user,
        });
    };

    _handleSubmit = async (event) => {
        event.preventDefault();
        const { username } = this.state;
        const userData = await GetData(`https://api.github.com/users/${ username }`);
        this.setState({
            user: [...this.state.user, userData],
            userName: "",
    })}

    
    render() {
        const { username } = this.state;
        return (
            <div>
            <>
            <form>
                <input type="text"
                    value={username}
                    placeholder="Github Username" onChange={(event) => {
                        this._handleChange(event.target.value);
                      }}
                    />
                <button type="submit" onClick={this._handleSubmit}>Search</button>
            </form>
            <UserCardList users={this.state.user} />
            </>
            </div>
        );
    }
}

const GetData = async (url) => {
    const response = await fetch(url);
    const data = response.json();
    return data;
}    
export default SearchForm;