// Content blocks a work page can use:
//   { type: "text", heading?, body }                 body: string or string[]
//   { type: "image", src, alt, caption?, tall? }
//   { type: "images", items: [image, ...] }           side by side
//   { type: "gallery", items: [image, ...] }          swipeable
//   { type: "video", src?, embed?, poster, caption? } no src/embed = placeholder
//   { type: "embed", src, title, ratio?, note? }      interactive web page
//   { type: "stats", items: [{ value, label }] }
//   { type: "steps", heading?, items: [{ title, body }] }
//   { type: "list", heading?, items: [string] }
// `draft: true` marks works whose text still needs filling in.

export const categories = [
  { id: "all", label: "全部" },
  { id: "work", label: "实习与工作" },
  { id: "student", label: "学生作品" },
];

export const works = [
  {
    slug: "jiuxu",
    category: "work",
    featured: true,
    title: "就绪",
    latin: "Starways · Navigate your career",
    org: "银河驿站",
    time: "2026",
    role: "AI 产品设计实习生",
    tags: ["AI 产品", "产品界面"],
    summary: "以 AI 经纪人为核心的求职 App：Agent 主动推荐方向和机会，也替招聘方推人才。",
    cover: { src: "/images/jiuxu.jpg", position: "38% 50%" },
    blocks: [
      {
        type: "text",
        heading: "项目背景",
        body: [
          "AI Agent 正在重塑招聘行业。传统招聘平台信息过载、反馈滞后、缺乏个性化指导。",
          "求职者不清楚什么方向真正适合自己，高潜力公司难以发现，海投效率极低，困惑无人解答。招聘者面对大量简历，精准人才难定位，匹配依赖人工判断。",
        ],
      },
      {
        type: "steps",
        heading: "创新思路",
        items: [
          {
            title: "反向推荐",
            body: "求职者不再用关键词搜职位，Agent 根据期望主动推荐职业方向与高潜公司；招聘方不再筛简历，Agent 主动推人才。",
          },
          {
            title: "对话即服务",
            body: "职业判断、公司分析、简历修改、面试准备都在对话中完成，不用在多个功能页之间跳转，Agent 结合记忆给出个性化建议。",
          },
        ],
      },
      {
        type: "steps",
        heading: "核心体验",
        items: [
          {
            title: "语音对话",
            body: "用语音对话替代表单填写，捕捉简历之外的个人特质。语音球视觉与呼吸动效由 Claude Code 辅助迭代生成。",
          },
          {
            title: "第一封信",
            body: "经纪人首信以手写信呈现，用场景化叙事建立情感连接，同时自然交代筛机会、看匹配、打磨简历、准备面试等功能。",
          },
          {
            title: "求职委托",
            body: "选择或新建一个求职期望，经纪人 24 小时在全网找匹配的机会。岗位更新、经纪人笔记、简历状态一屏可见。",
          },
          {
            title: "招聘认领岗位",
            body: "企业快速入驻、认领岗位，选择自己的招聘经纪人。",
          },
        ],
      },
      {
        type: "image",
        src: "/images/jiuxu.jpg",
        alt: "银河驿站招聘视觉：四张半透明职位卡片叠在浅色渐变上",
        caption: "银河驿站 · 招聘视觉",
      },
      {
        type: "list",
        heading: "我的工作",
        items: [
          "独立负责 B 端招聘系统的体验设计，整理信息架构和核心操作链路。",
          "主导 B 端与 C 端「AI Agent 委托」，支持多模态输入。",
          "设计 AI Chat 与开屏动效，参与 Agent 形象和 App logo，建立 Icon 语义与视觉规范，设计 AI 多状态反馈。",
        ],
      },
      { type: "stats", items: [{ value: "70%", label: "Vibe Coding 缩短设计到研发的周期" }] },
    ],
  },
  {
    slug: "hermes",
    category: "work",
    featured: true,
    title: "爱马仕圣诞派对",
    latin: "Hermès Christmas Celebration",
    org: "Fn Media Lab",
    time: "2025",
    role: "体验流程设计",
    tags: ["空间与展览", "交互装置"],
    summary: "宾客以圣诞厨房学徒的身份入场，四步成为「爱马仕认证节日主厨」。",
    cover: { src: "/images/hermes-booth.jpg", position: "62% 50%" },
    blocks: [
      {
        type: "text",
        heading: "概念",
        body: "2025 爱马仕圣诞点灯与庆祝酒会。宾客被邀请成为圣诞厨房的学徒，从入学到毕业经历四步，最后获得「爱马仕认证节日主厨」的称号。",
      },
      {
        type: "steps",
        heading: "四层旅程",
        items: [
          { title: "1F", body: "欢迎，新学徒。" },
          { title: "2F", body: "选择你的料理方向。" },
          { title: "3F", body: "正式训练开始。" },
          { title: "4F", body: "在节日餐桌上入席。" },
        ],
      },
      {
        type: "image",
        src: "/images/hermes-booth.jpg",
        alt: "爱马仕门店里的橙色厨具柜照相亭，三位穿圣诞服装的演员站在两侧",
        caption: "「工具挑选」仪式照相亭",
      },
      {
        type: "images",
        items: [
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
        type: "list",
        heading: "我的工作",
        items: ["参与活动的体验流程设计，统筹叙事与品牌调性的一致性。"],
      },
    ],
  },
  {
    slug: "quna",
    category: "work",
    featured: true,
    title: "99 趣拿节",
    latin: "Quna Pop-up · Shanghai",
    org: "Fn Media Lab",
    time: "2025.06–09",
    role: "体验设计实习生",
    tags: ["产品界面", "空间与展览"],
    summary: "浦东世纪汇的快闪。小程序从 0 到 1，并和现场装置连在一起。",
    cover: { src: "/images/quna-app.jpg", position: "50% 30%" },
    blocks: [
      {
        type: "text",
        heading: "项目背景",
        body: "99 趣拿节在浦东世纪汇广场举办。线上的小程序要能把人带进展位，线下的装置也要能把人送回下一次互动。",
      },
      {
        type: "images",
        items: [
          {
            src: "/images/quna-app.jpg",
            alt: "趣拿小程序首页：进度条、快闪空间模型和 AI 拍照任务卡片",
            caption: "小程序首页",
            tall: true,
          },
          {
            src: "/images/quna-tasks.jpg",
            alt: "趣拿小程序任务页：积分卡片和已完成的任务",
            caption: "积分与任务",
            tall: true,
          },
        ],
      },
      {
        type: "image",
        src: "/images/quna-space.jpg",
        alt: "趣拿节快闪展位的轴测模型",
        caption: "浦东世纪汇广场 · 快闪空间",
      },
      {
        type: "video",
        poster: "/images/quna-space.jpg",
        caption: "赛博塔罗牌 · 现场互动（视频待上传）",
      },
      {
        type: "list",
        heading: "我的工作",
        items: [
          "独立负责活动小程序 UI/UX 全流程设计，从 0 到 1 落到现场。",
          "构建线上线下联动的参与链路和互动逻辑。",
          "用 Midjourney 生成活动视觉和素材，再按品牌调性精调。",
        ],
      },
      { type: "stats", items: [{ value: "10 万+", label: "现场带动的用户互动次数" }] },
    ],
  },
  {
    slug: "ship",
    category: "work",
    draft: true,
    title: "南极船之书",
    latin: "The Book of the Antarctic Ship",
    org: "Fn Media Lab",
    time: "2025",
    role: "体验设计实习生",
    tags: ["空间与展览", "交互装置"],
    summary: "上海图书馆东馆的沉浸式展览，做叙事、动线和互动装置。",
    plate: { place: "上海图书馆东馆", title: "南极船之书" },
    blocks: [
      {
        type: "text",
        heading: "项目介绍",
        body: "在 Fn Media Lab 参与「好事发生」和南极船之书两个沉浸式展览。工作是把叙事拆成可以走完的空间：人从哪里进来，在哪里停留，装置在哪一步接上故事。",
      },
      {
        type: "list",
        heading: "我的工作",
        items: [
          "参与展览概念与叙事架构设计，规划用户动线与空间体验层次。",
          "设计互动装置的交互逻辑，优化用户参与路径与沉浸感。",
        ],
      },
      { type: "video", caption: "展览现场（图片与视频待补充）" },
    ],
  },
  {
    slug: "symbion",
    category: "work",
    featured: true,
    draft: true,
    title: "Symbion 共生",
    latin: "Symbion · Human and AI",
    org: "待补充",
    time: "待补充",
    role: "待补充",
    tags: ["AI 产品", "网页"],
    summary: "人与 AI 共生智能的品牌官网。下方可以直接操作网页。",
    cover: { src: "/images/symbion-creation.jpg", position: "50% 50%" },
    blocks: [
      {
        type: "text",
        heading: "项目介绍",
        body: "「人定义智能。Cosmo 承载智能。Citta 把智能做成工作。」Symbion 中国区官网。项目背景与我的角色待补充。",
      },
      {
        type: "embed",
        src: "/embeds/symbion/index.html",
        title: "Symbion 官网",
        note: "可滚动、点击浏览",
      },
      {
        type: "images",
        items: [
          { src: "/images/symbion-creation.jpg", alt: "黑底上两只线框手相对伸出", caption: "Creation" },
          { src: "/images/symbion-wash.jpg", alt: "蓝黑色的晕染背景", caption: "首屏背景" },
        ],
      },
    ],
  },
  {
    slug: "badge",
    category: "student",
    featured: true,
    title: "融域星章",
    latin: "Round-screen Badge",
    org: "湖北美术学院 · 大创 2025",
    time: "2025",
    role: "产品与体验",
    tags: ["硬件", "交互装置"],
    summary: "为 Z 世代打造的动态互动式个性社交标识。用来表达情绪，也用来和陌生人开口。",
    cover: { src: "/images/hardware.jpg", position: "76% 50%" },
    blocks: [
      {
        type: "text",
        heading: "产品定义",
        body: "融域星章把情绪纪念品、社交破冰和可以更换的身份，收进一枚拿在手里的圆屏里。屏幕上的内容能换，硬件要小到能别在身上。",
      },
      {
        type: "steps",
        heading: "三个用途",
        items: [
          { title: "情绪表达与归属", body: "独特纪念物、仪式感、情感联结纽带。" },
          { title: "社交破冰", body: "粉丝社群、企业团队的破冰工具。" },
          { title: "个性化定制", body: "外观与功能模块按场景定制，屏幕内容可以任意切换。" },
        ],
      },
      {
        type: "image",
        src: "/images/xingzhang.jpg",
        alt: "融域星章产品概述：情绪表达、社交破冰与个性化定制",
        caption: "产品概述",
      },
      {
        type: "image",
        src: "/images/hardware.jpg",
        alt: "融域星章硬件爆炸图：圆屏、PCB、电池和外壳",
        caption: "硬件集成：ESP32 圆屏、PCB、3.7V 锂电池、外壳",
      },
    ],
  },
  {
    slug: "grad",
    category: "student",
    featured: true,
    draft: true,
    title: "毕业设计",
    latin: "Graduation Project",
    org: "湖北美术学院",
    time: "2026",
    role: "待补充",
    tags: ["交互装置", "声音与影像"],
    summary: "TouchDesigner 实时影像与投影装置，在毕业展展出。项目名与说明待补充。",
    cover: { src: "/images/grad-board.jpg", position: "50% 50%" },
    blocks: [
      { type: "text", heading: "项目介绍", body: "项目名称、概念与过程待补充。" },
      {
        type: "image",
        src: "/images/grad-board.jpg",
        alt: "展厅一角：墙上挂着几张照片，前方立着两块白色展板",
        caption: "展出现场",
      },
      {
        type: "video",
        poster: "/images/grad-demo.jpg",
        caption: "实时影像 demo（视频待上传）",
      },
    ],
  },
  {
    slug: "veil",
    category: "student",
    draft: true,
    title: "Veilspace 帷心界",
    latin: "Veilspace",
    org: "联合工作营 2.0",
    time: "待补充",
    role: "待补充",
    tags: ["产品界面"],
    summary: "联合工作营 2.0 的 App 设计。项目说明待补充。",
    cover: { src: "/images/veil-1.jpg", position: "30% 50%" },
    blocks: [
      { type: "text", heading: "项目介绍", body: "项目背景、用户与核心功能待补充。" },
      {
        type: "gallery",
        items: [
          { src: "/images/veil-1.jpg", alt: "Veilspace 帷心界封面页", caption: "封面" },
          { src: "/images/veil-2.jpg", alt: "Veilspace 数据与图表页面", caption: "界面 01" },
          { src: "/images/veil-3.jpg", alt: "Veilspace 内容列表页面", caption: "界面 02" },
          { src: "/images/veil-4.jpg", alt: "Veilspace 多个手机界面并列", caption: "界面 03" },
        ],
      },
      { type: "video", poster: "/images/veil-1.jpg", caption: "项目视频（待上传）" },
    ],
  },
  {
    slug: "food",
    category: "student",
    draft: true,
    title: "可食用频率",
    latin: "Edible Frequency",
    org: "实验声音",
    time: "待补充",
    role: "待补充",
    tags: ["声音与影像"],
    summary: "实验声音课程作品。酸、甜、苦、辣、咸各一段影像。",
    cover: { src: "/images/food-sweet.jpg", position: "50% 50%" },
    blocks: [
      { type: "text", heading: "项目介绍", body: "概念与制作方式待补充。" },
      {
        type: "images",
        items: [
          { src: "/images/food-sweet.jpg", alt: "彩色圆点组成的点阵画面", caption: "甜" },
          { src: "/images/food-pudding.jpg", alt: "点阵画面旁边是黄色的参数界面", caption: "布丁 + UI" },
        ],
      },
      { type: "video", poster: "/images/food-pudding.jpg", caption: "完整影像（视频待上传）" },
    ],
  },
  {
    slug: "cards",
    category: "student",
    draft: true,
    title: "同春牌话",
    latin: "Shangdaren Cards",
    org: "待补充",
    time: "2024",
    role: "待补充",
    tags: ["视觉与动效"],
    summary: "以上大人牌为主题的视觉与卡牌动效。",
    cover: { src: "/images/cards-1.jpg", position: "50% 30%" },
    blocks: [
      { type: "text", heading: "项目介绍", body: "项目背景与说明待补充。" },
      {
        type: "images",
        items: [
          { src: "/images/cards-1.jpg", alt: "同春牌话深蓝色海报", caption: "海报 · 蓝", tall: true },
          { src: "/images/cards-2.jpg", alt: "同春牌话粉色海报", caption: "海报 · 粉", tall: true },
        ],
      },
      { type: "video", poster: "/images/cards-1.jpg", caption: "上大人卡牌动效（视频待上传）" },
    ],
  },
  {
    slug: "scarecrow",
    category: "student",
    draft: true,
    title: "稻草人计划",
    latin: "Scarecrow Project",
    org: "待补充",
    time: "待补充",
    role: "待补充",
    tags: ["视觉与动效"],
    summary: "「守望新生」。项目说明待补充。",
    cover: { src: "/images/scarecrow.jpg", position: "50% 20%" },
    blocks: [
      { type: "text", heading: "项目介绍", body: "项目背景与说明待补充。" },
      { type: "image", src: "/images/scarecrow.jpg", alt: "稻草人计划海报：守望新生", caption: "主海报", tall: true },
      { type: "image", src: "/images/he.jpg", alt: "三张稻草人计划海报并排", caption: "海报系列" },
      { type: "video", poster: "/images/he.jpg", caption: "项目视频（待上传）" },
    ],
  },
  {
    slug: "fold",
    category: "student",
    draft: true,
    title: "意识褶皱",
    latin: "Folds of Consciousness",
    org: "待补充",
    time: "待补充",
    role: "待补充",
    tags: ["声音与影像"],
    summary: "影像作品。项目说明待补充。",
    cover: { src: "/images/fold.jpg", position: "50% 50%" },
    blocks: [
      { type: "text", heading: "项目介绍", body: "项目背景与说明待补充。" },
      { type: "video", poster: "/images/fold.jpg", caption: "完整影像（视频待上传）" },
    ],
  },
  {
    slug: "rhythm",
    category: "student",
    draft: true,
    title: "律动之境",
    latin: "Realm of Rhythm",
    org: "待补充",
    time: "待补充",
    role: "待补充",
    tags: ["声音与影像"],
    summary: "影像作品。项目说明待补充。",
    cover: { src: "/images/rhythm.jpg", position: "50% 50%" },
    blocks: [
      { type: "text", heading: "项目介绍", body: "项目背景与说明待补充。" },
      { type: "video", poster: "/images/rhythm.jpg", caption: "完整影像（视频待上传）" },
    ],
  },
  {
    slug: "echo",
    category: "student",
    draft: true,
    title: "余响",
    latin: "Echo",
    org: "待补充",
    time: "待补充",
    role: "待补充",
    tags: ["声音与影像"],
    summary: "影像作品。项目说明待补充。",
    cover: { src: "/images/echo.jpg", position: "50% 50%" },
    blocks: [
      { type: "text", heading: "项目介绍", body: "项目背景与说明待补充。" },
      { type: "video", poster: "/images/echo.jpg", caption: "完整影像（视频待上传）" },
    ],
  },
  {
    slug: "heal",
    category: "student",
    draft: true,
    title: "声愈",
    latin: "Sound Healing",
    org: "待补充",
    time: "待补充",
    role: "待补充",
    tags: ["声音与影像", "交互装置"],
    summary: "项目说明待补充。",
    cover: { src: "/images/heal.jpg", position: "50% 50%" },
    blocks: [
      { type: "text", heading: "项目介绍", body: "项目背景与说明待补充。" },
      { type: "video", poster: "/images/heal.jpg", caption: "项目视频（待上传）" },
    ],
  },
];

export const tags = [...new Set(works.flatMap((work) => work.tags))];

export function getWork(slug) {
  return works.find((work) => work.slug === slug);
}

export function worksIn(category) {
  return category === "all" ? works : works.filter((work) => work.category === category);
}
