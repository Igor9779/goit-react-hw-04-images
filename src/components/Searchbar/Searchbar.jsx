import { useState } from "react";
import { Form, Header, Input, SubmitButton } from "./Searchbar.styled";

export const SearchBar = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = e => {
        setSearchQuery(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            return alert('Please, write something')
        };
        onSubmit(searchQuery);
        setSearchQuery('');
    };

return (
            <Header>
                <Form onSubmit={handleSubmit}>
                    <SubmitButton type="submit">
                        <span>Search</span>
                    </SubmitButton>

                    <Input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="searchQuery"
                        value={searchQuery}
                        onChange={handleChange}
                    />
                </Form>
            </Header>
        );
}
