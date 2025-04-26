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
    successMessage: string
}

const FormField = ({
                       id,
                       name,
                       type = 'text',
                       autoComplete,
                       touched,
                       error,
                       placeholder,
                       successMessage
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
            />
            <ErrorMessage name={name} component="div" className="error" />
            {successMessage && (
                <ConfirmationMessage
                    message={successMessage}
                    touched={touched}
                    error={error}
                />
            )}
        </div>
    )
}

export default FormField
