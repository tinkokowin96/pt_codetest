import { ThemeProvider } from '@mui/material'
import { useSelector } from 'react-redux'
import { Container } from './App.styles'
import CreateAlert from './components/createAlert'
import CreateAlertForm from './components/createAlertForm'
import Popup from './components/popup'
import SavedAlerts from './components/savedAlerts'
import { initialStateType } from './redux/alert.slice'
import Globalstyles from './styles/global.styles'
import { theme } from './styles/theme.style'

function App() {
      const { openForm, openPopup, popupContent } = useSelector(
            (state: initialStateType) => state,
      )

      return (
            <ThemeProvider theme={theme}>
                  <Container>
                        <Globalstyles />
                        {openForm && <CreateAlertForm />}
                        {openPopup && <Popup content={popupContent} />}
                        <SavedAlerts />
                        <CreateAlert />
                  </Container>
            </ThemeProvider>
      )
}

export default App
