import { Typography } from 'antd';
import get from 'api/channels/get';
import Spinner from 'components/Spinner';
import {
	SlackChannel,
	SlackType,
	WebhookChannel,
	WebhookType,
} from 'container/CreateAlertChannels/config';
import EditAlertChannels from 'container/EditAlertChannels';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function ChannelsEdit(): JSX.Element {
	const { id } = useParams<Params>();
	const { t } = useTranslation();

	const { isLoading, isError, data } = useQuery(['getChannel', id], {
		queryFn: () =>
			get({
				id,
			}),
	});

	if (isError) {
		return <Typography>{data?.error || t('something_went_wrong')}</Typography>;
	}

	if (isLoading || !data?.payload) {
		return <Spinner tip="Loading Channels..." />;
	}

	const { data: ChannelData } = data.payload;

	const value = JSON.parse(ChannelData);
	let type = '';
	let channel: SlackChannel & WebhookChannel = { name: '' };

	if (value && 'slack_configs' in value) {
		const slackConfig = value.slack_configs[0];
		channel = slackConfig;
		type = SlackType;
	} else if (value && 'webhook_configs' in value) {
		const webhookConfig = value.webhook_configs[0];
		channel = webhookConfig;
		channel.api_url = webhookConfig.url;

		if ('http_config' in webhookConfig) {
			const httpConfig = webhookConfig.http_config;
			if ('basic_auth' in httpConfig) {
				channel.username = webhookConfig.http_config?.basic_auth?.username;
				channel.password = webhookConfig.http_config?.basic_auth?.password;
			} else if ('authorization' in httpConfig) {
				channel.password = webhookConfig.http_config?.authorization?.credentials;
			}
		}
		type = WebhookType;
	}

	return (
		<EditAlertChannels
			{...{
				initialValue: {
					...channel,
					type,
					name: value.name,
				},
			}}
		/>
	);
}
interface Params {
	id: string;
}

export default ChannelsEdit;
