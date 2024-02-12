import { ThankYouIcon } from '../../assets/Icons'
//import './Confirmed.css'

const Confirmed = () => {
  return (
    <div className='confirm_container'>
      <span>
        <ThankYouIcon />
      </span>
      <h1>
        Thank you!
      </h1>

      <p className='confirm-dis'>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default Confirmed