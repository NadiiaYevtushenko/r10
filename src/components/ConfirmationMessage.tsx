type ConfirmationMessageProps = {
    message: string
    touched?: boolean
    error?: string
}

const ConfirmationMessage = ({ message, touched, error }: ConfirmationMessageProps) => {
    if (!touched || error) return null
    return <div className="success">{message}</div>
}

export default ConfirmationMessage
