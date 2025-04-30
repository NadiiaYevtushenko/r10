import { ErrorMessage, Field } from 'formik'
import ConfirmationMessage from './ConfirmationMessage'

type FormFieldProps = {
    id: string
    name: string
    type?: string
    autoComplete?: string
    touched?: boolean
    error?: string
    placeholder: string
    confirmationMessage: string
    ariaLabel?: string // Додаємо підтримку ARIA-атрибутів
}

const FormField = ({
                       id,
                       name,
                       type = 'text',
                       autoComplete,
                       touched,
                       error,
                       placeholder,
                       ariaLabel, // Передаємо значення aria-label
                       confirmationMessage
                   }: FormFieldProps) => {
    const autoCompleteProps =
        autoComplete !== undefined
            ? { autoComplete }
            : {
                autoComplete: 'off',
                autoCorrect: 'off',
                autoCapitalize: 'off',
                spellCheck: 'false'
            }

    return (
        <div className="form-group">
            <Field
                id={id}
                name={name}
                type={type}
                {...autoCompleteProps}
                placeholder={placeholder}
                aria-label={ariaLabel} // Додаємо ARIA-атрибут
            />
            <ErrorMessage name={name} component="div" className="error" />
            {confirmationMessage && (
                <ConfirmationMessage
                    message={confirmationMessage}
                    touched={touched}
                    error={error}
                />
            )}
        </div>
    )
}

export default FormField