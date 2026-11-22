import {
  BookOpen,
  CalendarClock,
  ChartColumn,
  Gauge,
  Headphones,
  History,
  Languages,
  Layers,
  NotebookPen,
  Sparkles,
  Timer,
  TrendingUp,
  WifiOff,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { ROUTES } from '@/shared/config'

export const NAV_LINKS = [
  { href: '#tinh-nang', label: 'Tính năng' },
  { href: '#giai-thich', label: 'Giải thích' },
  { href: '#cach-hoat-dong', label: 'Cách học' },
  { href: '#bang-gia', label: 'Bảng giá' },
  { href: '#hoi-dap', label: 'Hỏi đáp' },
] as const

export const TEST_FORMAT = [
  { value: '200', label: 'câu hỏi, đúng định dạng mới' },
  { value: '7', label: 'Part Listening và Reading' },
  { value: '120', label: 'phút, có đồng hồ như phòng thi' },
  { value: '990', label: 'điểm ước tính, chia theo kỹ năng' },
] as const

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  /** Internal route or in-page anchor. */
  href: string
  cta: string
}

/** MVP features (docs/spec, CB-*). Routes point to the coming-soon page until built. */
export const CORE_FEATURES: Feature[] = [
  {
    icon: Timer,
    title: 'Thi full test như thi thật',
    description:
      'Listening 45 phút phát liên tục, Reading 75 phút. Có bảng điều hướng câu, đánh dấu câu xem lại và tự nộp khi hết giờ.',
    href: ROUTES.tests,
    cta: 'Xem kho đề',
  },
  {
    icon: Headphones,
    title: 'Luyện theo từng Part',
    description:
      'Không giới hạn giờ, xem đáp án ngay sau mỗi câu. Chỉnh tốc độ audio từ 0.75x đến 1.25x khi luyện nghe.',
    href: ROUTES.practice,
    cta: 'Bắt đầu luyện',
  },
  {
    icon: Languages,
    title: 'Giải thích bằng tiếng Việt',
    description:
      'Mỗi câu có đáp án, lời giải thích, transcript cho Part 1–4 và bản dịch, để bạn hiểu vì sao mình sai.',
    href: '#giai-thich',
    cta: 'Xem ví dụ',
  },
  {
    icon: ChartColumn,
    title: 'Điểm ước tính và phân tích',
    description:
      'Quy đổi 5–495 cho mỗi kỹ năng, tỉ lệ đúng theo Part và dạng câu, thời gian làm từng phần.',
    href: ROUTES.tests,
    cta: 'Làm đề để xem',
  },
  {
    icon: Zap,
    title: 'Mini test 15–30 phút',
    description:
      'Đề rút gọn cho ngày bận rộn, vẫn đủ các Part để giữ nhịp luyện mỗi ngày.',
    href: ROUTES.miniTest,
    cta: 'Làm mini test',
  },
  {
    icon: History,
    title: 'Lịch sử làm bài',
    description:
      'Lưu mọi lượt làm, xem lại bài cũ cùng đáp án bạn đã chọn. Tiến độ đồng bộ giữa điện thoại và máy tính.',
    href: ROUTES.history,
    cta: 'Xem lịch sử',
  },
]

export interface RoadmapItem {
  icon: LucideIcon
  title: string
  description: string
}

/** Phase 2–3 features (docs/spec, CC-* and NC-*). */
export const ROADMAP: RoadmapItem[] = [
  {
    icon: Gauge,
    title: 'Kiểm tra đầu vào',
    description: 'Bài test 10–15 phút để biết trình độ hiện tại.',
  },
  {
    icon: Layers,
    title: 'Flashcard từ vựng',
    description: 'Ôn theo lịch lặp lại ngắt quãng, thêm từ ngay khi làm bài.',
  },
  {
    icon: NotebookPen,
    title: 'Sổ lỗi sai',
    description: 'Tự gom câu sai và nhắc bạn ôn lại đúng lúc.',
  },
  {
    icon: TrendingUp,
    title: 'Theo dõi tiến độ',
    description: 'Điểm theo thời gian, độ chính xác theo Part, chuỗi ngày học.',
  },
  {
    icon: WifiOff,
    title: 'Học offline',
    description:
      'Cài lên màn hình chính, tải trước đề và audio để làm khi mất mạng.',
  },
  {
    icon: Sparkles,
    title: 'AI Tutor',
    description: 'Hỏi tiếp vì sao đáp án khác sai và luyện câu tương tự.',
  },
]

