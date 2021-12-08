import { useEffect } from 'react'
import {useSWRPages} from 'swr'
 import CardItem from '../pages/components/CardItem'
 import {useGetBlogs} from '/actions'
 import CardList from '../pages/components/CardList'

 import { Col } from 'react-bootstrap';
import CardItemBlank from '../pages/components/CardItemBlank'
import CardListBlank from '../pages/components/CardListBlank'
import moment from 'moment'


 export const useGetBlogPages=({blogs,filter})=>{

    useEffect(()=>{
      window.__pagination__init= true;
    },[])
     return useSWRPages('index-page',
     ({offset, withSWR})=>{
    let initialData = !offset && blogs;

    if(typeof window !== 'undefined'&&window.__pagination__init){
      initialData=null;
    }
        const { data:paginatedBlogs }= withSWR(useGetBlogs({offset,filter}, initialData))
        console.log(offset)

        if(!paginatedBlogs){ 
          return  Array(3).fill(0).map((_,i)=>
          filter.view.list?
          <Col key={i} md="9">
            <CardListBlank/>
            </Col>
            :
            <Col key={`${i}-item`} md="4">
            <CardItemBlank/>
            </Col>
          )
        }
        console.log( +!filter.view.list)

        return  paginatedBlogs?.map(blog=>
            filter.view.list?

            <Col key={`${blog.slug}-list`} md="9">
            <CardList title={blog.title}
               subtitle={blog.subtitle}
               datetimes={moment(blog.datetimes).format('LLLL')}
               coverimage={blog.coverimage}
               author={blog.author}
               link={{
                 href:'/blogs/[slug]',   
                 as:`/blogs/${blog.slug}`
               }}/>
            </Col>
            :
               <Col key={blog?.slug} md="4">
   
               <CardItem  title={blog?.title}
               subtitle={blog?.subtitle}
               datetimes={moment(blog.datetimes).format('LLLL')}
               coverimage={blog?.coverimage}
               author={blog?.author}
               link={{
                 href:'/blogs/[slug]',   
                 as:`/blogs/${blog?.slug}`
               }}/>
             </Col>
           
                 )

     },
     (SWR, index)=>{
       if(SWR.data && SWR.data.length===0){return null}
       return (index +1)*6;
     },
     [filter]
     )
 }