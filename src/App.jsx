import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, Grid, CssBaseline, Container, Toolbar } from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import useStyles from './styles';

const cards= [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const classes = useStyles();
     return(
         <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography varient="h6">Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" >
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Hellor everyone This is photo album and i'm trying to make sentences as long as possbile so we can 
                            see how does it looks like.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secodnay action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div> 
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map(() => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image="https:/source.unsplash.com/random"
                                        title="Image title" 
                                    />
                                    <CardContent className={classes.cardContent}>   
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>   
                                        <Typography>
                                            This is media card . you can use this section to describe content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                        Somethings here to give footer purpose
                </Typography>
            </footer>
         </>
     )
}

export default App;