import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Button from '@material-ui/core/Button';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <MuiLink color="inherit" href="https://material-ui.com/">
                Your Website
        </MuiLink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Index = () => {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>

                <Typography variant="body2" color="textSecondary" align="center">
                    <MuiLink href="about" color="secondary">
                        Go to the about page
                    </MuiLink>

                    <MuiLink href="upload" color="secondary">
                        Go to the upload page
                    </MuiLink>
                </Typography>

                <Button variant="contained" color="primary">
                    Hello World
                </Button>

                <ProTip />
                <Copyright />
            </Box>
        </Container >
    );
}

export default Index;
