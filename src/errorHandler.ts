export const ErrorHandler = (err, req, res) => {
  console.log('error occurred');
  console.log(err);
  return res.status(500).send({
    message: 'something went wrong'
  });
};
