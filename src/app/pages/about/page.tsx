// "use client"
// import React from 'react';
// import Founder from './founder/page';
// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-4xl font-bold mb-4">About Us</h1>
//         <p className="mb-6 text-lg">
//           Welcome to our company! We are committed to delivering the best services and solutions for our clients.
//         </p>

//         <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-4">
//           <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
//             <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
//             <p>
//               Founded in [Year], our journey started with a mission to make a difference in the industry. We've grown
//               ever since with dedication and hard work.
//             </p>
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
//             <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
//             <p>
//               Our mission is to continuously innovate and provide high-quality solutions that meet our clients'
//               needs and expectations.
//             </p>
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
//             <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
//             <p>
//               Our team comprises passionate professionals who work collaboratively to achieve the best results
//               for our clients.
//             </p>
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
//             <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
//             <p>
//               Integrity, commitment, and innovation are at the core of our business. We believe in doing what's
//               right and pushing boundaries to deliver the best.
//             </p>
//           </div>
//         </section>
//       </div>
//       <Founder/>
//     </div>
//   );
// };

// export default About;




// // // // // "use client"
// // // // // import { useState } from "react"

// // // // // const page = () => {
// // // // //  const [count, setCount] = useState(0)
// // // // //   return (
// // // // //     <div>
// // // // //       <button onClick={()=>setCount(count +1)}>count {count}</button>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default page

// // // // // "use client"
// // // // // import React, { useState } from 'react'

// // // // // function page() {
// // // // //   const initialValue= 0
// // // // //   const [count, setCount]  =useState(initialValue)
// // // // //   return (
// // // // //     <div>
// // // // //       <h1>count {count}</h1>
// // // // //       <button onClick={()=>setCount(initialValue)}>Reset</button>
// // // // //       <br />
// // // // //       <button onClick={()=>setCount(count +1)}>Increament</button>
// // // // //       <br />
// // // // //       <button onClick={()=>setCount(count-1)}>Decreament</button>
// // // // //       <br />
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default page



// // // // // "use client"
// // // // //  import React, { useState } from 'react'

// // // // //  function page() {
// // // // //     const initialValue= 0
// // // // //     const [count, setCount]  =useState(initialValue)


// // // // //     function IncreamentFive(){
// // // // //       for(let i=0;i<5;i++)
// // // // //         setCount(prev=> prev+1)      
// // // // //     }
// // // // //     return (
// // // // //       <div>
// // // // //         <h1>count {count}</h1>
// // // // //         <button onClick={()=>setCount(initialValue)}>Reset</button>
// // // // //         <br />
// // // // //         <button onClick={()=> setCount(prev=> prev+1) }>Increament</button>
// // // // //         <br />
// // // // //         <button onClick={()=> setCount(prev=> prev -1) }>Decreament</button>
// // // // //         <br />
// // // // //         <button onClick={IncreamentFive}>Icreamnet 5</button>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //  export default page





// // // // // "use client"
// // // // // import React, { useEffect, useState } from 'react'

// // // // // const page = () => {
// // // // //   const [count, setCount] = useState(0)
// // // // //   const [name,setName] = useState("")
// // // // //   useEffect(() => {
// // // // //     console.log("update");
    
// // // // //     document.title = `you click ${count} times`
// // // // //   },[count])
// // // // //   return (
// // // // //     <div>
// // // // //       <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} id="" />
// // // // //       <button onClick={() => setCount(count + 1)}>count: {count}</button>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default page






// // // // // "use client";
// // // // // import React, { useEffect, useState } from "react";
// // // // // import axios from "axios";

// // // // // // Define the structure of a Post
// // // // // interface Post {
// // // // //   id: number;
// // // // //   title: string;
// // // // //   body: string;
// // // // //   userId: number;
// // // // // }

// // // // // function Page() {
// // // // //   const [posts, setPosts] = useState<Post[]>([]);

// // // // //   useEffect(() => {
// // // // //     axios
// // // // //       .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
// // // // //       .then((res) => {
// // // // //         console.log(res);
// // // // //         setPosts(res.data);
// // // // //       })
// // // // //       .catch((error) => {
// // // // //         console.log(error);
// // // // //       });
// // // // //   }, []);

// // // // //   return (
// // // // //     <div>
// // // // //       {posts.map((post) => (
// // // // //        <ul key={post.id}>
// // // // //         <li>{post.userId}</li>
// // // // //         <li>{post.title}</li>
// // // // //         <li>{post.body}</li>
// // // // //        </ul>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Page;





// // // // // "use client"
// // // // // import React, { useRef } from 'react'
// // // // // function page() {
// // // // //   const inputRef = useRef(null)


// // // // //   const focusInput =()=>{
// // // // //     inputRef.current.focus()
// // // // //   }
// // // // //   return (
// // // // //     <div>
// // // // //     <input ref={inputRef} type="text" placeholder="Click button to focus me" />
// // // // //     <button onClick={focusInput}>Focus Input</button>
// // // // //   </div>
// // // // //   )
// // // // // }

