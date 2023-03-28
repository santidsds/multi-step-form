import React, { useState, useEffect } from 'react';
import checkmark from '../assets/icon-checkmark.svg';

const Step3 = ({ selectedOptions, setSelectedOptions }) => {
  const [selectedAddOn, setSelectedAddOn] = useState([{ service: 'Online service', price: 1 }]);
  const { billing } = selectedOptions;
  console.log(selectedOptions)

  // Update the selectedOptions state when selectedAddOn changes
  useEffect(() => {
    setSelectedOptions({ ...selectedOptions, addOns: selectedAddOn });
  }, [selectedAddOn]);

  const toggleAddOn = (addOn, price) => {
    const addOnArray = Object.values(selectedAddOn);
    const existingAddOnIndex = addOnArray.findIndex(item => item.service === addOn);
  
    if (existingAddOnIndex !== -1) {
      addOnArray.splice(existingAddOnIndex, 1);
    } else {
      addOnArray.push({ service: addOn, price });
    }
  
    setSelectedAddOn([...addOnArray]);
    setSelectedOptions({ ...selectedOptions, addOns: selectedAddOn });

  };

  const isSelected = (serviceName) => {
    return selectedAddOn.some(item => item.service === serviceName);
  };
  

  return (
    <div className=''>
        <h1 className='font-bold text-xl text-marineBlue
        lg:text-2xl
        '>Pick add-ons</h1>
        <p className='text-sm text-coolGray mt-2'>Add-ons help enhance your gaming experience.</p>

        <div className='flex flex-col gap-3 mt-5'>
        
          <button onClick={() => toggleAddOn('Online service', billing === 'Monthly' ? 1 : 10)}
          className={` ${ isSelected('Online service') ? 'border-marineBlue bg-magnolia' : ''} cursor-pointer flex gap-3 border-[1px] border-lightGray p-4 rounded-lg items-center justify-between`}>
            <div className={` ${ isSelected('Online service') ? 'bg-purplishBlue' : '' } bg-neutralWhite border-[1px] border-lightGray h-4 w-4 flex p-[2.5px] justify-center items-center rounded-[3px]`}><img className='' src={checkmark} alt="" /></div>
            <div className='text-start min-w-[10em]'>
              <p className='text-sm text-marineBlue font-[500]'>Online service</p>
              <p className='text-xs text-coolGray'>Access to multiplayer games</p>
            </div>
            <div>
              <p className='text-xs text-marineBlue'>+${billing === 'Monthly' ? '1/mo' : '10/yr'}</p>
            </div>
          </button>

          <button onClick={() => toggleAddOn('Larger storage', billing === 'Monthly' ? 2 : 20)}
          className={` ${ isSelected('Larger storage') ? 'border-marineBlue bg-magnolia' : ''} cursor-pointer flex gap-3 border-[1px] border-lightGray p-4 rounded-lg items-center justify-between`}>
            <div className={` ${ isSelected('Larger storage') ? 'bg-purplishBlue' : '' } bg-neutralWhite border-[1px] border-lightGray h-4 w-4 flex p-[2.5px] justify-center items-center rounded-[3px]`}><img className='' src={checkmark} alt="" /></div>
            <div className='text-start min-w-[10em]'>
              <p className='text-sm text-marineBlue font-[500]'>Larger Storage</p>
              <p className='text-xs text-coolGray'>Extra 1TB of cloud save</p>
            </div>
            <div className='justify-self-end'>
              <p className='text-xs text-marineBlue'>+${billing === 'Monthly' ? '2/mo' : '20/yr'}</p>
            </div>
          </button>

          <button onClick={() => toggleAddOn('Custom profile', billing === 'Monthly' ? 1 : 10)}
          className={` ${ isSelected('Custom profile') ? 'border-marineBlue bg-magnolia' : ''} cursor-pointer flex gap-3 border-[1px] border-lightGray p-4 rounded-lg items-center justify-between`}>
            <div className={` ${ isSelected('Custom profile') ? 'bg-purplishBlue' : '' } bg-neutralWhite border-[1px] border-lightGray h-4 w-4 flex p-[2.5px] justify-center items-center rounded-[3px]`}><img className='' src={checkmark} alt="" /></div>
            <div className='text-start min-w-[10em]'>
              <p className='text-sm text-marineBlue font-[500]'>Customizable profile</p>
              <p className='text-xs text-coolGray'>Access to multiplayer games</p>
            </div>
            <div className=''>
              <p className='text-xs text-marineBlue'>+${billing === 'Monthly' ? '1/mo' : '10/yr'}</p>
            </div>
          </button>
          
        </div>
      
      {console.log(selectedAddOn)}
      {}
    </div>
  )
}

export default Step3