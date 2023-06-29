'use client'

import {useState} from 'react'
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CarDetails from './CarDetails';

interface CarCardProps {
    car: CarProps 
}

const CarCard = ({car}: CarCardProps) => {
    const {city_mpg,year,make,model,transmission,drive} = car;
    const carRent = calculateCarRent(city_mpg,year);
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px]'>
        <span className='self-start text-[14px] font-semibold'>$ {carRent}</span>
        <span className='self-end text-[14px] font-medium'>/day</span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src='/hero.png' alt='car model' fill priority className='object-contain'/>
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
            {/* caja */}
            <div className='flex flex-col justify-center items-center gap-2'>
                <Image src='/steering-wheel.svg' alt='steering-wheel icon' width={20} height={20} className='object-contain'/>
                <p>{transmission === 'a' ? 'Automatic': 'Manual'}</p>
            </div>
            {/* ruedas */}
            <div className='flex flex-col justify-center items-center gap-2'>
                <Image src='/tire.svg' alt='tire icon' width={20} height={20} className='object-contain'/>
                <p>{drive}</p>
            </div>
            {/* combustible */}
            <div className='flex flex-col justify-center items-center gap-2'>
                <Image src='/gas.svg' alt='gas icon' width={20} height={20} className='object-contain'/>
                <p>{city_mpg} MPG</p>
            </div>
        </div>
        <div className='car-card__btn-container'>
            <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] font-bold leading-[17px]'
            rightIcon='/right-arrow.svg'
            handleClick={()=>setIsOpen(true)}
            />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}/>
    </div>
  );
}

export default CarCard