
import React from 'react'

import ServiceCard from '../cards/ServiceCard'




const getServices = async () =>{
  const res = await fetch('https://e-commerce-nextjs-three-kohl.vercel.app/services/api/get-all')
  const services = res.json()
  return services;
}





const Services = async ()=> {




  // load dataset
const {services} = await getServices()


  return (
    <div>
      {
        // services.map((service) => (
        //   <ServiceCard service={service} key={service._id} />
        // ))



        services?.length > 0 &&   services?.map((service) => (
          <ServiceCard service={service} key={service._id} />
      ))



      }
    </div>
  )
};
export default Services;
