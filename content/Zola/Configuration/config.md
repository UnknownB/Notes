+++
title = "Config (網站配置)"
weight = 1
date = 2024-07-16
+++

# Config.toml (網站配置)

```toml
# 網站的基本 URL；唯一需要設定的配置變數。
base_url = "https://mywebsite.com"

# 網站的標題和描述；預設在資料提要中使用。
title = ""
description = ""

# 預設語言；在資料提要中使用。
default_language = "en"

# 要使用的網站主題。
theme = ""

# 覆寫預設輸出目錄 `public`，設置為另一個值（例如："docs"）。
output_dir = "public"

# 當重新構建網站時，是否保留輸出目錄根層級的隱藏檔案。
# 啟用此功能也會防止在重新構建時刪除輸出文件夾本身。
preserve_dotfiles_in_output = false

# 當設置為 "true" 時，網站根目錄中的 `sass` 目錄中的 Sass 文件將被編譯。
# 主題目錄中的 Sass 文件始終會被編譯。
compile_sass = false

# 當設置為 "true" 時，生成的 HTML 文件將被壓縮。
minify_html = false

# 一個 glob 樣式列表，指定在處理內容目錄時要忽略的資產文件。
# 默認為空，這意味着所有資產文件都會複製到 `public` 目錄中。
ignored_content = []

# 類似於 ignored_content，一個 glob 樣式列表，指定在處理靜態目錄時要忽略的資產文件。
# 默認為空，這意味着所有資產文件都會複製到 `public` 目錄中。
ignored_static = []

# 當設置為 "true" 時，將自動生成一個提要。
generate_feed = false

# 用於提要的文件名。也用作模板文件名。
# 默認為 "atom.xml"，其中內置模板會呈現 Atom 1.0 提要。
# 還有一個內置模板 "rss.xml"，可呈現 RSS 2.0 提要。
feed_filename = "atom.xml"

# 包含在提要中的文章數量。如果未設置此限制（默認值），則包含所有項目。
# feed_limit = 20

# 當設置為 "true" 時，`static` 目錄中的文件將被硬鏈接。對於大型靜態文件很有用。
# 請注意，為使此功能正常工作，`static` 目錄和輸出目錄都需要在同一文件系統上。
# 並且無論此設置如何，主題的 `static` 文件始終會被複製。
hard_link_static = false

# 頁面的默認作者
author = 

# 要呈現的網站的分類及其預設語言的配置
# 示例：
#     taxonomies = [
#       {name = "tags", feed = true}, # 每個標籤都將有自己的提要
#       {name = "tags"}, # 您可以在多種語言中使用相同名稱的分類
#       {name = "categories", paginate_by = 5},  # 一個術語每頁 5 項
#       {name = "authors"}, # 基本定義：無提要或分頁
#     ]
#
taxonomies = []

# 當設置為 "true" 時，從頁面和章節內容建立搜索索引，用於 `default_language`。
build_search_index = false

# Markdown 渲染的配置
[markdown]
# 當設置為 "true" 時，所有代碼塊都將被突出顯示。
highlight_code = false

# 用於搜索其他 `.sublime-syntax` 和 `.tmTheme` 文件的目錄列表。
extra_syntaxes_and_themes = []

# 用於代碼突出顯示的主題。
# 可參見下面的允許值列表。
highlight_theme = "base16-ocean-dark"

# 當設置為 "true" 時，將在呈現的 Markdown 文件中將表情別名轉換為其對應的 Unicode 表情。
# （例如：:smile: => 😄）
render_emoji = false

# 是否將外部鏈接打開到新標籤中
# 如果為 true，出於安全原因，`rel="noopener"` 將自動添加
external_links_target_blank = false

# 是否對所有外部鏈接設置 `rel="nofollow"`
external_links_no_follow = false

# 是否對所有外部鏈接設置 `rel="noreferrer"`
external_links_no_referrer = false

# 是否啟用智能標點符號（將引號、破折號、點轉換為其印刷形式）
# 例如，`...` 轉換為 `…`，`"quote"` 轉換為 `“curly”` 等
smart_punctuation = false

# 是否對所有圖片設置 `decoding="async"` 和 `loading="lazy"`
# 啟用後，alt 文本必須是純文本。
# 例如，`![xx](...)` 是可以的，但 `![*x*x](...)` 不可以
lazy_async_image = false

# 鏈接檢查器的配置。
[link_checker]
# 跳過以這些前綴開頭的外部 URL 的鏈接檢查
skip_prefixes = [
    "http://[2001:db8::]/",
]

# 跳過以這些前綴開頭的外部 URL 的錨點檢查
skip_anchor_prefixes = [
    "https://caniuse.com/",
]

# 將內部鏈接問題視為 "error" 或 "warn"，默認是 "error"
internal_level = "error"

# 將外部鏈接問題視為 "error" 或 "warn"，默認是 "error"
external_level = "error"

# 各種 slugification 策略，詳情參見下面
# 默認情況下，所有內容都是 slug
[slugify]
paths = "on"
taxonomies = "on"
anchors = "on"
# 是否刪除頁面路徑 slug 的日期前綴。
# 例如，content/posts/2016-10-08_a-post-with-dates.md => posts/a-post-with-dates
# 當為 true 時，content/posts/2016-10-08_a-post-with-dates.md => posts/2016-10-08-a-post-with-dates
paths_keep_dates = false

[search]
# 是否在索引中包含頁面/章節的標題
include_title = true
# 是否在索引中包含頁面/章節的描述
include_description = false
# 是否在索引中包含頁面/章節的路徑
include_path = false
# 是否在索引中包含頁面/章節的渲染內容
include_content = true
# 要截斷內容的字符位置。如果您有大量頁面且索引將變得太大而無法在網站上加載，則此選項很有用。
# 默認情況下未設置。
# truncate_content_length = 100

# 產生搜索索引的格式，可選值為 "elasticlunr_javascript" 或 "elasticlunr_json"
index_format = "elasticlunr_javascript"

# 默認語言的可選翻譯對象
# 示例：
#     default_language = "fr"
#
#     [translations]
#     title = "Un titre"
#
[translations]

# 額外語言定義
# 您可以定義特定語言的配置值和翻譯：
# 標題、描述、generate_feed、feed_filename、taxonomies、build_search_index
# 以及其自己的搜索配置和翻譯（詳見上文有關這些內容的詳細信息）
[languages]
# 例如
# [languages.fr]
# title = "Mon blog"
# generate_feed = true
# taxonomies = [
#    {name = "auteurs"},
#    {name = "tags"},
# ]
# build_search_index = false

# 您可以在此放置任何類型的數據。數據將在所有模板中可訪問。
# 示例：
#     [extra]
#     author = "Famous author"
#
# 作者值將在模板中使用 {{ config.extra.author }} 訪問
#
[extra]
```