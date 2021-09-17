import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(2, 'Username  must be 2 characters long!'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'xlarge', 'xxlarge', 'largest'], 'Role is required!'),
    sauce: yup
        .string()
        .oneOf(['red', 'bbq', 'alfredo'], 'Sauce is required!'),
    spIns: yup
        .string()
        .trim(),
    beef: yup.boolean(),
    bacon: yup.boolean(),
    chicken: yup.boolean(),
    sausage: yup.boolean(),
    pepperoni: yup.boolean(),
    meatball: yup.boolean(),
    salami: yup.boolean(),
    steak: yup.boolean(),
    onions: yup.boolean(),
    peppers: yup.boolean(),
    olives: yup.boolean()
})

export default formSchema;