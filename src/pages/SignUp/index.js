import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Logo from '~/assets/logo.png';

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
        .email('Insira um email válido')
        .required('Email é obrigatório'),
    password: Yup.string()
        .required('Senha obrigatória')
        .min(6, 'A senha deve conter no mínimo 6 caracteres'),
});

export default function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={Logo} alt="DnD Logo" width="150px" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Digite seu nome completo" />
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
                <Link to="/">Já possuo cadastro</Link>
            </Form>
        </>
    );
}
