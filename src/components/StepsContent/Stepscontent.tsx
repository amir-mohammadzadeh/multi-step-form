//import './Stepscontent.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'


const Stepscontent = () => {
   let ActivStep = useSelector<RootState, number>((state) => state.onStep.step);
   const Step_List = ['Your Info', 'Select Plan', 'Add-ons', 'Summary'];

   ActivStep >= 4 && (ActivStep = 4);

   return (
      <>
         <ul className="step-content">
            { Step_List.map((step, index) =>

               <li key={index} className="step">
                  <div className={index + 1 == ActivStep ? "step-num  active-step" : "step-num"}>
                     {index + 1}
                  </div>
                  <div className="step-label">
                     <span>
                        STEP {index + 1}
                     </span>
                     <section className='step-title'>
                        {step.toUpperCase()}
                     </section>
                  </div>
               </li>

            )}

         </ul>
      </>
   )
}

export default Stepscontent