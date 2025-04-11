import React, { Component } from 'react';

class FiltroPeliculasPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: ''
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
    this.props.filtro(this.state.valorInput);
  }

  controlarCambios(event) {
    this.setState({ valorInput: event.target.value }, () => {
      this.props.filtro(this.state.valorInput);
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.evitarSubmit(e)}>
        <input
          type="text"
          placeholder="Buscar película..."
          value={this.state.valorInput}
          onChange={(e) => this.controlarCambios(e)}
        />
      </form>
    );
  }
}

export default FiltroPeliculasPopulares;
