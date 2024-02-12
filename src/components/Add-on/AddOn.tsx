//import './AddOn.css'
import { useDispatch, useSelector } from 'react-redux'
import { data } from '../../assets/Data'
import { ButtonsGroup } from '../ButtonsGroup/ButtonsGroup'
import FormsHeader from '../FormsHeader/FormsHeader'
import { nextstep, previousStep } from '../../redux/reducers/stepReducer'
import { RootState } from '../../redux/store'
import { useForm } from 'react-hook-form'
import { AddOns } from '../../Interfaces/Interfaces'
import { useEffect, useRef } from 'react'
import { setAddOns } from '../../redux/reducers/formReducer'


const AddOn = () => {
    const { register, setValue } = useForm();
    const dispatch = useDispatch();
    const Addons_list = useSelector<RootState, AddOns[]>(state => state.formData.add_ons);
    const yearlyPeriod = useSelector<RootState>(state => state.formData.yearlyDuration);
    const selected_Addons = useRef<number[]>([])

    useEffect(() => {
        Addons_list.length != 0 &&
            Addons_list.map(addon => {
                setValue('AO-' + addon.id, true)
                selected_Addons.current.push(addon.id)
            });
    }, [])

    const selectAddon = (id: number) => {
        selected_Addons.current.includes(id)
            ? selected_Addons.current = selected_Addons.current.filter(i => i != id)
            : selected_Addons.current.push(id);
    }

    const save_And_continue = () => {
        if (selected_Addons.current.length != 0) {
            let payloadList: AddOns[] = []
            data.addons.map((item) => {
                if (selected_Addons.current.includes(item.id)) {
                    let { dis, ...newItem } = item
                    payloadList.push(newItem)
                }

            })

            dispatch(setAddOns(payloadList))
        }
        dispatch(nextstep())
    }

    const getBack = () => {
        dispatch(previousStep())
    }
    return (
        <>
            <FormsHeader title={'pick add-ons'} subtitle={'Add-ons help enhance your gaming experience.'} />

            <form className='add-ons_form'>

                {data.addons.map(addon =>

                    <div key={addon.id} className="add-on_card">
                        <input
                            {...register('AO-' + addon.id, {
                                onChange: () => selectAddon(addon.id)
                            })}
                            type="checkbox"
                            id={'add-on_' + addon.id}
                        />

                        <label htmlFor={'add-on_' + addon.id} className='add-on_label' >
                            <h3>
                                {addon.title}
                            </h3>
                            <span>
                                {addon.dis}
                            </span>
                        </label>
                        <span className="add-on_price">
                            +${yearlyPeriod ? addon.price * 10 + ' /yr' : addon.price + ' /mo'}
                        </span>
                    </div>
                )}

            </form>

            <ButtonsGroup  >
                <button className='btn btn-primum' onClick={save_And_continue}>
                    Next Step
                </button>
                <button className='btn text-btn' onClick={getBack}>
                    Go Back
                </button>
            </ButtonsGroup>
        </>
    )
}

export default AddOn