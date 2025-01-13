
import React from 'react'

import ServiceCard from '../cards/ServiceCard'
import { services } from '@/lib/services'
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
