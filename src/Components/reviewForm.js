import React from 'react'
import {Button} from 'react-bootstrap'

class reviewForm extends React.Component {

    constructor(props) {
        super()
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleSubmit(event) {
    event.preventDefault()

    var passedForm = this.props.location.alafForm

    var postForm = {
            description: passedForm.description,                    // VARCHAR
            cough: passedForm.cough,                                // BOOL
            coughDays: passedForm.coughDays,                        // INT
            diarrhoea: passedForm.diarrhoea,                        // BOOL
            diarrhoeaDays: passedForm.diarrhoeaDays,                // INT
            bloodInStool: passedForm.bloodInStool,                  // VARCHAR
            fever: passedForm.fever,                                // INT
            feverDays: passedForm.feverDays,                        // INT
            convulsions: passedForm.convulsions,                    // VARCHAR
            difficultToEatDrink: passedForm.difficultToEatDrink,    // BOOL
            cannotEatDrink: passedForm.cannotEatDrink,              // BOOL
            vomiting: passedForm.vomiting,                          // BOOL
            vomitsEverything: passedForm.vomitsEverything,          // BOOL
            redEyes: passedForm.redEyes,                            // BOOL
            redEyesDays: passedForm.redEyesDays,                    // INT
            difficultiesToSee: passedForm.difficultiesToSee,        // BOOL
            difficultiesToSeeDays: passedForm.difficultiesToSeeDays,// INT
            chestIndraw: passedForm.chestIndraw,                    // VARCHAR
            breathingFreq: passedForm.breathingFreq,                // INT
            sleepy: passedForm.sleepy,                              // VARCHAR
            unconscious: passedForm.unconscious,                    // VARCHAR
            palmarPalor: passedForm.palmarPalor,                    // VARCHAR
            muac: passedForm.muac,                                  // VARCHAR
            swollenFeet: passedForm.swollenFeet,                    // VARCHAR
    }
    
    fetch('http://localhost:3000/symptoms/', {

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postForm)
    })
    

    alert('Form submitted!')
    }

    render() {
        return (
            <div class="container">
            
                <h1>Review entries</h1>

                <h5>Description</h5>
                <p>{this.props.location.alafForm.description}</p>

                <h5>Is the patient coughing?</h5>
                <p>{this.props.location.alafForm.cough  ? 'Yes' : 'No'}</p>

                <h5>For how many days has the patient been coughing?</h5>
                <p>{this.props.location.alafForm.coughDays}</p>

                <h5>Does the patient have diarrhoea?</h5>
                <p>{this.props.location.alafForm.diarrhoea  ? 'Yes' : 'No'}</p>

                <h5>How many days has the patient had diarrhoea?</h5>
                <p>{this.props.location.alafForm.diarrhoeaDays}</p>

                <h5>Does the patient have blood in stool?</h5>
                <p>{this.props.location.alafForm.bloodInStool}</p>

                <h5>What body temperature does the patient have?</h5>
                <p>{this.props.location.alafForm.fever}</p>

                <h5>If the patient has fever, how many days has the patient had a fever?</h5>
                <p>{this.props.location.alafForm.feverDays}</p>

                <h5>Does the patient have convulsions?</h5>
                <p>{this.props.location.alafForm.convulsions}</p>

                <h5>Does the patient have difficulties eating or drinking?</h5>
                <p>{this.props.location.alafForm.difficultToEatDrink  ? 'Yes' : 'No'}</p>

                <h5>Is the patient unable to eat and/or drink?</h5>
                <p>{this.props.location.alafForm.cannotEatDrink ? 'Yes' : 'No'}</p>

                <h5>Does the patient vomit?</h5>
                <p>{this.props.location.alafForm.vomiting  ? 'Yes' : 'No'}</p>

                <h5>Does the patient vomit everything?</h5>
                <p>{this.props.location.alafForm.vomitsEverything  ? 'Yes' : 'No'}</p>

                <h5>Does the patient have red eyes?</h5>
                <p>{this.props.location.alafForm.redEyes  ? 'Yes' : 'No'}</p>

                <h5>If the patient has red eyes, how many days has the patient had red eyes for?</h5>
                <p>{this.props.location.alafForm.redEyesDays}</p>

                <h5>Does the patient have difficulties to see?</h5>
                <p>{this.props.location.alafForm.difficultiesToSee  ? 'Yes' : 'No'}</p>

                <h5>If the patient has difficulties seeing, how many days has the patient had difficulties seeing?</h5>
                <p>{this.props.location.alafForm.difficultiesToSeeDays}</p>

                <h5>Is the patient's chest indrawn?</h5>
                <p>{this.props.location.alafForm.chestIndraw}</p>

                <h5>What is the patient breathing frequency?</h5>
                <p>{this.props.location.alafForm.breathingFreq}</p>

                <h5>Is the patient sleepy?</h5>
                <p>{this.props.location.alafForm.sleepy}</p>

                <h5>Is the patient unconscious?</h5>
                <p>{this.props.location.alafForm.unconscious}</p>

                <h5>Does the patient have Palmar Pallor?</h5>
                <p>{this.props.location.alafForm.palmarPalor}</p>

                <h5>What is the patient middle upper arm circumference?</h5>
                <p>{this.props.location.alafForm.muac}</p>

                <h5>Does the patient have swollen feet?</h5>
                <p>{this.props.location.alafForm.swollenFeet}</p>

                <Button className="float-right" variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit form
                </Button>

            </div>
        )
    }

}

export default reviewForm