// 全局变量
let particles = [];
let particleSystem;

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initHeroAnimations();
    initScrollAnimations();
    initSkillBars();
    initParticleSystem();
    initProjectCards();
});

// 移动端菜单
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// 英雄区域动画
function initHeroAnimations() {
    // 标题动画
    anime({
        targets: '#hero-title',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutCubic',
        delay: 500
    });

    // 副标题动画
    anime({
        targets: '#hero-subtitle',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutCubic',
        delay: 800
    });

    // 按钮动画
    anime({
        targets: '#hero-buttons',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: 'easeOutCubic',
        delay: 1200
    });
}

// 滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('skill-card')) {
                    anime({
                        targets: element,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 600,
                        easing: 'easeOutCubic',
                        delay: anime.stagger(200)
                    });
                }
                
                if (element.classList.contains('project-card')) {
                    anime({
                        targets: element,
                        opacity: [0, 1],
                        translateY: [40, 0],
                        duration: 800,
                        easing: 'easeOutCubic',
                        delay: anime.stagger(300)
                    });
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.skill-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// 技能条动画
function initSkillBars() {
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-bar');
                
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 500);
                });
                
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const skillsSection = document.querySelector('.skill-card').parentElement.parentElement;
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
}

// 粒子系统
function initParticleSystem() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    // 创建p5.js画布
    new p5(function(p) {
        let particles = [];
        const numParticles = 50;

        p.setup = function() {
            const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent('particles-container');
            
            // 初始化粒子
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle(p));
            }
        };

        p.draw = function() {
            p.clear();
            
            // 更新和绘制粒子
            particles.forEach(particle => {
                particle.update();
                particle.display();
            });
            
            // 连接附近的粒子
            connectParticles(p, particles);
        };

        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    });
}

// 粒子类
class Particle {
    constructor(p) {
        this.p = p;
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.vx = p.random(-0.5, 0.5);
        this.vy = p.random(-0.5, 0.5);
        this.size = p.random(2, 4);
        this.opacity = p.random(0.3, 0.8);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // 边界检测
        if (this.x < 0 || this.x > this.p.width) this.vx *= -1;
        if (this.y < 0 || this.y > this.p.height) this.vy *= -1;
    }

    display() {
        this.p.noStroke();
        this.p.fill(214, 158, 46, this.opacity * 255);
        this.p.ellipse(this.x, this.y, this.size);
    }
}

// 连接粒子
function connectParticles(p, particles) {
    const maxDistance = 100;
    
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const distance = p.dist(
                particles[i].x, particles[i].y,
                particles[j].x, particles[j].y
            );
            
            if (distance < maxDistance) {
                const opacity = p.map(distance, 0, maxDistance, 0.3, 0);
                p.stroke(214, 158, 46, opacity * 255);
                p.strokeWeight(1);
                p.line(
                    particles[i].x, particles[i].y,
                    particles[j].x, particles[j].y
                );
            }
        }
    }
}

// 项目卡片交互
function initProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                rotateX: 5,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                rotateX: 0,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
}

// 平滑滚动
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 导航链接点击处理
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        smoothScroll(e.target.getAttribute('href'));
    }
});

// 返回顶部功能
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 添加返回顶部按钮
function addBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'fixed bottom-8 right-8 w-12 h-12 bg-amber-600 text-white rounded-full shadow-lg opacity-0 transition-all duration-300 hover:bg-amber-700 hover:scale-110 z-40';
    button.style.transform = 'translateY(100px)';
    
    button.addEventListener('click', scrollToTop);
    document.body.appendChild(button);
    
    // 滚动监听
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        } else {
            button.style.opacity = '0';
            button.style.transform = 'translateY(100px)';
        }
    });
}

// 初始化返回顶部按钮
addBackToTopButton();