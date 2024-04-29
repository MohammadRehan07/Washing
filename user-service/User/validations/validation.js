import yup from 'yup';
import UserModel from '../models/User.js' 
import bcrypt from 'bcrypt'
export const userSchemaValidation = yup.object().shape({
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
  mobile: yup.string().required('mobile is required'),
  email: yup.string().email().required('email is required'),
  password: yup.string().required('password is required'),
  code: yup.string().trim(),
  address: yup.object().shape({
    street: yup.string().required('street is required'),
    city: yup.string().required('city is required'),
    pincode: yup.string().required('pincode is required'),
  }),
  isActive: yup.boolean().default(true),
});

async function validateUser(user) {
  try {
    await userSchemaValidation.validate(user, { abortEarly: false });
    const existingUser = await UserModel.findOne({
      $or: [{ mobile: user.mobile }, { email: user.email }],
    });

    if (existingUser) {
      throw new Error('Mobile or email already exists');
    }
    return { isValid: true, errors: null }; 
  } catch (error) {
    const errors = error.inner.map((err) => ({
      path: err.path,
      message: err.message,
    }));
    return { isValid: false, errors };
  }
}


export async function hashPassword(password) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
}


export default validateUser;
