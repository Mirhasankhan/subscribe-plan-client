import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveUser } from '../../API/auth';
import useAuth from '../../Hooks/useAuth';

const SocialLogin = () => {
    const { googleSignIn} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedInUser = result.user;
                saveUser(loggedInUser)
                toast.success('LoggedIn successfully', {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })
                navigate(from, { replace: true })
            })

            .catch((error) => {
                toast.error(error.message, {
                    position: 'top-right',
                    style: { backgroundColor: 'black', color: 'white' }
                })
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning w-full">Login With Google</button>
        </div>
    );
};

export default SocialLogin;