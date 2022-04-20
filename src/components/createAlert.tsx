import { Button, ButtonGroup } from '@mui/material'
import { useDispatch } from 'react-redux'
import { openAlertForm } from '../redux/alert.slice'
import { AppDispatch } from '../redux/store'
import { Container } from './createAlert.styles'

export default function CreateAlert() {
      const dispatch = useDispatch<AppDispatch>()

      const buttonClickHanler = (type: string) => {
            dispatch(openAlertForm(type))
      }

      return (
            <Container className="center">
                  <div className="title">Click Any Button To Create or View Alert Example</div>
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button color="error" onClick={() => buttonClickHanler('error')}>
                              Error
                        </Button>
                        <Button color="warning" onClick={() => buttonClickHanler('warning')}>
                              Warning
                        </Button>
                        <Button color="info" onClick={() => buttonClickHanler('info')}>
                              Info
                        </Button>
                        <Button color="success" onClick={() => buttonClickHanler('success')}>
                              Success
                        </Button>
                  </ButtonGroup>
            </Container>
      )
}
