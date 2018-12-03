import React, { Component } from 'react';

import ListaAlbuns from './ListaAlbuns'

export default class HomeContent extends Component {
    state = {
        dados: [
            {id: 1, nome: 'Patrick', sobrenome: 'sobre', src: 'https://www.ofuxicogospel.com.br/wp-content/uploads/2018/09/Simula%C3%A7%C3%A3o-imagem-internet.jpg'},
            {id: 2, nome: 'Lorran', sobrenome: 'sobre', src: 'http://tvcultura.com.br/upload/tvcultura/programas/programa-imagem-som.jpg'},
            {id: 3, nome: 'Ramos', sobrenome: 'sobre', src: 'http://tvcultura.com.br/upload/tvcultura/programas/programa-imagem-som.jpg'},
            {id: 4, nome: 'Carvalho', sobrenome: 'sobre', src: 'http://tvcultura.com.br/upload/tvcultura/programas/programa-imagem-som.jpg'}
        ]
    }
    render() {
        return (
            <div className="container-fluid">
                {this.state.dados.map(item => <ListaAlbuns key={item.id} nome={item.nome} sobrenome={item.sobrenome} src={item.src} />)}
            </div>
        );
    }
}
