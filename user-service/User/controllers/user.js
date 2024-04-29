import UserModel from "../models/User.js"
import {userSchemaValidation} from '../validations/validation.js'
import { successResponse, failureResponse } from '../utils/responseHelper.js';
import { hashPassword } from '../validations/validation.js'; 
export const createUser = async (req, res) => {
    try {
      await userSchemaValidation.validate(req.body);
      const hashedPassword = await hashPassword(req.body.password);
      req.body.password = hashedPassword;
      const user = await UserModel.create(req.body);
      return successResponse(res,user)
    } catch (error) {
      console.log(error)
    return  failureResponse(res,error.message);
    }
  };