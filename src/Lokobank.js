import React from 'react'
import "./Lokobank.css"
import Svg from "./lokobank.svg"
import logo from "./logo.png"
import {motion} from "framer-motion"

const Lokobank = () => {
    const variants = {
        hidden: {
            opacity: 0
        },
        visible : {
            opacity: 1,
            transition: { duration: 1}
        },
        exit: {
            x: "-100vw",
            transition: {ease: "easeInOut"}
        }
    }

    return (
        <motion.div className="page" variants={variants}
        initial="hidden"
        animate= "visible"
        exit= "exit">
            <div className="page--form">
                <img src={logo} alt="Lokobank" className="page--logo"/>
                <h2 className="page--sign">Sign up to</h2>
                <h1 className="page--name">Lokobank</h1>
                <button className="page--google"> <img src="https://img.icons8.com/fluent/48/000000/google-logo.png" className="page--google--image"/> Sign up with Google</button>
                <p> or sign up with email</p>
                <form>
                <div className="form--email">
                <input type="text" placeholder="Email" className="page--input--email"/>
                </div>
                   <div className="form--password">
                   <input type="password" placeholder="Password" className="page--input--password"/>
                   </div> 
                   
                    <button className="form--cta">Create account</button>
                <p className="form--testimonial"> By signing up, I agree to the <span>Treva Policy</span> and <span>Terms of Service</span></p>
                </form>
                
               
                <h4>Have an account? Login</h4>
            </div>
            <div className="page--svg">
                <img src={Svg} alt="Register with Lokobank" className="img--svg"/>
            </div>
        </motion.div>
    )
}

export default Lokobank
