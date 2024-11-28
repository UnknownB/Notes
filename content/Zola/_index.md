+++
title = "Zola"
sort_by = "weight"
template = "book/page.html"
page_template = "book/page.html"
weight = 1
date = 2024-07-17
update = 2024-11-19
+++

## Zola

- 靜態站點產生器 (SSG)
- 使用 Rust 語言編寫
- 使用 Tera 模板引擎
  - (類似於 Jinja2、Django templates、Liquid、Twig)
- 特色是使用簡單、build 超級快

## Installation (安裝)

- [資料來源 - Zola 官網](https://www.getzola.org/documentation/getting-started/installation/)
- macOS
    - 安裝 zola
        ```shell
        brew install zola
        ```
    - 確認版本
        ```shell
        # 成功時會印出 zola 版本
        zola -V
        ```

## Initialize Site (建立站點)

- [Zola - Getting Started (入門)](https://www.getzola.org/documentation/getting-started/overview/)
- 建立站點
    ```shell
    zola init $site_name
    ```
- 回答 4 個問題來建立 `config.toml` 的預設值
    - 允許全部按 Enter 跳過，隨時能修改

## Start server (啟動開發伺服器)

```shell
# 移動到網站位置
cd $site_name

# 以預設的 127.0.0.1 啟動
zola serve

# 以 ip 啟動 (可讓其他裝置連線)
# --interface 0.0.0.0 接受區域網內任何設備連線
# --base-url 設為自己 ip 才能正確找到 css 等路徑
zola serve --interface 0.0.0.0 --base-url $ip
```
