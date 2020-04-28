import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Logo from '~/assets/logo.png';
import api from '~/services/api';

import { login } from '~/services/auth';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um email válido')
        .required('Email é obrigatório'),
    password: Yup.string().required(),
});

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            logged: false,
        };
    }

    handleSubmit = async (data) => {
        const { email, password } = data;
        const request = await api.post('/sessions', { email, password });
        if (request.status === 200) {
            login(request.data.token);
            this.setState({ logged: true });
        }
    };

    render() {
        const { logged } = this.state;
        if (logged) {
            return <Redirect to="/dashboard" />;
        }
        return (
            <>
                <img src={Logo} alt="DnD Logo" width="150px" />
                <Form schema={schema} onSubmit={this.handleSubmit}>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Digite deu email"
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Digite sua senha"
                    />
                    <button type="submit">Enviar</button>
                    <Link to="/register">Não possuo cadastro</Link>
                </Form>
            </>
        );
    }
}
