import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '../components/feature/Layout';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const TeamPage = lazy(() => import('../pages/team/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const BlogDetail = lazy(() => import('../pages/blog/components/BlogDetail'));
const MaerktePage = lazy(() => import('../pages/maerkte/page'));
const KontaktPage = lazy(() => import('../pages/kontakt/page'));
const FestgeldPage = lazy(() => import('../pages/leistungen/festgeld/page'));
const FlexgeldPage = lazy(() => import('../pages/leistungen/flexgeld/page'));
const TagesgeldPage = lazy(() => import('../pages/leistungen/tagesgeld/page'));
const AktienPage = lazy(() => import('../pages/leistungen/aktien/page'));
const AnleihenPage = lazy(() => import('../pages/leistungen/anleihen/page'));
const ImpressumPage = lazy(() => import('../pages/impressum/page'));
const DatenschutzPage = lazy(() => import('../pages/datenschutz/page'));
const RechtlicheHinweisePage = lazy(() => import('../pages/rechtliche-hinweise/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

// Dashboard pages
const DashboardPage = lazy(() => import('../pages/dashboard/page'));
const FestgeldDetailPage = lazy(() => import('../pages/dashboard/festgeld/page'));
const FlexgeldDetailPage = lazy(() => import('../pages/dashboard/flexgeld/page'));
const TagesgeldDetailPage = lazy(() => import('../pages/dashboard/tagesgeld/page'));
const AktienDetailPage = lazy(() => import('../pages/dashboard/aktien/page'));
const AnleihenDetailPage = lazy(() => import('../pages/dashboard/anleihen/page'));
const ProfilPage = lazy(() => import('../pages/dashboard/profil/page'));
const LoginPage = lazy(() => import('../pages/login/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/ueber-uns',
        element: <AboutPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/team',
        element: <TeamPage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/blog/:id',
        element: <BlogDetail />,
      },
      {
        path: '/maerkte',
        element: <MaerktePage />,
      },
      {
        path: '/kontakt',
        element: <KontaktPage />,
      },
      {
        path: '/leistungen/festgeld',
        element: <FestgeldPage />,
      },
      {
        path: '/leistungen/flexgeld',
        element: <FlexgeldPage />,
      },
      {
        path: '/leistungen/tagesgeld',
        element: <TagesgeldPage />,
      },
      {
        path: '/leistungen/aktien',
        element: <AktienPage />,
      },
      {
        path: '/leistungen/anleihen',
        element: <AnleihenPage />,
      },
      {
        path: '/impressum',
        element: <ImpressumPage />,
      },
      {
        path: '/datenschutz',
        element: <DatenschutzPage />,
      },
      {
        path: '/rechtliche-hinweise',
        element: <RechtlicheHinweisePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/dashboard/festgeld',
    element: <FestgeldDetailPage />,
  },
  {
    path: '/dashboard/flexgeld',
    element: <FlexgeldDetailPage />,
  },
  {
    path: '/dashboard/tagesgeld',
    element: <TagesgeldDetailPage />,
  },
  {
    path: '/dashboard/aktien',
    element: <AktienDetailPage />,
  },
  {
    path: '/dashboard/anleihen',
    element: <AnleihenDetailPage />,
  },
  {
    path: '/dashboard/profil',
    element: <ProfilPage />,
  },
];

export default routes;