import { deleteProduction } from "../actions";
import { useDispatch } from "react-redux";

export function Entry({entry}) {
    const dispatch = useDispatch();
    const {p_id, p_name, p_type, p_genre, score, summary} = entry;
    //console.log(p_name);
    return (
            <div className = "entry">
                <center><h3 className="prodTitle">{p_name} </h3></center>
                <h5>Type: {p_type}</h5>
                <h5>Genre: {p_genre}</h5>
                <h5>Score: {score}</h5>
                <h5>Summary: <center>{summary} </center></h5>
                <div className="entButton">
                    <button onClick={() => dispatch(deleteProduction(p_id))}>Delete</button>
                </div>
            </div>
    );
}