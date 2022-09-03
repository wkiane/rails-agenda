import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchInput from './components/SearchInput';
import Table from './components/Table';
import { ContactsProvider } from './provider';


function Contacts() {
    return (
        <>
            <ContactsProvider>
                <Container className="mt-5 d-flex flex-column">
                    <Link to="/contacts/create" className='btn btn-primary ms-auto mb-4'>Criar Novo Contato</Link>
                    <SearchInput />
                    <Table />
                </Container>
            </ContactsProvider>
        </>
    );
}

export default Contacts;