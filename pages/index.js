import { Row,Button } from 'react-bootstrap';

import PageLayout from './components/PageLayout';
import User from './components/User';
//import CardItem from './components/CardItem';
//import {useGetBlogs} from '/actions'
import { getAllBlogs  } from '../libs/api';
//import CardList from './components/CardList';
import FilterMenu from './components/FilterMenu';
import { useState } from 'react';
import { useGetBlogPages } from '../actions/pagination';
import PreviewAlert from './components/PreviewAlert';





export default function Home({blogs,preview}) {
  const [filter, setFilter] = useState({
    view:{list:0},
    datetimes:{asc:0}

  })


  // const {data: blogs ,error}=useGetBlogs(initialData);
  // loadMore: to load more data
  // isLoadingMore: is true whenever we are making request to fetch data
  // isReachingEnd: is true when we loaded all of the data, data is empty (empty array)
 
  const { pages,
  isLoadingMore,
  isReachingEnd,
loadMore} = useGetBlogPages({blogs,filter})
  
   
  
  return (
    <div>

      <PageLayout>
      {preview && <PreviewAlert/>}

        <User />
        <hr />
        <FilterMenu
      filter={filter}
      onChange={(option, value) => {
        console.log('value is' + value)
        setFilter({...filter, [option]: value});
          
        }} />

        <Row className="mb-5">
          {pages}

          {/* <Col md="10">
            <CardList />
          </Col> */}
          {/* { blogs?.map(blog=>
         !filter.view.list ?
         <Col key={`${blog.slug}-list`} md="9">
         <CardList title={blog.title}
            subtitle={blog.subtitle}
            datetime={blog.dateTime}
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
            datetime={blog?.dateTime}
            coverimage={blog?.coverimage}
            author={blog?.author}
            link={{
              href:'/blogs/[slug]',   
              as:`/blogs/${blog?.slug}`
            }}/>
          </Col>
        
              )
          } */}
        </Row>
        <div style={{textAlign: 'center'}}>

        <Button 
        onClick={loadMore}
        disabled={isReachingEnd || isLoadingMore}
        size = 'lg'
        variant= "outline-success">
         {isLoadingMore ? '...' : isReachingEnd? "No more Blogs": "More Blogs"}
        </Button>
          </div>



      </PageLayout>
      <h1>Hello World!</h1>
    </div>
  )
}

//this function is called when building our next.js files
// and tyhis staticProps never calls on client it always calls on server side only
// and it will provide props to our page
// it will create a StaticPage


export async function getStaticProps({preview=false}){
  console.log("called getStaticProps")
  const blogs =await getAllBlogs({offset:0,datetimes:'desc'});
  return{

    props:{
       blogs,preview
    }
  }
}


// }
// export async function getServerSideProps(){
//   console.log("called getStaticProps")
//   const randomNumber= Math.random();
//   const blogs =await getAllBlogs();
//   return{

//     props:{
//        blogs,
//        randomNumber
//     }
//   }

// }




