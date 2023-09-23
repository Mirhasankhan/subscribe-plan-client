import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const useMySubscriptions = ()=>{
    const {user} = useAuth()
    const { data: mySubsriptions = [], refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {            
            const res = await fetch(`https://subscribe-plan-server.vercel.app/payments?email=${user?.email}`)
            return res.json()
        }        
    })
    return [mySubsriptions,refetch]
}
export default useMySubscriptions;