import React from "react";
import goa from '../../images/picnics-goa.jpg';
import lonavala from '../../images/picnics-lonavala.jpg';
import mountabu from '../../images/picnics-mount-abu.jpg';
import { useNavigate } from "react-router-dom";

const packages = [
    {
        img: goa,
        title: "Kodaikanal Hills",
        catogory:'picnic',
        duration: "2 days 3 nights",
        guest: "4 to 6 guest",
        price: "1000rs/person",
        mainpara: "Experience an exclusively crafted 2-day Kodaikanal student tour package, meticulously designed to explore all the key attractions in Kodaikanal. Our comprehensive package encompasses accommodation, delectable meals, entrance tickets, expert guides, and immersive sightseeing. Uncover the essence of your study tour with the assurance of the best and most affordable prices. Embrace a low-cost guarantee for an enriching educational journey.",
        subpara: "Our primary concern amid the COVID-19 (Coronavirus) pandemic is ensuring strict adherence to all safety protocols mandated by the local and state government authorities and the Health Department.",
        Transportation: "49 seater AC Couch",
        day1city: "Kodaikanal",
        day1: "Arrive at kodaikanal railway station and transfer to the hotel. After fresh up proceed for local sightseeing. This day you will cover……",
        day1plan: [
            {
                NTR: "Garden",
                Lumbni: "Park",
                DrAmbedkarStatue: "Dr. Ambedkar Statue",
                TelenganaMartyrsMemorial: "Telengana Martyrs memorial",
                SalarjungMuseum: "Salarjung Museum",
                Charminar: "Charminar",
                MeccaMasjid: "Mecca Masjid"
            }
        ],
        day2city: "Kodaikanal",
        day2mainpara: "After breakfast proceed for Ramoji film city tour. One day will take to enjoy Ramoji Film City.",
        day2plan: "After dinner transfer and drop at Hyderabad railway station. From there you will board train depart to your hometown.",
        packagecostperstudent: "Min 45",
        foodplan: "With Food",
        Groupsize: "45 Students",
        perheadcost: 2000,
        costincludes: [
            {
                accomodation: "accomadation in non A/c rooms",
                assistance: "assistance on arrival",
                complimentary: "complimentary trip for 2 teachers",
                sharingplan: "Accomadation on quad share basic",
                meals: "2 BreakFast + 2Lunch + 3 dinners"
            }
        ],
        costexcludes: [
            {
                fare: "train/flight fare",
                portage: "Any portage at airports and hotels, and all items of personal nature.",
                laundry: "laundry",
                cam: "camera fees"
            }
        ]
    },
    {
        img: goa,
        title: "Conoor",
        catogory:'picnic',
        duration: "2 days 3 nights",
        guest: "4 to 6 guest",
        price: "1000rs/person",
        mainpara: "Experience an exclusively crafted 2-day Kodaikanal student tour package, meticulously designed to explore all the key attractions in Kodaikanal. Our comprehensive package encompasses accommodation, delectable meals, entrance tickets, expert guides, and immersive sightseeing. Uncover the essence of your study tour with the assurance of the best and most affordable prices. Embrace a low-cost guarantee for an enriching educational journey.",
        subpara: "Our primary concern amid the COVID-19 (Coronavirus) pandemic is ensuring strict adherence to all safety protocols mandated by the local and state government authorities and the Health Department.",
        Transportation: "49 seater AC Couch",
        day1city: "Kodaikanal",
        day1: "Arrive at kodaikanal railway station and transfer to the hotel. After fresh up proceed for local sightseeing. This day you will cover……",
        day1plan: [
            {
                NTR: "Garden",
                Lumbni: "Park",
                DrAmbedkarStatue: "Dr. Ambedkar Statue",
                TelenganaMartyrsMemorial: "Telengana Martyrs memorial",
                SalarjungMuseum: "Salarjung Museum",
                Charminar: "Charminar",
                MeccaMasjid: "Mecca Masjid"
            }
        ],
        day2city: "Kodaikanal",
        day2mainpara: "After breakfast proceed for Ramoji film city tour. One day will take to enjoy Ramoji Film City.",
        day2plan: "After dinner transfer and drop at Hyderabad railway station. From there you will board train depart to your hometown.",
        packagecostperstudent: "Min 45",
        foodplan: "With Food",
        Groupsize: "45 Students",
        perheadcost: 2000,
        costincludes: [
            {
                accomodation: "accomadation in non A/c rooms",
                assistance: "assistance on arrival",
                complimentary: "complimentary trip for 2 teachers",
                sharingplan: "Accomadation on quad share basic",
                meals: "2 BreakFast + 2Lunch + 3 dinners"
            }
        ],
        costexcludes: [
            {
                fare: "train/flight fare",
                portage: "Any portage at airports and hotels, and all items of personal nature.",
                laundry: "laundry",
                cam: "camera fees"
            }
        ]
    },
    {
        img: goa,
        title: "Senji Fort",
        catogory:'picnic',
        duration: "2 days 3 nights",
        guest: "4 to 6 guest",
        price: "1000rs/person",
        mainpara: "Experience an exclusively crafted 2-day Kodaikanal student tour package, meticulously designed to explore all the key attractions in Kodaikanal. Our comprehensive package encompasses accommodation, delectable meals, entrance tickets, expert guides, and immersive sightseeing. Uncover the essence of your study tour with the assurance of the best and most affordable prices. Embrace a low-cost guarantee for an enriching educational journey.",
        subpara: "Our primary concern amid the COVID-19 (Coronavirus) pandemic is ensuring strict adherence to all safety protocols mandated by the local and state government authorities and the Health Department.",
        Transportation: "49 seater AC Couch",
        day1city: "Kodaikanal",
        day1: "Arrive at kodaikanal railway station and transfer to the hotel. After fresh up proceed for local sightseeing. This day you will cover……",
        day1plan: [
            {
                NTR: "Garden",
                Lumbni: "Park",
                DrAmbedkarStatue: "Dr. Ambedkar Statue",
                TelenganaMartyrsMemorial: "Telengana Martyrs memorial",
                SalarjungMuseum: "Salarjung Museum",
                Charminar: "Charminar",
                MeccaMasjid: "Mecca Masjid"
            }
        ],
        day2city: "Kodaikanal",
        day2mainpara: "After breakfast proceed for Ramoji film city tour. One day will take to enjoy Ramoji Film City.",
        day2plan: "After dinner transfer and drop at Hyderabad railway station. From there you will board train depart to your hometown.",
        packagecostperstudent: "Min 45",
        foodplan: "With Food",
        Groupsize: "45 Students",
        perheadcost: 2000,
        costincludes: [
            {
                accomodation: "accomadation in non A/c rooms",
                assistance: "assistance on arrival",
                complimentary: "complimentary trip for 2 teachers",
                sharingplan: "Accomadation on quad share basic",
                meals: "2 BreakFast + 2Lunch + 3 dinners"
            }
        ],
        costexcludes: [
            {
                fare: "train/flight fare",
                portage: "Any portage at airports and hotels, and all items of personal nature.",
                laundry: "laundry",
                cam: "camera fees"
            }
        ]
    }, 
];

