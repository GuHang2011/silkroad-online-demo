import{n as t}from"./vue.f697732d.js";const o={start:()=>{if(document.querySelector(".loading-next")){window.nextLoading=!0;return}const e=document.body,i=document.createElement("div");i.setAttribute("class","loading-next");const n=`
			<div class="loading-next-box">
				<div class="loading-next-box-warp">
					<div class="loading-next-box-item"></div>
					<div class="loading-next-box-item"></div>
					<div class="loading-next-box-item"></div>
					<div class="loading-next-box-item"></div>
					<div class="loading-next-box-item"></div>
					<div class="loading-next-box-item"></div>
					<div class="loading-next-box-item"></div>
					<div class="loading-next-box-item"></div>
					<div class="loading-next-box-item"></div>
				</div>
			</div>
		`;i.innerHTML=n,e.insertBefore(i,e.childNodes[0]),window.nextLoading=!0},done:(e=0)=>{t(()=>{setTimeout(()=>{var n;window.nextLoading=!1;const i=document.querySelector(".loading-next");(n=i==null?void 0:i.parentNode)==null||n.removeChild(i)},e)})}};export{o as N};
