+++
title = "Markdown"
sort_by = "weight"
template = "book/page.html"
page_template = "book/page.html"
weight = 2
date = 2024-07-17
update = 2024-11-19
+++

## Markdown

- Markdown 是一種輕量級標記式語言
- 透過固定格式轉換成 html
- 創始人為 *約翰‧格魯伯 (John Gruber)*

## 標題

```markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

## 列表

### 無序列表

- 使用 `-`、`+`、`*` 來表示項目符號

```markdown
- item1
+ item2
* item3
```

### 有序列表

- 使用數字加 `.` 來表示
- 實際顯示數值會自動計算

```markdown
1. item1
2. item2
```

## 強調

### 斜體

- 單個 `*` or `_` 包圍文本
- _context_

```markdown
*context*
_context_
```

### 粗體

- 單個 `*` or `_` 包圍文本
- __context__

```markdown
**context**
__context__
```

### 刪除線

- 使用 `~~` 包圍文本
- ~~context~~


```markdown
~~context~~
```

## 超連結

- 使用 `[描述](網址)` 來建立超連結
- [Google](https://www.google.com)

```markdown
[Google](https://www.google.com)
```

## 圖片

- 使用 `![替代文字](圖片網址)` 來建立超連結
- ![Markdown Logo](_index.png)

```markdown
![Markdown Logo](https://markdown.tw/images/208x128.png)
```

## 引用

- 使用 `>` 來表示引用
- > context

```markdown
> 引用文字
```

## 程式碼

### 行內程式碼

- 使用單個反引號 ` 包圍文本
- `context`

```markdown
`context`
```

### 程式碼區塊

- 使用三個反引號 ``` 包圍多行文本
- 縮排 4 個空白
- ``` markdown
  context
  ```
```markdown
    ```markdown
    context
    ```
```

## 分隔線

- 使用三個或更多的 `-`、`*`、`_` 來建立分隔線
- ---

```markdown
---
```