export const STEPS = [
  {
    icon: CalendarClock,
    title: 'Đặt mục tiêu',
    description:
      'Tạo tài khoản, nhập điểm mục tiêu và ngày dự thi để TOX biết bạn cần đi bao xa.',
  },
  {
    icon: BookOpen,
    title: 'Làm đề hoặc luyện Part',
    description:
      'Làm full test để biết điểm hiện tại, hoặc luyện riêng Part bạn còn yếu.',
  },
  {
    icon: ChartColumn,
    title: 'Xem lại và luyện tiếp',
    description:
      'Đọc giải thích từng câu, xem Part nào mất điểm nhiều nhất rồi luyện đúng chỗ đó.',
  },
] as const

export const PLANS = [
  {
    name: 'Miễn phí',
    price: '0đ',
    note: 'Dùng ngay, không cần thẻ thanh toán',
    features: [
      'Làm đề và luyện theo Part',
      'Xem điểm ước tính và giải thích từng câu',
      'Lưu lịch sử làm bài',
      'Bình luận và báo lỗi đáp án',
    ],
    cta: 'Đăng ký miễn phí',
    href: ROUTES.register,
    highlighted: false,
  },
  {
    name: 'Premium',
    price: 'Sắp công bố',
    note: 'Theo tháng hoặc quý, thanh toán qua VNPay, MoMo',
    features: [
      'Mọi thứ trong gói Miễn phí',
      'Toàn bộ kho đề',
      'Phân tích sâu và lộ trình cá nhân',
      'AI Tutor giải thích và ra câu tương tự',
    ],
    cta: 'Nhận thông báo khi ra mắt',
    href: ROUTES.premium,
    highlighted: true,
  },
] as const

export const FAQS = [
  {
    question: 'Điểm trên TOX có giống điểm thi thật không?',
    answer:
      'Đây là điểm ước tính, quy đổi từ số câu đúng theo thang 5–495 cho mỗi kỹ năng (tổng 990). Điểm giúp bạn biết mình đang ở đâu, nhưng không thay thế kết quả thi chính thức.',
  },
  {
    question: 'Đề thi trên TOX lấy từ đâu?',
    answer:
      'Đề do đội ngũ TOX tự biên soạn hoặc được cấp phép, theo đúng định dạng TOEIC Listening & Reading mới. TOX không dùng lại đề của ETS hay sách có bản quyền.',
  },
  {
    question: 'Chưa đăng ký có làm thử được không?',
    answer:
      'Được. Bạn có thể làm thử khi chưa đăng nhập, nhưng kết quả sẽ không được lưu. Đăng ký miễn phí để lưu lịch sử và đồng bộ giữa các thiết bị.',
  },
  {
    question: 'Dùng trên điện thoại có tiện không?',
    answer:
      'TOX dùng tốt trên màn hình từ 360px. Trên điện thoại, đoạn văn và câu hỏi được tách thành hai tab cho dễ đọc. Sau này bạn còn có thể cài TOX lên màn hình chính và làm bài offline.',
  },
  {
    question: 'Gói Premium khác gì gói Miễn phí?',
    answer:
      'Premium mở toàn bộ kho đề, phân tích sâu, lộ trình học cá nhân và AI Tutor. Giá sẽ được công bố khi gói ra mắt.',
  },
] as const
