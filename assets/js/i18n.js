'use strict';

// Chinese copy is maintained here alongside the English text in index.html.
const chineseCopy = {
  'Kexiang (KX) Shuai': '帅棵翔（KX）',
  'Show Contacts': '显示联系方式',
  'Email': '邮箱',
  'Birthday': '生日',
  'August 28, 2002': '2002 年 8 月 28 日',
  'Location': '所在地',
  'Pittsburgh, PA, USA': '美国宾夕法尼亚州匹兹堡',
  'Main': '主页',
  'Resume': '简历',
  'About me': '关于我',
  "Hi! I'm Kexiang (KX) Shuai, a game client and XR developer working with Unity. My work spans gameplay systems, multiplayer spatial experiences, and tools that help teams build and debug more effectively.": '你好，我是帅棵翔（KX），专注 Unity 游戏客户端与 XR 开发。我参与过玩法系统、多人空间交互体验以及帮助团队开发和调试的工具建设。',
  "I'm pursuing a master's degree at Carnegie Mellon University's Entertainment Technology Center. At Tencent Games' TiMi Studio Group, I worked on gameplay systems, Unity editor tools, and development workflows. I also bring three years of HCI research experience from HER Lab.": '我目前在卡耐基梅隆大学娱乐科技中心攻读硕士学位。曾在腾讯游戏天美工作室参与玩法系统、Unity 编辑器工具和研发流程建设，也在 HER Lab 积累了三年人机交互研究经验。',
  'What I do': '我的方向',
  'Graduate Student at CMU': '卡耐基梅隆大学研究生',
  "Pursuing a master's degree in Entertainment Technology at Carnegie Mellon University.": '在卡耐基梅隆大学攻读娱乐科技硕士学位。',
  'Unity Developer': 'Unity 开发者',
  'Building gameplay systems, multiplayer experiences, and XR applications in Unity.': '使用 Unity 开发玩法系统、多人交互体验和 XR 应用。',
  'HCI Researcher': '人机交互研究者',
  'Researching human-computer interaction, XR, and cultural heritage experiences.': '研究人机交互、XR 与文化遗产体验。',
  'Software Developer': '软件开发者',
  'Developing web interfaces and tools that support production workflows.': '开发支持实际生产流程的 Web 界面和工具。',
  'Portfolio': '作品集',
  'Capybara vs. Granny: A Multiplayer Party Game': '卡皮巴拉 vs. 老奶：本地多人派对游戏',
  'Game, ETC': '游戏、ETC',
  'AR Exploration Game for Cultural Heritage': '文化遗产 AR 探索游戏',
  'XR, Game, Research': 'XR、游戏、研究',
  "Research in Virtual Object's XR Observation": 'XR 环境中虚拟物体观察研究',
  'XR, Research': 'XR、研究',
  'An immersive experience with a physical robot (Unitree G1) & AR+VR': '结合宇树 G1 机器人与 AR、VR 的沉浸式体验',
  'XR, Robotics, ETC': 'XR、机器人、ETC',
  'Cosmos Echo: a 5-minute immersive VR narrative experience.': 'Cosmos Echo：五分钟沉浸式 VR 叙事体验',
  'XR, ETC': 'XR、ETC',
  'Crawlgatory: a game developed in 30 hours.': 'Crawlgatory：30 小时内完成的游戏',
  'Global Game Jam, ETC': 'Global Game Jam、ETC',
  'LeadQ Quality Analysis Tool': 'LeadQ 质量分析工具',
  'Web, Data Visualization': 'Web、数据可视化',
  'AR Computer Assembly Tutorial': 'AR 电脑组装教程',
  'XR, Mobile App, Tutorial': 'XR、移动应用、教程',
  'Intelligent Medical Orthopedic Splint': '智能医用骨科夹板',
  'IoT, Mobile App': '物联网、移动应用',
  'Wechat Mini Program': '微信小程序',
  'Mobile App': '移动应用',
  'Chinese PDF': '中文 PDF',
  'Education': '教育经历',
  'Carnegie Mellon University (CMU)': '卡耐基梅隆大学（CMU）',
  'Aug 2025 – May 2027': '2025 年 8 月—2027 年 5 月',
  'Master of Entertainment Technology; coursework in Computer Graphics and Computer Systems.': '娱乐科技硕士；修读计算机图形学与计算机系统课程。',
  "Xi'an Jiaotong-Liverpool University (XJTLU)": '西交利物浦大学（XJTLU）',
  'Sep 2020 – Jul 2025': '2020 年 9 月—2025 年 7 月',
  'BEng in Computer Science and Technology. Three years as a research assistant at HER Lab; four HCI papers published and three under review.': '计算机科学与技术本科。在 HER Lab 担任三年研究助理；已有四篇人机交互论文发表，三篇在投。',
  'Skills': '技能',
  'Programming:': '编程语言：',
  'Game & XR:': '游戏与 XR：',
  'Engineering & tools:': '工程与工具：',
  'Internships': '实习经历',
  'Game Client Development Intern · Tencent Games, TiMi Studio Group': '游戏客户端开发实习生 · 腾讯游戏天美工作室',
  'May 2026 – Aug 2026': '2026 年 5 月—2026 年 8 月',
  'Delivered a new gameplay formation system and adapted the hero display interface for acceptance. Extracted a shared base class for old and new formation systems, kept extension points, and removed redundant logic. Maintained both modules and resolved 26 bugs with design, art, and backend teams.': '负责新玩法布阵系统与英雄展示界面适配并通过验收；抽离新旧编队系统共用基类，保留玩法扩展接口并清理冗余逻辑。持续维护编队及新玩法模块，协同策划、美术和后端累计修复 26 个 Bug。',
  'Fixed item navigation, duplicate-name search, and refresh issues in the Unity attribute inspector. Built an MCP interface that lets AI agents read runtime attribute data as structured debugging context.': '修复 Unity 属性系统监视面板的条目跳转、同名搜索及数据刷新问题；构建 MCP 接口，让 AI Agent 直接读取运行时属性数据，为客户端问题定位提供结构化上下文。',
  'Added project constraints, custom skills, and a refine-change step to an OpenSpec and Agent Harness workflow so requirements could be checked before implementation.': '基于 OpenSpec 与 Agent Harness 工作方式，补充项目约束、定制 Skill，并增加 refine-change 环节，在实现前检查需求规格的完整性。',
  'Built a specification review workbench for designers using CodeBuddy CLI and Agent SDK, with IOA authentication, issue severity levels, human diff approval, and review reminders. The tool entered team trial use.': '搭建面向策划的 Spec 审查工作台，使用 CodeBuddy CLI 执行审查与优化、Agent SDK 同步可用模型；接入 IOA 鉴权、问题分级、人工 Diff 验收与复审提醒，已进入团队试用。',
  'Software Development Intern · Bosch (China) Investment Ltd.': '软件开发实习生 · 博世（中国）投资有限公司',
  'Apr 2024 – Aug 2024': '2024 年 4 月—2024 年 8 月',
  'Redesigned and developed gesture interaction for production-line training in AR, iterating with internal stakeholders; internal customer satisfaction rose 20%.': '调研产线培训需求，重新设计并开发适配业务场景的 AR 手势交互模块，持续对齐需求并扩展培训内容，内部客户满意度提升 20%。',
  'Rebuilt a warehouse navigation app in Unity and migrated it to Apple Vision Pro. Integrated ERP inventory data with the physical environment to locate goods in real space.': '使用 Unity 重构仓库导航应用并迁移至 Apple Vision Pro；与 ERP 团队对接，实现物理环境与库存数据的动态映射，支持在真实空间中定位货物。',
  'Games & Projects': '游戏开发与项目',
  'Capybara vs. Granny · Local Multiplayer Party Game': '卡皮巴拉 vs. 老奶 · 本地多人派对游戏',
  'Nov 2025 – Dec 2025': '2025 年 11 月—2025 年 12 月',
  'Implemented health, hit detection, death, respawn, and environmental destruction in Unity for local multiplayer combat.': '使用 Unity 实现生命值、伤害判定、死亡与复活及环境破坏逻辑，支持本地多人对战。',
  'Built a capybara stacking mechanic by coordinating player state, physics constraints, and input timing.': '实现卡皮巴拉堆叠机制，协调玩家状态、物理约束与输入时序，将多人协作规则落地为可操作的技能系统。',
  'Completed seven prototype iterations across six playtest rounds in a three-week development cycle, refining edge cases before delivery.': '在三周开发周期内，结合六轮玩家测试完成七次原型迭代，并针对边界情况进行稳定性优化。',
  'Digital Touch · Colocated visionOS Collaboration': 'Digital Touch · visionOS 同地协作应用',
  'Jul 2025 – Aug 2025': '2025 年 7 月—2025 年 8 月',
  'Helped build a Unity transport plugin using Apple Multipeer Connectivity for local peer-to-peer communication without an external Wi-Fi access point or cellular network.': '协助开发基于 Apple Multipeer Connectivity 的 Unity 网络传输层插件，实现不依赖外部 Wi-Fi 接入点或蜂窝网络的本地 P2P 通信。',
  'Connected the transport to Unity Netcode for real-time content synchronization and spatial alignment across colocated visionOS devices. Submitted to Augmented Humans.': '基于 Unity Netcode 接入上述传输层，实现多台同地 visionOS 设备的虚拟内容实时同步与空间对齐。已投稿于 Augmented Humans。',
  'HeritageSite AR · Suzhou Twin Pagodas Exploration Game': 'HeritageSite AR · 苏州双塔 AR 探索游戏',
  'Nov 2022 – Dec 2022': '2022 年 11 月—2022 年 12 月',
  'Interviewed four heritage specialists and collected 174 visitor questionnaires to identify needs in interpretation, route guidance, and visit recall.': '访谈四位历史建筑遗产保护专家，设计并回收 174 份游客问卷，提炼文化讲解、路线引导与游览记忆方面的体验问题。',
  'Implemented story-driven puzzles, NPC dialogue, and interactive 3D ruins in Unity; the game was deployed on site.': '使用 Unity 实现剧情驱动的解谜系统、NPC 对话机制及 3D 遗迹模型交互；项目完成实地部署。',
  'User evaluation recorded 56% appreciation for the interactive experience and 42% knowledge acquisition. Results appeared at CHI 2023 and in JOCCH.': '用户评估记录交互体验赞誉度 56%、知识获取率 42%。成果发表于 CHI 2023 及 JOCCH 期刊。'
};

