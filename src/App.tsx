//import './App.css'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import Plans from './components/Plans/Plans'
import Stepscontent from './components/StepsContent/Stepscontent'
import AddOn from './components/Add-on/AddOn'
import Summary from './components/Summary/Summary'
import Confirmed from './components/Confirmed/Confirmed'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'


function App() {
  const activeStep = useSelector<RootState, number>(state => state.onStep.step)

  const FORMS = [
    { step: 1, formComponent: <PersonalInfo /> },
    { step: 2, formComponent: <Plans /> },
    { step: 3, formComponent: <AddOn /> },
    { step: 4, formComponent: <Summary /> },
    { step: 5, formComponent: <Confirmed /> },
  ]

  const Form_content = FORMS.find(form => form.step == activeStep )

  return (
    <>
      <div className="main">
        <div className="main-card">

          <aside className="Steps_Container">
            <Stepscontent />
          </aside>

          <div className="form-content">
            {Form_content?.formComponent}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
