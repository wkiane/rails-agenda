import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getContact } from '../services/contacts';
import formateDate from '../utils/formatDate';

function ContactDetails() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  useEffect(() => {
    const fetchContacts = async function () {
      const { data, status } = await getContact(id);

      if (status === 200) {
        setContact({
          ...data,
          birthday: formateDate(data.birthday)
        })
      }
    }

    fetchContacts()
  }, [id])


  if (!contact) return <></>


  return (
    <>
      <Container className='mt-5 d-flex flex-column align-items-center'>
        <h1>{contact.full_name}</h1>
        <p>{contact.email}</p>
        <p>{contact.identifier}</p>
        <p>{contact.birthday}</p>

        <div className='d-flex flex-wrap justify-content-center'>
          {contact.addresses.map(address => (
            <Card className='mx-4 my-2' key={address.id} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{address.zip_code}</Card.Title>
                <Card.Text>
                  {address.street} - {address.number} - {address.neighborhood}
                </Card.Text>
                <Card.Text>
                  {address.city} - {address.state}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}

export default ContactDetails;