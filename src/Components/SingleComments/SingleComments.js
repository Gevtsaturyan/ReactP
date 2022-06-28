import './SingleComments.css'
import {useState,useEffect} from 'react'
import {commentDelete} from '../../redux/about/action'
import {useDispatch} from 'react-redux'


// function SingleComment (props){
//     console.log('singal comment props >', props);

//     return(
//         <form className="comment-item">
//             <div className="comment-item-dele">X</div>
//             <input type='text'/>
//             <input type='submit' hidden/>
//         </form>
//     )
// }
// export default SingleComment

function SingleComment({data}){
    const [commentText,setCommentText]=useState('')
    const {text,id}=data
    const dispatch=useDispatch()

    const handleUpdate=(e)=>{
        e.preventDefault();
        console.log('submit >>',commentText);
    }

    const handleDelete=(e)=>{
        e.preventDefault()
        dispatch(commentDelete(id))
    }
    useEffect(()=>{
        if(text){
            setCommentText(text)
        }
    },[text]);
    const handleInput=(e)=>{
        setCommentText(e.target.value)
    }
    return(
        <form onSubmit={handleUpdate} className='comment-item'>
            <span onClick={handleDelete} className='comment-item-delete'>X</span>
             <input type='text' value={commentText} onChange={handleInput}/>
             <input type='submit' hidden/>
        </form>
    )
}
export default SingleComment;

// erb menq grum enq koment ayn aftomat linum e render ev avelanum 
//popoxakan comentText i mej

//hima uzum enq tarmacnel erb uzum enq mer komentyy
//usti formi mej bacum enq onsubmit funkcian