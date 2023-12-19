import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import SapienLogo from '../assets/logo.svg'
import {StrapiToken, StrapiURL} from '../const/consts'
import {Box, Button, Container, Grid, Stack} from '@mui/material'
import { fonts, pixToRem } from '../const/uivar';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function Footer() {
    const [policies, setPolicies] = useState([]);
    useEffect(() => {
        fetchPolicies().then()
    }, [])
    const fetchPolicies = async () => {
        const data = (await axios.get(`${StrapiURL}resources`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'fields[0]': 'title'
            }
        })).data;
        setPolicies(data.data.map(t => t.attributes.title));
    }
    const navigate = useNavigate();
    const goToResourceDetail = (policy) => {
        navigate(`/resource`, {state: {policy: policy}});
    }
    return (
        <Box
            sx={styles.panel}
            >
            <Container maxWidth={false}>
                <Grid container direction="row" alignItems="center" justifyContent={'space-between'}>
                    <Grid item md={2.5}>
                        <Box
                            component={'img'}
                            src={SapienLogo}
                            sx={styles.logo}
                        />
                    </Grid>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        spacing={3}
                    >
                        {
                            policies.map((policy, index) => {
                                return (
                                    <Button key={index} sx={styles.policy} onClick={() => goToResourceDetail(policy)}>{policy}</Button>
                                )
                            })
                        }
                    </Stack>
                    <Grid container md={1.5} direction={'column'} alignItems={'center'}>
                        <Box
                            component={'span'}
                            sx={styles.copyright}
                        >
                            Sapien Eleven - 2023 ©
                        </Box>
                        <Box
                            component={'span'}
                            sx={styles.designBy}
                        >
                            Design by @sv3nsei
                        </Box>
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
    },
    copyright: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: pixToRem(12),
        lineHeight: pixToRem(20),
        color: 'white',
    },
    designBy: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: pixToRem(10),
        lineHeight: pixToRem(15),
        color: 'white',
    }
}