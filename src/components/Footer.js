import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import SapienLogo from '../assets/logo.png'
import { policies } from '../const/pages'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { fonts, pixToRem } from '../const/uivar';

export function Footer() {
    return (
        <Box
            sx={styles.panel}
            >
            <Container maxWidth={false}>
                <Grid container md={12} direction="row" alignItems="center" justifyContent={'space-around'}>
                    <Grid item xs={3}>
                        <Box component={'img'} src={SapienLogo} sx={styles.logo} />
                    </Grid>
                    <Grid container md={6.5} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                        {
                            policies.map((policy, index) => {
                                return (
                                    <Button sx={styles.policy}>{policy}</Button>
                                )
                            })
                        }
                    </Grid>
                    <Grid item xs={2.5}>
                        <Typography color="white" variant="subtitle1">
                        Sapien Eleven - 2023  ©  Design by @sv3nsei
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