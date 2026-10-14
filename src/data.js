export const profile = {
  name: "杨心玥",
  latin: "Yang Xinyue",
  title: "AI 产品设计 · 体验设计",
  lead: "设计 AI 产品里的操作，也设计人在空间里怎么走。",
  school: "湖北美术学院",
  major: "艺术与科技",
  minor: "艺术疗愈",
  email: "2849182439@qq.com",
  phone: "13871390864",
  phoneLabel: "138 7139 0864",
};

export const tools = ["Figma", "Claude Code", "TouchDesigner", "Arduino"];

export const honors = [
  "国家奖学金",
  "优秀毕业生",
  "院系收藏 11 次",
  "优秀作业奖学金 4 次",
  "中国国际大学生创新大赛（2025）湖北省铜奖",
  "挑战杯系列：省赛三等奖、校赛金奖",
  "大学生英语四级（CET-4）",
];

export const works = [
  {
    slug: "jiuxu",
    index: "01",
    title: "就绪",
    latin: "Jiuxu · AI Recruiting",
    org: "银河驿站",
    time: "2026.01–03",
    role: "AI 产品设计实习生",
    summary: "AI 求职平台的招聘系统，以及把事情交给 Agent 时的交互。",
    intro:
      "就绪是银河驿站的 AI 求职平台。这段实习里，招聘后台的信息架构、Agent 委托和产品的视觉规范是同一件事：让人和系统都知道下一步该发生什么。",
    points: [
      "独立负责 B 端招聘系统的体验设计，整理信息架构和核心操作链路。",
      "主导 B 端与 C 端「AI Agent 委托」，支持多模态输入，把委托的门槛放低。",
      "设计 AI Chat 与开屏动效，参与 Agent 形象和 App logo，建立 Icon 语义与视觉规范，并补上 AI 的多状态反馈。",
    ],
    result: "用 Vibe Coding 把设计到研发的周期缩短约 70%。",
    cover: { src: "/images/jiuxu.jpg", position: "38% 50%" },
    images: [
      {
        src: "/images/jiuxu.jpg",
        alt: "银河驿站招聘视觉：四张半透明职位卡片叠在浅色渐变上",
        caption: "银河驿站 · 招聘视觉",
      },
    ],
  },
  {
    slug: "hermes",
    index: "02",
    title: "爱马仕圣诞派对",
    latin: "Hermès Christmas Celebration",
    org: "Fn Media Lab",
    time: "2025",
    role: "体验流程设计",
    summary: "宾客以圣诞厨房学徒的身份入场，四步成为「爱马仕认证节日主厨」。",
    intro:
      "2025 爱马仕圣诞点灯与庆祝酒会。宾客被邀请成为圣诞厨房的学徒，从入学到毕业经历四步：入门、挑选工具、练习手艺，最后获得「爱马仕认证节日主厨」的称号。",
    points: [
      "参与活动的体验流程设计，统筹叙事与品牌调性的一致性。",
      "体验分为四层：欢迎新学徒、选择料理方向、正式训练、在节日餐桌上入席。",
      "现场包括「工具挑选」仪式照相亭和「魔法副厨挑战」互动桌。",
    ],
    cover: { src: "/images/hermes-booth.jpg", position: "62% 50%" },
    images: [
      {
        src: "/images/hermes-booth.jpg",
        alt: "爱马仕门店里的橙色厨具柜照相亭，三位穿圣诞服装的演员站在两侧",
        caption: "「工具挑选」仪式照相亭",
      },
      {
        src: "/images/hermes-table.jpg",
        alt: "宾客围在一张投影互动桌旁，桌面是圣诞厨房插画",
        caption: "魔法副厨挑战 · 互动桌",
      },
      {
        src: "/images/hermes-chef.jpg",
        alt: "戴高礼帽的宾客伸手触碰橙色厨房装置上方的灯光",
        caption: "节日厨房装置",
      },
    ],
  },
  {
    slug: "quna",
    index: "03",
    title: "99 趣拿节",
    latin: "Quna Pop-up · Shanghai",
    org: "Fn Media Lab",
    time: "2025.06–09",
    role: "体验设计实习生",
    summary: "浦东世纪汇的快闪。小程序从 0 到 1，并和现场装置连在一起。",
    intro:
      "99 趣拿节放在浦东世纪汇广场。线上的小程序要能把人带进展位，线下的装置也要能把人送回下一次互动。",
    points: [
      "独立负责活动小程序 UI/UX 全流程设计，从 0 到 1 落到现场。",
      "构建线上线下联动的参与链路和互动逻辑。",
      "用 Midjourney 生成活动视觉和素材，再按品牌调性精调。",
    ],
    result: "现场带动用户互动超过 10 万次。",
    cover: { src: "/images/quna-app.jpg", position: "50% 30%" },
    images: [
      {
        src: "/images/quna-app.jpg",
        alt: "趣拿小程序首页：进度条、快闪空间模型和 AI 拍照任务卡片",
        caption: "小程序首页",
        tall: true,
      },
      {
        src: "/images/quna-tasks.jpg",
        alt: "趣拿小程序任务页：积分卡片和已完成的 AI 拍照、赛博塔罗牌任务",
        caption: "积分与任务",
        tall: true,
      },
      {
        src: "/images/quna-space.jpg",
        alt: "趣拿节快闪展位的轴测模型",
        caption: "浦东世纪汇广场 · 快闪空间",
      },
    ],
  },
  {
    slug: "ship",
    index: "04",
    title: "南极船之书",
    latin: "The Book of the Antarctic Ship",
    org: "Fn Media Lab",
    time: "2025",
    role: "体验设计实习生",
    summary: "上海图书馆东馆的沉浸式展览，做叙事、动线和互动装置。",
    intro:
      "在 Fn Media Lab 参与「好事发生」和南极船之书两个沉浸式展览。工作是把叙事拆成可以走完的空间：人从哪里进来，在哪里停留，装置在哪一步接上故事。",
    points: [
      "参与展览概念与叙事架构设计，规划用户动线与空间体验层次。",
      "设计互动装置的交互逻辑，优化用户参与路径与沉浸感。",
      "南极船之书展览位于上海图书馆东馆。",
    ],
    images: [],
    plate: { place: "上海图书馆东馆", title: "南极船之书" },
  },
  {
    slug: "badge",
    index: "05",
    title: "融域星章",
    latin: "Round-screen Badge",
    org: "湖北美术学院",
    time: "2025",
    role: "产品与体验",
    summary: "一枚圆屏徽章。用来表达情绪，也用来和陌生人开口。",
    intro:
      "融域星章把情绪纪念品、社交破冰和可以更换的身份，收进一枚拿在手里的圆屏里。屏幕上的内容能换，硬件要小到能别在身上。",
    points: [
      "产品围绕三件事：情绪表达与归属、社交破冰、个性化内容。",
      "硬件集成 ESP32 圆屏、PCB、电池与外壳。",
      "作为省赛作品推进。",
    ],
    cover: { src: "/images/hardware.jpg", position: "76% 50%" },
    images: [
      {
        src: "/images/hardware.jpg",
        alt: "融域星章硬件爆炸图：圆屏、PCB、电池和外壳",
        caption: "硬件集成",
      },
      {
        src: "/images/xingzhang.jpg",
        alt: "融域星章产品概述：情绪表达、社交破冰与个性化定制",
        caption: "产品结构",
      },
    ],
  },
];

