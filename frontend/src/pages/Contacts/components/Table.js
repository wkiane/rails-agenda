import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContacts } from '../provider';
import Pagination from './Pagination';

function ContactsTable() {
    const { contacts } = useContacts()

    return (
        <>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Data de nascimento</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map
                        ((contact) =>
                            <tr key={contact.id.toString()}>
                                <td>{contact.id}</td>
                                <td>
                                    <p>{contact.full_name}</p>
                                    <p class="small">{contact.email}</p>
                                </td>
                                <td>{contact.identifier}</td>
                                <td>{contact.birthday}</td>
                                <td>
                                    <Link className='btn btn-outline-primary d-inline-block' to={`/address/create/${contact.id}`}>Adcionar Endereço</Link>
                                    <Link className='btn btn-outline-primary d-inline-block ms-2' to=''>Ver Endereços</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Pagination />
        </>
    );
}

export default ContactsTable;