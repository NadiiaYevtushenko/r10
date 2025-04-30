import { useState } from 'react'
import { Form, Formik } from 'formik'
import { object, string } from 'yup'
import FormField from './FormField'

const validationSchema = object({
    firstName: string()
        .required('First Name is required')
        .min(2, 'First Name must be at least 2 characters long')
        .max(30, 'First Name must be less than 30 characters long'),
    lastName: string()
        .required('Last Name is required')
        .min(2, 'Last Name must be at least 2 characters long')
        .max(30, 'Last Name must be less than 30 characters long'),
    workEmail: string()
        .required('Work Email is required')
        .email('Email must be a valid email address'),
    jobTitle: string()
        .required('Job Title is required')
        .min(2, 'Job Title must be at least 2 characters long')
        .max(50, 'Job Title must be less than 50 characters long'),
    phoneNumber: string()
        .required('Phone Number is required')
        .matches(
            /^\+38\d{10}$/,
            'Phone Number must start with +38 and must be 12 digits long, including the country code'
        )
})

const initialValues = {
    firstName: '',
    lastName: '',
    workEmail: '',
    jobTitle: '',
    phoneNumber: ''
}

const randomSuffix = Math.random().toString(36).substring(2, 10)

const HyperspaceForm = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const handleSubmit = (
        values: typeof initialValues,
        { resetForm }: { resetForm: () => void }
    ) => {
        console.log('Form submitted with values:', values)
        setIsFormSubmitted(true)
        resetForm()
    }

    const closeModal = () => {
        setIsFormSubmitted(false)
    }

    const fields = [
        {
            id: 'firstName',
            type: 'text',
            placeholder: 'Enter your first name',
            confirmationMessage: 'First name is valid',
            ariaLabel: 'Enter your first name'
        },
        {
            id: 'lastName',
            type: 'text',
            placeholder: 'Enter your last name',
            confirmationMessage: 'Last name is valid',
            ariaLabel: 'Enter your last name'
        },
        {
            id: 'workEmail',
            type: 'email',
            placeholder: 'Enter your work email',
            confirmationMessage: 'Work email is valid',
            ariaLabel: 'Enter your work email'
        },
        {
            id: 'jobTitle',
            type: 'text',
            placeholder: 'Enter your job title',
            confirmationMessage: 'Job title is valid',
            ariaLabel: 'Enter your job title'
        },
        {
            id: 'phoneNumber',
            type: 'text',
            placeholder: 'Enter your phone number',
            confirmationMessage: 'Phone number is valid',
            ariaLabel: 'Enter your phone number (format: +380XXXXXXXXX)'
        }
    ]

    return (
        <div className="form-container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnMount={true}
            >
                {({ errors, touched, isValid }) => (
                    <Form autoComplete="off">
                        {fields.map(({ id, type, placeholder, confirmationMessage, ariaLabel }) => (
                            <FormField
                                key={id}
                                id={`${id}-${randomSuffix}`}
                                name={id}
                                type={type}
                                placeholder={placeholder}
                                confirmationMessage={confirmationMessage}
                                ariaLabel={ariaLabel} // Передаємо атрибут ARIA
                                touched={touched[id as keyof typeof touched]}
                                error={errors[id as keyof typeof errors]}
                            />
                        ))}

                        <button type="submit" disabled={!isValid} className="submit-button">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>

            {isFormSubmitted && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Form submitted successfully!</p>
                        <button onClick={closeModal} className="ok-button">
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HyperspaceForm