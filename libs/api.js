import sanityClient,{previewClient} from './Sanity'
import  imageUrlBuilder  from '@sanity/image-url'

const blogfields= `
title,
subtitle,
'slug': slug.current,
datetimes,
'author': author->{name, 'avatar':avatar.asset->url,date},
coverimage,
`

const builder = imageUrlBuilder(sanityClient)
const getClient=preview=> (preview ? previewClient: sanityClient)

export function urlFor(source){
    return builder.image(source);
}

// offset = how many data you want to skip, limit = how many date you want to fetch
export async function getAllBlogs({offset=0,datetimes='desc'}={offset:0, datetimes:'desc'}){
    const results=await sanityClient.fetch(`*[_type=="blog"] |order (datetimes  ${datetimes}) {${blogfields}}[${offset}...${offset + 6}]`);
    return results;
}


export async function getBlogBySlug(slug,preview){
    const currentClient= getClient(preview)
    console.log(preview)
    console.log(currentClient)
    const result= await currentClient.fetch(`*[_type == "blog" && slug.current == $slug] 
    
    {
        ${blogfields}
        content[]{..., 'asset':asset->}
    }`, {slug})
    .then(res => preview ? (res?.[1] ? res[1] : res[0]) : res?.[0])
    //.then(res => preview ? res?.[1] : res?.[0])
    // .then(res=>res?.[0])
    return result;
}