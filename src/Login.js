import React from 'react'
import { TextField } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import {Link} from 'react-router-dom';
import  FormControlLabel from '@material-ui/core/FormControlLabel';
import  Checkbox from '@material-ui/core/Checkbox';
import  CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import  PersonIcon from '@material-ui/icons/Person';
const Login=()=> {
    return (
        <div>
             <div className="icon">
                <div className="icon-class">
                    <PersonIcon fontsize="large"/>
                </div>
                <div className="text">Login</div>
            </div>
             <div className="details">
                <TextField id="Email" className="emailpass" type="text" varient="outlined" label="Enter Email" fixedWidth/>
                <TextField id="Password" className="emailpass" type="text" varient="outlined" label="Enter Password" fixedWidth/>
                <FormControlLabel 
                    control={
                        <Checkbox 
                        icon={ <CheckBoxOutlineBlankIcon fontSize = "small"/>}
                        checkedIcon={ <checkedIcon fontSize="small"/>}
                        />
                    }
                    label="Remember me"                
                />
                <button varient="contained" color="primary">Login</button>
            </div>
            <Divider varient="middle" />
            <p className="text-center">
                <Link to="Signup" className="text-black"> Signup to new account</Link>
            </p>
        </div>
    )
}

export default Login
