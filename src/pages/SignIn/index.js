import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Logo from '~/assets/logo.png';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um email válido')
        .required('Email é obrigatório'),
    password: Yup.string().required(),
});

export default function SignIn() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={Logo} alt="DnD Logo" width="150px" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="email"
                    placeholder="Digite deu email"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="DIgite sua senha"
                />
                <button type="submit">Enviar</button>
                <Link to="/register">Não possuo cadastro</Link>
            </Form>
        </>
    );
}
