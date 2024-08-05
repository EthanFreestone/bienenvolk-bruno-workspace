//import axios from 'axios';
import { getBaseUrl } from "../utils";
import { getCreds, getIgnoreCreds, getTenant, getToken } from './auth-utils';

const axios = require('axios'); // This comes from bruno context...

// Right now login-with-expiry won't work against localhost
const getLoginWithExpiryUrl = () => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}/authn/login-with-expiry`;
}

const getLoginUrl = () => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}/authn/login`;
}

const loginFunc = async (withExpiry = true) => {
  const ignoreCreds = getIgnoreCreds();

  // Ensure that x-okapi-tenant is set if NOT set by request
  const preExistingHeaders = req.getHeaders();
  console.log("PEH: %o", preExistingHeaders);
  req.setHeader('x-okapi-tenant', getTenant()) // Keep an eye on this in PM we needed some funky stuff for "disabled" headers
  
  // Way to ignore creds for local endpoints
  if (!ignoreCreds || ignoreCreds === false) {
    const url = withExpiry ? getLoginWithExpiryUrl() : getLoginUrl();
    console.log(`Sending login request to ${url}`)
    // This currently seems to crash bruno pretty spectacularly
    await axios.post(
      url,
      getCreds(),
      {
        headers: {
          "Content-type": "application/json",
          "x-okapi-tenant": getTenant()
        },
      }
    ).then((internalRes) => {
      const token = internalRes.headers.get("x-okapi-token")
      console.log("INTERNAL RES: %o", internalRes)
      bru.setVar("x-okapi-token-value", token)
    })
    .catch(err => {
      console.error("WHAT HAPPENED HERE: %o", err);
    });
    
    if (!withExpiry) {
      req.setHeader('x-okapi-token', getToken())
    }
  }
};

const login = () => loginFunc(false);
const loginWithExpiry = () => loginFunc();

export {
  getTenant,
  login,
  loginWithExpiry,
}