import dotenv from 'dotenv';
import { getFormattedPullRequestInfo } from './commands/pull-request.js'

dotenv.config();

(async () => {
	const formattedMessage = await getFormattedPullRequestInfo(process.argv[2]);
	console.log(formattedMessage);
})()
