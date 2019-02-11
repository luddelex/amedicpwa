import React from 'react'

class reviewForm extends React.Component {

    constructor(props) {
        super()
        this.state = {}
    }

    // this.props.location.patient
    // this.props.location.alafForm

    render() {
        return (
            <div class="container">
            
                <h1>Review entries</h1>

                <h5>Description</h5>
                <p>{this.props.location.alafForm.description}</p>

                <h5>Is the patient coughing?</h5>
                <p>{this.props.location.alafForm.cough}</p>

                <h5>For how many days has the patient been coughing?</h5>
                <p>{this.props.location.alafForm.coughDays}</p>

                <h5>Does the patient have diarrhoea?</h5>
                <p>{this.props.location.alafForm.diarrhoea}</p>

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
                <p>{this.props.location.alafForm.difficultToEatDrink}</p>

                <h5>Is the patient unable to eat and/or drink?</h5>
                <p>{this.props.location.alafForm.cannotEatDrink}</p>

                <h5>Does the patient vomit?</h5>
                <p>{this.props.location.alafForm.vomiting}</p>

                <h5>Does the patient vomit everything?</h5>
                <p>{this.props.location.alafForm.vomitsEverything}</p>

                <h5>Does the patient have red eyes?</h5>
                <p>{this.props.location.alafForm.redEyes}</p>

                <h5>If the patient has red eyes, how many days has the patient had red eyes for?</h5>
                <p>{this.props.location.alafForm.redEyesDays}</p>

                <h5>Does the patient have difficulties to see?</h5>
                <p>{this.props.location.alafForm.difficultiesToSee}</p>

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

            </div>
        )
    }

}

export default reviewForm