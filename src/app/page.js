
import React from 'react'
import { getSummaries } from "@/data/loaders";
import { getMovies} from "@/data/loaders";
import { PaginationComponent } from "../components/custom/PaginationComponent";
import { Search } from "../components/custom/Search";
import Image from 'next/image';




export default async function Home({ searchParams }) {
  const runtime = 'edge'
    // this will gran our search params from the URL that we will pass to our getSummaries function
  const query = searchParams?.query ?? "";
  const currentPage = Number(searchParams?.page) || 1;
  const { data, meta } = await getSummaries(query,currentPage, runtime);
  const pageCount = meta.pagination.pageCount;
  console.log(data)
 
  
 

                         return (
                           <>
                            <Search />
                             <span>ผลลัพย์: {query}</span>
                            <div>
                             {data.map((movie) => (
                                 <div key={movie.id}>  
                                    <Image className='w-[270px] h-[350px] shadow-sm rounded-md mt-2 customimage'
                                         src={`https://test.mixnung999.com${movie.attributes.Image.data.attributes.url}`}
                                         alt={movie.attributes.Image.data.attributes.name}
                                         height="400"
                                         width="400"
                                         blurDataURL={`https://test.mixnung999.com${movie.attributes.Image.data.attributes.url}`}
                                         placeholder="blur"/>                      
                                <div className='flex flex-col mt-6 customtex'>
                                      <h3>{movie.attributes.Title}</h3>
                                  </div>
                                </div>
                       ))}
              
 
    </div><PaginationComponent pageCount={pageCount} />


                      
                        
                    
    </>
   
  );
};


