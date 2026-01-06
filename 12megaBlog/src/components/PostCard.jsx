import { forwardRef } from "react";
import {Link} from 'react-router'
import {service} from "../appwrite/config.js"

const PostCard=forwardRef(function PostCard({
    $id,title,featuredImage
},ref){

    return(
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <div>
                        <img src={service.getFilePreview(featuredImage)} alt={title} className="rounded-xl" />

                    </div>
                    <h2 className="text-xl font-bold">{title}</h2>
                </div>
            </div>
        </Link>
    )
})

export default PostCard;