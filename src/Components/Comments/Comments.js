import { useState } from "react";
import SingleComment from "../../Components/SingleComments/SingleComments";
import './Comments.css'
import {commentCreate} from '../../redux/about/action'
import { useDispatch,useSelector } from "react-redux";
import uniqid from 'uniqid'

function Comments(props){
    const [textComment,setTextComment]=useState('')
    const comments=useSelector(state=>{
        const {comments} = state;
        return comments.comments //aystexov kpahpani bolor komentnery
    })
    const dispatch=useDispatch()
    const handleInput=(e)=>{
        setTextComment(e.target.value)
    }
    const handeleSubmit=(e)=>{
        e.preventDefault();
        const id=uniqid();
        dispatch(commentCreate(textComment,id))
        setTextComment(e.target.value='')
    }
    return (
        <div className="card-comments">
            <form onSubmit={handeleSubmit} className='comment-item-create'>
                <input type='text' className="card-input" value={textComment} onChange={handleInput}/>
                <input type='submit' hidden/>

            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res}/>
            })}
        </div>
    )
}
export default Comments

//value talis enq skzbnakan arjeq
//handelesubmitum dispatch enwq anum mer eqshny ev poxancum tvyalnery dranq en henc qomentnery ev idner
//inputneroc heto avelacnum enq mer komentnery vorpeszi tesnenq ekranin
//aynuhetev gnum enq singlecoments render enq anum  amen mi arandzin koment



// function Comments(props){
//     const [textComment,setTextComment]=useState('')
//     console.log('comment props >', props);
//     const handleInput=(e)=>{
//         console.log('inpt >>>',e.target.value);
//         setTextComment(e.target.value)
//     }    
//     const handeleSubmit=(e)=>{
//         e.preventDefault();
//         console.log('submit textComment>>',textComment);
//     }
//     return(
//         <div className="card-comments">
//             <form onSubmit={handeleSubmit} className='comment-item-create'>
//                 <input type='text' value={textComment} onChange={handleInput}/>
//                 <input type='submit'hidden/>
//             </form>
//             <SingleComment/>
//         </div>
//     )
// }
// export default Comments