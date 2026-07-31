(()=>{let e=document.getElementById(`galeria`)?.getAttribute(`data-api`)||`http://localhost:3000/api`;function t(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function n(e){if(!e)return`Sin fecha`;let t=new Date(e);return isNaN(t.getTime())?`Sin fecha`:t.toLocaleDateString(`es-ES`,{day:`numeric`,month:`long`,year:`numeric`})}function r(e){let r=e.nombre_familia||e.usuario_nombre||`Familia participante`,i=n(String(e.created_at||``)),a=e.tipo===`foto`?`Foto`:`Testimonio`,o=Number(e.total_likes||0),s=e.tipo===`foto`&&!!e.imagen_url,c=typeof e.texto==`string`?e.texto.trim():``,l=!!e.user_liked,u=l?`#e05c5c`:``,d=l?`#e05c5c`:`none`;return`
        <article style="background:#fff;border-radius:12px;padding:1.5rem;border:1px solid #e5e7eb;display:flex;flex-direction:column;gap:.85rem;box-shadow:0 1px 3px rgba(0,0,0,.07)">
          <div style="display:flex;align-items:center;gap:.75rem">
            <div style="width:40px;height:40px;min-width:40px;border-radius:50%;background:#f5f0e8;border:1px solid #e5e7eb;display:flex;align-items:center;justify-content:center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9aabb8" stroke-width="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <p style="font-weight:600;font-size:.95rem;color:#0d2240;margin:0">${t(r)}</p>
              <time style="font-size:.8rem;color:#6b7280;display:block">${t(i)}</time>
            </div>
          </div>
          ${s?`<img style="width:100%;aspect-ratio:4/3;border-radius:8px;object-fit:cover;background:#e5dfd5" src="${t(String(e.imagen_url))}" alt="Foto de ${t(r)}" loading="lazy" />`:``}
          ${c?`<p style="font-size:.9rem;color:#374151;line-height:1.6;flex:1;margin:0">${t(c)}</p>`:``}
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:0" />
          <div style="display:flex;align-items:center;justify-content:space-between">
            <button class="js-like-btn" data-id="${t(String(e.id||``))}" data-liked="${l}"
              style="display:flex;align-items:center;gap:.4rem;font-size:.88rem;color:${u};background:none;border:none;cursor:pointer;font-family:inherit;transition:color .2s"
              aria-label="${o} me gusta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${d}" stroke="${l?`#e05c5c`:`currentColor`}" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span class="like-count">${o}</span>
            </button>
            <span style="font-size:.8rem;padding:.2rem .7rem;border:1px solid #e5e7eb;border-radius:100px;color:#6b7280">${t(a)}</span>
          </div>
        </article>`}async function i(){try{let t=localStorage.getItem(`token`),n=t?{Authorization:`Bearer ${t}`}:{},i=await fetch(`${e}/galeria?limit=3`,{cache:`no-store`,headers:n});if(!i.ok)return;let a=await i.json(),o=Array.isArray(a)?a:a.data||[],s=document.getElementById(`galeria`);if(!s)return;let c=document.getElementById(`familiasGrid`),l=document.getElementById(`familiasEmpty`);if(o.length===0){if(c&&c.remove(),!l){let e=document.createElement(`div`);e.id=`familiasEmpty`,e.className=`empty-familias`,e.innerHTML=`<p>Aún no hay testimonios publicados.</p>`,s.querySelector(`.container`)?.appendChild(e)}return}l&&l.remove(),c||(c=document.createElement(`div`),c.id=`familiasGrid`,c.className=`familias-grid`,s.querySelector(`.container`)?.appendChild(c)),c.innerHTML=o.map(r).join(``)}catch{}}window.addEventListener(`community:uploaded`,e=>{let t=e.detail?.mode;(t===`foto`||t===`comentario`)&&i()}),document.addEventListener(`DOMContentLoaded`,()=>i()),document.addEventListener(`click`,async t=>{let n=t.target.closest(`.js-like-btn`);if(!n)return;let r=n.getAttribute(`data-id`);if(!r)return;let i=localStorage.getItem(`token`);if(!i){let e=document.getElementById(`loginModalOverlay`);if(e){e.classList.add(`active`);let t=document.getElementById(`modalTitle`),n=document.getElementById(`modalMessage`);t&&(t.textContent=`Iniciar sesión`),n&&(n.textContent=`Debes iniciar sesión para dar me gusta.`)}return}let a=n.getAttribute(`data-liked`)===`true`,o=n.querySelector(`.like-count`),s=parseInt(o?.textContent||`0`,10),c=!a,l=(e,t)=>{n.setAttribute(`data-liked`,String(e)),n.style.color=e?`#e05c5c`:`#6b7280`;let r=n.querySelector(`svg`);r&&(r.setAttribute(`fill`,e?`#e05c5c`:`none`),r.setAttribute(`stroke`,e?`#e05c5c`:`currentColor`)),o&&(o.textContent=String(t))};l(c,s+(c?1:-1));try{let t=await fetch(`${e}/galeria/${encodeURIComponent(r)}/like`,{method:`POST`,headers:{Authorization:`Bearer ${i}`}});if(!t.ok)throw Error(`error`);l((await t.json()).liked,parseInt(o?.textContent||`0`,10))}catch{l(a,s)}})})();