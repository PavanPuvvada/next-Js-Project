import { getBlogBySlug } from "../../libs/api";



export default async function enablePreview(req, res ){

    if(req.query.secret !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug){
        return res.status(401).json({message: "inavalid"});
    }
    const blog= await getBlogBySlug(req.query.slug);

    if (!blog) {
    return res.status(401).json({message: 'Invalid Slug!'})
  }
    // setPreviewData will set cookies into you browsert
  // __prerender_bypass __next_preview_data
  res.setPreviewData({message: "helloWorld"});
  res.writeHead(307, {Location: `/blogs/${blog.slug}`})
  return res.status(200).json({message: "Continue"});
  res.end();
}