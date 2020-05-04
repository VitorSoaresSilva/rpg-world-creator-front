import React, { Component } from 'react';
import { Form } from '@unform/web';
import { Container } from './styles';
import { logout } from '~/services/auth';
import api from '~/services/api';
import Input from '~/components/Input';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {};
    }

    handleLogout = () => {
        logout();
        window.location.reload(true);
    };

    handleSubmit = async (data, { reset }) => {
        const { name, email, newPassword, oldPassword, confirmPassword } = data;
        const wantToChangePassword =
            newPassword || oldPassword || confirmPassword;
        const canChangePassword =
            newPassword !== oldPassword && newPassword === confirmPassword;
        if (wantToChangePassword && !canChangePassword) {
            // TODO: init notification Failed
            return;
        }
        const request = await api.put('/user', {
            email,
            newPassword,
            name,
            oldPassword,
            confirmPassword,
        });

        if (request.status === 200) {
            reset();
            // TODO: init notification Sucess
        }
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit} initialData={this.state}>
                    <Input name="name" placeholder="Digite seu nome completo" />
                    <Input
                        name="email"
                        type="email"
                        placeholder="Digite seu e-mail"
                    />

                    <hr />
                    <Input
                        name="oldPassword"
                        type="password"
                        placeholder="Digite sua senha atual"
                    />
                    <Input
                        name="newPassword"
                        type="password"
                        placeholder="Digite sua nova senha"
                    />
                    <Input
                        name="confirmPassword"
                        type="password"
                        placeholder="Repita a sua nova senha"
                    />
                    <button type="submit">Atualizar perfil</button>
                </Form>
                <button type="button" onClick={this.handleLogout}>
                    Sair
                </button>
            </Container>
        );
    }
}
