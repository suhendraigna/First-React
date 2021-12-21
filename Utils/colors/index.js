const mainColor = {
    green1:'#0BCAD4',
    dark1:'#112340',
    grey1:'#7D8797'
};
const colors ={
    primary:mainColor.green1,
    secondary:mainColor.dark1,
    white:'white',
    black:'black',
    text:{
        primary: mainColor.dark1,
        secondary:mainColor.grey1,
    },
    button:{
        primary:{
            background:mainColor.green1,
            text:colors.white
        },
        secondary:{
            background:main.white,
            text:mainColor.dark1
        }
    }
};

export default colors;