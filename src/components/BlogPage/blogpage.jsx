import React from 'react'
import cp1 from '../images/cp1.jpg';
import './blogpage.css';
function BlogPage(){
    const blogs = [
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        }
    ]
    return(
        <>
        <div className='pt-5 container'>
            
            <h4 className='text-center fw-bold'>The Recent Blogs are </h4>
            <div className='row'>
            {
                blogs.map((value,index)=>(
                    <div key={index} className='col-lg-4 col-12 col-md-6 mb-4'>
                        <div className='card'>
                            <img src={value.img} alt="" className='card-img' />
                            <p className='fw-bold'>{value.heading}</p>
                            <p>{value.para}</p>
                            <p className='fw-bold text-primary fp'><u>{value.read}</u></p>
                            <div className='bg-secondary d-flex justify-content-around'>
                                <p>{value.typeis}</p>
                                <p className=''>{value.date}</p>
                            </div>

                        </div>
                        
                    </div>
                ))
            }
            </div>
        </div>
           
        </>
    )
}

export default BlogPage;