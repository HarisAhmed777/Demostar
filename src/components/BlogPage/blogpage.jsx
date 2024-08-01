import React from 'react'
import cp1 from '../images/cp1.jpg';
import cp3 from '../images/cp3.jpg';

import './blogpage.css';
import { useNavigate } from 'react-router-dom';
function BlogPage(){
    const navigate = useNavigate();


    const blogs = [
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt dignissimos impedit? Recusandae harum at provident amet accusantium dicta corrupti, delectus rem officiis qui, pariatur nobis assumenda quae ipsum voluptate. Voluptas aut temporibus modi consequuntur maxime atque, consectetur cupiditate inventore porro quia excepturi assumenda possimus quam enim hic voluptates? Cum voluptates, architecto vitae nobis consequatur perferendis assumenda, exercitationem, est ipsam nulla itaque qui ut inventore iusto doloribus rem cupiditate iste explicabo excepturi consequuntur. Eum enim placeat iure cupiditate, mollitia ipsa. Praesentium voluptatibus delectus eius modi, fugit tempora nihil accusamus, consequatur nisi, iure facere recusandae incidunt? Voluptatum neque non cumque quod eum delectus impedit pariatur. Eum iusto quam aut obcaecati eligendi molestias nisi autem deleniti sit, fuga reprehenderit iure sunt quae dicta soluta commodi sequi. Ipsa rerum magni et sed! Dolores impedit consequuntur, minus earum, labore soluta ipsa porro, laborum in recusandae eius vitae. Odio esse ex quis voluptatum numquam nobis culpa id tenetur laborum fugiat. Blanditiis laborum aspernatur, vitae facilis corrupti obcaecati deserunt rem vero enim pariatur eaque quam soluta magnam, neque alias rerum quisquam, harum illo? Dignissimos laudantium aspernatur voluptatibus fuga reprehenderit laboriosam, sed, debitis, officia nemo vero ratione. Modi aspernatur minima autem ipsa ipsam accusamus qui. Nesciunt, sapiente!",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam culpa nesciunt, neque veritatis necessitatibus!",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae explicabo et placeat corporis ut modi illum, dolor odio officiis.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
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
    function handleblog(blog){
        navigate('/bloging',{state:{blog}})
    }
    return(
        <>
        <div className='paddingtop'>
        <div className=' container '>
            
            <h4 className='text-center mt-3 mb-4 fw-bold'>The Recent Blogs are </h4>
            <div className='row'>
            {
                blogs.map((value,blog)=>(
                    <div key={blog} className='col-lg-4 col-12 col-md-6 mb-4'>
                        <div className='card bloggcard'>
                            <img src={value.img} alt="" className='card-img' />
                            <p className='fw-bold'>{value.heading}</p>
                            <p>{value.para}</p>
                            <p className='fw-bold text-primary fp curso' onClick={()=>handleblog(value)}><u>{value.read}</u></p>
                            <div className='bg-secondary d-flex justify-content-around pt-3'>
                                <p>{value.typeis}</p>
                                <p className=''>{value.date}</p>
                            </div>

                        </div>
                        
                    </div>
                ))
            }
            </div>
        </div>
        </div>
           
        </>
    )
}

export default BlogPage;