---
title: 'Bag of Tricks for Claude Code'
date:
  created: 2025-12-29
  updated: 2025-12-29
categories:
  - open-source
  - research
slug: bag-of-tricks-for-claude-code
draft: true
---

Claude Code 是 Anthropic 官方推出的命令行 AI 编程助手，但在实际使用中，我们可以通过一些配置技巧让它更好用，甚至接入其他 API 服务。本文总结了一些实用的 Claude Code 配置方法和工具推荐。

<!-- more -->

## Claude Code 的配置原理

截止到写作本文时，Claude Code 2.0 版本通过环境变量来设置 API 地址和 API 密钥。这些配置会持久化保存在 `~/.claude/settings.json` 文件中：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-api-key",
    "ANTHROPIC_BASE_URL": "https://api.anthropic.com"
  }
}
```

无论使用哪种 API 服务，核心都是修改这两个环境变量。关键区别在于你的 API 是否原生兼容 Claude API 格式，这决定了配置的复杂度。

## 情况一：API 原生兼容 Claude 格式

如果你的 API 服务原生支持 Claude API 格式（如国内的智谱 GLM、MiniMax 和 Kimi 的 Coding 套餐），它们的接口格式与 Anthropic Claude API 完全一致，配置会非常简单。只需要修改环境变量，将 API 地址和密钥指向第三方服务：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的API密钥",
    "ANTHROPIC_BASE_URL": "https://third-party-api.com"
  }
}
```

如果你需要在多个兼容服务之间频繁切换（比如在 Kimi、GLM、MiniMax 之间切换），手动编辑配置文件会很麻烦。推荐使用 [cc-switch](https://github.com/farion1231/cc-switch) 这个 GUI 工具，它本质上是帮你管理 `settings.json` 中的环境变量，提供图形界面让你保存多套配置（API 地址 + 密钥），点击即可切换不同的配置。

!!! note "cc-switch 的适用场景"
    cc-switch 只适用于原生兼容 Claude API 格式的服务。它只负责切换环境变量，不涉及 API 格式转换。如果你的所有 API 都是兼容 Claude 格式的，那么只用 cc-switch 就够了。

## 情况二：API 不兼容 Claude 格式

如果你想使用的 API 服务格式与 Claude API 不兼容（比如自定义的模型服务、OpenAI 格式的 API、其他厂商的 API 等），就需要进行格式转换。这种情况下配置稍微复杂一些，需要两步操作。

首先，使用像 claude-code-router 这样的中转服务在本地启动一个 proxy。这个 proxy 的作用是接收 Claude Code 发来的标准 Claude API 请求，将请求转换为目标 API 的格式，调用真实的 API 服务，然后将响应转换回 Claude API 格式返回给 Claude Code。

接下来，同样需要修改环境变量，但这次 `ANTHROPIC_BASE_URL` 要指向本地的 router 地址（而不是直接指向第三方 API）：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "真实API的密钥",
    "ANTHROPIC_BASE_URL": "http://127.0.0.1:8045"
  }
}
```

完整的请求链路是这样的：Claude Code 发出请求 → 本地 Router (127.0.0.1:8045) 接收并转换格式 → 真实 API 服务处理 → Router 转换响应格式 → Claude Code 接收。

!!! tip "两种情况的本质区别"
    情况一（兼容 Claude 格式）：

    - 环境变量直接指向第三方 API 地址
    - 使用 cc-switch 快速切换多个兼容 API
    - 不需要额外的中转服务

    情况二（不兼容 Claude 格式）：

    - 启动本地 router 做格式转换
    - 环境变量指向本地 router 地址（`http://127.0.0.1:xxxx`）
    - router 负责将请求转发给真实 API 并做格式转换

    共同点：两种情况都需要修改环境变量，区别在于环境变量指向的目标不同（直接指向 API vs 指向本地 router）。

## 用 Antigravity 获取充足的 Claude 配额

如果你是 Gemini Advanced 付费会员，[Antigravity](https://antigravity.dev) 提供了非常充足（generous！）的 Claude 模型用量。这是一个相当划算的选择。

推荐使用 [Antigravity-Manager](https://github.com/lbjlaq/Antigravity-Manager) 这个 GUI 桌面应用来管理 Antigravity 配置。它是一个跨平台的桌面应用（支持 macOS、Windows、Linux），提供了多账户管理、实时配额监控、智能账户推荐等功能，并能将 Web Session 转换为标准 API 接口。

配置完成后，将 `ANTHROPIC_BASE_URL` 指向 Antigravity 的 API 地址即可。

## 优化 settings.json 配置

除了基本的 API 配置外，`settings.json` 还支持一些有用的配置项。

首先，你可以通过设置环境变量来禁用一些非必要的网络请求和模型调用，提升响应速度，降低 API 使用量：

```json
{
  "env": {
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": 1,
    "DISABLE_NON_ESSENTIAL_MODEL_CALLS": 1
  }
}
```

默认情况下，Claude Code 会在 git commit 消息中添加 `Co-authored-by: Claude` 标记。如果你不喜欢这个行为，可以通过设置 `includeCoAuthoredBy` 为 `false` 来关闭：

```json
{
  "includeCoAuthoredBy": false
}
```

另一个实用的配置是权限策略。通过 `permissions` 配置，你可以预先批准某些操作（`allow`），避免每次都需要确认，或者禁止某些操作（`deny`），防止意外执行危险命令。例如下面的配置允许 Claude Code 自动进行网络搜索和访问，但禁止它直接执行 git commit 命令（需要手动确认）：

```json
{
  "permissions": {
    "allow": [
      "WebSearch",
      "WebFetch(domain:*)"
    ],
    "deny": [
      "Bash(git commit:*)"
    ]
  }
}
```

## 配置 Claude Code 状态栏

Claude Code 支持在 TUI 界面底部显示自定义状态栏，可以展示当前的 git 分支、时间、token 使用情况等信息。推荐使用 [cc-statusline](https://github.com/chongdashu/cc-statusline) 项目提供的状态栏脚本。

配置过程很简单。首先下载状态栏脚本到 `~/.claude/` 目录：

```bash
curl -o ~/.claude/statusline.sh https://raw.githubusercontent.com/chongdashu/cc-statusline/main/statusline.sh
chmod +x ~/.claude/statusline.sh
```

然后在 `settings.json` 中添加状态栏配置：

```json
{
  "statusLine": {
    "command": "~/.claude/statusline.sh",
    "padding": 0,
    "type": "command"
  }
}
```

配置完成后，Claude Code 会在底部显示实时的状态信息，让你更好地掌握当前的工作环境。

## 总结

通过合理配置 Claude Code，我们可以：

1. 灵活切换不同的 API 服务（cc-switch）
2. 接入自定义 API 提供商（claude-code-router）
3. 使用 Antigravity 获取充足的 Claude 配额
4. 优化 settings.json 配置以提升使用体验
5. 配置状态栏以获得更好的 TUI 体验

这些技巧可以让 Claude Code 更加强大和灵活，适应不同的使用场景和需求。

---

参考资源：

- [cc-switch](https://github.com/farion1231/cc-switch) - Claude Code API 配置快速切换工具
- [claude-code-router](https://github.com/musistudio/claude-code-router) - API 格式转换 proxy 工具
- [Antigravity-Manager](https://github.com/lbjlaq/Antigravity-Manager) - Antigravity GUI 桌面管理应用
- [cc-statusline](https://github.com/chongdashu/cc-statusline) - Claude Code 状态栏脚本
