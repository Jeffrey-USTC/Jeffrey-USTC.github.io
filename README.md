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

## Git 代码同步工作流程

### 日常开发流程

#### 1. 本地修改代码后推送到 GitHub

```bash
# 查看修改的文件
git status

# 添加所有修改的文件到暂存区
git add .

# 或者只添加特定文件
git add index.html main.js

# 提交更改（写清楚这次修改了什么）
git commit -m "更新个人信息和联系方式"

# 推送到 GitHub
git push
```

#### 2. 从 GitHub 拉取最新代码（如果有多台设备）

```bash
# 拉取远程仓库的最新更改
git pull

# 或者分两步
git fetch          # 获取远程更新
git merge          # 合并到本地
```

#### 3. 查看提交历史

```bash
# 查看提交历史
git log

# 简洁版提交历史
git log --oneline

# 查看文件修改详情
git diff
```

### 常用 Git 命令速查

```bash
# 查看当前状态
git status

# 查看修改内容
git diff

# 添加文件到暂存区
git add <文件名>
git add .                    # 添加所有文件

# 提交更改
git commit -m "提交说明"

# 推送到远程仓库
git push

# 拉取远程更新
git pull

# 查看远程仓库信息
git remote -v

# 查看分支
git branch

# 创建新分支
git branch <分支名>

# 切换分支
git checkout <分支名>

# 查看提交历史
git log --oneline --graph
```

### 常见场景处理

#### 场景1：修改了代码，想推送到 GitHub

```bash
git add .
git commit -m "描述你的修改内容"
git push
```

#### 场景2：GitHub 上有更新，想同步到本地

```bash
git pull
```

#### 场景3：撤销本地未提交的修改

```bash
# 撤销某个文件的修改
git checkout -- <文件名>

# 撤销所有未提交的修改（谨慎使用）
git checkout -- .
```

#### 场景4：修改了文件但还没提交，想查看修改了什么

```bash
git diff
```

#### 场景5：提交后发现提交信息写错了

```bash
# 修改最后一次提交信息
git commit --amend -m "新的提交信息"
git push --force  # 注意：这会覆盖远程提交历史，谨慎使用
```

#### 场景6：忘记提交某些文件

```bash
# 添加遗漏的文件
git add <遗漏的文件>
git commit --amend --no-edit  # 添加到上次提交，不修改提交信息
git push
```

### 工作流程示例

**示例：更新网站内容**

```bash
# 1. 修改了 about.html 文件
# （在编辑器中修改文件）

# 2. 查看修改
git status

# 3. 添加修改
git add about.html

# 4. 提交
git commit -m "更新关于页面的个人信息"

# 5. 推送到 GitHub
git push

# 6. 等待几分钟，GitHub Pages 会自动更新网站
```

### 注意事项

1. **提交信息要清晰**：使用有意义的提交信息，方便以后查看历史
   - ✅ 好的：`git commit -m "更新联系邮箱和电话"`
   - ❌ 不好的：`git commit -m "更新"`

2. **经常提交**：建议完成一个小功能就提交一次，不要积累太多修改

3. **推送前检查**：使用 `git status` 和 `git diff` 确认修改内容

4. **冲突处理**：如果 `git pull` 时出现冲突，需要手动解决冲突后再提交

5. **GitHub Pages 更新**：推送代码后，GitHub Pages 通常会在几分钟内自动更新

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
