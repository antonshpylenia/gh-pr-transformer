import fetch from 'node-fetch';

const requestedTeamsToSlackGroup = {
	'web-wet': 'wet',
	'web-wint': 'wint',
	'web-mysixt': 'mysixt'
};

export const getFormattedPullRequestInfo = async (pullRequestNumber) => {
	const owner = 'Sixt';
	const repo = 'com.sixt.web.public';
	if (!pullRequestNumber) {
		throw new Error('No pull request number')
	}

	try {

		const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/pulls/${pullRequestNumber}`, {
			headers: {
				'Authorization': 'Bearer ' + process.env.GITHUB_SECRET,
			}
		})
		const data = await response.json();
		console.log(data);
		const res = {
			title: data.title,
			url: data.html_url,
			teams: data.requested_teams.map(t => `@${requestedTeamsToSlackGroup[t.slug] || t.slug}`).join(', '),
			additions: data.additions,
			deletions: data.deletions,
		};
		return `<${res.url}|${res.title}> | +${res.additions} / -${res.deletions} | ${res.teams}`;
	} catch (e) {
		throw new Error('No PR data for ' + pullRequestNumber);
	}
}
