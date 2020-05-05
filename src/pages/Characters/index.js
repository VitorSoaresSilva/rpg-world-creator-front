import React, { Component } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '~/services/api';
import { Container, Character, Header, Body } from './styles';
import Input from '~/components/Input';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um email válido')
        .required('Email é obrigatório'),
    password: Yup.string().required(),
});
class Characters extends Component {
    constructor() {
        super();
        this.state = {
            characters: [
                {
                    name: 'Value',
                    race: 'Value',
                    characterClass: 'Value',
                    level: '1',
                },
            ],
        };
    }

    componentDidMount = async () => {
        const response = await api.get('/characters');
        if (response.status === 200) {
            this.setState({ characters: response.data });
        }
    };

    handleDelete = async (character) => {
        const response = await api.delete(`/characters/${character.id}`);
        // TODO Add confirmation message
        if (response.status === 204) {
            const { characters } = this.state;
            this.setState({
                characters: characters.filter(
                    (char) => char.id !== character.id
                ),
            });
        }
    };

    handleSubmit = async (data, { reset }) => {
        const { name, race, characterClass, level } = data;

        const response = await api.post('/characters', {
            name,
            race,
            characterClass,
            level,
        });
        if (response.status === 200) {
            const { characters } = this.state;
            const { id } = response.data;
            this.setState({
                characters: [
                    ...characters,
                    { name, race, characterClass, level, id },
                ],
            });
            reset();
        }
    };

    render() {
        const { characters } = this.state;
        return (
            <Container>
                {characters.map((character) => {
                    return (
                        <Character>
                            <h1>Informações</h1>
                            <button
                                type="button"
                                onClick={() => this.handleDelete(character)}
                            >
                                X
                            </button>
                            <Header>
                                <p>{character.name}</p>
                                <p>{character.race}</p>
                                <p>{character.characterClass}</p>
                                <p>Level:{character.level}</p>
                            </Header>
                            <h1>Itens</h1>
                            <Body>
                                <p>Não há itens</p>
                            </Body>
                        </Character>
                    );
                })}
                <Form schema={schema} onSubmit={this.handleSubmit}>
                    <h1>Criar novo personagem</h1>
                    <Input name="name" placeholder="Digite o nome" />
                    <div className="menores">
                        <Input
                            name="characterClass"
                            placeholder="Digite a Classe"
                        />
                        <Input name="race" placeholder="Digite a Raça" />
                        <Input
                            name="level"
                            placeholder="Digite o Level"
                            type="number"
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </Form>
            </Container>
        );
    }
}

export default Characters;
