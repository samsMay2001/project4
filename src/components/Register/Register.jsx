import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../PageHeader/pageheader";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import axios from "axios";
import qs from 'qs'
import './register.css'
import { useAppContext } from "../../App/appContext";
function Register() {
    const navigate = useNavigate()
    const {setLoggedUser} = useAppContext()
    const formik = useFormik({
        initialValues: {
            firstname : '', 
            lastname : '', 
            email : '', 
            password : '', 
            terms: []
        }, 
        validationSchema: Yup.object({
            firstname : Yup.string().max(15, "Must be 15 characters or less").required("Required"), 
            lastname : Yup.string().max(15, 'Must be 15 characters or less').required("Required"), 
            email : Yup.string().required("Required").email("Not a valid email"),
            passsword: Yup.string().required('Required')
        }),
        onSubmit : (values)=> {
            const submitObj = {
                firstname : values.firstname,
                lastname : values.lastname,
                email : values.email,
                password : values.password, 
                address : '123 Redmond street, Moncton, NB',
                favorites : ['test']
            }
            axios.post('http://localhost:4000/createuser', qs.stringify(submitObj), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then((res)=> {
                // console.log(res)
                setLoggedUser(res.data); 
                navigate('/my-account')
                localStorage.setItem('my-key', res.data)
            }).catch(err => console.log(err))
        }
    })
    return ( 
        <div className="ltn__login-area pb-110">
            <PageHeader headertitle={'Account'} subheader={'Register'}/>
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area text-center">
						<h1 className="section-title">Register <br />Your Account</h1>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
						Sit aliquid,  Non distinctio vel iste.</p>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
					<div className="account-login-inner">
						<form className="ltn__form-box contact-form-box" onSubmit={formik.handleSubmit}>
                            <input className={formik.errors.firstname && 'bad-field'} type={'text'} name={'firstname' } value={formik.values.firstname} onChange={formik.handleChange} placeholder={'First name*'}/>
                            <input className={formik.errors.lastname && 'bad-field'} type={'text'} name={'lastname' } value={formik.values.lastname} onChange={formik.handleChange} placeholder={'Last name*'}/>
                            <input className={formik.errors.email && 'bad-field'} type={'email'} name={'email' } value={formik.values.email} onChange={formik.handleChange} placeholder={'Email*'}/>
                            <input className={formik.errors.password && 'bad-field'} type={'password'} name={'password' } value={formik.values.password} onChange={formik.handleChange} placeholder={'Password*'}/>
                            <label className="checkbox-inline">
                                <input type="checkbox" defaultValue />&nbsp;
                                I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.
                            </label>
                            <label className="checkbox-inline">
                                <input type="checkbox" name="terms" onChange={formik.handleChange}/> &nbsp;
                                By clicking "create account", I consent to the privacy policy.
                            </label>
                            <div className="btn-wrapper">
                                <button className="theme-btn-1 btn reverse-color btn-block" type="submit" >CREATE ACCOUNT</button>
                            </div>
						</form>
						<div className="by-agree text-center">
						<p>By creating an account, you agree to our:</p>
						<p><a href="#">TERMS OF CONDITIONS  &nbsp; &nbsp; | &nbsp; &nbsp;  PRIVACY POLICY</a></p>
						<div className="go-to-btn mt-50 go-top">
							<Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
     );
}

export default Register;