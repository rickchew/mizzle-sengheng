# Seng Heng Shipping Website — 项目手册

> 基于 Mizzle Next v1.1.0 模板构建，原始模板位于 `/Users/hiro-rick/Projects/mizzle-template`（只读，不得修改）。
> 本项目工作目录：`/Users/hiro-rick/Projects/mizzle-sengheng`

---

## ⛔ 核心工作守则（必须遵守）

**严禁自行创作新的 Section 或模块组件。**

- 只允许做两件事：
  1. **替换内容** — 修改现有 section 内的文字、图片、链接、数据
  2. **调整顺序** — 改变页面中已有 section 的排列顺序
- 所有 section/模块必须来自模板已有的组件库
- 如果没有合适的现成 section，必须先告知用户，由用户决定，**不得自行编写新的 section HTML/JSX 结构**

---

## 一、客户信息

| 项目 | 说明 |
|------|------|
| 客户名称 | Seng Heng Shipping |
| 业务性质 | 海事服务、离岸作业、船运代理、设备租赁 |
| 总部 | Miri, Sarawak, Malaysia |
| 服务范围 | Sarawak, Sabah, East & West Malaysia, Labuan, Brunei |
| 运营历史 | 1998 年起（待客户确认法律措辞） |

---

## 二、内容参考文档

所有网站文案和结构草稿存放于 `_content/` 文件夹：

| 文件 | 内容 |
|------|------|
| [`_content/sengheng-website-structure-draft-v1.md`](_content/sengheng-website-structure-draft-v1.md) | 网站整体结构、各页面内容草稿（V1）|
| [`_content/our-fleet-page-template-v2-complete.md`](_content/our-fleet-page-template-v2-complete.md) | Our Fleet 页面完整文案（V2，接近生产版本）|

---

## 三、目标网站地图

```
/                    → Home（首页）
/about-us            → About Us（关于我们）
/services            → Services（服务总览）
  /services/marine-offshore-operations
  /services/shipping-forwarding
  /services/equipment-rental-supply
  /services/welding-fabrication-engineering
  /services/ship-repairs
  （次要）Car Rental / Hotel & Accommodation → 放 footer 或服务页底部
/our-fleet           → Our Fleet（船队）★ 待建
/our-clients         → Our Clients（客户）★ 待建
/contact             → Contact Us（联系我们）★ 待建
```

---

## 四、页面建设状态

### ✅ 已完成（有 Seng Heng 内容）

| 路由 | 状态 | 说明 |
|------|------|------|
| `/` | ✅ 已建 | Hero, About, Services, Clients, Testimonials, CTA, Footer 均有内容 |
| `/about-us` | ✅ 已建 | 关于页自定义完成 |
| `/services/marine-offshore-operations` | ✅ 已建 | 海事离岸业务页 |
| `/services/logistics-transport-solutions` | ✅ 已建 | 物流运输页 |
| `/services/engineering-shipyard-services` | ✅ 已建 | 工程船厂页 |
| `/services/aluminium-steel-fabrication` | ✅ 已建 | 铝钢制造页 |

### ❌ 待建（关键页面）

| 路由 | 优先级 | 内容来源 |
|------|--------|---------|
| `/our-fleet` | 🔴 高 | `_content/our-fleet-page-template-v2-complete.md` |
| `/services/shipping-forwarding` | 🔴 高 | `_content/sengheng-website-structure-draft-v1.md` §4.2 |
| `/services/equipment-rental-supply` | 🟡 中 | `_content/sengheng-website-structure-draft-v1.md` §4.3 |
| `/services/ship-repairs` | 🟡 中 | `_content/sengheng-website-structure-draft-v1.md` §4.4 |
| `/our-clients` | 🟡 中 | 客户名单：Petros, Dialog, Petronas, Cheimsain, Dayang DESB, Enviros, SK offshore, HGIS |
| `/contact` | 🔴 高 | 联系信息待客户确认（见 §7 of draft） |

### 🔵 原模板页面（保留备用，不需要主动修改）

`/demos/*`, `/saas/*`, `/blog/*`, `/shop/*`, `/account/*`, `/auth/*` 等原模板页面均保留，不需要 Seng Heng 内容。

---

## 五、Our Fleet 页面规划

> 完整文案来源：`_content/our-fleet-page-template-v2-complete.md`

### 船队数据（10 艘）

