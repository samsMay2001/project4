import { Link, useNavigate } from "react-router-dom";
import './signin.css'
import PageHeader from "../PageHeader/pageheader";
import { useFormik } from "formik";
import * as Yup from 'yup'; 
import axios from "axios";
import qs from 'qs'
import { useAppContext } from "../../App/appContext";

function SignIn() {
	const {setLoggedUser} = useAppContext()
	let publicUrl = process.env.PUBLIC_URL+'/'
	const navigate = useNavigate()
	const formik = useFormik({
		initialValues: {
			email : '', 
			password : '',
		},
		validationSchema : Yup.object({
			email : Yup.string().required("Required").email("Not a valid email"), 
			passsword: Yup.string().required('Required')
		})
	})
	function test(){
		axios.post('http://localhost:4000/getuser', qs.stringify(formik.values), {
			headers : {
				'Content-type' : 'application/x-www-form-urlencoded'
			}, 
		}).then((res)=> {
			setLoggedUser(res.data); 
			localStorage.setItem('my-key', JSON.stringify(res.data))
			navigate('/my-account'); 
			
		}).catch(err => console.log(err))
	}
    return ( 
        <div>
			<PageHeader headertitle={'Account'} subheader={'Login'}/>
			<div className="ltn__login-area pb-65 ">
				<div className="container" >
				<div className="row" >
					<div className="col-lg-12">
					<div className="section-title-area text-center">
						<h1 className="section-title" >Sign In <br />To  Your Account</h1>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
						Sit aliquid,  Non distinctio vel iste.</p>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6">
					<div className="account-login-inner">
						<form  className="ltn__form-box contact-form-box">
							<input type={'email'} name={'email' } value={formik.values.email} onChange={formik.handleChange} placeholder={'Email*'}/>
                            <input type={'password'} name={'password' } value={formik.values.password} onChange={formik.handleChange} placeholder={'Password*'}/>
							<div className="btn-wrapper mt-0">
								<button className="theme-btn-1 btn btn-block" type="button" onClick={test}>SIGN IN</button>
							</div>
							<div className="go-to-btn mt-20">
							</div>
						</form>
					</div>
					</div>
					<div className="col-lg-6">
					<div className="account-create text-center pt-50">
						<h4>DON'T HAVE AN ACCOUNT?</h4>
						<p>Add items to your wishlistget personalised recommendations <br />
						check out more quickly track your orders register</p>
						<div className="btn-wrapper go-top">
							<Link to="/register" className="theme-btn-1 btn black-btn">CREATE ACCOUNT</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>


		</div>
     );
}

export default SignIn;