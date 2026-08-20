import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import playformCompress from '@playform/compress';

export default defineConfig({
  site: 'https://love.example.com',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  integrations: [sitemap(), playformCompress()],
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn', 'en-us'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
// 情侣配置信息 - 请修改为你们的
const LOVE_CONFIG = {
  boy: '小徐',
  girl: '小占',
  loveDate: '2026-08-20'
};

// 将配置注入到 Astro 的全局变量中
process.env.LOVE_CONFIG = JSON.stringify(LOVE_CONFIG);
