import {useContext} from "react";
import {PersonContext, usePersonInfo} from "../contexts/personContext";

const PersonImage = () => {

  // const {alt} = useContext(PersonContext)
  const {alt} = usePersonInfo()

  return (
    <div>
      <img src="" alt={alt}/>
    </div>
  )
}

export default PersonImage
