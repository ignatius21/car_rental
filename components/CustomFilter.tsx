'use client'

import React, {useState,Fragment}from 'react'
import { useRouter } from 'next/navigation'
import { CustomFilterProps, OptionProps } from '@/types'
import {Listbox,Transition} from '@headlessui/react'
import Image from 'next/image'
import { upadateSearchParams } from '@/utils'



const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {

  const [selected, setSelected] = useState(options[0]);

  

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e)=>{setSelected(e);setFilter(e.value)}}>
        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              alt="chevron-up-down"
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option key={option.title} value={option}>
                  {({ selected, active }) => (
                    <div
                      className={`${
                        active ? 'text-white bg-blue-500 font-bolder'  : 'text-gray-900'
                      } cursor-pointer select-none relative py-2 pl-10 pr-4`}
                    >
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {option.title}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;

