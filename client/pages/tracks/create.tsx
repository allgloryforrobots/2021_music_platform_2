import React from 'react'
import {useState} from 'react'
import {Button, Grid, TextField} from '@material-ui/core'
import MainLayout from '../../layouts/MainLayout'
import StepWrapper from '../../components/StepWrapper'
import FileUpload from '../../components/FileUpload'

const Create = () => {
    let [activeStep, setActiveStep] = useState(0)
    let [picture, setPicture] = useState(null)
    let [audio, setAudio] = useState(null)

    const next = () => {
        if (activeStep !== 2) setActiveStep(prev => prev + 1)
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={'column'} style={{padding: 20}}>
                        <TextField
                            style={{ marginTop: 10 }}
                            label={"Название трека"}
                        />
                        <TextField
                            style={{ marginTop: 10 }}
                            label={"Имя исполнителя"}
                        />
                        <TextField
                            style={{ marginTop: 10 }}
                            label={"Слова к треку"}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload setFile={setAudio} accept="image/*" >
                        <Button>Загрузить изображение</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setPicture} accept="audio/*" >
                        <Button>Загрузить аудио</Button>
                    </FileUpload>
                }                                
            </StepWrapper>
            <Grid container justify="space-between">
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button disabled={activeStep > 2} onClick={next}>Далее</Button>
            </Grid>
        </MainLayout>
    )
}

export default Create