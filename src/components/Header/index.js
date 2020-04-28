import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="D&D" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>
                <aside>
                    <Profile>
                        <div>
                            <strong>Vitor Soares</strong>
                            <Link to="/profile">Meu Perfil</Link>
                        </div>
                        <img
                            src="https://api.adorable.io/avatars/52/abott@adorable.png"
                            alt="Perfil"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
