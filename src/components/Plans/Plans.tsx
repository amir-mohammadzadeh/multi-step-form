//import './Plans.css'
import { useState } from 'react'
import { AdvancedIcon, ArcadeIcon, ProIcon } from '../../assets/Icons'
import { ButtonsGroup } from '../ButtonsGroup/ButtonsGroup'
import FormsHeader from '../FormsHeader/FormsHeader'
import Toggle from '../Toggle/Toggle'
import { data } from '../../assets/Data'
import { useDispatch, useSelector } from 'react-redux'
import { nextstep, previousStep } from '../../redux/reducers/stepReducer'
import { RootState } from '../../redux/store'
import { setUserPlan, setYearlyPeriod } from '../../redux/reducers/formReducer'



const Plans = () => {
   const dispatch = useDispatch()
   const planID = useSelector<RootState, number>(state => state.formData.planDetailes.id)
   const duration = useSelector<RootState, boolean>(state => state.formData.yearlyDuration)
   const [yearly, setYearly] = useState(duration)
   const [userSelectPlan, setUserSelectPlan] = useState(planID)


   const nextStepHandler = () => {
      // Get the Plan detailes that user selected 
      const [selected_plan] = data.plans.filter(plan => plan.id == userSelectPlan)
      // Set them to Form State 
      dispatch(setUserPlan(selected_plan));
      // Set YearlyPeriod to true if user chose yearly period
      yearly && dispatch(setYearlyPeriod(true));
      // Go to Next Step
      dispatch(nextstep())
   }

   const getBack = () => {
      dispatch(previousStep())
   }

   const iconList = [<ArcadeIcon />, <AdvancedIcon />, <ProIcon />]
   return (
      <>
         <FormsHeader title={'Select your plan'} subtitle={'You have the option of monthly or yearly billing.'} />

         <div className="plans_container">
            {data.plans.map(plan =>
               <div key={plan.id}
                  className={userSelectPlan == plan.id ? "plan-card selected-plan" : "plan-card"}
                  onClick={() => setUserSelectPlan(plan.id)}
               >
                  <span className="plan-icon">
                     {iconList[plan.id - 1]}
                  </span>
                  <div className="plan-dis">
                     <h3>
                        {plan.title}
                     </h3>
                     <span className="plan-price">
                        ${yearly ? plan.price * 10 + '/yr' : plan.price + '/mo'}
                     </span>
                     {yearly &&
                        <span className="plan-free-month">
                           2 months free
                        </span>
                     }
                  </div>
               </div>
            )}
         </div>

         <div className="plan-period">
            <span className={!yearly ? 'selected-period' : ''}>
               Monthly
            </span>
            <Toggle changePerid={() => setYearly(!yearly)} />
            <span className={yearly ? 'selected-period' : ''}>
               Yearly
            </span>
         </div>

         <ButtonsGroup  >
            <button className='btn btn-primum' onClick={nextStepHandler} disabled={userSelectPlan <= 0 ? true : false} >
               Next Step
            </button>
            <button className='btn text-btn' onClick={getBack}>
               Go Back
            </button>
         </ButtonsGroup>
      </>
   )
}

export default Plans