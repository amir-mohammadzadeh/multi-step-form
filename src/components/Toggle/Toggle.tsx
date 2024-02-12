import './Toggle.css'

interface Prop{
    changePerid: ()=> void
}

const Toggle = ({changePerid}:Prop) => {
  return (
    <div>
        <input type="checkbox" name="" id="planPeriodSelect" onChange={changePerid} />
        <label htmlFor="planPeriodSelect" className='Toggle_Lable'>
            <span className="circle"></span>
        </label>
    </div>
  )
}

export default Toggle