import React from "react";
import './Newsandtips.css';
import cp1 from '../images/cp1.jpg';
import cp2 from '../images/cp2.avif';
import cp3 from '../images/cp3.jpg';
import profile from '../images/profile.avif';
import { useNavigate } from "react-router-dom";
const newstips = [
    {
        img: cp1,
        title: "Ultimate Travel guide",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sit natus, illum itaque fugiat quas repellat? Rerum in officiis cupiditate? Praesentium qui ipsam beatae dolores illum quis quasi alias fuga tempora eligendi esse suscipit molestiae error minus inventore debitis quia cupiditate adipisci aperiam itaque labore, accusantium possimus. Exercitationem quidem dignissimos aut id voluptates explicabo aperiam debitis, quibusdam minima autem laudantium velit, quam fuga culpa iure sed rem eaque ex reprehenderit laborum voluptatibus fugiat iste. Accusantium sed placeat dolorem praesentium, omnis sunt est quidem animi autem doloribus tenetur ex voluptatibus perferendis unde error ea maxime maiores sapiente ab minus numquam at. Minus ipsa autem nostrum enim aspernatur aut explicabo quae illum dignissimos excepturi. Possimus aliquam, omnis repellendus accusamus voluptatum voluptatem sequi aut similique voluptatibus veritatis totam adipisci blanditiis non praesentium iusto molestias dolores perferendis saepe sed obcaecati quibusdam beatae velit? Sint dolor, voluptatum, necessitatibus a impedit soluta voluptate aliquam voluptatibus esse ratione exercitationem nemo facilis molestiae illum illo dicta officiis, quibusdam itaque consectetur doloremque. Labore quam libero, porro quis minus rem deserunt! Quod obcaecati molestias voluptatum ad minima illo. Aperiam cupiditate dolor soluta, corporis repellat eum eligendi mollitia sint culpa minima nihil qui maxime autem nam quasi sequi repellendus error aliquid.",
        date:"18 sep 2024",
        time:"6mins",
        comments:"38 comments",
        name:"Haris"
    },
    {
        img: cp2,
        title: "Mountain Adventure Retreat",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sit natus, illum itaque fugiat quas repellat? Rerum in officiis cupiditate? Praesentium qui ipsam beatae dolores illum quis quasi alias fuga tempora eligendi esse suscipit molestiae error minus inventore debitis quia cupiditate adipisci aperiam itaque labore, accusantium possimus. Exercitationem quidem dignissimos aut id voluptates explicabo aperiam debitis, quibusdam minima autem laudantium velit, quam fuga culpa iure sed rem eaque ex reprehenderit laborum voluptatibus fugiat iste. Accusantium sed placeat dolorem praesentium, omnis sunt est quidem animi autem doloribus tenetur ex voluptatibus perferendis unde error ea maxime maiores sapiente ab minus numquam at. Minus ipsa autem nostrum enim aspernatur aut explicabo quae illum dignissimos excepturi. Possimus aliquam, omnis repellendus accusamus voluptatum voluptatem sequi aut similique voluptatibus veritatis totam adipisci blanditiis non praesentium iusto molestias dolores perferendis saepe sed obcaecati quibusdam beatae velit? Sint dolor, voluptatum, necessitatibus a impedit soluta voluptate aliquam voluptatibus esse ratione exercitationem nemo facilis molestiae illum illo dicta officiis, quibusdam itaque consectetur doloremque. Labore quam libero, porro quis minus rem deserunt! Quod obcaecati molestias voluptatum ad minima illo. Aperiam cupiditate dolor soluta, corporis repellat eum eligendi mollitia sint culpa minima nihil qui maxime autem nam quasi sequi repellendus error aliquid.",
        date:"18 sep 2024",
        time:"6mins",
        comments:"38 comments",
        name:"Haris"

    },
    {
        img: cp3,
        title: "Desert Safari and Camping",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sit natus, illum itaque fugiat quas repellat? Rerum in officiis cupiditate? Praesentium qui ipsam beatae dolores illum quis quasi alias fuga tempora eligendi esse suscipit molestiae error minus inventore debitis quia cupiditate adipisci aperiam itaque labore, accusantium possimus. Exercitationem quidem dignissimos aut id voluptates explicabo aperiam debitis, quibusdam minima autem laudantium velit, quam fuga culpa iure sed rem eaque ex reprehenderit laborum voluptatibus fugiat iste. Accusantium sed placeat dolorem praesentium, omnis sunt est quidem animi autem doloribus tenetur ex voluptatibus perferendis unde error ea maxime maiores sapiente ab minus numquam at. Minus ipsa autem nostrum enim aspernatur aut explicabo quae illum dignissimos excepturi. Possimus aliquam, omnis repellendus accusamus voluptatum voluptatem sequi aut similique voluptatibus veritatis totam adipisci blanditiis non praesentium iusto molestias dolores perferendis saepe sed obcaecati quibusdam beatae velit? Sint dolor, voluptatum, necessitatibus a impedit soluta voluptate aliquam voluptatibus esse ratione exercitationem nemo facilis molestiae illum illo dicta officiis, quibusdam itaque consectetur doloremque. Labore quam libero, porro quis minus rem deserunt! Quod obcaecati molestias voluptatum ad minima illo. Aperiam cupiditate dolor soluta, corporis repellat eum eligendi mollitia sint culpa minima nihil qui maxime autem nam quasi sequi repellendus error aliquid.",
        date:"18 sep 2024",
        time:"6mins",
        comments:"38 comments",
        name:"Haris"

    }
];

function Newsandtips(){
    const navigate = useNavigate();
    function handlenews(news){
        navigate('/seperatenews',{state:{news}})
    }
    return(
        <>
            <div className="container  mt-5 mb-5">
                <div  className="d-flex ms-4 justify-content-between">
                    <div>
                        <h3 className="fw-bold newsheading mb-3">News,Tips & Guides</h3>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, maxime.</p>
                    </div>
                    <div>
            
                    </div>
                </div>
                <div className="cards-container">
                {newstips.map((pkg, index) => (
                    <div key={index} className="card ms-3">
                        <img className="cardimg" src={pkg.img} alt="Card image cap"/>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <p>{pkg.date}</p>
                                <p>{pkg.time}</p>
                                <p>{pkg.comments}</p>

                            </div>
                            <h5 className="card-title">{pkg.title}</h5>
                            <div className="d-flex justify-content-between">
                                <div>
                                <img src={profile}alt="" className="newstipsimg" />
                                <p className="d-inline fw-bold">{pkg.name}</p>
                                </div>
                                <div>
                                <p className=" fw-bold mt-4 hoverpointer" onClick={()=>handlenews(pkg)}>Keep Reading</p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default Newsandtips