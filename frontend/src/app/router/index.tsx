import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { PublicLayout } from '../layouts/PublicLayout'
import { AdminLayout } from '../layouts/AdminLayout'
import { ProtectedRoute } from './ProtectedRoute'
import { PublicOnlyRoute } from './PublicOnlyRoute'
import { RoleRoute } from './RoleRoute'
import { ROUTES } from '../../constants/routes'
import { HomePage } from '../../features/landing/HomePage'
import { FeaturesPage } from '../../features/landing/FeaturesPage'
import { AboutPage } from '../../features/landing/AboutPage'
import { ContactPage } from '../../features/landing/ContactPage'
import { LoginPage } from '../../features/auth/LoginPage'
import { RegisterPage } from '../../features/auth/RegisterPage'
import { ForgotPasswordPage } from '../../features/auth/ForgotPasswordPage'
import { ResetPasswordPage } from '../../features/auth/ResetPasswordPage'
import { DashboardPage } from '../../features/dashboard/DashboardPage'
import { WorkspaceListPage } from '../../features/workspace/WorkspaceListPage'
import { MeetingListPage } from '../../features/meetings/MeetingListPage'
import { RecordingUploadPage } from '../../features/recordings/RecordingUploadPage'
import { TranscriptLibraryPage } from '../../features/transcripts/TranscriptLibraryPage'
import { SummaryLibraryPage } from '../../features/summaries/SummaryLibraryPage'
import { ActionItemListPage } from '../../features/action-items/ActionItemListPage'
import { SearchPage } from '../../features/search/SearchPage'
import { NotificationCenterPage } from '../../features/notifications/NotificationCenterPage'
import { AnalyticsDashboardPage } from '../../features/analytics/AnalyticsDashboardPage'
import { AuditLogViewerPage } from '../../features/audit/AuditLogViewerPage'
import { AdminConsolePage } from '../../features/admin/AdminConsolePage'
import { NotFoundPage } from '../../components/common/NotFoundPage'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.FEATURES, element: <FeaturesPage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      { path: ROUTES.CONTACT, element: <ContactPage /> },
    ],
  },
  {
    element: <PublicOnlyRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: ROUTES.LOGIN, element: <LoginPage /> },
          { path: ROUTES.REGISTER, element: <RegisterPage /> },
          { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
          { path: ROUTES.RESET_PASSWORD, element: <ResetPasswordPage /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: ROUTES.DASHBOARD, element: <DashboardPage /> },
          { path: ROUTES.WORKSPACES, element: <WorkspaceListPage /> },
          { path: ROUTES.MEETINGS, element: <MeetingListPage /> },
          { path: ROUTES.RECORDINGS, element: <RecordingUploadPage /> },
          { path: ROUTES.TRANSCRIPTS, element: <TranscriptLibraryPage /> },
          { path: ROUTES.SUMMARIES, element: <SummaryLibraryPage /> },
          { path: ROUTES.ACTION_ITEMS, element: <ActionItemListPage /> },
          { path: ROUTES.SEARCH, element: <SearchPage /> },
          { path: ROUTES.NOTIFICATIONS, element: <NotificationCenterPage /> },
          { path: ROUTES.ANALYTICS, element: <AnalyticsDashboardPage /> },
          { path: ROUTES.AUDIT_LOGS, element: <AuditLogViewerPage /> },
        ],
      },
    ],
  },
  {
    element: <RoleRoute allowedRoles={['admin']} />,
    children: [
      {
        element: <AdminLayout />,
        children: [{ path: ROUTES.ADMIN, element: <AdminConsolePage /> }],
      },
    ],
  },
  { path: '/dashboard-old', element: <Navigate replace to={ROUTES.DASHBOARD} /> },
  { path: '*', element: <NotFoundPage /> },
])
