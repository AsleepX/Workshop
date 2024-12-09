function toggleDetails(day) {
    const content = document.getElementById(day);
    const icon = document.querySelector(`.day[data-target="${day}"] .icon`);
    const isHidden = !content.classList.contains('show');

    content.classList.toggle('show');
    icon.classList.toggle('rotated'); // 使用 CSS transform 来旋转图标
    icon.textContent = '►'; // 保持图标始终为 ►，通过旋转来表示状态
}

let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.slider-container');
    const images = container.querySelectorAll('img');
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
        // 创建图标元素
        const icon = document.createElement('span');
        icon.className = 'icon';
        icon.textContent = '►'; // 默认图标

        // 将图标插入到 .day 元素的开头
        day.insertBefore(icon, day.firstChild);

        // 获取目标内容的ID
        const target = day.getAttribute('data-target');
        day.addEventListener('click', () => toggleDetails(target));
    });
    let currentIndex = 0;
    
    // 复制第一张图片到末尾以实现无缝滚动
    const firstImage = images[0].cloneNode(true);
    container.appendChild(firstImage);
    
    function nextSlide() {
        currentIndex++;
        container.style.transition = 'transform 1s ease';
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // 当滚动到最后一张（复制的第一张）时
        if (currentIndex === images.length) {
            // 等待过渡动画完成后
            setTimeout(() => {
                // 取消过渡动画
                container.style.transition = 'none';
                // 立即回到第一张
                currentIndex = 0;
                container.style.transform = `translateX(0)`;
            }, 500);
        }
    }
    
    // 每4秒切换一次图片
    setInterval(nextSlide, 6000);
});
