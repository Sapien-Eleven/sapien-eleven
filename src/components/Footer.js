import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import SapienLogo from '../assets/logo.png'
import { policies } from '../const/consts'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { fonts, pixToRem } from '../const/uivar';

export function Footer() {
    return (
        <Box
            sx={styles.panel}
            >
            <Container maxWidth={false}>
                <Grid container direction="row" alignItems="center" justifyContent={'space-around'}>
                    <Grid item md={3}>
                        <Box component={'img'} src={SapienLogo} sx={styles.logo} />
                    </Grid>
                    <Grid container xs={6.5} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                        {
                            policies.map((policy, index) => {
                                return (
                                    <Button key={index} sx={styles.policy}>{policy}</Button>
                                )
                            })
                        }
                    </Grid>
                    <Grid item md={2.5}>
                        <Typography color="white" variant="subtitle1">
                        Sapien Eleven - 2023  ©  s11
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

const styles = {
    panel: {
        width: '100%',
        backgroundColor: '#111111',
        height: pixToRem(85),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
		width: '201px',
		height: '80px',
        marginLeft: '5em'
	},
    policy: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 12,
        borderRadius: 0,
        color: 'white',
        marginLeft: pixToRem(35),
        marginRight: pixToRem(35)
    },
    copyright: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: pixToRem(12),
        lineHeight: pixToRem(30),
        color: 'white',
        marginRight: '5em'
    }
}