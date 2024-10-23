
import React, { useState } from 'react';
import cp1 from '../images/cp1.jpg';
import cp3 from '../images/cp3.jpg';
import './blogpage.css';
import { useNavigate } from 'react-router-dom';

function BlogPage() {
    const navigate = useNavigate();

    const blogs = [
        {
            heading: "School Excursions Made Exciting: Why Choose The Star Holiday for Your Next Trip",
            para: "Planning a school excursion can be a daunting task, but with The Star Holiday's specially curated school packages, it's an adventure worth looking forward to! Our trips blend fun with education, providing students with hands-on learning experiences. Students can enjoy interactive and insightful tours, whether it’s a historical site or a nature trail. Our comprehensive safety measures ensure every child has a memorable yet safe experience.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read: "Read More",
            typeis: "Adventure",
            date: "Mar 9",
            img: cp1
        },
        {
            heading: "College Trips Reimagined: Unleash Adventure and Learning with The Star Holiday",
            para:"College life isn’t complete without unforgettable trips. At The Star Holiday, we design the perfect college visit packages to combine fun, adventure, and learning. From exploring cultural hubs to industry-related tours, these trips are tailored to meet the interests of students and faculties alike. Whether it's a beach outing or trekking in the hills, we offer diverse experiences that cater to all fields of study and areas of interest.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: ". Industrial Visits: Bridging Classroom Knowledge with Real-World Experiences",
            para:"In today’s competitive academic environment, practical exposure is key. The Star Holiday provides industrial visit packages that give students an opportunity to see theory in action. We collaborate with top industries across various sectors, from technology and engineering to manufacturing and hospitality. Students gain insights into business processes, workflows, and cutting-edge innovations, bridging the gap between classroom knowledge and real-world application.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt dignissimos impedit? Recusandae harum at provident amet accusantium dicta corrupti, delectus rem officiis qui, pariatur nobis assumenda quae ipsum voluptate. Voluptas aut temporibus modi consequuntur maxime atque, consectetur cupiditate inventore porro quia excepturi assumenda possimus quam enim hic voluptates? Cum voluptates, architecto vitae nobis consequatur perferendis assumenda, exercitationem, est ipsam nulla itaque qui ut inventore iusto doloribus rem cupiditate iste explicabo excepturi consequuntur. Eum enim placeat iure cupiditate, mollitia ipsa. Praesentium voluptatibus delectus eius modi, fugit tempora nihil accusamus, consequatur nisi, iure facere recusandae incidunt? Voluptatum neque non cumque quod eum delectus impedit pariatur. Eum iusto quam aut obcaecati eligendi molestias nisi autem deleniti sit, fuga reprehenderit iure sunt quae dicta soluta commodi sequi. Ipsa rerum magni et sed! Dolores impedit consequuntur, minus earum, labore soluta ipsa porro, laborum in recusandae eius vitae. Odio esse ex quis voluptatum numquam nobis culpa id tenetur laborum fugiat. Blanditiis laborum aspernatur, vitae facilis corrupti obcaecati deserunt rem vero enim pariatur eaque quam soluta magnam, neque alias rerum quisquam, harum illo? Dignissimos laudantium aspernatur voluptatibus fuga reprehenderit laboriosam, sed, debitis, officia nemo vero ratione. Modi aspernatur minima autem ipsa ipsam accusamus qui. Nesciunt, sapiente!",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "School Picnic Meets Fun Packages: Where Learning ",
            para:"Looking for the perfect school picnic package? At The Star Holiday, we offer exciting and educational picnics that are much more than just a day out. With outdoor activities, guided tours, and interactive learning sessions, our school picnic packages are designed to foster team spirit, enhance learning, and encourage outdoor play. Locations include parks, zoos, and science museums, ensuring a balance of fun and education.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Why The Star Holiday is the Top Choice for College Picnics",
            para:"College picnics are about bonding, relaxation, and a break from the academic grind. At The Star Holiday, we craft engaging college picnic packages at picturesque locations such as beaches, riversides, and hills, perfect for creating memories with friends. Whether it's adventure sports, bonfire nights, or team-building activities, these packages offer a balance of excitement and relaxation for students to enjoy.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Interactive Learning with The Star Holiday’s Educational Visits",
            para:"Field trips with The Star Holiday go beyond textbooks. Our educational visit packages for schools and colleges are designed to offer students unique, hands-on learning opportunities. From visits to museums, wildlife sanctuaries, and planetariums, to cultural heritage sites, our trips enhance students’ understanding in a way that classroom lectures can’t. Every itinerary is crafted to align with the educational goals of the institution.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Corporate-Ready: Industrial Visit Packages for Colleges and Universities",
            para:"For engineering, business, and technology students, industrial visits are a must. The Star Holiday offers well-structured industrial visit packages to leading industries across sectors. Students are exposed to real-time business operations, production processes, and modern technologies. We arrange guided tours, Q&A sessions with industry experts, and hands-on learning to provide a well-rounded experience.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Perfect Day Out: The Star Holiday’s Group Picnic Packages",
            para:"Whether it’s a large group or a small team, our group picnic packages offer the perfect escape from daily routines. From scenic parks and beachside fun to adventure activities in the hills, The Star Holiday provides customized picnic plans that suit the unique needs of schools, colleges, and corporate teams. We take care of everything—transportation, food, games, and safety—so your group can focus on enjoying the day.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "The Star Holiday: Where Education Meets Fun for School and College Students",
            para:"At The Star Holiday, we understand that education should be more than just classroom learning. Our school and college packages offer the perfect mix of education, adventure, and fun. Whether it's a guided historical tour, a science-themed picnic, or an industry-related visit, our itineraries are designed to complement academic syllabi while keeping students engaged and entertained.",
            secondpars: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas distinctio, corporis aut ut suscipit eaque omnis vitae quam iusto cupiditate dolores ab? Mollitia numquam aliquam rerum et ea quaerat adipisci quis iste nostrum perferendis asperiores, sit repellat impedit consequatur pariatur. Atque ratione obcaecati ducimus consectetur. Nam quam quod perferendis cumque.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        },
        {
            heading: "Customized Packages for School and College Tours: Let The Star Holiday Plan Your Perfect Trip",
            para:"Each educational institution has unique requirements when it comes to planning a trip. At The Star Holiday, we offer customized tour packages for schools and colleges that cater to the specific educational objectives of each group. Whether you want a focus on cultural exposure, hands-on learning, or adventure-based team-building activities, our expert planners work closely with institutions to design the ideal itinerary.",
            read:"Read More",
            typeis : "Adventure",
            date : "Mar 9",
            img : cp1
        }
    ];

    const getExcerpt = (text) => {
        const words = text.split(' ');
        if (words.length <= 50) {
            return text;
        }
        return words.slice(0, 50).join(' ') + '...';
    };

    function handleblog(blog) {
        navigate('/bloging', { state: { blog } });
    }

    return (
        <>
            <div className='paddingtop'>
                <div className='container'>
                    <h4 className='text-center mt-3 mb-4 fw-bold'>The Recent Blogs are</h4>
                    <div className='row'>
                        {blogs.map((value, index) => (
                            <div key={index} className='col-lg-4 col-xl-3 col-12 col-md-6 mb-4'>
                                <div className='card bloggcard'>
                                    <img src={value.img} alt="" className='card-img' />
                                    <p className='fw-bold'>{value.heading}</p>
                                    <p>
                                        {getExcerpt(value.para)}
                                        <span
                                            className='fw-bold text-primary fp curso'
                                            onClick={() => handleblog(value)}
                                        >
                                            <u> Read More</u>
                                        </span>
                                    </p>
                                    <div className='bg-secondary d-flex justify-content-around pt-3'>
                                        <p>{value.typeis}</p>
                                        <p className=''>{value.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogPage;