**Offshore Support / Nearshore Survey**
| 船名 | LOA | Ship Particular PDF |
|------|-----|---------------------|
| MV. Mega Maria | 34m | `Mega Maria (Updated 23 Jan 2025).pdf` |

**Passenger / Pilot / Survey Boats**
| 船名 | LOA | Ship Particular PDF |
|------|-----|---------------------|
| Mega Hope | 19.1m | `Mega Hope _Ship Particular_updated 04.09.25.pdf` |
| Mega Success | 18.1m | `Mega Success (Updated 13 March 2024).pdf` |
| New Boat | 17.5m | `New Boat-Ship Particular (Updated 31 December 2025).pdf` |
| Seng Heng Awesome | 15.8m | `Ship Particular Seng Heng Awesome (updated 06 Sept 2025).pdf` |
| Seng Heng Elite | 15m | `SengHeng Elite (Updated 10 October 2024).pdf` |
| Seng Heng Best | 14m | `Ship Particular Seng Heng Best (updated 06 Sept 2025).pdf` |
| Seng Heng Glorious | 13.65m | ⚠️ 待定（两版本，需客户确认） |
| Ever Glory | 11.8m | `Ever Glory (updated 04 March 2023).pdf` |

**Landing Craft**
| 船名 | LOA | Ship Particular PDF |
|------|-----|---------------------|
| Seng Heng Progress | 19.5m | `LCT SengHeng Progress (updated 10 Sep 2024).pdf` |

### 图片处理规则
- 忽略以 `._` 开头的系统文件
- 每艘船：1 张封面图 + 3~8 张画廊图
- Alt text 格式：`[Vessel Name] - [View/Context]`

---

## 六、Services 页面内容索引

来源：`_content/sengheng-website-structure-draft-v1.md`

| Section | 路由 | 关键内容 |
|---------|------|---------|
| 4.1 Marine & Offshore Operations | `/services/marine-offshore-operations` | 人员转运、文件递送、船舶供给、Ship Chandler |
| 4.2 Shipping & Forwarding | `/services/shipping-forwarding` | 报关、空海运、内陆运输、仓储（30,000sqft）、包装搬运、拖驳船 |
| 4.3 Equipment Rental & Supply | `/services/equipment-rental-supply` | 发电机（10-35KVA）、液压 A-Frame、Tugger Winch、DNV 货柜、冷藏柜等 |
| 4.4 Welding/Fabrication/Engineering | `/services/welding-fabrication-engineering` | 含 Ship Repairs（内容待完善） |
| 4.5 Optional | footer 或独立页面 | Car Rental、Hotel & Accommodation |

---

## 七、首页 Hero 文案（已确认）

```
Title: Trusted Marine & Offshore Service Partner in Miri, Sarawak
Subtitle: Marine operations, forwarding, equipment rental, engineering support, and fleet services under one roof.
CTA 1: Contact Us
CTA 2: View Our Services
```

---

## 八、待客户确认事项

- [ ] 公司正式注册名称（一或多个实体）
- [ ] 最新办公地址
- [ ] 主联系电话 / WhatsApp 号码
- [ ] 对外邮箱
- [ ] 联络人姓名与职称
- [ ] 营业时间 / 24h 紧急热线
- [ ] Seng Heng Glorious 的 Ship Particular PDF 最终版本
- [ ] 公司成立年份的法律措辞（1998 年 or other）

---

## 九、关键文件速查

| 需求 | 文件路径 |
|------|---------|
| 首页 | `src/app/page.tsx` |
| 首页组件 | `src/app/components/` |
| About Us 页 | `src/app/about-us/page.tsx` |
| Services 页面 | `src/app/services/` |
| 导航栏 | `src/components/topbar/TopNavigationBar.tsx` |
| 页脚 | `src/components/footer/Footer1.tsx` |
| 全局 SCSS 入口 | `src/assets/scss/style.scss` |
| 自定义变量 | `src/assets/scss/_user-variables.scss` |
| 自定义样式 | `src/assets/scss/_user.scss` |
| 网站内容文稿 V1 | `_content/sengheng-website-structure-draft-v1.md` |
| Fleet 页面文稿 V2 | `_content/our-fleet-page-template-v2-complete.md` |

---

## 十、运行命令

```bash
bun dev          # 启动开发服务器
bun run build    # 生产构建
```