function KarnatakaZoo() {
    const navigate = useNavigate();

    const handleImageClick = (heading, img) => {
        const pkg = packages.find(pkg => pkg.title.includes(heading));
        if (pkg) {
            navigate('/bookingpage', { state: pkg });
        }
    };

    return (
        <div className='fourthwest container mt-5'>
            <h2 className="">Karnataka Zoo</h2>
            <div className='row'>
                <div className='foutheastimg col-lg-3 col-12 col-md-4'>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <div className="image-container" onClick={() => handleImageClick('Kodaikanal', goa)}>
                            <img src={goa} alt="Image" className="image" />
                            <div className="overlay">
                                <h2 className="heading">Kodaikanal</h2>
                                <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foutheastimg col-lg-3 col-12 col-md-4'>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <div className="image-container" onClick={() => handleImageClick('Conoor', lonavala)}>
                            <img src={lonavala} alt="Image" className="image" />
                            <div className="overlay">
                                <h2 className="heading">Conoor</h2>
                                <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foutheastimg col-lg-3 col-12 col-md-4'>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <div className="image-container" onClick={() => handleImageClick('Senji Fort', mountabu)}>
                            <img src={mountabu} alt="Image" className="image" />
                            <div className="overlay">
                                <h2 className="heading">Senji Fort</h2>
                                <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foutheastimg col-12 col-lg-3 col-md-4'>
                    <div className="d-flex justify-content-center mt-2">
                        <div className="image-container" onClick={() => handleImageClick('Senji Fort', mountabu)}>
                            <img src={mountabu} alt="Image" className="image" />
                            <div className="overlay">
                                <h2 className="heading">Senji Fort</h2>
                                <p className="contentp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis nisi laudantium dolorum reiciendis maiores rerum deleniti qui excepturi molestiae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KarnatakaZoo;
