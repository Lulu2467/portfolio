export const profile = {
  name: "杨心玥",
  latin: "Yang Xinyue",
  lead: "设计 AI 产品里的操作，也设计人在空间里怎么走。",
  school: "湖北美术学院",
  major: "艺术与科技",
  minor: "艺术疗愈",
  now: "银河驿站 · AI 产品设计实习",
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
];

export const works = [
  {
    slug: "jiuxu",
    index: "01",
    title: "就绪",
    org: "银河驿站",
    time: "2026.01–03",
    role: "AI 产品设计实习生",
    summary: "AI 求职平台的招聘系统，以及把事情交给 Agent 时的交互。",
    intro:
      "就绪是银河驿站的 AI 求职平台。这段实习里，招聘后台的信息架构、Agent 委托，和产品的视觉规范是同一件事：让人和系统都知道下一步该发生什么。",
    points: [
      "独立负责 B 端招聘系统的体验设计，整理信息架构和核心操作链路。",
      "主导 B 端与 C 端「AI Agent 委托」，支持多模态输入，把委托的门槛放低。",
      "设计 AI Chat 与开屏动效，参与 Agent 形象和 App logo，建立 Icon 语义与视觉规范，并补上 AI 的多状态反馈。",
      "用 Vibe Coding 把设计到研发的周期缩短约 70%。",
    ],
    images: [
      {
        src: "/images/jiuxu.png",
        alt: "银河驿站招聘方向的视觉：四张半透明职位卡片叠在浅色渐变上",
        caption: "银河驿站 · 招聘视觉",
      },
    ],
  },
  {
    slug: "quna",
    index: "02",
    title: "趣拿节",
    org: "Fn Media Lab",
    time: "2025.06–09",
    role: "体验设计实习生",
    summary: "浦东世纪汇的快闪。小程序从 0 到 1，并和现场装置连在一起。",
    intro:
      "99 趣拿节放在浦东世纪汇广场。线上的小程序要能把人带进展位，线下的装置也要能把人送回下一次互动。",
    points: [
      "独立负责活动小程序的界面和体验，从 0 到 1 落到现场。",
      "设计线上线下联动的参与路径和互动逻辑。",
      "现场带动用户互动超过 10 万次。",
      "用 Midjourney 生成活动视觉和素材，再按品牌调性收束。",
    ],
    images: [
      {
        src: "/images/quna.png",
        alt: "趣拿节快闪展位的轴测模型，黑色背景上的灰色空间装置",
        caption: "浦东世纪汇广场 · 快闪空间",
      },
    ],
  },
  {
    slug: "ship",
    index: "03",
    title: "南极船之书",
    org: "Fn Media Lab",
    time: "2025",
    role: "体验设计实习生",
    summary: "「好事发生」里的沉浸展览，在上海图书馆东馆。",
    intro:
      "南极船之书是「好事发生」中的一章。工作是把叙事拆成可以走完的空间：人从哪里进来，在哪里停留，装置在哪一步接上故事。",
    points: [
      "参与展览概念与叙事架构。",
      "梳理观众动线，以及互动装置和展陈的逻辑。",
      "展览位于上海图书馆东馆。",
    ],
    images: [],
    plate: {
      place: "上海图书馆东馆",
      title: "南极船之书",
    },
  },
  {
    slug: "badge",
    index: "04",
    title: "融域星章",
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
    images: [
      {
        src: "/images/xingzhang.png",
        alt: "融域星章产品概述：情绪表达、社交破冰与个性化定制",
        caption: "产品结构",
      },
      {
        src: "/images/hardware.png",
        alt: "融域星章硬件爆炸图：圆屏、PCB、电池和外壳",
        caption: "硬件集成",
      },
    ],
  },
];

export function getWork(slug) {
  return works.find((work) => work.slug === slug);
}
