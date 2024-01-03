// variety 1 using promise

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.error(err.code || 404).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

export { asyncHandler };
