    // 获取所有需要的元素
    const navbar = document.querySelector('.nav-bar');
    const scrollProgress = document.querySelector('.scroll-progress');
    const sections = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-bar a');

    // 处理滚动事件
    window.addEventListener('scroll', () => {
        // 导航栏背景效果
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // 更新滚动进度条
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
    // 平滑滚动
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });