function toggleDetails(day) {
    const content = document.getElementById(day);
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.slider-container');
    const images = container.querySelectorAll('img');
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
