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

const handleSubmit = (values: typeof initialValues) => {
    console.log('Form submitted with values:', values)
}

const randomSuffix = Math.random().toString(36).substring(2, 10)

const HyperspaceForm = () => {
    const fields = [
        { id: 'firstName', type: 'text', placeholder: 'Enter your first name', successMessage: 'First name is valid' },
        { id: 'lastName', type: 'text', placeholder: 'Enter your last name', successMessage: 'Last name is valid' },
        { id: 'workEmail', type: 'email', placeholder: 'Enter your work email', successMessage: 'Work email is valid' },
        { id: 'jobTitle', type: 'text', placeholder: 'Enter your job title', successMessage: 'Job title is valid' },
        { id: 'phoneNumber', type: 'text', placeholder: 'Enter your phone number', successMessage: 'Phone number is valid' },
    ];

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnMount={true}
        >
            {({ errors, touched, isValid }) => (
                <Form autoComplete="off">
                    {fields.map(({ id, type, placeholder, successMessage }) => (
                        <FormField
                            key={id}
                            id={`${id}-${randomSuffix}`}
                            name={id}
                            type={type}
                            placeholder={placeholder}
                            successMessage={successMessage}
                            touched={touched[id as keyof typeof touched]}
                            error={errors[id as keyof typeof errors]}
                        />
                    ))}

                    <button type="submit" disabled={!isValid}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default HyperspaceForm