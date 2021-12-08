
import BlockContent from '@sanity/block-content-to-react';
import Highlights from './Highlights';
import { urlFor } from '../../libs/api';

const serializers ={
    types:{
       code: ({node:{language,code,filename}}) => {
       
       return (
           <Highlights language={language}>
               {code}
               <div className= "code-filename">{filename}</div>
           </Highlights>
         )
       },
       image: ({node:{asset,alt,position = 'center'}})=>{
           let style={}; 
           if(position==='right'){
            style.float=position
            style.marginLeft='40px'
           }
           if(position==='left'){
            style.float=position
            style.marginRight='40px'
           }
           
           return(
               <div className ="blog-image" style={{...style}}>
                   <img src={urlFor(asset).height(280).fit('max').url()}/>
                   <div className = "image-alt">{alt}</div>
               <h1>This is My Image Blog</h1>
               </div>
           )
       }
    }
}



const BlogContent = ({content})=>
    <BlockContent
      imageOptions ={{w:320, h:240, fit:'max'}}
      serializers= {serializers}
      blocks={content}
      />
export default BlogContent