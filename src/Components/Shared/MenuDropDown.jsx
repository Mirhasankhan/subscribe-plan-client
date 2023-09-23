import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { becomeBuyer, becomeHost } from "../../API/auth";

const MenuDropDown = () => {
    const { user, logOut, role, setRole } = useAuth()
    const [open, setOpen] = useState(false)

    const handleLogout = () => {
        logOut()
            .then(() => {
                setRole(null)
            })
            .catch(() => { })
    }

    
    const handleHost = () => {
        becomeHost(user?.email)
        setRole('host')
    }
    const handleBuyer = () => {
        becomeBuyer(user?.email)
        setRole('buyer')
    }
    return (
        <div>
            {
                user?.email ? <div className='relative'>
                    <img onClick={()=>setOpen(!open)} title={user.displayName} className='cursor-pointer h-12 w-12 rounded-full mr-3 border-2 border-blue-400' src={user.photoURL} alt="" />
                    {
                        open && <div className="absolute bg-gray-300 p-4 rounded-md top-14">
                            <button onClick={handleLogout} className='sign-up'>Logout</button>
                            {
                            role == 'host' && <button onClick={handleBuyer} className="text-green-400 font-semibold sign-up mt-4">Switch Buying</button>
                        }
                        {
                            role == 'buyer' && <button onClick={handleHost} className="text-green-400 font-semibold sign-up mt-4">Switch Selling</button>
                        }
                        </div>
                    }
                </div>
                    : <button className='sign-up'><NavLink to="/login">Login</NavLink></button>
            }
        </div>
    );
};

export default MenuDropDown;