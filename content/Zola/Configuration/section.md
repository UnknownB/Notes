+++
title = "Section (區段)"
weight = 2
date = 2024-07-16
+++

# Section (區段)

```toml
title = ""

description = ""

# 如果 `--drafts` 標誌被傳遞給 `zola build`、`zola serve` 或 `zola check`，則只有草稿部分被加載。
draft = false

# 用於按“日期”、“update_date”、“title”、“title_bytes”、“weight”、“slug” 或 “none” 對頁面進行排序。詳情參見下文。
sort_by = "none"

# 由父部分用於排序其子部分。
# 數值越低，優先級越高。
weight = 0

# 用於渲染此部分頁面的模板。
template = "section.html"

# 指定的模板適用於該部分下的所有頁面，遞歸應用。
# 如果有幾個嵌套部分，每個都有一個設置了 page_template，頁面將始終使用最接近自己的模板。
# 但是，頁面自己的 `template` 變量始終優先。
# 默認情況下未設置。
page_template =

# 設置每個分頁中要顯示的頁面數。
# 如果未設置或值為 0，則不會進行分頁。
paginate_by = 0

# 如果設置，則將用於分頁頁面的路徑。頁碼將附加在此路徑之後。
# 默認為 page/1。
paginate_path = "page"

# 如果設置，將以相反的順序進行分頁。
paginate_reversed = false

# 這決定是否為每個標題插入一個鏈接，就像您在此站點上懸停在標題上時可以看到的那樣。
# 默認模板可以通過在 `templates` 目錄中創建一個 `anchor-link.html` 文件來覆蓋。
# 此值可以是 "left"、"right"、"heading" 或 "none"。
# "heading" 表示完整標題成為錨點的文本。
insert_anchor_links = "none"

# 如果設置為 "true"，則該部分的頁面將包含在搜索索引中。這僅在 Zola 配置文件中的 `build_search_index` 設置為 "true" 時使用。
in_search_index = true

# 如果設置為 "true"，則將呈現部分首頁。
# 當該部分用於組織頁面（而不是直接使用）時很有用。
render = true

# 這決定在用戶登錄部分時是否重定向。默認為未設置。
# 與 `render` 類似，但當您不想在登錄到根部分頁面時出現 404 時很有用。
# 示例：redirect_to = "documentation/content/overview"
redirect_to =

# 如果設置為 "true"，則該部分將其頁面傳遞給父部分。默認為 `false`。
# 當該部分不應該拆分父部分時很有用，例如
# 在 posts 部分下的每年部分。
transparent = false

# 如果移動內容但希望將先前的 URL 重定向到當前 URL，則使用別名。
# 這需要一個路徑數組，而不是 URL。
aliases = []

# 如果設置為 "true"，則將為該部分在該部分的根路徑生成提要文件。這與具有相同名稱的全站變量獨立。
# 部分提要將僅包含來自該相應提要的帖子，而不包含任何其他部分，包括該部分下的子部分。
generate_feed = false

# 您自己的數據。
[extra]
```
