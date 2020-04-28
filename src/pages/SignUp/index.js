import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Logo from '~/assets/logo.png';
import api from '~/services/api';

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
        .email('Insira um email válido')
        .required('Email é obrigatório'),
    password: Yup.string()
        .required('Senha obrigatória')
        .min(6, 'A senha deve conter no mínimo 6 caracteres'),
});

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            created: false,
        };
    }

    handleSubmit = async (data) => {
        const { email, password, name } = data;
        const request = await api.post('/user', { email, password, name });
        if (request.status === 200) {
            this.setState({ created: true });
        }
    };

    render() {
        const { created } = this.state;
        if (created) {
            return <Redirect to="/" />;
        }
        return (
            <>
                <img src={Logo} alt="DnD Logo" width="150px" />
                <Form schema={schema} onSubmit={this.handleSubmit}>
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
}
