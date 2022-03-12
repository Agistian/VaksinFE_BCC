import axios from 'axios';

export const tweetAPI = axios.create({
	baseURL:
		'http://intern-bcc-3.ap-southeast-1.elasticbeanstalk.com',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Credentials':'true'
	},
});
