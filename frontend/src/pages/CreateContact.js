import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { useNavigate } from 'react-router-dom';
import { createContact } from '../services/contacts';


function CreateContact() {
    const navigate = useNavigate();
    const { control, register, handleSubmit } = useForm()

    async function onSubmit(data) {
        const { status } = await createContact({ ...data });
        if (status === 201) {
            navigate('/');
        }
    }

    return (
        <Container>
            <Form className='mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
                <h1>Criar Contato</h1>
                <Form.Group className='mt-4'>
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control required {...register("full_name")} type="text" placeholder="Nome Completo" />
                </Form.Group>
                <Form.Group className='mt-4'>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control required {...register("email")} type="text" placeholder="Email" />
                </Form.Group>

                <div className='d-flex mt-4'>
                    <Form.Group className='w-50 me-2'>
                        <Form.Label>CPF</Form.Label>
                        <Controller
                            name="identifier"
                            control={control}
                            render={({ field }) => <IMaskInput  className='form-control' placeholder='CPF' mask="000.000.000-00" {...field} />}
                        />
                    </Form.Group>

                    <Form.Group className='w-50 ms-2'>
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control required {...register("birthday")} type="date" placeholder="Data de Nascimento" />
                    </Form.Group>
                </div>

                <Button variant="dark" type="submit" className='mt-4'>Criar Contato</Button>
            </Form>
        </Container>
    );
}

export default CreateContact;