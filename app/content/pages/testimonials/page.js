import React from 'react'
import Testimonials from './testimony'
import { db } from '../../../firebase.config';
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

async function getData() {
  const testimonialsCollection = collection(db, 'testimonials');
  const q = query(
    testimonialsCollection,
    where('star_rating', '>=', 4),
    orderBy('star_rating', 'desc'),
    orderBy('timestamp', 'desc'), // Sort by timestamp in descending order
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => doc.data());
  return data;
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
