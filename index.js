import { getFormattedPullRequestInfo } from './commands/pull-request.js';

export const handler = async (event, context) => {
	const pullRequestNumber = event.text;

	if(!pullRequestNumber) {
		return context.fail('No pull_number');
	}

	try {
		const formattedMessage = await getFormattedPullRequestInfo(pullRequestNumber);

		return {
			"response_type": "in_channel",
			"text": formattedMessage
		}
	} catch (e) {
		return {
			"response_type": "ephemeral",
			"text": e.toString()
		}
	}
};
