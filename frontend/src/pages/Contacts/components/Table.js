import { Pagination, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContacts } from '../provider';

function ContactsTable() {
    const { contacts } = useContacts()

    return (
        <>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
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
                                    <p>{contact.cpf}</p>
                                </td>
                                <td>{contact.birthdate}</td>
                                <td>
                                    <Link className='btn btn-outline-primary d-inline-block' to="/">Adcionar Endereço</Link>
                                    <Link className='btn btn-outline-primary d-inline-block ms-2' to="/">Ver Endereços</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </>
    );
}

export default ContactsTable;