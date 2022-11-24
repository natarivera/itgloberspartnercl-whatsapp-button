import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string // whatsaapp.png
  phone: string // 321456789
  message: string // Hola
  width: number
  height: number
}
const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')

  console.log('Mi mensaje formateado es', formattedMessage, logo)

  return (
    <>
      <div className="fixed bottom-2 right-2 flex flexColumn">
        <a
          href={`https://wa.me/${phone}?text${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={logo} width={width} height={height} alt="Whatsapp logo" />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'mi-logo.png',
  phone: '573213581717',
  message: 'Hola',
  width: 58,
  height: 58,
}

WhatsappButton.schema = {
  title: 'Whatsapp Button',
  type: 'object',
  properties: {
    logo: {
      title: 'Whatsapp logo',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Phone',
      description: 'Agrega el número de teléfono',
      type: 'string',
    },
    message: {
      title: 'Message',
      description: 'Agrega el mensaje que se verá para tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
  },
}

export default WhatsappButton
