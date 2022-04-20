import { Alert, AlertTitle } from '@mui/material'
import { useSelector } from 'react-redux'
import { initialStateType } from '../redux/alert.slice'
import { Spacing } from '../styles/constants.style'
import { Container } from './savedAlert.style'

export default function SavedAlerts() {
      const alertList = useSelector((state: initialStateType) => state.alertList)

      return (
            <Container className="center">
                  <div className="title">Saved Alerts</div>
                  {alertList.map((alert, index) => (
                        <Alert
                              key={`alert_${index}`}
                              style={{ marginBottom: Spacing.small }}
                              //@ts-ignore
                              severity={alert.type}>
                              <AlertTitle>{alert.title}</AlertTitle>
                              {alert.message}
                        </Alert>
                  ))}
            </Container>
      )
}
