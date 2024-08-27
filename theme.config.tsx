import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>慢壳 AI 软件</span>,
  project: {
    link: "https://weai.chat",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "慢壳 AI 专注连接微信和 AI",
  },
  useNextSeoProps() {
    return {
      additionalLinkTags: [
        {
          rel: "icon",
          href: "https://www.weai.chat/logo.ico",
        },
      ],
      keywords:
        "Wechat AI, ChatGPT, 微信 AI, Kimi, 月之暗面, coze, 扣子, 智能体, AI 机器人",
      titleTemplate: "%s - 慢壳 AI",
      description:
        "连接微信 和 AI，支持国内几乎所有类似 ChatGPT 的大模型，如 Kimi，豆包，义通千问、GLM 等，实现微信聊天和 AI 对话的连接。对接 Coze 智能体，自定义插件、工作流和图片流，使您的 AI 机器人无所不能",
      openGraph: {
        type: "website",
        locale: "zh_CN",
        url: "https://www.weai.chat",
        site_name: "慢壳 AI",
        images: [{ url: "https://www.weai.chat/logo.png" }],
      },
      twitter: {
        cardType: "summary_large_image",
        site: "https://www.weai.chat",
      },
    };
  },
};

export default config;
