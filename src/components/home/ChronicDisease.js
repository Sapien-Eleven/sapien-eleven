import {Box, Container, Tab, Tabs, Typography, useMediaQuery, useTheme} from "@mui/material";
import Chronic_Disease from '../../assets/images/chronic_disease.jpg'
import MobileChronicDiseaseJSX from '../../assets/images/mobile_chronic_disease'
import {pixToRem, colors, fonts} from "../../const/uivar";
import {useEffect, useState} from "react";
import axios from "axios";
import {dataCancerArr, dataDeathArr, StrapiToken, StrapiURL} from "../../const/consts";
import {ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from 'recharts';

export const ChronicDisease = (props) => {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));

    const [content, setContent] = useState({})
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        fetchContent().then();
    }, []);

    const fetchContent = async () => {
        const data = (await axios.get(`${StrapiURL}landings`, {
            headers: {
                'Authorization': `bearer ${StrapiToken}`
            },
            params: {
                'populate': '*',
                'filters[section][$eq]': 'section5'
            }
        })).data;
        setContent({
            title1: data.data[0].attributes.title1,
            title2: data.data[0].attributes.title2,
            description: data.data[0].attributes.description,
        });
    }
    const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });
    if (md) return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.mobilePanel}
        >
            <MobileChronicDiseaseJSX />
            <Box
                component={'div'}
                sx={styles.mobileExplaination}
            >
                <Box
                    component={'span'}
                    sx={styles.mobileWhiteTxt}
                >
                    {content.title1}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.mobileRedTxt}
                >
                    {content.title2}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.mobileComment}
                >
                    {content.description}
                </Box>
                <Box
                    component={'div'}
                    sx={styles.chartPanel}
                >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="Disease chart" variant="scrollable" scrollButtons="true" orientation={'horizontal'}>
                            <Tab label="CANCERS" {...a11yProps(0)} style={value === 0 ? styles.mobileActiveTab : styles.mobileDefaultTab} />
                            <Tab label="DIABETES" {...a11yProps(1)} style={value === 1 ? styles.mobileActiveTab : styles.mobileDefaultTab} />
                            <Tab label="HYPERTENSION" {...a11yProps(2)} style={value === 2 ? styles.mobileActiveTab : styles.mobileDefaultTab} />
                            <Tab label="OBESITY" {...a11yProps(3)} style={value === 3 ? styles.mobileActiveTab : styles.mobileDefaultTab} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <ResponsiveContainer width="100%" minHeight={430}>
                            <ComposedChart
                                // height={500}
                                data={dataCancerArr}
                                margin={{
                                    top: 20,
                                    left: 0,
                                    right: 0,
                                    bottom: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" vertical={false} />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis yAxisId="left" dataKey="uv" orientation='left'/>
                                <YAxis yAxisId="right" dataKey="pv" orientation='right' tickFormatter={value => currencyFormatter.format(value).slice(0, -3)} />

                                {/* <YAxis yAxisId="right" orientation="right" /> */}
                                <Tooltip contentStyle={{marginLeft:-50,backgroundColor: '#333',color:colors.red}} />
                                {/* <Tooltip content={<CustomTooltip />} /> */}
                                <Legend />
                                <Bar yAxisId="left" name="Cancer New Cases (Millions)" dataKey="uv" barSize={5} stroke='#333' fill='#f7f8f8' />
                                <Area yAxisId="right" name="Cancer Funding in USD (billions)" isAnimationActive={false} type="monotone" dataKey="pv" fill={colors.red} stroke={colors.red} />
                                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <ResponsiveContainer width="100%" minHeight={430}>
                            <ComposedChart
                                // height={500}
                                data={dataDeathArr}
                                margin={{
                                    top: 20,
                                    bottom: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" vertical={false} />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis yAxisId="left" dataKey="dv" unit={'k'} orientation='left'/>
                                <YAxis yAxisId="right" dataKey="uv" orientation='right' tickFormatter={value => currencyFormatter.format(value).slice(0, -3)} />

                                {/* <YAxis yAxisId="right" orientation="right" /> */}
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                                <Bar yAxisId="left" name="Total Diabetes Deaths" dataKey="dv" barSize={5} stroke='#333' fill='#f7f8f8' />
                                <Area yAxisId="right" name="US Healthcare Spending in USD (Billions)" isAnimationActive={false} type="linear" dataKey="uv" fill={colors.red} stroke={colors.red} />
                                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <ResponsiveContainer width="100%" minHeight={430}>
                            <ComposedChart
                                // height={500}
                                data={dataDeathArr}
                                margin={{
                                    top: 20,
                                    bottom: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" vertical={false} />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis yAxisId="left" dataKey="hv" unit={'k'} orientation='left'/>
                                <YAxis yAxisId="right" dataKey="uv" orientation='right' tickFormatter={value => currencyFormatter.format(value).slice(0, -3)} />

                                {/* <YAxis yAxisId="right" orientation="right" /> */}
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                                <Bar yAxisId="left" name="Total Hypertension Deaths" dataKey="hv" barSize={5} stroke='#333' fill='#f7f8f8' />
                                <Area yAxisId="right" name="US Healthcare Spending in USD (Billions)" type="linear" dataKey="uv" isAnimationActive={false} fill={colors.red} stroke={colors.red} />
                                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <ResponsiveContainer width="100%" minHeight={430}>
                            <ComposedChart
                                // height={500}
                                data={dataDeathArr}
                                margin={{
                                    top: 20,
                                    bottom: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" vertical={false} />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis yAxisId="left" dataKey="ov" unit={'k'} orientation='left'/>
                                <YAxis yAxisId="right" dataKey="uv" orientation='right' tickFormatter={value => currencyFormatter.format(value).slice(0, -3)} />

                                {/* <YAxis yAxisId="right" orientation="right" /> */}
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                                <Bar yAxisId="left" name="Total Obesity Deaths" dataKey="ov" barSize={5} stroke='#333' fill='#f7f8f8' />
                                <Area yAxisId="right" name="US Healthcare Spending in USD (Billions)" type="linear" dataKey="uv" isAnimationActive={false} fill={colors.red} stroke={colors.red} />
                                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </TabPanel>
                </Box>
            </Box>
        </Container>
    )

    return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'div'}
                sx={styles.explaination}
            >
                <Box
                    component={'span'}
                    sx={styles.whiteTxt}
                >
                    {content.title1}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.redTxt}
                >
                    {content.title2}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    {content.description}
                </Box>
                <Box
                    component={'div'}
                    sx={styles.chartPanel}
                >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="Disease chart" orientation={'horizontal'}>
                            <Tab label="CANCERS" {...a11yProps(0)} style={value === 0 ? styles.activeTab : styles.defaultTab} />
                            <Tab label="DIABETES" {...a11yProps(1)} style={value === 1 ? styles.activeTab : styles.defaultTab} />
                            <Tab label="HYPERTENSION" {...a11yProps(2)} style={value === 2 ? styles.activeTab : styles.defaultTab} />
                            <Tab label="OBESITY" {...a11yProps(3)} style={value === 3 ? styles.activeTab : styles.defaultTab} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <ResponsiveContainer width="100%" minHeight={430}>
                            <ComposedChart
                                // height={500}
                                data={dataCancerArr}
                                margin={{
                                    top: 20,
                                    left: 0,
                                    right: 0,
                                    bottom: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" vertical={false} />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis yAxisId="left" dataKey="uv" orientation='left'/>
                                <YAxis yAxisId="right" dataKey="pv" orientation='right' tickFormatter={value => currencyFormatter.format(value).slice(0, -3)} />

                                {/* <YAxis yAxisId="right" orientation="right" /> */}
                                <Tooltip contentStyle={{marginLeft:-50,backgroundColor: '#333',color:colors.red}} />
                                {/* <Tooltip content={<CustomTooltip />} /> */}
                                <Legend />
                                <Bar yAxisId="left" name="Cancer New Cases (Millions)" dataKey="uv" barSize={5} stroke='#333' fill='#f7f8f8' />
                                <Area yAxisId="right" name="Cancer Funding in USD (billions)" isAnimationActive={false} type="monotone" dataKey="pv" fill={colors.red} stroke={colors.red} />
                                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <ResponsiveContainer width="100%" minHeight={430}>
                            <ComposedChart
                                // height={500}
                                data={dataDeathArr}
                                margin={{
                                    top: 20,
                                    bottom: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" vertical={false} />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis yAxisId="left" dataKey="dv" unit={'k'} orientation='left'/>
                                <YAxis yAxisId="right" dataKey="uv" orientation='right' tickFormatter={value => currencyFormatter.format(value).slice(0, -3)} />

                                {/* <YAxis yAxisId="right" orientation="right" /> */}
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                                <Bar yAxisId="left" name="Total Diabetes Deaths" dataKey="dv" barSize={5} stroke='#333' fill='#f7f8f8' />
                                <Area yAxisId="right" name="US Healthcare Spending in USD (Billions)" isAnimationActive={false} type="linear" dataKey="uv" fill={colors.red} stroke={colors.red} />
                                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <ResponsiveContainer width="100%" minHeight={430}>
                            <ComposedChart
                                // height={500}
                                data={dataDeathArr}
                                margin={{
                                    top: 20,
                                    bottom: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" vertical={false} />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis yAxisId="left" dataKey="hv" unit={'k'} orientation='left'/>
                                <YAxis yAxisId="right" dataKey="uv" orientation='right' tickFormatter={value => currencyFormatter.format(value).slice(0, -3)} />

                                {/* <YAxis yAxisId="right" orientation="right" /> */}
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                                <Bar yAxisId="left" name="Total Hypertension Deaths" dataKey="hv" barSize={5} stroke='#333' fill='#f7f8f8' />
                                <Area yAxisId="right" name="US Healthcare Spending in USD (Billions)" type="linear" dataKey="uv" isAnimationActive={false} fill={colors.red} stroke={colors.red} />
                                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <ResponsiveContainer width="100%" minHeight={430}>
                            <ComposedChart
                                // height={500}
                                data={dataDeathArr}
                                margin={{
                                    top: 20,
                                    bottom: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" vertical={false} />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis yAxisId="left" dataKey="ov" unit={'k'} orientation='left'/>
                                <YAxis yAxisId="right" dataKey="uv" orientation='right' tickFormatter={value => currencyFormatter.format(value).slice(0, -3)} />

                                {/* <YAxis yAxisId="right" orientation="right" /> */}
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                                <Bar yAxisId="left" name="Total Obesity Deaths" dataKey="ov" barSize={5} stroke='#333' fill='#f7f8f8' />
                                <Area yAxisId="right" name="US Healthcare Spending in USD (Billions)" type="linear" dataKey="uv" isAnimationActive={false} fill={colors.red} stroke={colors.red} />
                                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </TabPanel>
                </Box>
            </Box>
        </Container>
    )
}

const styles = {
    panel: {
        width: '100%',
        zIndex: 1,
        backgroundColor: '#1D1D1D',
        backgroundImage: `url(${Chronic_Disease})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'start',
        backgroundSize: 'cover',
        paddingTop: pixToRem(90),
        paddingBottom: pixToRem(50)
    },
    mobilePanel: {
        width: '100%',
        zIndex: 1,
        backgroundColor: '#1D1D1D',
        pb: pixToRem(50)
    },
    explaination: {
        marginLeft: '5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    mobileExplaination: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteTxt: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(30),
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: pixToRem(40),
        color: 'white'
    },
    mobileWhiteTxt: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(25),
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: pixToRem(40),
        color: 'white'
    },
    redTxt: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(30),
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: pixToRem(40),
        color: colors.red
    },
    mobileRedTxt: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(25),
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: pixToRem(40),
        color: colors.red
    },
    comment: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: pixToRem(30),
        color: '#999999',
        marginTop: pixToRem(10),
        width: '50%'
    },
    mobileComment: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(16),
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: pixToRem(24),
        color: '#999999',
        marginTop: pixToRem(10),
        textAlign: 'center',
        width: '90%'
    },
    chartPanel: {
        marginTop: pixToRem(50),
        backgroundColor: 'rgba(29,29,29,0.25)',
        width: '95%'
    },
    defaultTab: {
        color: '#999'
    },
    activeTab: {
        color: 'white'
    },
    mobileDefaultTab: {
        color: '#999',
        fontSize: pixToRem(14),
    },
    mobileActiveTab: {
        color: 'white',
        fontSize: pixToRem(14),
    }
}

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 3, pb:3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const CustomTooltip = ({ active, payload, label }) => {

    if (active && payload && payload.length) {
        return (
            <Box className="custom-tooltip" sx={{border:'1px solid white',marginLeft:'-40px', padding: '10px',backgroundColor: '#333',color:'#f5f4f5', width:'100%'}}>
                <Typography className="label" sx={{color: payload[1].color}}>{`${label}`}</Typography>
                <Typography className="label" sx={{color: payload[0].color}}>{`${payload[0].name} : ${payload[0].value*1000}`}</Typography>
                <Typography className="label"  sx={{color: payload[1].color}}>{`${payload[1].name} : ${payload[1].value}`}</Typography>
            </Box>
        );
    }

    return null;
};