import React from "react";
import goa from '../../images/picnics-goa.jpg';
import lonavala from '../../images/picnics-lonavala.jpg';
import mountabu from '../../images/picnics-mount-abu.jpg';
import { useNavigate } from "react-router-dom";

const packages = [
    {
        img: goa,
        title: "Kodaikanal Weekend Getaway Package",
        catogory:'picnic',
        duration: "2 days 3 nights",
        guest: "4 to 6 guest",
        price: "1000rs/person",
        mainpara: "Experience an exclusively crafted 2-day Kodaikanal student tour package, meticulously designed to explore all the key attractions in Kodaikanal. Our comprehensive package encompasses accommodation, delectable meals, entrance tickets, expert guides, and immersive sightseeing. Uncover the essence of your study tour with the assurance of the best and most affordable prices. Embrace a low-cost guarantee for an enriching educational journey.",
        subpara: "Our primary concern amid the COVID-19 (Coronavirus) pandemic is ensuring strict adherence to all safety protocols mandated by the local and state government authorities and the Health Department.",
        Transportation: "49 seater AC Couch",
        day1city: "Kodaikanal Weekend Getaway Package",
        day1: "Arrive at kodaikanal railway station and transfer to the hotel. After fresh up proceed for local sightseeing. This day you will cover……",
        day1plan: [
            {
                NTR: "Arrive in Kodaikanal and check in at a budget guesthouse (shared accommodation).Freshen up and enjoy a delicious breakfast featuring local delicacies. ",
                Lumbni: "	Freshen up and enjoy a delicious breakfast featuring local delicacies.",
                DrAmbedkarStatue: "Boating at Kodaikanal Lake: Enjoy a scenic boat ride on the beautiful Kodaikanal Lake, surrounded by lush greenery. You can opt for pedal boats or rowboats to explore the tranquil waters.",
                TelenganaMartyrsMemorial: "	Lunch at a local restaurant (included in the package), where you can savor authentic South Indian cuisine.",
                SalarjungMuseum: "Coaker's Walk: Take a leisurely walk along Coaker’s Walk, a 1-km long walkway that offers breathtaking views of the valleys below, especially at sunset.",
                Charminar: "	Visit Sunset Point: Conclude your day by visiting a nearby sunset point, where you can witness the sky painted in vibrant hues as the sun sets over the hills.",
                MeccaMasjid: "o	Enjoy the serene ambiance and cool climate of Kodaikanal under a starlit sky."
            }
        ],
        day2city: " Nature Walk and Departure",
        day2mainpara: "After breakfast proceed for Ramoji film city tour. One day will take to enjoy Ramoji Film City.",
        day2plan: "After dinner transfer and drop at Hyderabad railway station. From there you will board train depart to your hometown.",
        packagecostperstudent: "Min 45",
        foodplan: "With Food",
        Groupsize: "45 Students",
        perheadcost: 2000,
        costincludes: [
            {
                accomodation: "•	Accommodation: Stay in a budget guesthouse (shared basis).",
                assistance: "	Breakfast: Traditional South Indian breakfast with options like idli, dosa, and sambar",
                complimentary: "Lunch: 2 local lunches featuring regional specialties.",
                sharingplan: "	Dinner: 1 dinner at the guesthouse or a local restaurant.",
                meals: "2 BreakFast + 2Lunch + 3 dinners"
            }
        ],
        costexcludes: [
            {
                fare: "Travel fare to and from Kodaikanal",
                portage: "Personal Expenses ",
                laundry: "•	Entry fees for any additional attractions not mentioned in the inclusions.",
                cam: "camera fees"
            }
        ]
    },
    {
        img: goa,
        title: "Ooty",
        catogory:'picnic',
        duration: "2 days 3 nights",
        guest: "4 to 6 guest",
        price: "1000rs/person",
        mainpara: "Experience an exclusively crafted 2-day Kodaikanal student tour package, meticulously designed to explore all the key attractions in Kodaikanal. Our comprehensive package encompasses accommodation, delectable meals, entrance tickets, expert guides, and immersive sightseeing. Uncover the essence of your study tour with the assurance of the best and most affordable prices. Embrace a low-cost guarantee for an enriching educational journey.",
        subpara: "Our primary concern amid the COVID-19 (Coronavirus) pandemic is ensuring strict adherence to all safety protocols mandated by the local and state government authorities and the Health Department.",
        Transportation: "49 seater AC Couch",
        day1city: "Day 1: Arrival in Ooty and Exploration",
        day1: "Arrive at Ooty railway station and transfer to the hotel. After fresh up proceed for local sightseeing. This day you will cover……",
        day1plan: [
            {
                NTR: "Arrive in Ooty and check in at a budget hotel (shared accommodation).",
                Lumbni: "Refresh and enjoy a hearty breakfast featuring local cuisine.",
                DrAmbedkarStatue: "Visit Ooty Lake: Start your adventure with a visit to the picturesque Ooty Lake. Enjoy boating on the calm waters or take a leisurely stroll along the lakeside, surrounded by lush greenery.",
                TelenganaMartyrsMemorial: "	Lunch at a local restaurant (included in the package), where you can enjoy delicious South Indian dishes.",
                SalarjungMuseum: "o	Botanical Gardens: Explore the famous Botanical Gardens, home to a wide variety of plants and flowers. Enjoy the beauty of the meticulously maintained gardens and capture beautiful photographs.",
                Charminar: "	Toy Train Ride: Experience a ride on the iconic Nilgiri Mountain Railway (subject to availability). This toy train journey offers breathtaking views of the mountains and valleys.",
                MeccaMasjid: "	Dinner: Enjoy dinner at the hotel or a local restaurant (included in the package)."
            }
        ],
        day2city: " Nature Walk and Departure",
        day2mainpara: "	Nature Walk: Join a guided nature walk to explore the scenic surroundings. Your guide will share interesting facts about the local flora and fauna, making this a memorable experience..",
        day2plan: "o	Visit Doddabetta Peak: Head to Doddabetta Peak, the highest point in the Nilgiris, for panoramic views of the landscape. It's an excellent spot for photography and soaking in the fresh mountain air.",
        packagecostperstudent: "Min 45",
        foodplan: "With Food",
        Groupsize: "45 Students",
        perheadcost: 2000,
        costincludes: [
            {
                accomodation: "Breakfast: A delicious breakfast with local and continental options.",
                assistance: "	Lunch: 2 local lunches featuring regional specialties.",
                complimentary: "Dinner: 1 dinner at the hotel or a local restaurant.",
                sharingplan: "Accomadation on quad share basic",
                meals: "2 BreakFast + 2Lunch + 3 dinners"
            }
        ],
        costexcludes: [
            {
                fare: "	Travel fare to and from Ooty.",
                portage: "	Personal expenses (shopping, tips, etc.).",
                laundry: "laundry",
                cam: "Entry fees for any additional attractions not mentioned in the inclusions."
            }
        ]
    },
    {
        img: goa,
        title: "Yercaud",
        catogory:'picnic',
        duration: "2 days 3 nights",
        guest: "4 to 6 guest",
        price: "1000rs/person",
        mainpara: "Experience an exclusively crafted 2-day Kodaikanal student tour package, meticulously designed to explore all the key attractions in Kodaikanal. Our comprehensive package encompasses accommodation, delectable meals, entrance tickets, expert guides, and immersive sightseeing. Uncover the essence of your study tour with the assurance of the best and most affordable prices. Embrace a low-cost guarantee for an enriching educational journey.",
        subpara: "Our primary concern amid the COVID-19 (Coronavirus) pandemic is ensuring strict adherence to all safety protocols mandated by the local and state government authorities and the Health Department.",
        Transportation: "49 seater AC Couch",
        day1city: "Yercaud.",
        day1: "Arrive in Yercaud and check in at a budget guesthouse (shared accommodation).",
        day1plan: [
            {
                NTR: "Boating at Yercaud Lake: Start your adventure with a relaxing boat ride on the tranquil waters of Yercaud Lake, surrounded by lush forests. You can choose between paddle boats or rowboats for an enjoyable experience.",
                Lumbni: "o	Lunch at a local restaurant (included in the package), where you can savor delicious South Indian cuisine.",
                DrAmbedkarStatue: "Visit to the Rose Garden: Explore the beautiful rose garden, home to a variety of roses in different colors and varieties. It’s a great spot for photography and relaxation.",
                TelenganaMartyrsMemorial: "	Nature Trails: Embark on a guided nature walk along scenic trails, where you can experience the region's rich flora and fauna. Your guide will provide insights into the local ecosystem and its unique biodiversity.",
                SalarjungMuseum: "Dinner: Enjoy a delicious dinner at the guesthouse or a local eatery (included in the package).",
                Charminar: "Overnight stay in Yercaud.",
                MeccaMasjid: "Mecca Masjid"
            }
        ],
        day2city: " Scenic Views and Departure",
        day2mainpara: "Visit to Pagoda Point: After breakfast, head to Pagoda Point for breathtaking panoramic views of the surrounding hills and valleys. This viewpoint is perfect for photography and enjoying the cool mountain breeze.",
        day2plan: "After dinner transfer and drop at Hyderabad railway station. From there you will board train depart to your hometown.",
        packagecostperstudent: "Min 45",
        foodplan: "With Food",
        Groupsize: "45 Students",
        perheadcost: 2000,
        costincludes: [
            {
                accomodation: "Visit to Pagoda Point: After breakfast, head to Pagoda Point for breathtaking panoramic views of the surrounding hills and valleys. This viewpoint is perfect for photography and enjoying the cool mountain breeze.",
                assistance: "	Breakfast: A delicious breakfast featuring local dishes.",
                complimentary: "Lunch: 2 local lunches showcasing regional specialties.",
                sharingplan: "	Dinner: 1 dinner at the guesthouse or a local restaurant.",
                meals: "2 BreakFast + 2Lunch + 3 dinners"
            }
        ],
        costexcludes: [
            {
                fare: "	Travel fare to and from Yercaud.",
                portage: "Personal expenses (shopping, tips, etc.).",
                laundry: "Entry fees for any additional attractions not mentioned in the inclusions.",
                cam: "camera fees"
            }
        ]
    }, 
];

