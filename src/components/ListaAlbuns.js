import React from 'react'

import {Col, Card, CardTitle } from 'react-materialize'

export default props => {
        console.log('dados', props)
        return (
            <Col m={3} s={12}>
                <Card  header={<CardTitle reveal image={props.src} waves='light'/>}
                    title={props.nome}
                    reveal={<a href='google.com' className="btn-floating waves-effect waves-light red"><i className="material-icons">add</i></a>}>
                    <p><a href="/login">{props.sobrenome}</a></p>
                </Card>
            </Col>
        )
}