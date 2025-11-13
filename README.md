# 个人主页网站

一个现代化的个人作品集网站，展示个人技能、作品和联系方式。

## 功能特性

- 🎨 现代化设计 - 采用 Tailwind CSS 构建的响应式设计
- ✨ 动画效果 - 使用 Anime.js 实现的流畅动画
- 🌟 粒子背景 - 使用 p5.js 创建的动态粒子效果
- 📱 响应式布局 - 完美适配桌面和移动设备
- 🎯 作品展示 - 完整的作品集展示页面
- 📧 联系表单 - 功能完整的联系表单

## 技术栈

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript
- Anime.js - 动画库
- p5.js - 创意编程库
- Splide.js - 轮播组件

## 页面结构

- `index.html` - 首页，展示个人介绍和精选作品
- `about.html` - 关于页面，详细个人背景和技能
- `portfolio.html` - 作品集页面，完整作品展示
- `contact.html` - 联系页面，联系方式和表单
- `main.js` - 主要 JavaScript 逻辑

## 本地运行

1. 克隆或下载项目
2. 直接在浏览器中打开 `index.html` 文件
3. 或者使用本地服务器：
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js (需要安装 http-server)
   npx http-server
   ```

## GitHub Pages 部署

### 方法一：通过 GitHub 网页界面

1. **创建 GitHub 仓库**
   - 登录 GitHub
   - 点击右上角 "+" → "New repository"
   - 仓库名建议：`your-username.github.io`（这样可以直接通过 `https://your-username.github.io` 访问）
   - 或者使用其他名称（访问地址会是 `https://your-username.github.io/repository-name`）
   - 选择 Public（GitHub Pages 免费版需要公开仓库）
   - 点击 "Create repository"

2. **上传文件**
   - 在仓库页面点击 "uploading an existing file"
   - 将所有项目文件拖拽上传（包括 `index.html`, `about.html`, `contact.html`, `portfolio.html`, `main.js`, `resources/` 文件夹等）
   - 在页面底部填写提交信息，点击 "Commit changes"

3. **启用 GitHub Pages**
   - 进入仓库的 Settings（设置）
   - 在左侧菜单找到 "Pages"
   - 在 "Source" 部分选择 "Deploy from a branch"
   - 选择分支：`main`（或 `master`）
   - 选择文件夹：`/ (root)`
   - 点击 "Save"
   - 等待几分钟，GitHub 会生成网站地址

4. **访问网站**
   - 如果仓库名是 `your-username.github.io`，访问地址：`https://your-username.github.io`
   - 如果仓库名是其他名称，访问地址：`https://your-username.github.io/repository-name`

### 方法二：使用 Git 命令行

1. **初始化 Git 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **连接到 GitHub 仓库**
   ```bash
   git remote add origin https://github.com/your-username/your-repository-name.git
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**（同方法一的步骤3）

## 注意事项

1. **资源文件**：确保 `resources/` 文件夹中包含所有需要的图片：
   - `profile.jpg` - 个人头像
   - `project1.jpg`, `project2.jpg`, `project3.jpg` 等 - 项目图片

2. **自定义域名**（可选）：
   - 在 `resources/` 文件夹中创建 `CNAME` 文件
   - 在文件中写入你的域名（如：`www.yourdomain.com`）
   - 在域名服务商处配置 DNS 记录

3. **HTTPS**：GitHub Pages 自动提供 HTTPS 支持

4. **更新网站**：每次推送代码到 GitHub，网站会自动更新（可能需要几分钟）

## 许可证

MIT License

## 联系方式

- 邮箱：zijieliu@mail.ustc.edu.cn
- 电话：18014322209
- 地址：安徽 合肥

