import React from 'react'
import {Container, Table} from 'react-bootstrap'

import VisitTD from './VisitTD'

class ViewPatient extends React.Component {
    constructor(props) {
        super()
        this.state = {
            patient: {},
            caregivers: null,
            village: {},
            HSA_visits: null,
            HE_visits: []
        }

        this.printOutCaregivers = this.printOutCaregivers.bind(this)
        this.printOutHSAVisits = this.printOutHSAVisits.bind(this)
        
    }

    // TODO: Make sure this method loops properly and prints out also if there is multiple caregivers:
    printOutCaregivers() {
        if(this.state.caregivers != null){
            return this.state.caregivers.map(function(caregiver){
                return (
                <div key={caregiver.ID}>
                <p><b>Caregiver name: </b>{caregiver.name}</p>
                <p><b>Caregiver relation to patient: </b>{caregiver.relationToPatient}</p>
                </div>
                )
            })
        } else {
            return <h1>Hello</h1>
        }
    }

    printOutHSAVisits() {

        // Loop through array, printing out each visit.
        if(this.state.HSA_visits != null) {
            return this.state.HSA_visits.map(function(visit) {
                return(
                    <VisitTD visit={visit} key={visit.patientID + visit.diagnosisID + visit.HSAID + visit.symptomID} />
                )
            })
        }
    }

    componentDidMount(){

        // Fetch patient object.
        fetch(`http://localhost:3000/patient/${this.props.match.params.id}`).then(res => res.json())
        .then(
          (fetchedPatient) => {
              console.log(fetchedPatient)
              this.setState({
              patient: fetchedPatient
            });
          },
          (error) => {
            this.setState({
              error
            })
          })

        // Fetch patient caregiver object.
        fetch(`http://localhost:3000/caregiver/${this.props.match.params.id}`).then(res => res.json())
        .then(
          (fetchedCaregiver) => {
              this.setState({
              caregivers: fetchedCaregiver
            });
          },
          (error) => {
            this.setState({
              error
            })
          })

        // Fetch patient hsa visits array.
        fetch(`http://localhost:3000/hsavisit/${this.props.match.params.id}`).then(res => res.json())
        .then(
          (fetchedHSAVisits) => {
              this.setState({
              HSA_visits: fetchedHSAVisits
            });
          },
          (error) => {
            this.setState({
              error
            })
          })   

    }

    render() {
        return (
            <Container>

            <h2>Patient details</h2>
            <p><b>Name: </b>{this.state.patient.name}</p>
            <p><b>Date of birth: </b>{this.state.patient.dateOfBirth}</p>
            <p><b>Mobile No: </b>{this.state.patient.mobileNo}</p>
            <p><b>National ID: </b>{this.state.patient.nationalID}</p>
            <p><b>Sex: </b>{this.state.patient.sex}</p>
            <p><b>Village: </b>{this.state.patient.villageName}</p>

            <div>
            {
                // Check if patient has a caregiver, if so, print out caregiver, else don't. 
                this.printOutCaregivers()
            }
            </div>


            <h2>HSA visits</h2>
            <Table>

                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Diagnosis?</th>
                        <th>Treatment?</th>
                    </tr>
                </thead>

                {
                // Check if patient has HSA visits, if so, print out visits, else don't.
                this.printOutHSAVisits()
                }

            </Table>

            </Container>
        )
    }
}

export default ViewPatient