import useSWR from 'swr';


const fetcher =url => fetch(url).then(res=>res.json())


export const useGetHello =() =>useSWR('/api/hello',fetcher)

export const useGetBlogs=({offset,filter},initialData)=>{
    return useSWR(
        `/api/blogs?offset=${offset || 0}&datetimes=${filter.datetimes.asc ? 'asc':'desc'}`
        ,fetcher ,
        { initialData })
}



