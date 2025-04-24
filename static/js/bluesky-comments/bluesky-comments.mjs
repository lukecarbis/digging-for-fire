var u=class extends HTMLElement{static properties={url:{type:String}};#e;#o=!1;#r=new Set;constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
  <style>
	:host {
	  --bluesky-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	  --bluesky-font-size: 16px;
		--bluesky-text-color: #333;
	  --bluesky-handle-color: #888;
	  --bluesky-footer-text-color: rgb(111, 134, 159);
		--bluesky-bg-color: #fff;
	  --bluesky-hover-bg: #f0f0f0;
	  --bluesky-spacing-xs: 5px;
	  --bluesky-spacing-sm: 8px;
	  --bluesky-spacing-md: 10px;
	  --bluesky-spacing-lg: 15px;
	  --bluesky-avatar-size: 24px;
	  --bluesky-avatar-bg: #e0e0e0;

	  /* Comments Structure */
	  --bluesky-reply-border-width: 2px;

	  /* Footer */
	  --bluesky-footer-font-size: 15px;
	  --bluesky-icon-size: 18px;
	  --bluesky-border-color: #e0e0e0;

	}

	/* Container Styles */
	.comments {
	  font-family: var(--bluesky-font-family);
		font-size: var(--bluesky-font-size);
		background-color: var(--bluesky-bg-color);
	  border: 1px solid var(--bluesky-border-color);
	  color: var(--bluesky-text-color);
	}

	/* Comment Structure */
	.comment {
	  border-bottom: 1px solid var(--bluesky-border-color);
	  padding-top: var(--bluesky-spacing-lg);
	}

	.comment.reply {
	  border-left: var(--bluesky-reply-border-width) solid var(--bluesky-border-color);
	  margin-left: var(--bluesky-spacing-lg);
    padding-top: var(--bluesky-spacing-xs);
	}

	.comment:last-child {
	  border-bottom: none;
	}

  .comment-content {
    padding: var(--bluesky-spacing-xs) 0;
  }

	.avatar {
	  width: var(--bluesky-avatar-size);
	  height: var(--bluesky-avatar-size);
	  border-radius: 50%;
	  object-fit: cover;
	  border: 1px solid var(--bluesky-border-color);
	}

	.default-avatar {
	  width: var(--bluesky-avatar-size);
	  height: var(--bluesky-avatar-size);
	  border-radius: 50%;
	  background-color: var(--bluesky-avatar-bg);
	}

	.comment-header {
	  display: flex;
	  align-items: center;
	  gap: var(--bluesky-spacing-md);
	  padding: 0 var(--bluesky-spacing-lg);
	}


	.comment-footer {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  margin-bottom: var(--bluesky-spacing-xs);
	  font-size: var(--bluesky-footer-font-size);
	  color: var(--bluesky-footer-text-color);
	  padding: var(--bluesky-spacing-xs);
	}

	.comment-footer div {
	  display: flex;
	  align-items: center;
	  gap: var(--bluesky-spacing-xs);
	}

	.comment-link {
	  display: flex;
	  flex-direction: column;
	  color: inherit;
	  text-decoration: none;
	  padding: 0 var(--bluesky-spacing-lg);
	}

	.profile-link {
	  color: var(--bluesky-text-color);
		font-weight: 600;
	  text-decoration: none;
	}

	.timestamp-link,
	.handle-link {
	  color: var(--bluesky-handle-color);
	  text-decoration: none;
	}

	.comment-link:hover,
	.comment-footer:hover {
	  background-color: var(--bluesky-hover-bg);
	}

	.profile-link:hover {
		text-decoration: underline;
	}

	.handle {
	  color: var(--bluesky-handle-color);
	}

	.comment-footer svg {
	  width: var(--bluesky-icon-size);
	  height: var(--bluesky-icon-size);
	  color: var(--bluesky-footer-text-color);
	}
  </style>
  <div class="comments"></div>
    `,this.#e=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&!this.#o&&(this.#a(),this.#o=!0,this.#e.disconnect())})},{threshold:.1})}connectedCallback(){this.#e.observe(this)}disconnectedCallback(){this.#e.disconnect()}async#a(){let e=this.getAttribute("url");if(e)try{let o=await this.#n(e);if(!o)throw new Error("Failed to resolve AT URI");let{thread:r,threadgate:t}=await this.#c(o);this.#r=new Set(t?.record?.hiddenReplies||[]),this.#d(r)}catch{this.shadowRoot.querySelector(".comments").innerHTML="<p>Error loading comments.</p>"}else this.shadowRoot.querySelector(".comments").innerHTML="<p>No Bluesky URL provided.</p>"}async#n(e){let o;if(e.startsWith("at:"))return e;if(!e.startsWith("https://bsky.app/"))return;let r=new URL(e).pathname.split("/"),t=r[2],s=r[4];if(!(!t||!s)){if(!t.startsWith("did:")){let a=this.#i(`handle:${t}`);if(a)t=a;else try{let n=`https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${encodeURIComponent(t)}`,l=await fetch(n);if(!l.ok)throw new Error("Failed to resolve handle");let i=await l.json();if(!i.did)return;this.#l(`handle:${t}`,i.did,86400),t=i.did}catch(n){console.error(`[error] Failed to resolve handle: ${n.message||n}`);return}}return o=`at://${t}/app.bsky.feed.post/${s}`,o}}#l(e,o,r=86400){let t=Date.now()+r*1e3,s={value:o,expiry:t};localStorage.setItem(e,JSON.stringify(s))}#i(e){let o=localStorage.getItem(e);if(!o)return null;let{value:r,expiry:t}=JSON.parse(o);return Date.now()>t?(localStorage.removeItem(e),null):r}async#c(e){let o=`https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=${encodeURIComponent(e)}`,r=await fetch(o);if(!r.ok)throw new Error("Failed to fetch replies");return r.json()}#d(e,o=null){let r=o||this.shadowRoot.querySelector(".comments");e&&e.replies&&e.replies.length>0&&e.replies.sort((s,a)=>new Date(s.post.record.createdAt).getTime()-new Date(a.post.record.createdAt).getTime()).forEach(s=>{this.#s(s,r,!1)})}#t(e){let o=document.createElement("div");return o.textContent=e,o.innerHTML}#s(e,o,r=!1){if(e?.post?.author&&e.post.record){if(e.post.record.text.trim()==="\u{1F4CC}"||this.#r.has(e.post.uri))return;let t=document.createElement("div");t.classList.add("comment"),r&&t.classList.add("reply");let s=e.post.author.handle,a=`https://bsky.app/profile/${e.post.author.did}`,n=`https://bsky.app/profile/${e.post.author.did}/post/${e.post.uri.split("/").pop()}`,l=new Date(e.post.record.createdAt),i=l.toLocaleString(),v=this.#p(l),p=e.post?.author?.avatar?.replace("/img/avatar/","/img/avatar_thumbnail/"),h=e.post.author.displayName||s,m=e.post.likeCount||0,f=e.post.repostCount||0,b=e.post.replyCount||0,c;p?c=`<img src="${p}" alt="${s}'s avatar" class="avatar" part="avatar"/>`:c='<div class="default-avatar" part="avatar"></div>',t.innerHTML=`
        <div class="comment-header" part="comment-header">
          ${c}
          <div>
            <a href="${a}" target="_blank" class="profile-link">${this.#t(h)}</a>
            <span class="handle"><a href="${a}" target="_blank" class="handle-link">@${this.#t(s)}</a></span> -
            <a href="${n}" target="_blank" rel="ugc" title="${i}" class="timestamp-link">${v}</a>
          </div>
        </div>
        <div class="comment-body" part="comment-body">
          <a href="${n}" target="_blank" rel="nofollow noopener" class="comment-link">
            <div class="comment-content" part="comment-content">
              ${this.#t(e.post.record.text)}
            </div>
            <div class="comment-footer" part="comment-footer">
              <div>
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.002 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H12.28l-4.762 2.858A1 1 0 0 1 6.002 21v-2h-1a3 3 0 0 1-3-3V6Zm3-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v1.234l3.486-2.092a1 1 0 0 1 .514-.142h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-14Z"></path>
                </svg>
                <span>${b}</span>
              </div>
              <div>
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.957 2.293a1 1 0 1 0-1.414 1.414L17.836 5H6a3 3 0 0 0-3 3v3a1 1 0 1 0 2 0V8a1 1 0 0 1 1-1h11.836l-1.293 1.293a1 1 0 0 0 1.414 1.414l2.47-2.47a1.75 1.75 0 0 0 0-2.474l-2.47-2.47ZM20 12a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H6.164l1.293 1.293a1 1 0 1 1-1.414 1.414l-2.47-2.47a1.75 1.75 0 0 1 0-2.474l2.47-2.47a1 1 0 0 1 1.414 1.414L6.164 17H18a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1Z"></path>
                </svg>
                <span>${f}</span>
              </div>
              <div>
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.734 5.091c-1.238-.276-2.708.047-4.022 1.38a1 1 0 0 1-1.424 0C9.974 5.137 8.504 4.814 7.266 5.09c-1.263.282-2.379 1.206-2.92 2.556C3.33 10.18 4.252 14.84 12 19.348c7.747-4.508 8.67-9.168 7.654-11.7-.541-1.351-1.657-2.275-2.92-2.557Zm4.777 1.812c1.604 4-.494 9.69-9.022 14.47a1 1 0 0 1-.978 0C2.983 16.592.885 10.902 2.49 6.902c.779-1.942 2.414-3.334 4.342-3.764 1.697-.378 3.552.003 5.169 1.286 1.617-1.283 3.472-1.664 5.17-1.286 1.927.43 3.562 1.822 4.34 3.764Z"></path>
                </svg>
                <span>${m}</span>
              </div>
            </div>
          </a>
        </div>
      `,o.appendChild(t),e.replies&&e.replies.length>0&&e.replies.sort((d,y)=>new Date(d.post.record.createdAt).getTime()-new Date(y.post.record.createdAt).getTime()).forEach(d=>{this.#s(d,t,!0)})}}#p(e){let r=new Date().getTime()-e,t=Math.floor(r/1e3),s=Math.floor(t/60),a=Math.floor(s/60),n=Math.floor(a/24);return n>0?`${n}d`:a>0?`${a}h`:s>0?`${s}m`:`${t}s`}};export{u as BlueskyComments};