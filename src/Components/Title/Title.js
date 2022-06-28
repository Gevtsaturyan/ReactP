import { useDispatch,useSelector } from "react-redux"; //useDispatch yn ogtagorcelu e mapdispatchtoprops funkciai poxaren
import { inputText } from "../../redux/about/action";
import './Title.css'                       //useselectory ogtagorcelu enq mapStatetoprops vunkciai poxaren


function Title(props){
    console.log('props title >',props);
    const text =useSelector(state=>{
        const {text}=state;
        return text.text;
    });
    const dispach=useDispatch();
    const handleChange=(e)=>{
        dispach(inputText(e.target.value))  //mer texty reduserin poxancelu hamar
    }
    return(
        <div className="card-title">
            <div className="card-title-top">
                <input className="inputtitle"type={'text'} onChange={handleChange}/>
            </div>
            <p>{text}</p>
        </div>
    )
}
export default Title;
//ogtagorcelov erku hukery integracinq pahestin redaqsi hukery ogtagorcelow arden chenq ogtagorcum funkcian conect-y