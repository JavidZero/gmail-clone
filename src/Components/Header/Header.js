import React from 'react'
import './Header.css';
import { IconButton, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from '../../firebase';
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout());
        });
    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon className="header__MenuButton" />
                </IconButton>
                <img 
                    src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="Logo"/>
            </div>
            <div className="header__middle">
                <SearchIcon className="header__middleIcon" />
                <input placeholder='Search email'  type="text"/>
                <ArrowDropDownIcon className="header__inputCaret header__middleIcon" />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                {/* photoURL */}
                <Avatar src="" onClick={()=>signOut()} />
            </div>
        </div>
    )
}

export default Header
