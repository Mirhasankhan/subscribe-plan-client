import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import Container from './Container';
import MenuDropDown from './MenuDropDown';

const Header = () => {
    const { user, logOut, role, setRole } = useAuth()
    const [smDevice, setSmDevice] = useState(false)

    const handleLogout = () => {
        logOut()
            .then(() => {
                setRole(null)
            })
            .catch(() => { })
    }

    return (
        <div className='bg-base-200'>
            <Container>
                <div className="z-10 navbar  sticky top-0">
                    <div className="navbar-start">
                        <div className='flex items-center'>
                            <div>
                                <h1 className='font-bold md:text-2xl'>Subscription<span className='text-blue-600'>Plans</span></h1>
                                <p className='text-sm italic'>Subscribe Your Plans Smoothly</p>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal flex gap-2 font-semibold lg:gap-12">
                            <NavLink className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")} to="/" >Home</NavLink>
                            {
                                role == 'buyer' && <NavLink className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")} to="/mySubscriptions">My Subscriptions</NavLink>
                            }
                            {
                                role == 'host' && <NavLink className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")} to="/myPlans">My Plans</NavLink>
                            }
                            {
                                role == 'host' &&
                                <div className='flex gap-8'>
                                    <NavLink className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")} to="/addPlan">Add Plan</NavLink>
                                </div>
                            }
                        </ul>
                    </div>
                    <div className='md:hidden navbar-end relative'>
                        <FaBars onClick={() => setSmDevice(!smDevice)}></FaBars>
                        {
                            smDevice && <div className="navbar-center absolute top-10 -right-2">
                                <ul data-aos="fade-left" className="menu menu-horizontal p-3 flex flex-col bg-orange-400">
                                    <NavLink className='nav-links' to="/">Home</NavLink>
                                    <NavLink className='nav-links' to="/allToys">All Toys</NavLink>
                                    {
                                        user?.email &&
                                        <div className='flex flex-col'>
                                            <NavLink className='nav-links mr-3' to="/myToys">My Toys</NavLink>
                                            <NavLink className='nav-links' to="/addToys">Add A Toy</NavLink>
                                        </div>
                                    }
                                    <NavLink className='nav-links' to="/blogs">Blogs</NavLink>
                                    {
                                        user?.email ? <div className='flex'>
                                            <button onClick={handleLogout} className='submit-button'>Logout</button>
                                        </div>
                                            : <button className='sign-up'><NavLink to="/login">Login</NavLink></button>
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="navbar-end hidden md:flex">
                        <MenuDropDown></MenuDropDown>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;