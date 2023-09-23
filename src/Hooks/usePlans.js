import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const usePlans = ()=>{
    const {user} = useAuth()
    const { data: plansData = [], refetch } = useQuery({
        queryKey: ['plans', user?.email],
        queryFn: async () => {            
            const res = await fetch(`https://subscribe-plan-server.vercel.app/plans`)
            return res.json()
        }        
    })
    return [plansData,refetch]
}
export default usePlans;