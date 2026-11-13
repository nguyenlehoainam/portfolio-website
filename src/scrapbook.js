import '../concepts/concept.js';
import { profile } from './profile.js';
document.querySelector('.concept-bar').remove();
document.body.insertAdjacentHTML('afterbegin','<a class="skip" href="#about">Đến nội dung chính</a><div class="scroll-progress" aria-hidden="true"></div>');
document.querySelector('.site>header').insertAdjacentHTML('beforeend','<div class="header-tools"><button id="language" aria-label="Switch language">EN</button><button id="theme" aria-label="Đổi giao diện"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z"/></svg></button></div>');
document.querySelector('.site nav').setAttribute('aria-label','Main navigation');
document.querySelector('.about-title').insertAdjacentHTML('beforeend','<div class="studio-note"><canvas id="sculpture" role="img" aria-label="Bàn làm việc 3D: máy tính, máy ảnh, bản thiết kế"></canvas><span class="object-caption">Một góc nhỏ, nhiều điều để khám phá.</span></div>');
const footerLink=document.querySelector('footer>div>a');footerLink.href='#home';footerLink.textContent='Lên đầu trang ↑';
// Owner-supplied content; concept previews stay as historical design studies.
document.querySelector('.hero-copy>p').textContent='Tôi là Nguyễn Lê Hoài Nam, sinh viên Đại học Công nghiệp Hà Nội. Tôi yêu thích phát triển web và thiết kế, đang tìm cơ hội việc làm ở vị trí Full-stack Developer.';
document.querySelector('.about-title .studio-note').outerHTML='<figure class="portrait-note"><div class="portrait-frame"><img src="/images/hoai-nam.jpg" width="1920" height="2560" alt="Nguyễn Lê Hoài Nam mặc áo CLB Tin học, khoanh tay và đeo kính" loading="lazy"></div><figcaption><span>Nguyễn Lê Hoài Nam</span><span>NeLam, ngoài màn hình code.</span></figcaption></figure>';
document.querySelector('.about-content').insertAdjacentHTML('afterbegin','<div class="personal-facts"><div><span>Hiện tại</span><strong>Sinh viên Đại học Công nghiệp Hà Nội</strong></div><div><span>Cơ hội tôi đang tìm</span><strong>Full-stack Developer</strong></div></div>');
document.querySelector('.about-content').insertAdjacentHTML('beforeend','<div class="studio-note"><canvas id="sculpture" role="img" aria-label="Bàn làm việc 3D: máy tính, máy ảnh, bản thiết kế"></canvas><span class="object-caption">Một góc nhỏ, nhiều điều để khám phá.</span></div>');
document.querySelector('.contact-actions>div').innerHTML=Object.keys(profile.contacts).map(name=>`<button data-pending="${name}">${name} ↗</button>`).join('');
document.querySelector('.contact-actions').insertAdjacentHTML('afterbegin','<div class="direct-contact"><a href="mailto:namngyenhoai21@gmail.com">namngyenhoai21@gmail.com</a><a href="tel:+84966618229">0966 618 229</a></div>');
document.querySelector('.contact-actions>small').textContent='CV, Zalo, TopCV và Upwork sẽ được bổ sung.';
const community=document.querySelector('.community');
community.id='milestones';
community.classList.add('milestones-section');
community.querySelector('h2').innerHTML='Vai trò &<br>dấu mốc.';
community.querySelector('.roles>details').outerHTML='<aside class="milestone-note"><h3>Thành tích & dấu mốc</h3><p>Thành tích, chứng chỉ và thời gian hoạt động sẽ được bổ sung từ thông tin thật.</p></aside>';
community.querySelector('.roles article').classList.add('featured-role');
document.querySelector('.hero-copy h1').insertAdjacentHTML('afterend','<div class="hero-career"><strong>Full-stack Developer</strong><span>Đang tìm cơ hội việc làm</span></div>');
document.querySelector('.hero-copy>.button').insertAdjacentHTML('afterend','<a class="hero-contact" href="#contact">Liên hệ với tôi ↗</a>');
document.querySelector('.about-content .skills').outerHTML='<div class="identity-roles"><h3>Những gì tôi làm.</h3><div class="primary-roles"><div class="identity-role identity-dev"><strong>Full-stack Developer</strong><span>Phát triển web</span></div><div class="identity-role identity-design"><strong>Designer</strong><span>Thiết kế giao diện</span></div></div><div class="creative-interests"><h4>Sở thích sáng tạo</h4><div class="interest-roles"><div class="identity-role identity-photo"><strong>Photography</strong><span>Lưu giữ những khoảnh khắc</span></div><div class="identity-role identity-video"><strong>Video editing</strong><span>Kể chuyện qua từng khung hình</span></div></div></div></div>';
// Small drawings sit beside the typography, like marginal sketches in a notebook.
const sketches={
 dev:'<rect x="8" y="12" width="76" height="52" rx="3"/><path d="M8 24h76M31 35l-9 9 9 9m29-18 9 9-9 9M49 32l-6 24"/>',
 design:'<path d="M13 57C27 9 58 12 79 49M13 57l23-4m43-4L62 19M16 18h58"/><circle cx="13" cy="57" r="4"/><circle cx="79" cy="49" r="4"/><rect x="40" y="13" width="9" height="9"/><path d="M43 63l12-27 10 11-22 16z"/>',
 photo:'<path d="M10 26h19l6-10h22l6 10h19v37H10z"/><circle cx="47" cy="44" r="14"/><circle cx="47" cy="44" r="8"/><path d="M18 20h9m39 15h7"/>',
 video:'<rect x="8" y="12" width="76" height="52" rx="2"/><path d="M8 23h76M8 54h76M20 12v11m15-11v11m15-11v11m15-11v11M20 54v10m15-10v10m15-10v10m15-10v10M39 31l17 8-17 9z"/>',
};
for(const [name,paths] of Object.entries(sketches))document.querySelector(`.identity-${name}`).insertAdjacentHTML('beforeend',`<svg class="role-sketch" viewBox="0 0 92 76" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`);
// Keep the chosen collage opening; group related details into shared paper surfaces.
document.querySelector('.hero-foot').remove();
document.querySelector('.chapter').remove();
document.querySelector('.hero-copy>.button').classList.add('primary-action');
// Use complete rows instead of accumulating unrelated elements in the right column.
const about=document.querySelector('#about');
const aboutHeading=document.createElement('div');aboutHeading.className='about-heading';
aboutHeading.append(document.querySelector('.about-title h2'),document.querySelector('.about-title>p'));
about.prepend(aboutHeading);
const disciplines=document.querySelector('.identity-roles');about.append(disciplines);
const professional=document.createElement('div');professional.className='professional-group';
professional.innerHTML='<h4>Vai trò chính</h4>';professional.append(document.querySelector('.primary-roles'));
disciplines.querySelector('h3').insertAdjacentElement('afterend',professional);
const workHeading=document.querySelector('.work .section-heading');
const workIntro=document.createElement('div');workIntro.className='work-intro';
workIntro.append(workHeading.querySelector('h2'),workHeading.querySelector('p'));
workHeading.append(workIntro,document.querySelector('.studio-note'));
document.querySelectorAll('[data-pending]').forEach(b=>{const name=b.dataset.pending,url=name==='CV'?profile.cv:profile.contacts[name];if(url){const a=document.createElement('a');a.className=b.className;a.href=url;a.textContent=b.textContent;if(name==='CV')a.download='Nguyen-Le-Hoai-Nam-CV.pdf';else{if(url.startsWith('https://')){a.target='_blank';a.rel='noopener noreferrer';}}b.replaceWith(a);}else{b.onclick=()=>{const t=document.querySelector('.toast');t.textContent=language==='vi'?`${name}: thông tin đang được cập nhật.`:`${name}: details will be added soon.`;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),3500);};}});

