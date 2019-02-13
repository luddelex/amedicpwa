import React from 'react'
import { Container, Alert, Button, Collapse } from 'react-bootstrap'

class DiagnoseComponent extends React.Component {
    constructor(props) {
        super()
        this.state = {
            isOpen: false,
            name: 'nonamediagnose',
            description: 'no description'
        }
    }

    render() {
        
        const { isOpen } = this.state;

        return (
            <div onClick={() => this.setState({isOpen: !isOpen})}
                aria-controls={this.props.diagnosis.name}
                aria-expanded={isOpen}>
                <Alert variant={'warning'}>
                    <Alert.Heading>{this.props.diagnosis.name}</Alert.Heading>
                    <Collapse in={this.state.isOpen}>
                    <div id={this.props.diagnosis.name}>
                        <p><b>Description: </b>{this.props.diagnosis.description}</p>
                    </div>
                    </Collapse>
                </Alert>
                </div>
        )
    }
}

export default DiagnoseComponent