import React from 'react';

export default class ExemploClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    } 


    componentDidMount() {
        document.title = this.state.count;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            document.title = this.state.count;
        }
    }

    clicouBotao = () => {
        this.setState( state => ({
            count: state.count += 1
        }))
    }

    zerar = () => {
        this.setState( state => ({
            count: state.count = 0
        }))
    }

    voltar = () => {
        this.setState( state => ({
            count: state.count -= 1
        }))
    }

    render() {
        return(
            <div className="container-classe">
                <h1>Exemplo Classe</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.clicouBotao}>Contar!</button>
                <button onClick={this.zerar}>Zerar!</button>
                <button onClick={this.voltar}>Voltar!</button>
            </div>
        )
    }
}