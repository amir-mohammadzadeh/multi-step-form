//import './PersonalInfo.css'
import { useForm } from 'react-hook-form'
import FormsHeader from '../FormsHeader/FormsHeader'
import { ButtonsGroup } from '../ButtonsGroup/ButtonsGroup'
import { useEffect } from 'react'
import { UserInfo } from '../../Interfaces/Interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { set_userInfo } from '../../redux/reducers/formReducer'
import { nextstep } from '../../redux/reducers/stepReducer'


const PersonalInfo = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<UserInfo>()

    const user_info = useSelector<RootState, UserInfo>(state => state.formData.userInfo)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if(user_info.name != '') {
            setValue('name', user_info.name, { shouldValidate: true })
            setValue('email', user_info.email, { shouldValidate: true })
            setValue('phoneNumber', user_info.phoneNumber, { shouldValidate: true }) ;
        }
    }, [user_info])

    const onSubmit = (date: UserInfo) => {
        dispatch(set_userInfo(date))// =>  set data to a BasicStat in redux...
        dispatch(nextstep())
    }

    return (
        <>
            <FormsHeader title={'Personal info'} subtitle={'Please provide your name, email address, and phone number.'} />

            <form id='PersonalInfoForm' className="info-form" onSubmit={handleSubmit(onSubmit)}>

                <div className={errors.name?.type ? "input_box error" : "input_box"}>
                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        {...register('name', {
                            required: { value: true, message: "This field is required" },
                            minLength: { value: 3, message: "Name value should be 3 character" }
                        })}
                        type="text" id='name'
                        placeholder='e.g. Stephen King'
                    />

                    <div className="error-box">
                        {errors.name?.message}
                    </div>

                </div>

                <div className={errors.email?.type ? "input_box error" : "input_box"}>
                    <label htmlFor="email">
                        Email Address
                    </label>

                    <input
                        {...register('email', { required: "This field is required..."})}
                        type="email" id='email'
                        placeholder='e.g. stephenKing@lorem.com'
                    />

                    <div className="error-box">
                        {errors.email?.message}
                    </div>

                </div>

                <div className={errors.phoneNumber?.type ? "input_box error" : "input_box"}>
                    <label htmlFor="phoneNumber">
                        Phone Number
                    </label>

                    <input
                        {...register('phoneNumber', { required: "This field is required..." })}
                        type="number" id='phoneNumber'
                        placeholder='e.g. +1 234 567 890'
                    />

                    <div className="error-box">
                        {errors.phoneNumber?.message}
                    </div>

                </div>
            </form>
            <ButtonsGroup >
                <button type='submit' form='PersonalInfoForm' className='btn btn-primum'>
                    Next Step
                </button>
            </ButtonsGroup>
        </>
    )
}

export default PersonalInfo