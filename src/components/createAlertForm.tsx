import { Button, ButtonGroup } from '@mui/material'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAlert, closePopup, initialStateType, openPopup } from '../redux/alert.slice'
import { AppDispatch } from '../redux/store'
import { Spacing } from '../styles/constants.style'
import { Field, FormContainer, Row } from './createAlertForm.style'
import {v4 as uuid} from 'uuid'

export default function CreateAlertForm() {
      const type = useSelector((state: initialStateType) => state.type)
      const dispatch = useDispatch<AppDispatch>()
      let timer: any

      const formik = useFormik({
            initialValues: {
                  alert: type,
                  timeout: 10,
                  message: '',
                  title: '',
                  id: '',
            },
            onSubmit: () => {},
      })

      const showAlertHandler = () => {
            const values = formik.values
            dispatch(
                  openPopup({
                        type,
                        message: values.message,
                        id: values.id,
                        title: values.title,
                  }),
            )
            timer = setTimeout(() => dispatch(closePopup()), values.timeout * 1000)
      }

      const saveAlertHandler = () => {
            const values = formik.values
            dispatch(
                  addAlert({
                        type,
                        message: values.message,
                        id: values.id === "" ? uuid(): values.id ,
                        title: values.title,
                  }),
            )
      }

      useEffect(() => {
            if (timer) {
                  clearTimeout(timer)
            }
      })

      return (
            <FormContainer className="center">
                  <form onSubmit={formik.handleSubmit}>
                        <label>ID</label>
                        <Row>
                              <Field>
                                    <div>ID</div>
                                    <input
                                          type="text"
                                          name="id"
                                          onChange={formik.handleChange}
                                          style={{ marginLeft: Spacing.small }}
                                          value={formik.values.id}
                                    />
                              </Field>
                        </Row>

                        <label>Alert Type</label>
                        <Row>
                              <Field>
                                    <div>{type}</div>
                                    <input
                                          type="radio"
                                          name="alert"
                                          disabled
                                          defaultChecked
                                          onChange={formik.handleChange}
                                          value={formik.values.alert}
                                    />
                              </Field>
                        </Row>

                        <label>Timeout</label>
                        <Row>
                              <Field>
                                    <div>Timeout</div>
                                    <input
                                          type="number"
                                          name="timeout"
                                          onChange={formik.handleChange}
                                          style={{ marginLeft: Spacing.small }}
                                          value={formik.values.timeout}
                                    />
                              </Field>
                        </Row>

                        <label>Title</label>
                        <Row>
                              <Field>
                                    <div>Title</div>
                                    <input
                                          type="text"
                                          name="title"
                                          onChange={formik.handleChange}
                                          style={{ marginLeft: Spacing.small }}
                                          value={formik.values.title}
                                    />
                              </Field>
                        </Row>

                        <label>Message</label>
                        <Row>
                              <Field>
                                    <div>Message</div>
                                    <input
                                          type="text"
                                          name="message"
                                          onChange={formik.handleChange}
                                          style={{ marginLeft: Spacing.small }}
                                          value={formik.values.message}
                                    />
                              </Field>
                        </Row>

                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                              <Button onClick={showAlertHandler}>View Alert</Button>
                              <Button onClick={saveAlertHandler}>Save Alert</Button>
                        </ButtonGroup>
                  </form>
            </FormContainer>
      )
}
