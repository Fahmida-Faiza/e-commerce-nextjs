
import React from 'react'
import { services } from '../../../lib/services'
import ServiceCard from '../cards/ServiceCard'
export default function Services() {
  // console.log(services)
  return (
    <div>
      {
        services.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))
      }
    </div>
  )
}
