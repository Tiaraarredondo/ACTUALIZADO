import React, { Component } from "react";

class FiltroPeliculasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valorInput: "",
        };
    }

    evitarSubmit(evento) {
        evento.preventDefault();
    }

    controlarCambios(evento) {
        this.setState({
            valorInput: evento.target.value,
        }, () => {
            this.props.filtro(this.state.valorInput);
        });
    }

    render() {
        return (
            <form onSubmit={(evento) => this.evitarSubmit(evento)}>
                <input onChange={(evento) => this.controlarCambios(evento)}
                />
            </form>
        );
    }
}

export default FiltroPeliculasPopulares;
