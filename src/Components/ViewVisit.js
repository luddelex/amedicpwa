import React from 'react'
import { Container, Alert, Button, Collapse } from 'react-bootstrap'
import DiagnoseComponent from './DiagnoseComponent'
import TreatmentComponent from './TreatmentComponent'
import SymptomComponent from './SymptomComponent'

class ViewVisit extends React.Component {
    constructor(props) {
        super()
        this.state = {
            diagnoses: null,
            treatments: null,
            symptoms: null
        }
        this.printOutDiagnoses = this.printOutDiagnoses.bind(this)
        this.printOutTreatments = this.printOutTreatments.bind(this)
    }

    printOutDiagnoses() {

        if(this.state.diagnoses === null || this.state.diagnoses.length < 1) {
            return (<p>Could not find any diagnoses.</p>)
        }

        // Loop through array, printing out each visit.
        if(this.state.diagnoses != null) {
            return this.state.diagnoses.map(function(diagnosis) {
                return(
                    <div key={diagnosis.ID}>
                        <DiagnoseComponent diagnosis={diagnosis} />
                    </div>
                )
            })
        }
    }

    printOutTreatments() {

        if(this.state.treatments === null || this.state.treatments.length < 1) {
            return (<p>Could not find any treatments.</p>)
        }

        // Loop through array, printing out each visit.
        if(this.state.treatments != null) {
            return this.state.treatments.map(function(treatment) {
                return(
                    <div key={treatment.ID}>
                        <TreatmentComponent treatment={treatment} />
                    </div>
                )
            })
        }
    }
    

    render() {

        return (
            <Container>
                
                <h1>View visit {this.props.match.params.patientID}</h1>

                <h3>Diagnoses</h3>

                {
                    // For each diagnose found in the array, render a diagnose component:
                    this.printOutDiagnoses()
                }
                
                <h3>Treatments</h3>

                {
                    // For each diagnose found in the array, render a diagnose component:
                    this.printOutTreatments()
                }

                <h3>Symptoms Sheet</h3>

                {
                    this.state.symptoms != null ? <SymptomComponent symptomsSheet={this.state.symptoms} /> : ''
                }

                
            </Container>
        )
    }

    componentDidMount(){
        // Fetch diagnosis
        fetch(`http://localhost:3000/diagnosis/${this.props.match.params.diagnosisID}`).then(res => res.json())
        .then(
            (fetchedDiagnoses) => {
                console.log(fetchedDiagnoses)
                this.setState({
                diagnoses: fetchedDiagnoses
                })
            },
            (error) => {
                this.setState({
                    error
                })
            }
        )

        // Does this code work or not? I have no idea.
        // Fetch treatments
        fetch(`http://localhost:3000/treatmentdiagnosis/${this.props.match.params.diagnosisID}`).then(res => res.json())
        .then(
            (fetchedTreatmentDiagnosis) => {
                if(fetchedTreatmentDiagnosis.length > 0) {
                    var treatmentsArray = []
                    fetchedTreatmentDiagnosis.map(function(treatmentDiagnosis) {
                        fetch(`http://localhost:3000/treatment/${treatmentDiagnosis.treatmentID}`).then(res => res.json())
                        .then(
                            (fetchedTreatment) => {
                                treatmentsArray.push(fetchedTreatment)
                            }
                        )
                    })
                    this.setState({treatments: treatmentsArray})
                }
            },
            (error) => {
                this.setState({
                    error
                })
            }
        )

        // Fetch symptom sheet
        fetch(`http://localhost:3000/symptoms/${this.props.match.params.symptomID}`).then(res => res.json())
        .then(
            (fetchedSymptoms) => {
                this.setState({
                symptoms: fetchedSymptoms
                })
            },
            (error) => {
                this.setState({
                    error
                })
            }
        )
    }

    

}



export default ViewVisit