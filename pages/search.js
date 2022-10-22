import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import format from 'date-fns/format'
import InfoCard from '../components/InfoCard'



function Search({searchResults}) {
   
    

  const router=useRouter()
 
//   const emma=format(new Date(router.query.startDate),'MM/dd/yyyy')
//   const ama=format(new Date(router.query.endDate),'MM/dd/yyyy')
//   const range=`${emma}-${ama}`
//   console.log(router.query.startDate);
// //   ES6 DESTRUCTURING


  


  const formattedStartDate=format(new Date(router.query.startDate),' dd MMMM yy')
  const formattedEndDate=format(new Date(router.query.endDate),'dd MMMM yy')
  const range=`${formattedStartDate} to ${formattedEndDate}`
  
  return (
    <div>
      <Header placeholder={`${router.query.location} | ${range} | ${router.noOfGuests} guests`}  />
      <p className='text-xs'>300+{range} Stays for {router.query.noOfGuests} guests</p>
              <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {router.query.location}</h1> 
          
              <div className='hidden md:inline-flex mt-2 space-x-3 text-gray-800 whitespace-nowrap'>
                  <p className='button'>Cancellation Flexibility</p>
                  <p className='button'>Type of Place</p>
                  <p className='button'>Price</p>
                  <p className='button'>More Filters</p>
              </div>
           
      <main>
             
        <section className=' flex-grow pt-14 px-6'>
        
            <div className='flex flex-col'>
                {searchResults.map(item=>(
                    <InfoCard 
                    key={item.img}
                    img={item.img}
                    location={item.location}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    total={item.total}
                    star={item.star}
                    
                    />
                ))}
            </div>  
          
        
        </section>

      </main>

      <Footer/>
    </div>
  )
}

export default Search

export async function getServerSideProps(){
    const searchResults= await fetch('https://www.jsonkeeper.com/b/5NPS').
    then(res=>res.json())
    return{
        props:{
            searchResults,
        }
    }
}