const translations={
'Vai trò chính':'Professional focus',
'Những gì tôi làm.':'What I do.','Phát triển web':'Web development','Thiết kế giao diện':'Interface design','Sở thích sáng tạo':'Creative interests',
'Lưu giữ những khoảnh khắc':'Capturing moments','Kể chuyện qua từng khung hình':'Telling stories, frame by frame',
'Đang tìm cơ hội việc làm':'Open to job opportunities','Liên hệ với tôi ↗':'Get in touch ↗',
'Vai trò &':'Roles &','dấu mốc.':'milestones.',
'Tôi là Nguyễn Lê Hoài Nam, sinh viên Đại học Công nghiệp Hà Nội. Tôi yêu thích phát triển web và thiết kế, đang tìm cơ hội việc làm ở vị trí Full-stack Developer.':'I’m Nguyễn Lê Hoài Nam, a student at Hanoi University of Industry. I enjoy web development and design, and I’m looking for a Full-stack Developer role.',
'Hiện tại':'Currently','Sinh viên Đại học Công nghiệp Hà Nội':'Student at Hanoi University of Industry','Cơ hội tôi đang tìm':'Open to opportunities in','NeLam, ngoài màn hình code.':'NeLam, beyond the screen.','Điện thoại ↗':'Phone ↗','CV, Zalo, TopCV và Upwork sẽ được bổ sung.':'Résumé, Zalo, TopCV, and Upwork will be added soon.',
'Đến nội dung chính':'Skip to main content','Về tôi':'About','Dự án':'Work','Kết nối ↗':'Connect ↗','Xin chào.':'Hello.','Tôi là Nam.':'I’m Nam.',
'Một người thích viết code, sắp xếp những ý tưởng và lưu giữ những khoảnh khắc. Chào mừng đến với góc sáng tạo của tôi.':'I enjoy writing code, bringing ideas together, and capturing moments. Welcome to my creative corner.',
'Khám phá công việc của tôi':'Explore my work','Ý tưởng cần cảm hứng.':'Ideas need inspiration.','Sản phẩm cần sự chỉn chu.':'Products need care.','Còn tôi, thích cả hai.':'I happen to love both.',
'Nhặt nhạnh ý tưởng.':'Collecting ideas.','Làm nên điều riêng.':'Making them personal.','hay đơn giản là NeLam.':'or simply NeLam.',
'Tôi thích hiểu cách mọi thứ hoạt động — rồi tìm cách khiến chúng trở nên tốt hơn.':'I like understanding how things work — then finding ways to make them better.',
'Với tôi, lập trình và thiết kế là hai phần của cùng một quá trình: biến những điều còn trừu tượng thành một trải nghiệm rõ ràng, hữu ích và có dấu ấn riêng.':'To me, code and design are part of one process: turning abstract ideas into clear, useful experiences with a point of view.',
'Qua những dự án cá nhân và hoạt động CLB, tôi đang học cách xây dựng sản phẩm, kết nối con người và phát triển góc nhìn của mình.':'Through personal projects and club activities, I am learning to build products, connect people, and develop my own perspective.',
'Một góc nhỏ, nhiều điều để khám phá.':'A small corner. A world to explore.','Một vài điều tôi tạo nên.':'A few things I make.','Không gian cho ba dự án tâm huyết.':'A space for three meaningful projects.','Các hình dưới đây là nghiên cứu thiết kế minh họa.':'The visuals below are illustrative design studies.',
'Minh họa bố cục · Chờ dự án thật':'Layout study · Real project coming soon','Không gian cho ý tưởng':'A space for ideas','Thiết kế từ một góc nhìn':'Design with a point of view','Thử nghiệm tiếp theo':'The next experiment',
'Một nơi để kể về vấn đề thực tế, cách tôi xây dựng giải pháp và những quyết định đứng sau trải nghiệm sản phẩm.':'A place to explain a real problem, the solution I built, and the decisions shaping the product experience.',
'Dành cho dự án kết hợp ngôn ngữ thị giác và kỹ thuật. Chia sẻ hệ thống thiết kế, tương tác và kết quả triển khai.':'For a project combining visual thinking and engineering. Share its design system, interactions, and implementation outcomes.',
'Chỗ dành cho một ý tưởng đang lớn lên. Từ bản thử nghiệm đầu tiên đến bài học và thành tựu có thể chia sẻ.':'Room for an idea that is still growing, from the first prototype to lessons and achievements worth sharing.',
'Khung câu chuyện dự án':'The project story','Vấn đề → Vai trò & công nghệ → Giải pháp → Kết quả & thành tựu. Khi có nội dung thật, phần này sẽ kể đầy đủ quá trình và dẫn đến sản phẩm, mã nguồn.':'Problem → Role & technology → Solution → Outcomes & achievements. Real content will explain the process and link to the product and source code.',
'Làm cùng nhau.':'Build together.','Đi xa hơn.':'Go further.','Sự chỉn chu cũng nằm trong cách tôi học hỏi, chia sẻ và đồng hành với mọi người.':'Care also shows in the way I learn, share, and work with others.',
'Chủ nhiệm CLB Tin học':'Computer Club President','Kết nối với những người cùng yêu công nghệ.':'Connecting people who share a love for technology.','Leader lớp Web':'Web Class Leader','CLB Sinh viên · Cùng học, cùng xây dựng.':'Student Club · Learning and building together.','Trưởng team Dev':'Development Team Lead','CLB Sinh viên · Đưa ý tưởng thành sản phẩm.':'Student Club · Turning ideas into products.',
'Thành tích & dấu mốc':'Achievements & milestones','Thành tích, chứng chỉ và thời gian hoạt động sẽ được bổ sung từ thông tin thật.':'Achievements, certificates, and dates will be added from verified information.',
'Một cuộc trò chuyện có thể là khởi đầu.':'It can start with a conversation.','Anh có ý tưởng.':'You bring an idea.','Tôi có sự tò mò.':'I bring curiosity.','Hồ sơ CV ↗':'My résumé ↗','Thông tin liên hệ & CV sẽ được bổ sung.':'Contact details and résumé will be added soon.','Lên đầu trang ↑':'Back to top ↑'};
let language=localStorage.getItem('nelam-lang')||'vi',theme=localStorage.getItem('nelam-theme')||'light';
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),texts=[];while(walker.nextNode()){const node=walker.currentNode,key=node.textContent.trim();if(translations[key])texts.push({node,original:node.textContent,key});}
function setLanguage(){document.documentElement.lang=language;for(const {node,original,key} of texts)node.textContent=language==='en'?original.replace(key,translations[key]):original;document.querySelector('#language').textContent=language==='vi'?'EN':'VI';document.querySelector('#language').setAttribute('aria-label',language==='vi'?'Switch to English':'Chuyển sang tiếng Việt');}
function setTheme(){document.documentElement.dataset.theme=theme;document.querySelector('#theme').setAttribute('aria-pressed',String(theme==='dark'));document.querySelector('#theme').setAttribute('aria-label',language==='vi'?(theme==='dark'?'Chuyển giao diện sáng':'Chuyển giao diện tối'):(theme==='dark'?'Use light theme':'Use dark theme'));document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#292620':'#f5f1e7';}
document.querySelector('#language').onclick=()=>{language=language==='vi'?'en':'vi';localStorage.setItem('nelam-lang',language);setLanguage();setTheme();};document.querySelector('#theme').onclick=()=>{theme=theme==='light'?'dark':'light';localStorage.setItem('nelam-theme',theme);setTheme();};setLanguage();setTheme();
const reduced=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;document.documentElement.style.setProperty('--progress',max>0?scrollY/max:0);};addEventListener('scroll',update,{passive:true});update();const paper=document.querySelector('.paper-stack');paper.addEventListener('pointermove',e=>{if(reduced.matches)return;const b=paper.getBoundingClientRect();paper.style.setProperty('--paper-x',((e.clientX-b.left)/b.width-.5)*12);});paper.addEventListener('pointerleave',()=>paper.style.setProperty('--paper-x',0));
import('./studio.js');


