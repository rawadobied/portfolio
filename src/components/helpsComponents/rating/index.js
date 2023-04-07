import React,{useState} from "react";
import {FaStar} from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};


function Rating({onRate,value,rate}) {
    const [currentValue, setCurrentValue] = useState(1);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
    const valuen=Array(value).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
        onRate(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    return (
        <div style={styles.container}>
            <div style={styles.stars}>
                {
                    value && valuen.map((_,index)=>{
                        return(
                            <FaStar
                                key={index}
                                size={13}

                                // onClick={() => handleClick(index + 1)}
                                // onMouseOver={() => handleMouseOver(index + 1)}
                                // onMouseLeave={handleMouseLeave}
                                color={colors.orange}
                                style={{
                                    marginRight: 0,
                                }}

                            />

                        )
                    })
                }
                {!rate && stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{
                                marginRight: 0,
                                cursor: "pointer"
                            }}
                        />
                    )
                })}
            </div>
        </div>
    );
};


const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 300
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10,
    }

};


export default Rating;
