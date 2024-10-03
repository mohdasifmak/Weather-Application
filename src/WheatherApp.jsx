import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WheatherApp(){
    const [wheatherInfo, setWheatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24,
        temp:25,
        tempMin:23,
        tempMax:26,
        humidity:47,
        weather:"Haze", 
    });

    let updateInfo = (result) => {
         setWheatherInfo(result);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Wheather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={wheatherInfo}/>
        </div>
    )
}