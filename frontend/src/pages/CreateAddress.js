import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import states from '../utils/states'
import { useForm, Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { useNavigate, useParams } from 'react-router-dom';
import { getAddressViaCEP } from '../services/viaCep';
import { createAddress } from '../services/address';


function CreateAddress() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { control, register, handleSubmit, setValue } = useForm()


    async function fetchZipCode(zipCode) {
        const { status, data } = await getAddressViaCEP(zipCode);

        if (status === 200) {
            setValue('street', data.logradouro ?? '')
            setValue('neighborhood', data.bairro ?? '')
            setValue('city', data.localidade ?? '')
            setValue('state', data.uf ?? '')
        }
    }

    async function onSubmit(data) {
        const { status } = await createAddress({ ...data });
        if (status === 201) {
            navigate('/');
        }
    }

    return (
        <Container>
            <Form className='mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
                <h1>Adcionar Endereço</h1>
                <div className='d-flex mt-4'>
                    <Form.Group className='w-100 mt-4'>
                        <Form.Label>CEP</Form.Label>
                        <Controller
                            name="cep"
                            control={control}
                            render={({ field: { onChange, value, ref } }) =>
                                <IMaskInput required className='form-control' placeholder='CEP' mask="00000-000" onChange={onChange} onBlur={() => fetchZipCode(value)} selected={value} ref={ref} />}
                        />
                    </Form.Group>
                    <Form.Group className='w-100 mx-4 mt-4'>
                        <Form.Label>Rua</Form.Label>
                        <Form.Control required {...register("street")} type="text" placeholder="Nome da Rua" />
                    </Form.Group>
                    <Form.Group className='w-100 mt-4'>
                        <Form.Label>Número</Form.Label>
                        <Form.Control required {...register("number")} type="number" placeholder="Número" />
                    </Form.Group>
                </div>


                <div className='d-flex mt-4'>
                    <Form.Group className='w-100 me-2'>
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control required {...register("neighborhood")} type="text" placeholder="Bairro" />
                    </Form.Group>

                    <Form.Group className='w-100 ms-2'>
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control required {...register("city")} type="text" placeholder="Cidade" />
                    </Form.Group>

                    <Form.Group className='w-100 ms-2'>
                        <Form.Label>Estados</Form.Label>
                        <Form.Select>
                            {states.map(state =>
                                <option key={state.value} value={state.value}>{state.label}</option>)}
                        </Form.Select>
                    </Form.Group>
                </div>

                <Button variant="dark" type="submit" className='mt-4'>Adcionar Endereço</Button>
            </Form>
        </Container>
    );
}

export default CreateAddress;