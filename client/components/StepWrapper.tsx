import React from 'react'
import {Container, Stepper, Step, StepLabel, Grid, Card} from '@material-ui/core'

interface StepWrapperProps {
    activeStep: number

}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите сам трек']

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) => 
                    <Step
                        key={index}
                        completed={ activeStep > index }
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justify="center" style={{margin: '70px 0', height: 270}}>
                <Card style={{ width: 600 }}>
                    {children}
                </Card>
            </Grid>
        </Container>
    )
}

export default StepWrapper