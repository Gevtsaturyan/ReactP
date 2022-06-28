import React,{useState} from "react";
import './Corona.css'
import axios from 'axios';




export default function Corona(){
    const [ar,setAr]=useState('')
    const [erkir,setErkir]=useState({name:'',varak:'',deat:''})
    const [lod,setLod]=useState(false)

    const click=()=>{
        axios.get(`https://corona-api.com/countries/${ar}`)
        
        .then((res)=>{
            console.log(res);
            setLod(true)
            setTimeout(() => {
  
            let name=res.data.data.name
            let g=res.data.data.latest_data.confirmed
            let h=res.data.data.latest_data.deaths
            setErkir((x)=>{
                return {...x,name:name }
            })
            setErkir((x)=>{
                return {...x,varak:g }
            })
            setErkir((x)=>{
                return {...x,deat:h }
            })
            
            setLod(false)
        }, 2000);
           

        })
        .catch((error)=>{
            document.write('inchvor ban ayn che..... ')
        })

    }
    if(lod){
        return <div>Loding...</div>
    }
    
    const change=(e)=>{
        const {value}=e.target
        setAr(value)
    }

    return(
        <>
        <input onChange={change} />
        <button onClick={click}>click</button>
        <div className="divMer">
        <div className="divErkir">Erkir  :   <b>{erkir.name}</b></div>
        <div className="divVarak">Varakvacner  :   <b>{erkir.varak} :mard</b></div>
        <div className="divMah">Mhacacner   :   <b>{erkir.deat} :mard</b></div>
        </div>
        </>
    )
}

