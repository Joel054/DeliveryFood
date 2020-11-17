import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import Modal from '@material-ui/core/Modal'
// import ModalBody from './ModalBody'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'

// import Box from '@material-ui/core/Box'
// import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
// import Link from '@material-ui/core/Link'
// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
// import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'

export default function ModalAdress(props) {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => {
    // setLoading(true);
    console.log(data)
  }
  // "token": "86eb2b78ae047692522f5496cf90a537e6112442",
  // "name": "Minha casa",
  // "street": "Tuiuti",
  // "number": 2230,
  // "complement": "ap201",
  // "reference": "perto do restaurante",
  // "city": 1,
  // "district": 1,
  // "cep": 97050420

  // getModalStyle is not a pure function, we roll the style only on the first render
  const getModalStyle = () => {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      display: 'flex',
      flexDirection: 'row-reverse',
      textAlign: 'center',
      border: 'none',
    }
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '90vh',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    img: {
      height: '30vh',
    },
    button: {
      height: '36px',
      position: 'absolute',
      border: 'none',
      backgroundColor: '#fff',
    },
    simpleModal: {
      height: '100%',
      width: '100%',
    },
    content: {
      textAlign: 'justify',
    },
    titleFlavors: {
      fontWeight: '300',
      fontSize: '1.6rem',
    },
    price: {
      color: '#2cb74a',
      fontSize: '1.5rem',
    },
    titleProduct: {
      fontSize: '2rem',
      fontWeight: '300',
    },
    descriptionProduct: {
      fontSize: '1rem',
      fontWeight: '100',
      textAlign: 'justify',
    },
  }))

  const classes = useStyles()
  const [active, setActive] = useState(false)
  const [modalStyle] = useState(getModalStyle)

  const actived = () => {
    setActive(!active)
  }

  return (
    <div>
      <Button size='small' onClick={actived} color='primary'>
        <AddIcon />
      </Button>
      <Modal open={active} onClose={actived}>
        <div key='modal' style={modalStyle} className={classes.paper}>
          <button className={classes.button} onClick={actived}>
            <CloseIcon />
          </button>
          <div id='simple-modal-description' className={classes.simpleModal}>
            <div className={classes.content}>
              {/* <div className={classes.paper}> */}
              <h1 className={classes.title}>Cadastrar novo Endereço</h1>
              <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  autoComplete='Nome'
                  autoFocus
                  fullWidth
                  label='Nome do novo Endereço'
                  margin='normal'
                  name='name'
                  required
                  variant='outlined'
                  inputRef={register}
                />
                <TextField
                  autoComplete='Rua'
                  autoFocus
                  fullWidth
                  label='Rua ou logradouro'
                  margin='normal'
                  name='street'
                  required
                  variant='outlined'
                  inputRef={register}
                />
                <TextField
                  autoComplete='Número'
                  fullWidth
                  label='Número'
                  margin='normal'
                  name='number'
                  required
                  variant='outlined'
                  inputRef={register}
                />
                <TextField
                  autoComplete='Complemento'
                  fullWidth
                  label='Complemento'
                  margin='normal'
                  name='complement'
                  required
                  variant='outlined'
                  inputRef={register}
                />
                <TextField
                  autoComplete='Ex: em frente ao mercado'
                  fullWidth
                  label='Referência'
                  margin='normal'
                  name='reference'
                  required
                  variant='outlined'
                  inputRef={register}
                />
                <TextField
                  autoComplete='CEP'
                  fullWidth
                  label='cep'
                  margin='normal'
                  name='cep'
                  required
                  variant='outlined'
                  inputRef={register}
                />
                <select>
                  <option>Cidade</option>
                  <option>Cidade</option>
                  <option>Cidade</option>
                </select>
                <select>
                  <option>Bairro</option>
                  <option>Bairro</option>
                  <option>Bairro</option>
                </select>
                {errors.password && <span>Informe sua senha</span>}
                <Button className={classes.submit} color='primary' fullWidth type='submit' variant='contained'>
                  Pronto
                </Button>
              </form>
              {/* </div> */}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
