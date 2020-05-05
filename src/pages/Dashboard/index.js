import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <Card>
                <h1>Characters</h1>
                <p>Create and update Craracters</p>
                <Link to="/characters">Info</Link>
            </Card>
        </Container>
    );
}
