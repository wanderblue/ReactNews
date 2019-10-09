import React, {Component} from 'react'
import MainArticleCard from '../MainArticleCard/index.js'
import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


class SocialMediaCluster extends Component{
    render(){
        return (            
            <div className='bg-light container mt-0 border-left border-2'>
                <h3>Put this in your feed</h3>
                <div className=' bg-dark p-0'>
                    <div className='row bg-light m-auto container '>
                        <Link className='navLinks link text-dark float-left m-0' to='' >
                            <img
                                alt='Logo'
                                src= {process.env.PUBLIC_URL + '/facebooklogo.jpg'}
                                width='25'
                                height='25'
                                className=''
                            />
                                <u>Facebook</u>
                        </Link>
                    </div>
                    <div className='row bg-light m-0 container'>
                        <Link className='navLinks link text-dark float-left m-0' to='' >
                                <img
                                alt='Logo'
                                src= {process.env.PUBLIC_URL + '/twitterLogo.png'}
                                width='25'
                                height='25'
                                className=''
                            />
                                <u>Twitter</u>
                        </Link>
                    </div>
                    <div className='row bg-light m-0 container'>
                        <Link className='navLinks link text-dark float-left m-0' to='' >
                                <img
                                    alt='Logo'
                                    src= {process.env.PUBLIC_URL + '/instagramLogo.png'}
                                    width='25'
                                    height='25'
                                    className=''
                                />
                                <u>Instagram</u>
                        </Link>
                    </div>
                    <div className='row bg-light m-0 container'>
                        <Link className='navLinks link text-dark float-left m-0' to='' >
                                <img
                                    alt='Logo'
                                    src= {process.env.PUBLIC_URL + '/youtubeLogo.jpg'}
                                    width='25'
                                    height='25'
                                    className=''
                                />
                                <u>Youtube</u>
                        </Link>
                    </div>
                    <div className='row bg-light m-0 container'>
                        <Link className='navLinks link text-dark float-left m-0' to='' >
                                <img
                                    alt='Logo'
                                    src= {process.env.PUBLIC_URL + '/newsletterLogo.jpg'}
                                    width='25'
                                    height='25'
                                    className=''
                                />
                                <u>NewsLetter</u>
                        </Link>
                    </div>
                </div>
            </div>
                
        )
    }
}

export default SocialMediaCluster