import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMdMail,  } from 'react-icons/io'

import contactIconStyles from './ContactIcon.module.scss'

const ContactIcon = () => {
    return (
        <div>
            <ul className={contactIconStyles.list}>
                <li>
                    <a 
                        rel="noopener noreferrer"
                        href='https://github.com/CodeChung' 
                        target='_blank' aria-hidden={true} >
                        <IoLogoGithub />
                    </a>
                </li>
                <li>
                    <a 
                    rel="noopener noreferrer"
                    href='https://www.linkedin.com/in/harry-h-chung/' 
                    target='_blank' aria-hidden={true} >
                        <IoLogoLinkedin />
                    </a>
                </li>
                <li>
                    <a rel="noopener noreferrer" 
                        href='mailto:hc9825@gmail.com' 
                        target='_blank' aria-hidden={true} >
                        <IoMdMail />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ContactIcon