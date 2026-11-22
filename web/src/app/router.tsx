import { createBrowserRouter, type RouteObject } from 'react-router'
import { ComingSoonPage } from '@/pages/coming-soon'
import { ROUTES } from '@/shared/config'
import { RootPage } from './root-page'

/**
 * Features that are not built yet. Each path renders the coming-soon page; replace the
 * entry with the real page when it ships.
 */
const COMING_SOON: {
  path: string
  title: string
  description: string
  demoSignIn?: boolean
}[] = [
  {
    path: ROUTES.login,
    title: 'Đăng nhập',
    description:
      'Đăng nhập bằng email hoặc Google đang được xây dựng. Trong lúc chờ, bạn có thể đăng nhập thử để xem trang chủ của học viên.',
    demoSignIn: true,
  },
  {
    path: ROUTES.register,
    title: 'Đăng ký tài khoản',
    description:
      'Bạn sẽ sớm tạo được tài khoản miễn phí để lưu lịch sử làm bài và đồng bộ giữa các thiết bị.',
  },
  {
    path: ROUTES.tests,
    title: 'Kho đề',
    description:
      'Danh sách đề full test, mini test và đề theo Part, lọc theo loại và trạng thái, đang được hoàn thiện.',
  },
  {
    path: ROUTES.practice,
    title: 'Luyện theo Part',
    description:
      'Chế độ luyện không giới hạn giờ, xem đáp án ngay sau mỗi câu, đang được xây dựng.',
  },
  {
    path: ROUTES.miniTest,
    title: 'Mini test',
    description: 'Đề rút gọn 15–30 phút cho ngày bận rộn sẽ sớm có mặt.',
  },
  {
    path: ROUTES.history,
    title: 'Lịch sử làm bài',
    description:
      'Bạn sẽ xem lại được mọi lượt làm cùng đáp án đã chọn sau khi có tài khoản.',
  },
  {
    path: ROUTES.premium,
    title: 'TOX Premium',
    description:
      'Gói Premium với toàn bộ kho đề, phân tích sâu và AI Tutor đang được chuẩn bị. Giá sẽ được công bố khi ra mắt.',
  },
  {
    path: ROUTES.contact,
    title: 'Liên hệ',
    description: 'Kênh liên hệ với đội ngũ TOX sẽ sớm được cập nhật.',
  },
  {
    path: ROUTES.terms,
    title: 'Điều khoản sử dụng',
    description: 'Điều khoản sử dụng đang được soạn thảo.',
  },
  {
    path: ROUTES.privacy,
    title: 'Chính sách quyền riêng tư',
    description:
      'Chính sách quyền riêng tư theo Nghị định 13/2023/NĐ-CP đang được soạn thảo.',
  },
]

const routes: RouteObject[] = [
  { path: ROUTES.home, element: <RootPage /> },
  ...COMING_SOON.map(({ path, ...props }) => ({
    path,
    element: <ComingSoonPage {...props} />,
  })),
]

if (import.meta.env.DEV) {
  routes.push({
    path: '/dev/ui',
    lazy: async () => {
      const { DevUiPage } = await import('@/pages/dev-ui')
      return { Component: DevUiPage }
    },
  })
}

export const router = createBrowserRouter(routes)
