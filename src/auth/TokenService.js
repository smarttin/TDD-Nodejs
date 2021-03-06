import jwt from 'jsonwebtoken';

const createToken = (user) => {
  return jwt.sign({ id: user.id }, 'my-super-secret-key');
};

const verify = (token) => {
  return jwt.verify(token, 'my-super-secret-key');
};

export default { createToken, verify };
