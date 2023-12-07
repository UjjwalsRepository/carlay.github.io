"use client"
import React,{useState,useEffect} from 'react';
import Image from 'next/image';
// import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import CarCard from './CarCard';
import Link from 'next/link';
import ModalPopup from '../components/ModalPopup';
import { Button, Col, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsive } from "./data";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'


// import fetchCars from '@/utils'
const Page = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const carData=[
        {make:"Maruti",variantname:"Swift",serialnumber:"0",manufacturingyear:"2020",kilometer:"20000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Maruti",variantname:"Baleno",serialnumber:"1",manufacturingyear:"2020",kilometer:"20000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Maruti",variantname:"Baleno",serialnumber:"2",manufacturingyear:"2020",kilometer:"20000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Maruti",variantname:"Baleno",serialnumber:"3",manufacturingyear:"2020",kilometer:"20000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Hyundai",variantname:"Creta",serialnumber:"4",manufacturingyear:"2021",kilometer:"30000",transmission:"Automatic",fueltype:"Diesel"},
        {make:"Hyundai",variantname:"Creta",serialnumber:"5",manufacturingyear:"2021",kilometer:"30000",transmission:"Automatic",fueltype:"Diesel"},
        {make:"Hyundai",variantname:"Creta",serialnumber:"6",manufacturingyear:"2021",kilometer:"30000",transmission:"Automatic",fueltype:"Diesel"},
        {make:"Tata",variantname:"Harriar",serialnumber:"7",manufacturingyear:"2021",kilometer:"35000",transmission:"Manual",fueltype:"Diesel"},
        {make:"MG",variantname:"Hector",serialnumber:"8",manufacturingyear:"2019",kilometer:"40000",transmission:"Automatic",fueltype:"Petrol"},
        {make:"Kia",variantname:"Sonet",serialnumber:"9",manufacturingyear:"2020",kilometer:"34000",transmission:"Manual",fueltype:"CNG"},
        {make:"Kia",variantname:"Sonet",serialnumber:"10",manufacturingyear:"2020",kilometer:"34000",transmission:"Manual",fueltype:"CNG"},
        {make:"Kia",variantname:"Sonet",serialnumber:"11",manufacturingyear:"2020",kilometer:"34000",transmission:"Manual",fueltype:"CNG"},
        {make:"Mahindra",variantname:"700",serialnumber:"12",manufacturingyear:"2022",kilometer:"10000",transmission:"Automatic",fueltype:"Diesel"},
        {make:"Toyota",variantname:"Fortuner",serialnumber:"13",manufacturingyear:"2017",kilometer:"85000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Toyota",variantname:"Fortuner",serialnumber:"14",manufacturingyear:"2017",kilometer:"85000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Toyota",variantname:"Fortuner",serialnumber:"15",manufacturingyear:"2017",kilometer:"85000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Ford",variantname:"Ecosport",serialnumber:"16",manufacturingyear:"2016",kilometer:"100000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Renault",variantname:"Duster",serialnumber:"17",manufacturingyear:"2015",kilometer:"90000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Nissan",variantname:"Magnite",serialnumber:"18",manufacturingyear:"2022",kilometer:"25000",transmission:"Automatic",fueltype:"Petrol"},
        {make:"Skoda",variantname:"Kusaq",serialnumber:"19",manufacturingyear:"2021",kilometer:"38000",transmission:"Manual",fueltype:"Diesel"},
        {make:"Honda",variantname:"City",serialnumber:"20",manufacturingyear:"2020",kilometer:"75000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Jeep",variantname:"Compass",serialnumber:"21",manufacturingyear:"2019",kilometer:"65000",transmission:"Automatic",fueltype:"Petrol"},
    ]
    const [carList,setCarList]=useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal,setShowModal]=useState(true);
    // useEffect(()=>{
    //     const fetchCars=async()=>{
    //         const options = {
    //             method: 'GET',
    //             url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    //             params: {model: 'corolla'},
    //             headers: {
    //               'X-RapidAPI-Key': '62daf8cccamshc62096f7d242834p1d144djsna1486c849c4e',
    //               'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    //             }
    //           };
              
    //           try {
    //               const response = await axios.request(options);
    //               setCarList(response.data);
    //           } catch (error) {
    //               console.error(error);
    //           }
    //     }

    //     fetchCars()
       
    // },[])
    // useEffect(()=>{
    //     axios.get("http://carlayapi-dev.eba-ptwhyggf.ap-south-1.elasticbeanstalk.com/api/carlay/GetManufacturer")
    //     .then((res)=>console.log("Result",res))
    //     .catch((error)=>console.log(error))
       
    // },[])
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
      const filteredData = carData.filter((item) =>
      item.variantname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const slideLeft=()=>{
        var slider=document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft-500;
    }
    const slideRight=()=>{
        var slider=document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft+500;
    }
    return (
        <>
        <ModalPopup/>
        <div className='bg-[#c4d5ed]'>

            <div class='flex items-center justify-center'>
                <div class="flex rounded-full bg-white my-4 px-2 w-full max-w-[600px]">
                    <button class="self-center flex p-1 cursor-pointer bg-white"> <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.567 9.8895C12.2495 8.90124 12.114 7.5637 11.247 6.7325C10.3679 5.88806 9.02339 5.75928 7.99998 6.4215C7.57983 6.69308 7.25013 7.0837 7.05298 7.5435C6.85867 7.99881 6.80774 8.50252 6.90698 8.9875C7.00665 9.47472 7.25054 9.92071 7.60698 10.2675C7.97021 10.6186 8.42786 10.8563 8.92398 10.9515C9.42353 11.049 9.94062 11.0001 10.413 10.8105C10.8798 10.6237 11.2812 10.3033 11.567 9.8895Z" stroke="#ff5c5c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.433 17.8895C11.7504 16.9012 11.886 15.5637 12.753 14.7325C13.6321 13.8881 14.9766 13.7593 16 14.4215C16.4202 14.6931 16.7498 15.0837 16.947 15.5435C17.1413 15.9988 17.1922 16.5025 17.093 16.9875C16.9933 17.4747 16.7494 17.9207 16.393 18.2675C16.0298 18.6186 15.5721 18.8563 15.076 18.9515C14.5773 19.0481 14.0614 18.9988 13.59 18.8095C13.1222 18.6234 12.7197 18.3034 12.433 17.8895V17.8895Z" stroke="#ff5c5c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M12 7.75049C11.5858 7.75049 11.25 8.08627 11.25 8.50049C11.25 8.9147 11.5858 9.25049 12 9.25049V7.75049ZM19 9.25049C19.4142 9.25049 19.75 8.9147 19.75 8.50049C19.75 8.08627 19.4142 7.75049 19 7.75049V9.25049ZM6.857 9.25049C7.27121 9.25049 7.607 8.9147 7.607 8.50049C7.607 8.08627 7.27121 7.75049 6.857 7.75049V9.25049ZM5 7.75049C4.58579 7.75049 4.25 8.08627 4.25 8.50049C4.25 8.9147 4.58579 9.25049 5 9.25049V7.75049ZM12 17.2505C12.4142 17.2505 12.75 16.9147 12.75 16.5005C12.75 16.0863 12.4142 15.7505 12 15.7505V17.2505ZM5 15.7505C4.58579 15.7505 4.25 16.0863 4.25 16.5005C4.25 16.9147 4.58579 17.2505 5 17.2505V15.7505ZM17.143 15.7505C16.7288 15.7505 16.393 16.0863 16.393 16.5005C16.393 16.9147 16.7288 17.2505 17.143 17.2505V15.7505ZM19 17.2505C19.4142 17.2505 19.75 16.9147 19.75 16.5005C19.75 16.0863 19.4142 15.7505 19 15.7505V17.2505ZM12 9.25049H19V7.75049H12V9.25049ZM6.857 7.75049H5V9.25049H6.857V7.75049ZM12 15.7505H5V17.2505H12V15.7505ZM17.143 17.2505H19V15.7505H17.143V17.2505Z" fill="#ff5c5c" /> </g>

                    </svg></button>

                    <input
                        type="text"
                        class="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#000000] outline-0"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        name="variantname"
                        placeholder='Search Variant name'
                    />
                    <button type="submit" class="relative p-2 bg-white rounded-full">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>

                        </svg>
                    </button>
                </div>
            </div>
        {/* <Row className="flex w-full">
            <Col lg="6" md="6" sm="6" className='text-center'>
            <input 
                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={searchTerm}
                onChange={handleSearchChange}
                name="variantname"
                placeholder='Search Variant name'
                />
            </Col>
            </Row> */}
            <div className="relative flex items-center">
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40}/>
                <div id="slider" className='flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {filteredData?.map((item, index) => (
                        <div key={index}>
                        <Link href={`/carlist/${index}`}>
                            <CarCard
                                variant={item.variantname}
                                serial={item.serialnumber}
                                mfg={item.manufacturingyear}
                                km={item.kilometer}
                                transmission={item.transmission}
                                fuel={item.fueltype} />
                        </Link>
                        </div>
                    ))}
                    
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40}/>
            </div>
        <div className="min-h-screen flex justify-center items-center py-20">
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 ">
            {/* <Carousel showDots={true}  responsive={responsive}> */}
            
                {filteredData?.map((item, index) => (
                        <div key={index}>
                        <Link href={`/carlist/${index}`}>
                            <CarCard
                                variant={item.variantname}
                                serial={item.serialnumber}
                                mfg={item.manufacturingyear}
                                km={item.kilometer}
                                transmission={item.transmission}
                                fuel={item.fueltype} />
                        </Link>
                        </div>
                    ))}
            {/* </Carousel> */}
           
            </div>
        </div>
        </div>
       
        </>
    );
}

export default Page;