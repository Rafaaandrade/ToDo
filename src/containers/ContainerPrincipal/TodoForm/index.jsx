import React, { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { TaskListContext } from './../../../contexts/TaskListContext';
import ButtonDefault from './../../../components/ButtonDefault/index';
import FieldForm from './../../../components/FieldForm/index';
import { Container, FormControlLabel } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaValidation } from './../../../utils/Validation/taskValidation';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

import useStyles from './styles';

const TodoForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext( TaskListContext )
  const [ title, setTitle ] = useState( '' )
  const [ desc, setDesc ] = useState( '' )
  const [ date, setDate ] = useState( '' )
  const [ isFavorite, setIsfavorite ] = useState( false );
  const { register, handleSubmit, errors } = useForm( {
    resolver: yupResolver( schemaValidation ),
    reValidateMode: 'onBlur'
  } );

  const onSubmit = ( e ) => {
    if ( !editItem ) {
      addTask( title, desc, date, isFavorite )
      setTitle( '' )
      setDesc( '' )
      setDate( '' )
      setIsfavorite( false )

    } else {
      editTask( title, editItem.id, desc, date, isFavorite )
    }

    console.log( desc )
  }
  useEffect( () => {
    if ( editItem ) {
      setTitle( editItem.title )
      setDesc( editItem.desc )
      setDate( editItem.date )
      setIsfavorite( editItem.isFavorite )
      console.log( editItem )
    } else {
      setTitle( '' )
      setDesc( '' )
      setDate( '' )
      setIsfavorite( false )
    }
  }, [ editItem ] )

  const styles = useStyles()

  return (
    <form onSubmit={ handleSubmit( onSubmit ) } className="form">
      <Container className={ styles.form }>

        <FieldForm
          label='Digite sua tarefa...'
          value={ title }
          onChange={ event => setTitle( event.target.value ) }
          name='title'
          inputRef={ register( { required: true } ) }
          type={ "text" }
          errors={ errors }
        />
        <FieldForm
          label='Digite a descrição'
          name='desc'
          value={ desc }
          inputRef={ register( { required: true } ) }
          onChange={ event => setDesc( event.target.value ) }
          errors={ errors }
        />
        <FieldForm
          value={ date }
          name='date'
          type="date"
          onChange={ event => setDate( event.target.value ) }
          errors={ errors }
          required
        />
        <FormControlLabel
          control={
            <Tooltip title={ <h2 style={ { fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>A tarefa vai será destacada com um ícone { <InfoIcon className={ styles.tooltip } /> }</h2> } placement="left">
              <Checkbox checked={ isFavorite } value={ isFavorite } onChange={ event => setIsfavorite( event.target.checked ) } name="checkedA" className={ styles.switch } />
            </Tooltip>
          }
          label="Importante"
          className={ styles.switch } />

        <Container className={ styles.buttons }>
          <ButtonDefault type="submit" >
            { editItem ? 'Salvar alteração' : <AddIcon /> }
          </ButtonDefault>
          { editItem ? '' :
            <ButtonDefault onClick={ clearList }>
              Apagar tarefas
           </ButtonDefault> }


        </Container>



      </Container>

    </form>
  )
}

export default TodoForm
