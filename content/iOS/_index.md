+++
title = "iOS"
sort_by = "weight"
template = "book/page.html"
page_template = "book/page.html"
weight = 3
date = 2024-11-22
update = 2024-11-28
+++

# iOS

- iOS 工程師就是開發 iPhone、iPad 的應用程式 (App) 的人
- iOS  是 Apple 的移動裝置作業系統
    - iPhone
    - iPad
    - iPod touch (快成歷史)
- 2019年 iPad 分支出了 iPadOS
    - iPadOS 支援更多功能如多視窗等 (Split View、Slide Over)
    - 需要支援 iPad 時，要進行測試和優化 (多尺寸 UI、多工場景等)

## 開發環境

最基本的需求如下：

- 寫程式用的電腦 (Mac)
- 註冊一個 Apple ID
- 寫程式的工具 Xcode

### Mac 硬體

- 到蘋果官網選購 [mac](https://www.apple.com/tw/mac/)
    - MacBook Pro：適合工程師，效能高
    - MacBook Air：CP 高，適合新手
    - Mac Pro：伺服器級桌機
    - Mac Studio：桌機
    - Mac mini：體積很小的桌機
    - iMac：涵蓋 OS 系統的高級螢幕
- 注意事項
    - 硬碟最低 512GB
    - CPU 選 Apple Silicon 系列更強（M 開頭的處理器）
    - 鍵盤 Esc 鍵要有實體按鍵
    - 避免劇烈震動影響 mac 壽命 (騎車)

> 想了解效能比較，參考 [XcodeBenchmark](https://github.com/devMEremenko/XcodeBenchmark)

### 註冊 Apple ID

- 最簡單的方法是用 google 的 gmail 去註冊
- 有需要再到 [Apple Developer](https://developer.apple.com/account) 升級成開發者帳號 (年費 3400元)

### 安裝 Xcode

- 推薦工具：[XcodesApp](https://github.com/XcodesOrg/XcodesApp)
    - GUI 介面多版本管理
    - 快速下載、切換 Xcode 版本
- 官方下載：從 [Apple Developer Downloads](https://developer.apple.com/download/applications/)
  - 測試版如：Xcode 16.2 beta 3
  - 正式版如：Xcode 16.1
- 不推薦從 App Store 下載
  - 下載更新中無法使用
  - 無法選擇版本
  - 但是對最初使用的新手來說，心理門檻最低

> Xcode 是蘋果自家的 IDE (Integrated Development Environment)，IDE 中文名稱是整合開發環境，就是用來寫程式的工具，你可能聽過其他選擇，但除非你有能力自己處理各種細節，不然還是選官方的，避免 IDE 被人埋入後門等安全問題

## 程式語言

- Swift
    - 2014年 WWDC 14 (iOS 7) 開始支援
    - __現在__ iOS 開發的主程式語言
- Objective-C
    - __舊__ 時代的開發語言，逐漸被淘汰
    - 同一個系統 API 可能與 Swift 表現不一致

## UI 框架

- SwiftUI
    - 2019年 WWDC 19 (iOS 13) 開始支援
    - 目前蘋果力推的框架
    - 新手入門先學，老手要找時間學
- UIKit
    - 2008年 (iOS 2) 以來的核心框架
    - 很多公司還在使用
    - 新手需要再學