import {Component} from 'react'
import './App.css'
class App extends Component{
    state={
        nextpage:false,
        firstpage:true,
        username:'',
        password:'',
        default1:false
    }
    submitForm=(event)=>{
        event.preventDefault()
        const{username,password}=this.state
        if(username===''&&password==='')
        {
            this.setState({
                validatep:true,
                validateu:true,
                default1:true,
                username:'',
                password:''
            })
        }
       else{
        this.setState({
            nextpage:true,
            firstpage:false
        })
    }}
    submitAnother=()=>{
          
            this.setState({
                nextpage:false,
                firstpage:true,
            })
            
        
    }
    blurUsername=(event)=>{
        this.setState({
            username:event.target.value,
            default1:true,
            validateu:true,
            validatep:false
        })
    }
    blurPassword=(event)=>{
        this.setState({
            password:event.target.value,
            default1:true,
            username:'',
            validateu:false,
            validatep:true
        })
    }
  
   
    render(){
        const{nextpage,firstpage,username,password,validateu,default1,validatep}=this.state
        
        
        return(
            <div className='container'>
               {firstpage&& <form className='formcontainer' onSubmit={this.submitForm}>
                <h1 style={{color:"#ff0b37"}}>Registration</h1>
                <label htmlFor='username'>UserName</label><br/>
                <input type="text" onBlur={this.blurUsername}/><br/>
                {(username===''&& default1===true)&&(validateu===true)?<p>Required</p>:''}
                <label htmlFor='password'>Password</label><br/>
                <input type="text" onBlur={this.blurPassword}/><br/>
                {(password===''&& default1===true)&&(validatep===true)?<p>Required</p>:''}
                <button type="submit" className='but'>Submit</button>
                </form>}
                <div className='another'>
                {nextpage&&<div className='success'><h3 style={{color:"#ff0b37"}}>Registration Successful</h3>
                <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" alt="success" className='success'/>
                <h4>Submitted Successfully</h4>
                <button onClick={this.submitAnother} className='but'>Submit another</button>
                </div>}
                </div>
            </div>
        )
    }
}
export default App