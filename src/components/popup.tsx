import { Alert, AlertTitle } from '@mui/material'
import { alertType } from '../redux/alert.slice'
import { theme } from '../styles/theme.style'
import { Container } from './popup.styles'

type propsType = {
      content: alertType
}

export default function Popup({ content }: propsType) {
      return (
            <Container className="center">
                  <Alert
                        //@ts-ignore
                        severity={content.type}>
                        <AlertTitle>{content.title}</AlertTitle>
                        {content.message}
                  </Alert>
            </Container>
      )
}
