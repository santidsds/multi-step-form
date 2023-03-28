import React from 'react';

const Step4 = ({ selectedOptions, setSelectedOptions }) => {
  const { plan, billing, planPrice, addOns } = selectedOptions;

  // Calculate the sum of all selected add-ons
  const addOnsTotal = addOns.reduce((sum, { price }) => sum + price, 0);

  // Calculate the total price (plan price + add-ons)
  const totalPrice = planPrice + addOnsTotal;

  return (
    <div className="">
      {/* ... */}
      <div className="flex justify-between border-b-[1px] border-lightGray pb-3">
        <div className="mt-3 py-1">
          <div className="text-sm text-coolGray">
            {addOns &&
              addOns.map(({ service, price }) => (
                <div key={service}>
                  {service} (${billing === 'Monthly' ? price + '/mo' : price + '/yr'})
                </div>
              ))}
          </div>
        </div>
        {/* ... */}
      </div>
      <div className="mt-3">
        <p className="text-sm text-coolGray">Total: ${totalPrice}</p>
      </div>
      {/* ... */}
    </div> 
    )
}

export default Step4
