import PageLayout from '../components/PageLayout';

import { getBlogBySlug ,getAllBlogs } from '../../libs/api';

 import {useRouter} from 'next/router'
 import {Row, Col} from 'react-bootstrap'
 import BlogDetailss from '../components/BlogDetailss';
 import BlogContent from '../components/BlogContent';
 import { urlFor } from '../../libs/api';
import PreviewAlert from '../components/PreviewAlert';
import moment from 'moment';
 


const BlogDetails=({blog,preview})=>{

    console.log("blog= " +blog.slug)
    return(
        
        
        <PageLayout className="blog-detail-page">
            <h1> Hello Welcome to- {blog?.slug} </h1>
           
  <Row>
    <Col md={{ span: 10, offset: 1 }}>
      {preview && <PreviewAlert/>}
    
     <BlogDetailss
     
     title={blog.title}
     subtitle={blog.subtitle}
     coverimage={
       urlFor(blog.coverimage)
       .height(300)
       .crop('center')
       .fit('clip')
       .url()}
     author={blog.author}
     datetimes={moment(blog.datetimes).format('LLL')}
     />
      <hr/>
      <BlogContent content={blog.content} />
      {/* Blog Content Here */}
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </Col>
  </Row>
</PageLayout>
    )
}


export async function getStaticProps({params,preview =false, previewData}) {
  console.log('preview', preview)
  console.log('previewData', previewData)
    
  // Todo: pass preview to getBlogBySlug and fetch draft blog
    const blog = await getBlogBySlug(params.slug,preview);
    return {
      props: {blog, preview}
    }
  }

  export async function getStaticPaths(){
      const blogs= await getAllBlogs();
      const paths= blogs.map((b)=>{
        
          return{
            
              params: {slug:b.slug}
          }
      })
      return{
          paths,
          fallback: false
      }
  }
  
export default BlogDetails