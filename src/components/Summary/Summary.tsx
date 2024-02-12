//import './Summary.css'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonsGroup } from '../ButtonsGroup/ButtonsGroup'
import FormsHeader from '../FormsHeader/FormsHeader'
import { gotostep, nextstep, previousStep } from '../../redux/reducers/stepReducer'
import { RootState } from '../../redux/store'
import { FormData } from '../../Interfaces/Interfaces'
import { useEffect } from 'react'
import { setPayment } from '../../redux/reducers/formReducer'



const Summary = () => {
    const dispatch = useDispatch()
    const total = useSelector<RootState, FormData>((state) => state.formData)
    const yearly = total.yearlyDuration;

    useEffect(() => {
        dispatch(setPayment())
    }, [])

    const confirmAction = () => {
        dispatch(nextstep())
    }
    const changePlanHandel = () => {
        dispatch(gotostep(2))
    }
    const getBack = () => {
        dispatch(previousStep())
    }
    return (
        <>
            <FormsHeader title={'Finishing up'} subtitle={'Double-check everything looks OK before confirming.'} />
            <ul className='summary_container'>
                <li className='summary-item'>
                    <div className="plan-summary">
                        <h4>
                            {total.planDetailes.title} {yearly ? '(yearly)' : '(Monthly)'}
                        </h4>
                        <a className='plan-change' onClick={changePlanHandel} >
                            Change
                        </a>
                    </div>
                    <span className="summary-price">
                        ${yearly ? total.planDetailes.price * 10 + '/yr' : total.planDetailes.price + '/mo'}
                    </span>
                </li>
                <hr />
                {total.add_ons.map(addon =>
                    <li key={addon.id} className='summary-item'>
                        <span>
                            {addon.title}
                        </span>
                        <span className="summary-price">
                            +${yearly ? addon.price * 10 + '/yr' : addon.price + '/mo'}
                        </span>
                    </li>
                )}
                {total.add_ons.length == 0 &&
                    <li className='summary-item'>
                        No Add-ons selected!
                        <span>0</span>
                    </li>
                }

            </ul>
            <div className="summary-total">
                <span>
                    Total {yearly ? '(pre year)' : '(pre month)'}
                </span>
                <span className='total-price'>
                    ${total.payment} {yearly ? '/yr' : '/mo'}
                </span>
            </div>
            <ButtonsGroup  >
                <button className='btn btn-blue' onClick={confirmAction} >
                    Confirm
                </button>
                <button className='btn text-btn' onClick={getBack}>
                    Go Back
                </button>
            </ButtonsGroup>
        </>
    )
}

export default Summary