import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import {Grid, Card, Button, Box} from '@material-ui/core'
import {useRouter} from 'next/router'
import {ITrack} from '../../types/track'
import TrackList from '../../components/TrackList'

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        { _id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Какой-то текст 1', listens: 5, 
        audio: 'http://localhost:5000/audio/track2.mp3', picture: 'http://localhost:5000/image/picture2.jpg', comments: [] },
        { _id: '2', name: 'Трек 2', artist: 'Исполнитель 2', text: 'Какой-то текст 2', listens: 6, 
        audio: 'http://localhost:5000/audio/track3.mp3', picture: 'http://localhost:5000/image/picture3.jpg', comments: [] },
    ]
    return (
        <MainLayout>

            <Grid container justify='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justify='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default Index