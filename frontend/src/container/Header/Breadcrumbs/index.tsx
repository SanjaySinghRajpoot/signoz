import { Breadcrumb } from 'antd';
import ROUTES from 'constants/routes';
import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

const breadcrumbNameMap = {
	[ROUTES.APPLICATION]: 'Application',
	[ROUTES.TRACE]: 'Traces',
	[ROUTES.SERVICE_MAP]: 'Service Map',
	[ROUTES.USAGE_EXPLORER]: 'Usage Explorer',
	[ROUTES.INSTRUMENTATION]: 'Add instrumentation',
	[ROUTES.SETTINGS]: 'Settings',
	[ROUTES.DASHBOARD]: 'Dashboard',
	[ROUTES.VERSION]: 'Status',
};

function ShowBreadcrumbs(props: RouteComponentProps): JSX.Element {
	const { location } = props;

	const pathArray = location.pathname.split('/').filter((i) => i);

	const extraBreadcrumbItems = pathArray.map((_, index) => {
		const url = `/${pathArray.slice(0, index + 1).join('/')}`;

		if (breadcrumbNameMap[url] === undefined) {
			return (
				<Breadcrumb.Item key={url}>
					<Link to={url}>{url.split('/').slice(-1)[0]}</Link>
				</Breadcrumb.Item>
			);
		}
		return (
			<Breadcrumb.Item key={url}>
				<Link to={url}>{breadcrumbNameMap[url]}</Link>
			</Breadcrumb.Item>
		);
	});

	const breadcrumbItems = [
		<Breadcrumb.Item key="home">
			<Link to="/">Home</Link>
		</Breadcrumb.Item>,
	].concat(extraBreadcrumbItems);

	return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
}

export default withRouter(ShowBreadcrumbs);
