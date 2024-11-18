+++
title = "Page (頁面)"
weight = 3
date = 2024-07-16
+++

# Page (頁面)

```toml
# 標題
title = ""

# 描述
description = ""

# 文章的日期。
# 允許兩種格式：YYYY-MM-DD（2012-10-02）和 RFC3339（2002-10-02T15:00:00Z）。
# 不要在日期周圍添加引號；下面的行只表示沒有默認日期。
# 如果部分變量 `sort_by` 設置為 `date`，則任何缺少 `date` 的頁面將不會被渲染。
# 設置此項將覆蓋文件名中設置的日期。
date =

# 文章的最後更新日期，如果不同於日期。
# 格式與 `date` 相同。
updated =

# 如文檔中的部分頁面中所定義的權重。
# 如果部分變量 `sort_by` 設置為 `weight`，則任何缺少 `weight` 的頁面將不會被渲染。
weight = 0

# 如果設置，則將使用此 slug 來構建 URL，而不是使用文件名。
# 仍然將使用部分路徑。
# 它不能是空字符串，並且將覆蓋 `slug` 和文件名。
# 不應以 `/` 開頭，如果有則將刪除斜杠。
slug = ""

# 內容將出現的路徑。
# 如果設置，它不能是空字符串，並將覆蓋 `slug` 和文件名。
# 不會使用部分路徑。
# 它不應該以 `/` 開頭，如果有則將刪除斜杠。
path = ""

# 如果移動內容但希望將先前的 URL 重定向到當前 URL，則使用別名。
# 這需要一個路徑數組，而不是 URL。
aliases = []

# 頁面作者列表。如果啟用了站點提要，則第一位作者（如果有的話）
# 將在默認提要模板中用作頁面的作者。
authors = []

# 如果設置為 "true"，則該頁面將包含在搜索索引中。這僅在 Zola 配置文件中的 `build_search_index` 設置為 "true"，且父部分未將 `in_search_index` 設置為 "false" 時使用。
in_search_index = true

# 用於渲染此頁面的模板。
template = "page.html"

# 此頁面的分類。鍵需要與 `config.toml` 中配置的分類名稱相同，值是一個字符串對象的數組。例如，
# tags = ["rust", "web"]。
[taxonomies]

# 您自己的數據。
[extra]
```