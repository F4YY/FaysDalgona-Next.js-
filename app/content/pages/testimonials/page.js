import React from 'react'
import Testimonials from './testimony'

async function getData() {
  const res = await fetch('https://fays-dalgona.onrender.com/Testimonials?star_rating_gte=4&_sort=id&_order=desc')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Testimony() {
  const data = await getData()
  return (
    <Testimonials testies={data} />
  )
}
