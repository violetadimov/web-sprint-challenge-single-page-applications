import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .required('Name is Required'),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'extra large'], 'You must select a size')
    .required('You must select a size'),
  sauce: yup
    .string()
    .oneOf(['marinara', 'spinach alfredo', 'no sauce'], 'You must select a sauce')
    .required('You must select a sauce'),
  instructions: yup
    .string()
    .min(3, 'Name must be at least 3 characters long')
  
})

export default formSchema