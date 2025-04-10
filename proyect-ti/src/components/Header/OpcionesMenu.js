import React from "react";

function OpcionesMenu(props) {
    return (
        <section>
            {
                props.config.map((elm, idx) => <div key={idx + "-" + elm.name }>{elm.name}</div> )
            }
        </section>
    )
}

export default OpcionesMenu