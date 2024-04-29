const sendResponse = (res, status, data) => {
    return res.status(status).json(data);
  };

export const successResponse=(res, data, statusCode = 200)=>{
return sendResponse(res,statusCode,{data})
}

export const failureResponse = (res, message, statusCode = 500) => {
    return sendResponse(res, statusCode, { message });
  };