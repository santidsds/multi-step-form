import React, {useState, useEffect} from 'react'
import Arcade from '../assets/icon-Arcade.svg'
import Advanced from '../assets/icon-Advanced.svg'
import Pro from '../assets/icon-Pro.svg'

const Step2 = ({selectedOptions, setSelectedOptions}) => {
  const [billing, setBilling] = useState(selectedOptions.billing ? selectedOptions.billing : 'Monthly' );
  const [selectedPlan, setSelectedPlan] = useState(selectedOptions.plan);
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(selectedOptions.planPrice);

  const prices = {
    Arcade: { Monthly: 9, Yearly: 90 },
    Advanced: { Monthly: 12, Yearly: 120 },
    Pro: { Monthly: 15, Yearly: 150 }
  };

  const handleBilling = () => {
    setBilling(prevBilling => {
        return prevBilling === 'Monthly' ? 'Yearly' : 'Monthly';
    });

    setSelectedOptions({
      ...selectedOptions,
      selectedAddOn: {}})
  }

  const handleSelected = (selectedPlan) => {
    let planPrice;
    switch (selectedPlan) {
      case 'Arcade':
        planPrice = billing === 'Monthly' ? prices.Arcade.Monthly : prices.Arcade.Yearly;
        break;
      case 'Advanced':
        planPrice = billing === 'Monthly' ? prices.Advanced.Monthly : prices.Advanced.Yearly;
        break;
      case 'Pro':
        planPrice = billing === 'Monthly' ? prices.Pro.Monthly : prices.Pro.Yearly;
        break;
      default:
        planPrice = 0;
    }
    setSelectedPlanPrice(planPrice);
  }

  useEffect(() => {
    setSelectedOptions({ ...selectedOptions, planPrice: selectedPlanPrice, plan:selectedPlan, billing});
  },[selectedPlanPrice, selectedPlan, billing]);

  useEffect(() => {
    handleSelected(selectedPlan);
  },[billing]);
  

  return (
    <div className=''>
        <h1 className='font-bold text-xl text-marineBlue
        lg:text-2xl
        '>Select your plan</h1>
        <p className='text-sm text-coolGray mt-2'>You have the option of Monthly or Yearly billing.</p>

        <div className='mt-5 flex flex-col gap-3'>
          <div onClick={() => {setSelectedPlan('Arcade'); handleSelected('Arcade')}} 
          className={` ${selectedPlan === 'Arcade' ? 'border-marineBlue bg-magnolia' : ''} cursor-pointer flex gap-3 border-[1px] border-lightGray p-3 rounded-lg`}>
            <img src={Arcade} alt="" />
            <div className=''>
              <p className='text-sm text-marineBlue font-[500]'>Arcade</p>
              <p className='text-xs text-coolGray'>{billing === 'Yearly' ? '$' + prices.Arcade.Yearly + 'yr' : '$' + prices.Arcade.Monthly + '/mo' }</p>
              <p className='text-xs text-marineBlue' >{billing === 'Yearly' && '2 months free'}</p>
            </div>
          </div>

          <div onClick={() => {setSelectedPlan('Advanced'); handleSelected('Advanced')}} 
          className={` ${selectedPlan === 'Advanced' ? 'border-marineBlue bg-magnolia' : ''} cursor-pointer flex gap-3 border-[1px] border-lightGray p-3 rounded-lg`}>
            <img src={Advanced} alt="" />
            <div className=''>
              <p className='text-sm text-marineBlue font-[500]'>Advanced</p>
              <p className='text-xs text-coolGray'>{billing === 'Yearly' ? '$' + prices.Advanced.Yearly + 'yr' : '$' + prices.Advanced.Monthly + '/mo' }</p>
              <p className='text-xs text-marineBlue' >{billing === 'Yearly' && '2 months free'}</p>
            </div>
          </div>

          <div onClick={() => {setSelectedPlan('Pro'); handleSelected('Pro')}} 
          className={` ${selectedPlan === 'Pro' ? 'border-marineBlue bg-magnolia' : ''} cursor-pointer flex gap-3 border-[1px] border-lightGray p-3 rounded-lg`}>
            <img src={Pro} alt="" />
            <div className=''>
              <p className='text-sm text-marineBlue font-[500]'>Pro</p>
              <p className='text-xs text-coolGray'>{billing === 'Yearly' ? '$' + prices.Pro.Yearly + '/yr' : '$' + prices.Pro.Monthly + '/mo' }</p>
              <p className='text-xs text-marineBlue' >{billing === 'Yearly' && '2 months free'}</p>
            </div>
          </div>
        </div>

        <div onClick={handleBilling} 
        className={` justify-center flex items-center gap-5 mt-8 text-sm font-[500] text-coolGray cursor-pointer`}>
          <p>Monthly</p>
          <div className={`${billing === 'Monthly' ? 'justify-start' : 'justify-end'} h-[18px] w-[33px] bg-marineBlue rounded-xl flex justify-start items-center p-1`}>
            <div className='rounded-full bg-neutralWhite h-[11px] w-[11px]'></div>
          </div>
          <p>Yearly</p>
        </div>
        {console.log(selectedOptions)}
    </div>
  )
}

export default Step2