function TamilNaduMountains() {
    const navigate = useNavigate();

    const handleImageClick = (heading, img) => {
        const pkg = packages.find(pkg => pkg.title.includes(heading));
        if (pkg) {
            navigate('/bookingpage', { state: pkg });
        }
    };

    return (
        <div className='fourthwest container mt-5'>
            <h2 className="">TamilNadu Mountains</h2>
            <div className='row'>
                <div className='foutheastimg col-lg-3 col-12 col-md-4'>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <div className="image-container" onClick={() => handleImageClick('Kodaikanal', goa)}>
                            <img src={goa} alt="Image" className="image" />
                            <div className="overlay">
                                <h2 className="heading">Kodaikanal Hills</h2>
                                <p className="contentp">Escape to the serene hills of Kodaikanal and immerse yourself in nature's beauty. This weekend getaway is perfect for friends, families, and couples looking for a refreshing break</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foutheastimg col-lg-3 col-12 col-md-4'>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <div className="image-container" onClick={() => handleImageClick('Ooty', lonavala)}>
                            <img src={lonavala} alt="Image" className="image" />
                            <div className="overlay">
                                <h2 className="heading">Ooty ,Nature Retreat Package</h2>
                                <p className="contentp">Experience the enchanting beauty of Ooty, often referred to as the "Queen of Hill Stations." This retreat is perfect for nature lovers, families, and anyone looking to unwind amidst stunning landscapes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foutheastimg col-lg-3 col-12 col-md-4'>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <div className="image-container" onClick={() => handleImageClick('Yercaud', mountabu)}>
                            <img src={mountabu} alt="Image" className="image" />
                            <div className="overlay">
                                <h2 className="heading">Yercaud Adventure Package</h2>
                                <p className="contentp">Discover the serene beauty of Yercaud, a hidden gem in the Shevaroy Hills. This adventure package is perfect for nature enthusiasts and those seeking a peaceful escape from the city.</p>
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

export default TamilNaduMountains;
