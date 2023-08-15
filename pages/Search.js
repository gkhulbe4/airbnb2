import Header from '@/components/Header'
import React from 'react'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import format  from 'date-fns/format'
import Infocard from '@/components/Infocard'

function Search({searchResults}) {

    const router = useRouter();

    const {location,startDate,endDate,guests} = router.query;

    const formattedStartDate = format(new Date(startDate),("dd MMMM yy"))
    const formattedEndDate = format(new Date(endDate),("dd MMMM yy"))
    const range = `${formattedStartDate} - ${formattedEndDate}`



  return (
    <div>
        <Header placeholder = {`${location} | ${range} | ${guests} guests`}/>

        <main className='flex '>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs '>300+ Stays - {range} - for {guests} guests</p>

                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                <div className='hidden  lg:inline-flex mb-5 text-gray-800 space-x-3 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More filters</p> 

                </div>
                {searchResults.map(({img,location,title,description,star,price,total}) => (
                     <Infocard
                     key={img}
                     img={img}
                     location={location}
                     description={description}
                     title={title}
                     star={star}
                     price={price}
                     total={total}
                     />
                ))}
            </section>

        </main>


        <Footer/>
    </div>
  )
}

export default Search

export async function getServerSideProps() 
{
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS")
    .then(res => res.json()); 

    return {
        props: {
            searchResults,
        },
    };
}