import * as THREE from 'three';

const canvas = document.querySelector('#sculpture');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
try {
  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
  camera.position.set(6, 5, 8); camera.lookAt(0, .5, 0);
  const studio = new THREE.Group(); scene.add(studio);
  const mat = (color, roughness=.75) => new THREE.MeshStandardMaterial({color,roughness});
  const paper=mat('#eee7d8'), red=mat('#ae8d58'), dark=mat('#4c4436'), metal=mat('#c4baa4',.35), wood=mat('#cdb78e');
  function box(w,h,d,m,x,y,z,parent=studio){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  function texture(draw,w=1024,h=700){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return new THREE.MeshBasicMaterial({map:t});}
  const screen=texture((c,w,h)=>{c.fillStyle='#363126';c.fillRect(0,0,w,h);c.fillStyle='#cdb989';c.font='24px monospace';c.fillText('nelam / a work in progress',55,65);const lines=['const curiosity = true;','','function create(idea) {','  return {','    code: thoughtful,','    design: personal,','    madeWith: care','  };','}'];lines.forEach((l,i)=>{c.fillStyle=i===0?'#e1c98e':'#f0e8d6';c.fillText(l,55,135+i*48)});});
  // A handmade desktop computer: an actual tool of the owner's craft.
  box(3.55,2.65,.34,paper,-.45,2.05,-.6);
  const display=new THREE.Mesh(new THREE.PlaneGeometry(3.13,2.14),screen);display.position.set(-.45,2.12,-.419);studio.add(display);
  box(.45,.5,.42,metal,-.45,.65,-.6);box(1.5,.12,.95,paper,-.45,.36,-.5);
  box(3.1,.16,1.15,paper,-.4,.35,1.05);
  for(let row=0;row<4;row++)for(let col=0;col<12;col++)box(.18,.06,.17,col===0?red:metal,-1.68+col*.225,.46,.65+row*.22);
  box(1.2,.065,.16,metal,-.4,.46,1.57);
  // Photography: body, lens and shutter of a compact camera.
  const photo=new THREE.Group();photo.position.set(2,.65,.85);photo.rotation.y=-.35;studio.add(photo);
  box(1.15,.78,.5,dark,0,0,0,photo);box(.4,.15,.4,metal,-.25,.45,0,photo);
  const lens=new THREE.Mesh(new THREE.CylinderGeometry(.31,.34,.5,32),metal);lens.rotation.x=Math.PI/2;lens.position.set(.12,0,.4);photo.add(lens);
  const glass=new THREE.Mesh(new THREE.CylinderGeometry(.24,.24,.025,32),mat('#4c4434',.12));glass.rotation.x=Math.PI/2;glass.position.set(.12,0,.66);photo.add(glass);
  // Design: an art-direction sheet, with typography and physical color swatches.
  const sheet=texture((c,w,h)=>{c.fillStyle='#f8f2e2';c.fillRect(0,0,w,h);c.fillStyle='#ae8d58';c.font='110px Georgia';c.fillText('Make it',70,160);c.fillText('mean something.',70,285);['#ae8d58','#e1d3af','#4c4436'].forEach((v,i)=>{c.fillStyle=v;c.fillRect(70+i*270,410,240,160)});});
  const design=new THREE.Mesh(new THREE.PlaneGeometry(2,1.45),sheet);design.rotation.x=-Math.PI/2;design.rotation.z=-.22;design.position.set(-2.5,.29,1.1);studio.add(design);
  box(7,.22,4.5,wood,0,.12,.35);
  const notebook=box(1.3,.12,1.8,red,2.1,.3,-1.05);notebook.rotation.y=.2;
  scene.add(new THREE.HemisphereLight('#fff7ee','#a4916b',3));
  const key=new THREE.DirectionalLight('#fff5e8',4);key.position.set(-3,7,5);key.castShadow=true;key.shadow.mapSize.set(1024,1024);scene.add(key);
  let pointer={x:0,y:0},visible=true,last=0;
  canvas.addEventListener('pointermove',e=>{const b=canvas.getBoundingClientRect();pointer.x=(e.clientX-b.left)/b.width-.5;pointer.y=(e.clientY-b.top)/b.height-.5;});
  canvas.addEventListener('pointerleave',()=>pointer={x:0,y:0});
  const resize=()=>{const b=canvas.getBoundingClientRect();renderer.setSize(b.width,b.height,false);camera.aspect=b.width/b.height;camera.position.set(6,5,8).multiplyScalar(camera.aspect<1.25?1.22:1);camera.lookAt(0,.5,0);camera.updateProjectionMatrix();};new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([e])=>visible=e.isIntersecting).observe(canvas);
  function frame(t){requestAnimationFrame(frame);if(!visible||t-last<32)return;last=t;const progress=THREE.MathUtils.clamp((innerHeight-canvas.getBoundingClientRect().top)/(innerHeight+canvas.clientHeight),0,1);const target=reduced.matches?-.12:-.12+pointer.x*.22+progress*.65;studio.rotation.y+=(target-studio.rotation.y)*.055;studio.position.y=reduced.matches?0:Math.sin(t*.0007)*.035;renderer.render(scene,camera);}requestAnimationFrame(frame);
} catch(e) {canvas.hidden=true;document.querySelector('.object-caption').textContent='Code. Design. Photography.';console.warn('Studio scene unavailable',e);}




