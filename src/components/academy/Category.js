import {Box, Button} from "@mui/material";
import {memo, useCallback, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import {academyCategories} from "../../const/consts";

const Category = memo(props => {
    return (
        <Box
            component={'div'}
            sx={styles.panel}
        >
            {
                academyCategories.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            sx={props.category === item ? styles.activeBtn : styles.inactiveBtn}
                            onClick={() => props.setCategory(item)}
                        >
                            <Box sx={props.category === item ? styles.activeDot : styles.inactiveDot} />
                            {item}
                        </Button>
                    )
                })
            }
        </Box>
    )
})

export default Category

const styles = {
    panel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        paddingTop: pixToRem(100),
        paddingBottom: pixToRem(100),
        paddingLeft: pixToRem(70),
        paddingRight: pixToRem(20),
    },
    activeBtn: {
        paddingTop: pixToRem(15),
        paddingBottom: pixToRem(15),
        paddingLeft: pixToRem(15),
        paddingRight: pixToRem(15),
        marginTop: pixToRem(7),
        marginBottom: pixToRem(7),
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: pixToRem(14),
        lineHeight: pixToRem(16),
        color: '#333',
        width: pixToRem(250),
        textTransform: 'capitalize'
    },
    inactiveBtn: {
        paddingTop: pixToRem(15),
        paddingBottom: pixToRem(15),
        paddingLeft: pixToRem(15),
        paddingRight: pixToRem(15),
        marginTop: pixToRem(7),
        marginBottom: pixToRem(7),
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: pixToRem(14),
        lineHeight: pixToRem(16),
        color: '#333',
        width: pixToRem(250),
        textTransform: 'capitalize'
    },
    activeDot: {
        width: pixToRem(20),
        height: pixToRem(20),
        backgroundColor: colors.red,
        borderRadius: pixToRem(20),
        marginRight: pixToRem(15)
    },
    inactiveDot: {
        width: pixToRem(20),
        height: pixToRem(20),
        backgroundColor: '#D9D9D9',
        borderRadius: pixToRem(20),
        marginRight: pixToRem(15)
    }
}
