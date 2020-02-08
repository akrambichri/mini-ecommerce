import React from 'react'
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import LoginForm from "../components/LoginForm"
import Loading from "../components/Loading"

function Authentication() {
    const history = useHistory()
    const user = useSelector(state => state.auth.user)
    const loading = useSelector(state => state.auth.loading)
    if(user){
        history.push("/home")
    }
    if(loading){
        return <Loading/>
    }
    return (
        <div style={styles.centeredDiv}>
            <div>
                <h1>
                    Login 
                </h1>
             <LoginForm />
            </div>
        </div>
    )
}


const styles = {
    centeredDiv:{
        display:"flex",
        flex:1,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        padding:"60px",
    },

}
export default Authentication
