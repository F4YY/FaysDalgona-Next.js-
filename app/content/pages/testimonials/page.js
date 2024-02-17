import React from 'react'
import Testimonials from './testimony'
import { db } from '../../../firebase.config';
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

async function getData() {
  const testimonialsCollection = collection(db, 'testimonials');
  const q = query(
    testimonialsCollection,
    orderBy('timestamp', 'desc')
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => doc.data());
  // Filter data where star_rating is greater than or equal to 4
  const filteredData = data.filter(item => item.star_rating >= 4);
  return filteredData;
}

// async function getData() {
//   const res = await fetch('https://fays-dalgona.onrender.com/Testimonials?star_rating_gte=4&_sort=id&_order=desc')
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }
export default async function Testimony() {
  const data = await getData()
  return (
    <Testimonials testies={data} />
  )
}
