require('dotenv').config()

// mailing credentials
const ZEPTO_CREDENTIALS ={
    baseUrl: process.env.ZEPTO_URL,
    authToken: process.env.ZEPTO_TOKEN,
    noReply: process.env.NO_REPLY_ADDRESS,
}

// AWS credentials

// DB credentials

// DB credentials

// Basic credentials
const FE_BASE_URL=process.env.FRONTEND_URL

// JWT
const JWT_SECRET=process.env.JWT_SECRET


module.exports = {
    ZEPTO_CREDENTIALS,
    FE_BASE_URL,
    JWT_SECRET
}