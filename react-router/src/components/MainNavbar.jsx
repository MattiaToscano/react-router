import React from 'react'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"


const links = [
    {
        path: '/',
        label: 'Homepages',
    },

    {
        path: '/',
        label: 'Homepages',
    },

    {
        path: '/',
        label: 'Homepages',
    }
]


const MainNavbar = () => {
    return (
        <header>
            <nav>
                <ul className='list-unstyled d-flex justify content-space-beetween'>
                    {links.map((link) => {
                        return (
                            <li className=''>

                            </li>
                        )

                    }



                    )}


                </ul>



            </nav>


        </header>

    )

}