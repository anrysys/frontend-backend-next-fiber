import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';

type ResponseData = {
    data: unknown
}

const AUTH_API_URL = 'http://localhost:8000/api/v1/auth/login';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        // Make a request to the backend API for authentication
        const response = await axios.post(AUTH_API_URL, req.body)


        console.log("response from server:", response)

        // Check if the authentication was successful
        if (response.status === 200) {
            // Authentication successful, return a success message
            res.status(200).json({ data: response.data })
        } else {
            // Authentication failed, return an error message
            res.status(401).json({ data: response.data })
        }
    } catch (error) {
        // An error occurred during the authentication process
        res.status(500).json({ data: null })
    }
}