import React, {useState} from 'react'
import {useStep} from '../hooks/useStep'
import bgMobile from '../assets/bg-sidebar-mobile.svg'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

const MultifStepForm = () => {
    const {step, nextStep, previousStep} = useStep();
    const [selectedOptions, setSelectedOptions] = useState({plan:'', billing: '' , planPrice:''});

  return (
    <div className='lg:p-20 my-auto '>
        <img src={bgMobile} className="absolute z-0 lg:hidden w-full" alt=""/>
        <div className='flex flex-col mx-auto my-auto 
        lg:bg-neutralWhite lg:rounded-xl lg:flex-row lg:p-4 lg:max-w-4xl lg:scale-105 lg:mt-12
        xxl:scale-125'>

            <div className="z-10 flex justify-center mt-7 gap-3
            lg:flex-col lg:w-[31%] lg: lg:justify-start lg:items-start lg:p-7 lg:mt-0 lg:rounded-lg lg:bg-[url('./assets/bg-sidebar-desktop.svg')]
            "> 
            {Array.from({length: 4}, (_, index) => 
                <div key={index} className=''>
                    <div className='lg:flex lg:flex-row'>
                        <div  className={`${step === (index + 1) ? 'bg-lightBlue text-marineBlue' : 'bg-none text-neutralWhite'} 
                            rounded-[100%] border-[1px] border-neutralWhite
                            w-[30px] h-[30px] text-sm font-bold flex items-center justify-center
                            lg:flex-row lg:mt-4`}>
                            {index + 1}
                        </div>
                        <div className='hidden lg:flex flex-col ml-3 mt-3 text-neutralWhite'>
                            <div className='text-[11px] text-pastelBlue'>{index + 1 === 1 && 'STEP 1'}</div>
                            <div className='font-bold text-sm'>{index + 1 === 1 && 'YOUR INFO'}</div>

                            <div className='text-[11px] text-pastelBlue'>{index + 1 === 2 && 'STEP 2'}</div>
                            <div className='font-bold text-sm'>{index + 1 === 2 && 'SELECT PLAN'}</div>

                            <div className='text-[11px] text-pastelBlue'>{index + 1 === 3 && 'STEP 3'}</div>
                            <div className='font-bold text-sm'>{index + 1 === 3 && 'ADD-ONS'}</div>

                            <div className='text-[11px] text-pastelBlue'>{index + 1 === 4 && 'STEP 4'}</div>
                            <div className='font-bold text-sm'>{index + 1 === 4 && 'SUMMARY'}</div>
                        </div>
                    </div>
                </div>)}
            </div>

            <div className='z-10 p-5 mt-3
                md_1:p-5 md_1:mt-7
                md_2:p-8 md_2:mt-9
                lg:w-[70%] lg:mt-0 lg:flex-col lg:justify-center lg:items-center'>
                <div className='bg-neutralWhite rounded-md p-7 py-8
                    md_1:p-7 md_1:py-8
                    lg:px-16 lg:py-0 lg:min-h-[32vh]  '>
                    {step === 1 && <Step1 selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>}
                    {step === 2 && <Step2 selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>}
                    {step === 3 && <Step3 selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>}
                    {step === 4 && <Step4 selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>}
                </div>
                <div className='bg-alabaster p-5 absolute left-0 bottom-0 flex justify-between w-full
                lg:bg-neutralWhite lg:relative lg:mt-20 lg:px-16'>
                    <button onClick={previousStep}
                    className={`${step > 1 ? ' opacity-100' : ' opacity-0 cursor-default'} text-coolGray text-sm`}>
                    Go back
                    </button>

                    <button onClick={nextStep}
                    className='bg-marineBlue text-neutralWhite text-sm p-2 px-3 rounded-md lg:px-4'>
                    Next Step
                    </button>
                </div>
            </div>
            
            
        </div>

        
    </div>
  
  )
}

export default MultifStepForm
