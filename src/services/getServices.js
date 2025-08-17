 // load the database
export const getServices = async() =>{
    const res = await fetch('https://e-commerce-nextjs-three-kohl.vercel.app/services/api/get-all')
    const services = res.json()
    return services;
}



// ////////details show
export const getServicesDetails = async(id) =>{
    const res = await fetch(`https://e-commerce-nextjs-three-kohl.vercel.app/services/api/${id}`)
    const service = res.json()
    return service;
}



