import chroma from "chroma-js";

export default {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: 1
        }
    },
    copyColor: {
        color: props => chroma(props.background).luminance() < 0.08 ? "white" : "black"
    },
    seeMore: {
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        right: "0",
        bottom: "0",
        fontSize: "12px",
        textTransform: "uppercase",
        border: "none",
        color: props => chroma(props.background).luminance() > 0.6 ? "black" : "white",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px"
    },
    colorName: {
        color: props => chroma(props.background).luminance() < 0.08 ? "white" : "black"
    },
    copyButton: {
        position: "absolute",
        width: "100px",
        height: "30px",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        cursor: "pointer",
        color: props => chroma(props.background).luminance() > 0.6 ? "black" : "white",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        border: "none",
        textTransform: "uppercase",
        opacity: 0
    },
    boxContent: {
        position: "absolute",
        left: "0",
        bottom: "0",
        padding: "10px",
        width: "100%",
        color: "black",
        fontSize: "12px"
    },
    copyOverlay: {
        opacity: "0",
        width: "100%",
        height: "100%",
        zIndex: "0",
        transform: "scale(0.5)",
        transition: "transform 0.6s ease-in-out"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute",
    },
    copyMsg: {
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: "0",
        color: "white",
        transform: "scale(0)",
        fontSize: "2rem",
        "& h1":{
            fontWeight: "400",
            textShadow: "2px 2px black",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            padding: "1rem",
            marginBottom: "0",
        },
        "& p":{
            fontWeight: "100",
            fontSize: "2rem"
        }
    },
    showCopyMessage: {
        opacity: "1",
        transitionDelay: "0.3s",
        zIndex: "25",
        transform: "scale(1)",
        transition: "all 0.4s ease-in-out",
    }

};
