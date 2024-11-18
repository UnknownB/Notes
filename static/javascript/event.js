let isClick = false;
let isDoubleClick = false;
let isDragging = false;
let isLongPress = false;

let pressTimer = null;
let clickCount = 0;
let mousedownTime = null;
let mouseupTime = null;
let clickTimeout = null;
const clickThreshold = 250; // 設定最大時間間隔來識別雙擊（300 毫秒）

// ------------------------------ sub function ---------------------------------

function isExcluded(event) {
    return (
        event.target.closest('a') ||
        event.target.closest('button') ||
        event.target.closest('i') ||
        event.target.nodeName === 'TEXTAREA' ||  // 文本框
        event.target.nodeName === 'INPUT'       // 輸入框
    );
}

function toggleSidebarAndTocBar() {
    header.classList.toggle('collapsed');
    sidebar.classList.toggle('collapsed');
    toc_bar.classList.toggle('collapsed');
}

// ------------------------------ 生命週期 ---------------------------------

// 生命週期：加載頁面
document.addEventListener('DOMContentLoaded', () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
});

// ------------------------------ 手勢類型偵測 ---------------------------------

// 按下
document.addEventListener('mousedown', (event) => {
    mousedownTime = Date.now();
    isDragging = false;
    isLongPress = false;

    if (mousedownTime > mouseupTime && mousedownTime - mouseupTime < clickThreshold) {
        clearTimeout(clickTimeout)
    }

    pressTimer = setTimeout(() => {
        isLongPress = true;
    }, 500); // 長按的閥值設為 500 毫秒
});

// 移動
document.addEventListener('mousemove', (event) => {
    isDragging = true;
});

// 放開
document.addEventListener('mouseup', (event) => {
    mouseupTime = Date.now();
    if (mouseupTime - mousedownTime < clickThreshold) {
        clickCount++;

        clickTimeout = setTimeout(() => {
            if (clickCount == 1) {
                isClick = true;
                click(event);
            } else if (clickCount == 2) {
                isDoubleClick = true;
            }
            clickCount = 0
            isClick = false;
            isDoubleClick = false;
        }, clickThreshold); // 延遲重置以避免 race condition
    }

    clearTimeout(pressTimer); // 清除長按計時器
    setTimeout(() => {
        isDragging = false;
        isLongPress = false;
    }, 0); // 延遲重置以避免 race condition
});

// ------------------------------ 手勢事件 ---------------------------------

// 自定義單點擊事件
function click(event) {
    if (!isExcluded(event)) {
        toggleSidebarAndTocBar();
    }
}


// ------------------------------ 按鈕事件 ---------------------------------

// homeButton
const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', () => {
    window.location.href = '/';
});

// toggleButton (開關 sidebar、toc-bar)
const header = document.getElementById('header');
const sidebar = document.getElementById('sidebar');
const toc_bar = document.getElementById('toc-bar');

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', (event) => {
    event.stopPropagation(); // 阻止事件冒泡，避免與手勢衝突
    toggleSidebarAndTocBar();
});