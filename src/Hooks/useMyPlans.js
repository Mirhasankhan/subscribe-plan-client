import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const useMyPlans = ()=>{
    const {user} = useAuth()
    const { data: myPlansData = [], refetch } = useQuery({
        queryKey: ['plans', user?.email],
        queryFn: async () => {            
            const res = await fetch(`https://subscribe-plan-server.vercel.app/plans?email=${user?.email}`)
            return res.json()
        }        
    })
    return [myPlansData,refetch]
}
export default useMyPlans;