// "use server"

import axios from "axios"



export const getQoute = async() => {

    try {
        const {data}  = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness',{
            headers:{
                "X-Api-Key":process.env.NEXT_PUBLIC_API_KEY
                    }
        }
    
    
    
        )
        console.log(data)
        return data as Qoute[];
        
    } catch (error) {

        console.error('Error fetching quote:', error);
        throw error;
        
    }
    

    

    
    
}