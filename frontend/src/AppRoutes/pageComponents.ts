import Loadable from 'components/Loadable';

export const ServicesTablePage = Loadable(
	() => import(/* webpackChunkName: "ServicesTablePage" */ 'pages/Metrics'),
);

export const ServiceMetricsPage = Loadable(
	() =>
		import(
			/* webpackChunkName: "ServiceMetricsPage" */ 'pages/MetricApplication'
		),
);

export const ServiceMapPage = Loadable(
	() =>
		import(
			/* webpackChunkName: "ServiceMapPage" */ 'modules/Servicemap/ServiceMap'
		),
);

export const TraceFilter = Loadable(
	() => import(/* webpackChunkName: "Trace Filter Page" */ 'pages/Trace'),
);

export const TraceDetail = Loadable(
	() => import(/* webpackChunkName: "TraceDetail Page" */ 'pages/TraceDetail'),
);

export const UsageExplorerPage = Loadable(
	() =>
		import(
			/* webpackChunkName: "UsageExplorerPage" */ 'modules/Usage/UsageExplorerDef'
		),
);

export const SignupPage = Loadable(
	() => import(/* webpackChunkName: "SignupPage" */ 'pages/SignUp'),
);

export const SettingsPage = Loadable(
	() => import(/* webpackChunkName: "SettingsPage" */ 'pages/Settings'),
);

export const InstrumentationPage = Loadable(
	() =>
		import(
			/* webpackChunkName: "InstrumentationPage" */ 'pages/AddInstrumentation'
		),
);

export const DashboardPage = Loadable(
	() => import(/* webpackChunkName: "DashboardPage" */ 'pages/Dashboard'),
);

export const NewDashboardPage = Loadable(
	() => import(/* webpackChunkName: "New DashboardPage" */ 'pages/NewDashboard'),
);

export const DashboardWidget = Loadable(
	() =>
		import(/* webpackChunkName: "DashboardWidgetPage" */ 'pages/DashboardWidget'),
);

export const EditRulesPage = Loadable(
	() => import(/* webpackChunkName: "Alerts Edit Page" */ 'pages/EditRules'),
);

export const ListAllALertsPage = Loadable(
	() => import(/* webpackChunkName: "All Alerts Page" */ 'pages/AlertList'),
);

export const CreateNewAlerts = Loadable(
	() => import(/* webpackChunkName: "Create Alerts" */ 'pages/CreateAlert'),
);

export const CreateAlertChannelAlerts = Loadable(
	() =>
		import(/* webpackChunkName: "Create Channels" */ 'pages/AlertChannelCreate'),
);

export const EditAlertChannelsAlerts = Loadable(
	() => import(/* webpackChunkName: "Edit Channels" */ 'pages/ChannelsEdit'),
);

export const AllAlertChannels = Loadable(
	() => import(/* webpackChunkName: "All Channels" */ 'pages/AllAlertChannels'),
);

export const StatusPage = Loadable(
	() => import(/* webpackChunkName: "All Status" */ 'pages/Status'),
);
