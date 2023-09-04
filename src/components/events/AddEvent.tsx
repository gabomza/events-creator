import { FC, useState } from 'react'

import { Event } from '@/model/types'

import css from './AddEvent.module.css'

export interface IAddEventProps {
  onSave: (event: Event) => void
}

const AddEvent: FC<IAddEventProps> = ({ onSave }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [price, setPrice] = useState('')
  const [additionalInfo, setAdditionalInfo] = useState('')

  const [calendarInfo, setCalendarInfo] = useState('')
  const [whatsappInfo, setWhatsappInfo] = useState('')

  const clearData = () => {
    setTitle('')
    setDescription('')
    setLocation('')
    setDate('')
    setPrice('')
    setAdditionalInfo('')
  }

  const generateInfo = () => {

    const parsedAdditionalInfo = additionalInfo.replace(/\n/g, '<br />')
    const parsedDescription = description.replace(/\n/g, '<br />')

    const calendarInfo = `
      <p>
        <b>${title}</b>
        <br /><br />
        ${parsedDescription}
        <br /><br />
        <b>¿Dónde?</b> ${location}
        <br />
        <b>¿Cuándo?</b> ${date}
        <br />
        <b>¿Cuánto?</b> ${price}
        <br /><br />
        <b>Más info:</b><br />
        ${parsedAdditionalInfo}
      </p>
    `

    const whatsappInfo = `
      <p>
        *${title}*
        <br /><br />
        ${parsedDescription}
        <br /><br />
        *¿Dónde?* ${location}
        <br />
        *¿Cuándo?* ${date}
        <br />
        *¿Cuánto?* ${price}
        <br /><br />
        *Más info:*<br />
        ${parsedAdditionalInfo}
      </p>
    `

    setCalendarInfo(calendarInfo)
    setWhatsappInfo(whatsappInfo)

    const eventData: Event = {
      additionalInfo: parsedAdditionalInfo,
      date,
      description: parsedDescription,
      location,
      price,
      title
    }

    onSave(eventData)

  }

  return (
    <>
      <h1>Create Event</h1>

      <div className={css.form}>
        <div>
          Evento:&nbsp;
          <input
            type="text"
            name="title"
            className={css.formInput}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          Descripción:&nbsp;
          <textarea
            name="description"
            value={description}
            className={css.formTextarea}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          Donde:&nbsp;
          <input
            type="text"
            name="where"
            className={css.formInput}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          Cuando:&nbsp;
          <input
            type="text"
            name="when"
            className={css.formInput}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          Cuanto:&nbsp;
          <input
            type="text"
            name="price"
            className={css.formInput}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          Más info:&nbsp;
          <textarea
            name="extra"
            value={additionalInfo}
            className={css.formTextarea}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />
        </div>
      </div>
      <div className={css.buttons}>
        <button onClick={generateInfo}>Generar</button>
        <button onClick={clearData}>Limpiar</button>
      </div>
      <div className={css.results}>
        <div id="calendarEvent" dangerouslySetInnerHTML={{ __html: calendarInfo }} />
        <div id="whatsappEvent" dangerouslySetInnerHTML={{ __html: whatsappInfo }} />
      </div>
    </>
  )
}

export default AddEvent
