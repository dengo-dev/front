import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useCallback} from "react";
import ReadComponent from "./ReadComponent";


const ReadPage=()=>{

    const {tno}=useParams()


    return (
        <div className="text-3xl font-extrabold">
            Todo Read Page Component-------- {tno}

            <div>
                <ReadComponent tno={tno}></ReadComponent>
            </div>
        </div>
    )
}

export default ReadPage;