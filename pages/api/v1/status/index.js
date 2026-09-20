function status(request, response) {
  response.status(200).json({ message: "API está funcionando!" });
}

export default status;
