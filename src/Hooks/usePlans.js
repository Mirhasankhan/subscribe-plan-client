import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const usePlans = ()=>{
    const {user} = useAuth()
    const { data: plansData = [], refetch } = useQuery({
        queryKey: ['plans', user?.email],
        queryFn: async () => {            
            const res = await fetch(`http://localhost:5000/plans`)
            return res.json()
        }        
    })
    return [plansData,refetch]
}
export default usePlans;