// // // // // export default page



// // // // "use client"
// // // // import React, { useEffect, useRef, useState } from 'react'

// // // // function page() {
// // // //   const [count , setCount] =  useState(0)
// // // //   const prevCount = useRef(count)
// // // //   useEffect(()=>{
// // // //     prevCount.current =count
// // // //   },[count])
// // // //   return (
// // // //     <div>
// // // //       <p>current count: {count}</p>
// // // //       <p>previous count: {prevCount.current}</p>
// // // //       <button onClick={()=>setCount(count +1)}>Increament</button>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default page




// // // "use client"

// // // import React, { useState } from 'react'

// // // function page() {
// // //   const [count,setCount] = useState(0)
// // //   const Increament =()=>{
// // //     setCount(count +1)
// // //   }
// // //   return (
// // //     <div>
// // //       <p>count: {count}</p>
// // //       <button onClick={Increament}>click</button>
// // //     </div>
// // //   )
// // // }

// // // export default page






// // // "use client"

// // // import { modelNames } from 'mongoose'
// // // import React, { useEffect, useRef, useState } from 'react'

// // // function page() {
// // //   const modalRef =  useRef<HTMLDivElement | null>(null)
// // //   const [isModal,setModal] = useState<boolean>(false)

// // //   const handleClick = (event:MouseEvent)=>{
// // //     if(modalRef.current && !modalRef.current.contains(event.target as Node)){
// // //       setModal(false)
// // //     }
// // //   }

// // //   useEffect(()=>{
// // //     document.addEventListener("mousedown",handleClick)
// // //     return ()=>{
// // //       document.addEventListener("mousedown",handleClick)
// // //     }
// // //   },[])
// // //   return (
// // //     <div>
// // //      <button onClick={()=>setModal(true)}>Open Modal</button>
// // //      {
// // //       isModal && (
// // //         <div ref={modalRef} style={{ border: '1px solid black', padding: '20px', marginTop: '10px' }}>
// // //         <h3>Modal Content</h3>
// // //         <p>Click outside this box to close it.</p>
// // //       </div>
// // //       )
// // //      } 
// // //     </div>
// // //   )
// // // }

// // // export default page


// // "use client"
// // import React, { useState, useRef, useEffect } from 'react';

// // const TrackPreviousInput: React.FC = () => {
// //   const [text, setText] = useState<string>('');
// //   const previousText = useRef<string>('');

// //   useEffect(() => {
// //     previousText.current = text;
// //   }, [text]);

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         value={text}
// //         onChange={(e) => setText(e.target.value)}
// //         placeholder="Type something"
// //       />
// //       <p>Current Text: {text}</p>
// //       <p>Previous Text: {previousText.current}</p>
// //     </div>
// //   );
// // };

// // export default TrackPreviousInput;












import React from 'react'
import Image from 'next/image'
import Founder from './founder/page'
import Progress from './progress/page'
import Services from './services/page'

function About() {
  return (
    <section>
    <div className="container mx-auto px-3 mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className='mt-24'>
          <h1 className="sm:text-5xl text-4xl font-semibold text-gray-800">Give Your Team The <br />Design Mindset & Tools</h1>
          <p className='mt-4 text-gray-600'>Create a best strategic tool, share it with your team and ensure it’s on track with intuitive dashboards. Simple enough with the flexibility Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="bg-gray-400 relative"> 
          <Image 
            src="/assets/about.jpg"
            alt="Design Mindset"
            layout="responsive" 
            width={600}  
            height={400} 
          />
        </div>
      </div>
    </div>
    

    <div className="bg-green-500 bg-opacity-20 py-14 mt-24">
    <div>
    <div className='container'>
      <p className='text-center text-2xl text-gray-600'>We’re changing how product managers, developers, and data scientists plan, track, and govern analytics across organizations. Before Avo, teams were forced to choose between product delivery speed and reliable insights.</p>
      <div className='flex justify-center mt-6'><Founder/></div>
    </div>


    <div className="container mx-auto my-24 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className='text-2xl font-bold'>Who we are?</h2>
      <p className='text-gray-600 my-4'>We started in 2018 because we believe we can change the way organizations use data to make better decisions for their customers. We’ve been blown away by the impact BI has had on data quality and developer productivity for our customers.</p>
      <p className='text-gray-600 my-4'>From startups to consumer it’s been incredible to see our product fundamentally change the way PMs, devs and data scientists collaborate to track and govern their analytics.</p>
    </div>
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className='text-2xl font-bold'>Our mission</h2>
      <p className='text-gray-600 my-4'>Companies have never had to understand their customers better or faster. Consumers choose the product with the best experience and companies can’t afford to stall product decisions while waiting days or weeks for answers from a centralized BI team.</p>
      <p className='text-gray-600 my-4'>The industry gold standard has become to decentralize business intelligence, so that every team is autonomous in making data-driven decisions quickly.</p>
    </div>
  </div>
</div>

   </div>

   <Progress/>
   <Services/>
    </div>
   
    </section>
  )
}

export default About


