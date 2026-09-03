document.addEventListener("DOMContentLoaded", function() {
    // تأثير ظهور تدريجي (Fade In & Slide Up) للـ Footer عند التمرير إليه
    const footer = document.querySelector("footer");
    
    if (footer) {
        footer.style.opacity = "0";
        footer.style.transform = "translateY(20px)";
        footer.style.transition = "all 0.6s ease-out";
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.style.opacity = "1";
                    footer.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(footer);
    }

    // تأثير اهتزاز خفيف أو تفاعل عند الضغط على الأزرار
    const interactiveButtons = document.querySelectorAll(".products-list li, .project-btns li, .feedback-btns li, nav a");
    
    interactiveButtons.forEach(btn => {
        btn.addEventListener("mousedown", function() {
            this.style.transform = "scale(0.97)";
        });
        btn.addEventListener("mouseup", function() {
            this.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {

    // 1. أنيمايشن التمرير (Scroll Animation) للأقسام والعناصر
    const observerOptions = {
        threshold: 0.15 // بيشتغل الأنيمايشن أول ما يظهر 15% من العناصر عالعرض
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // تشغيل الأنيمايشن مرة وحدة بس لكل عنصر
            }
        });
    }, observerOptions);

    // اختيار العناصر اللي بدك ياها تتحرك وقت الـ Scroll (الأقسام، العناوين، الفقرات)
    const animatedElements = document.querySelectorAll(".content-section h2, .content-section p, .content-section ul, footer");
    
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(25px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(el);
    });


    // 2. أنيمايشن الانتقال الناعم (Page / Content Transition) عند كبس الأزرار
    const navLinks = document.querySelectorAll("nav a, .service-links a, .bttns-service a");
    const mainContent = document.querySelector("main");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            // التأكد إذا الرابط داخلي بنفس الصفحة أو بيفتح صفحة ثانية
            const href = this.getAttribute("href");
            
            // لو الرابط بيؤدي لصفحة تانية (.html)، بنعمل تأثير إخفاء ناعم قبل الانتقال
            if (href && href !== "#" && !href.startsWith("http")) {
                e.preventDefault(); // إيقاف الانتقال الفوري المؤقت لتطبيق الحركة
                
                if (mainContent) {
                    mainContent.style.opacity = "0";
                    mainContent.style.transform = "translateY(-15px)";
                    mainContent.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                }

                // الانتقال للرابط بعد ما تخلص الحركة (300 ملي ثانية)
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });

});