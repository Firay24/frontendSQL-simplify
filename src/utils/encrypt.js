/* eslint-disable import/no-extraneous-dependencies */
import sha256 from 'crypto-js/sha256';

const encryptMessage = (str) => {
  const key = 'secret123';
  const resultEncrypt = sha256(key + str).toString();
  return resultEncrypt.substring(0, 15);
};

export default encryptMessage;
