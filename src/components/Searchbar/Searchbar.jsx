import { Component } from "react";
import { Form, Header, Input, SubmitButton } from "./Searchbar.styled";

export class SearchBar extends Component {
    state = { searchQuery: '' } 

    handleChange = e => {
        this.setState({ searchQuery: e.currentTarget.value })
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.searchQuery.trim() === '') {
            return alert('Please, write something')
        };
        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    };

    render() { 
        return (
            <Header>
                <Form onSubmit={this.handleSubmit}>
                    <SubmitButton type="submit">
                        <span>Search</span>
                    </SubmitButton>

                    <Input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="searchQuery"
                        value={this.state.searchQuery}
                        onChange={this.handleChange}
                    />
                </Form>
            </Header>
        );
    }
}
 
