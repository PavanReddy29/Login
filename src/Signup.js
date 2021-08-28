import React from 'react'
import './App.css';
import { TextField } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import  PersonAddIcon from '@material-ui/icons/PersonAdd';
import  Checkbox from '@material-ui/core/Checkbox';
import  CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import  FormControlLabel from '@material-ui/core/FormControlLabel';

const Signup=()=> {
    return (
        <div>
            <div className="icon">
                <div className="icon-class">
                    <PersonAddIcon fontsize="large"/>
                </div>
                <div className="text">Sign Up</div>
            </div>

            <div className="details">
                <div className= "name">
                    <TextField id="fname" type="text" varient="outlined" label="Enter Firstname" fixedWidth/>
                </div>
                <div className= "name">
                <TextField id="lname" type="text" varient="outlined" label="Enter Lastname" fixedWidth/>
                </div>
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
                    label="I agree to all terms and conditions"                
                />
                <button varient="contained" color="primary">Sign up</button>
            </div>
            <Divider varient="middle" />
            <p className="text-center">
                <Link to="/Login" className="text-black">Already have a account</Link>
            </p>
            
        </div>
    )
}

export default Signup
