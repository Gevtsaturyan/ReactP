import  {connect} from 'react-redux'
import './Likes.css'
import {incrementLikes,decrementLikes} from '../../redux/about/action'

function Likes(props){
    console.log('render >',props);
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}> 555 {props.likes}</button>
            <button disabled={props.likes===0} onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state){
    const {likes} = state;
    return{
        likes:likes.likes
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrementLikes:()=> dispatch(incrementLikes()),
        onDecrementLikes:()=> dispatch(decrementLikes()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Likes);

//ayspes stanum enq mer funkcianery mapdispatchprops
//aystex miacnum enq mer komponentnery redux in hatuk funkciayuov connect 
//ogtagorcum enq hatuk funkcia mapstatetoprops vorpeszi karoxananq uxxarkel mer pahestic reduxi mer komponentnerin
//nuyny anum enq mer metodnerii het ev ogtagorcum mapdeispatchpropsy
