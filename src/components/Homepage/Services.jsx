
import React from 'react'

import ServiceCard from '../cards/ServiceCard'
// import { services } from '@/lib/services'
import { getServices } from '@/services/getServices'
const Services = async ()=> {




  // load dataset
const {services} = await getServices()
// const data = await getServices()
// console.log(data.services)

  // console.log(services)
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
