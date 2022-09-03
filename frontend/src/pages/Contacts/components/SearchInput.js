import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useContacts } from '../provider';

function SearchInput() {
    const [input, setInput] = useState('');
    const { fetchContacts } = useContacts();

    function handleSubmit(e) {
        e.preventDefault();
        fetchContacts({ query: input })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label htmlFor="search">Busca por Contato</Form.Label>
            <Form.Group className="input-group mb-3" controlId="search">
                <Form.Control onChange={(e) => setInput(e.target.value)} type="text" placeholder="Nome do contato" />
                <Button variant="dark" type="submit">
                    Pesquisar
                </Button>
            </Form.Group>
        </Form>
    );
}

export default SearchInput;