export const internships = [
  {
    org: "银河驿站",
    role: "AI 产品设计实习生",
    time: "2026.01–03",
    projects: [
      {
        title: "就绪 —— AI 求职平台",
        slug: "jiuxu",
        points: [
          "独立负责 B 端招聘系统体验设计，构建信息架构与核心操作链路，提升招聘效率与使用体验。",
          "主导 B / C 端「AI Agent 委托」创新交互设计，支持多模态输入方式，降低用户委托门槛，强化产品核心差异化体验。",
          "负责 AI Chat 页面及开屏的动效设计，参与 Agent 形象设计和 App logo 设计，建立 Icon 语义与视觉规范体系，设计 AI 多状态反馈机制，提升产品视觉一致性与信任感。",
          "通过 Vibe Coding 将设计到研发的周期缩短 70%。",
        ],
      },
    ],
  },
  {
    org: "Fn Media Lab",
    role: "体验设计实习生",
    time: "2025.06–09",
    projects: [
      {
        title: "99 趣拿节 · 浦东世纪汇广场快闪活动",
        slug: "quna",
        points: [
          "独立负责活动小程序 UI/UX 全流程设计，从 0 到 1 完成产品落地上线。",
          "构建线上线下联动交互流程，设计用户参与链路与互动逻辑，带动用户互动超 10 万次。",
          "运用 Midjourney 生成活动视觉及素材，结合精调确保品牌调性统一。",
        ],
      },
      {
        title: "「好事发生」沉浸式展览 / 南极船之书沉浸式展览",
        slug: "ship",
        points: [
          "参与展览概念与叙事架构设计，规划用户动线与空间体验层次。",
          "设计互动装置交互逻辑，优化用户参与路径与沉浸感。",
        ],
      },
      {
        title: "爱马仕派对 / 上海图书馆等项目",
        slug: "hermes",
        points: [
          "参与多个品牌活动与文化展览的体验流程设计，统筹叙事与品牌调性一致性。",
        ],
      },
    ],
  },
];

export function getWork(slug) {
  return works.find((work) => work.slug === slug);
}
