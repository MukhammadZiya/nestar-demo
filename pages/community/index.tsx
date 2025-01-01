import withLayoutBasic from "@/libs/components/layout/LayoutBasic"
import { NextPage } from "next"
import { useState } from "react"

const Community: NextPage = () => {
    const [title, setTitle] = useState<String>("hello")
    return(
        <div>
            COMMUNITY {" "}
            <button onClick={() => alert("Hello MIT")} style={{margin:"15px"}}>
                Press me
            </button>
        </div>
    )
 }
 
 export default withLayoutBasic(Community)