const originalText = new WeakMap();
const translatableNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  const normalized = node.textContent.replace(/\s+/g, ' ').trim();
  if (Object.hasOwn(chineseCopy, normalized)) {
    originalText.set(node, node.textContent);
    translatableNodes.push({ node, normalized });
  }
}

const languageButtons = document.querySelectorAll('[data-language]');
const resumeDownload = document.querySelector('.resume-download');
function setLanguage(language) {
  const useChinese = language === 'zh';
  for (const { node, normalized } of translatableNodes) {
    node.textContent = useChinese ? chineseCopy[normalized] : originalText.get(node);
  }
  document.documentElement.lang = useChinese ? 'zh-CN' : 'en';
  document.title = useChinese ? '帅棵翔 KX｜游戏客户端与 XR 开发' : 'KX Shuai | Game Client & XR Developer';
  document.querySelector('meta[name="description"]').content = useChinese
    ? '帅棵翔的游戏客户端开发、XR 项目、作品集和简历。'
    : "KX Shuai's game client development, XR projects, and resume.";
  for (const button of languageButtons) {
    const active = button.dataset.language === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  }
  resumeDownload.setAttribute('aria-label', useChinese ? '下载中文简历 PDF' : 'Download Chinese resume PDF');
  resumeDownload.title = useChinese ? '下载中文简历 PDF' : 'Download Chinese resume PDF';
  try { localStorage.setItem('site-language', language); } catch (_) { /* storage may be unavailable */ }
}

for (const button of languageButtons) {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
}
let savedLanguage;
try { savedLanguage = localStorage.getItem('site-language'); } catch (_) { /* storage may be unavailable */ }
setLanguage(savedLanguage === 'en' || savedLanguage === 'zh'
  ? savedLanguage
  : (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en');
