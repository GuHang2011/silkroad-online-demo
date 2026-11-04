import{J as d}from"./vue.f8de4c6f.js";const o={start:()=>{if(document.querySelector(".loading-next")){window.nextLoading=!0;return}const e=document.body,i=document.createElement("div");i.setAttribute("class","loading-next");const t=`
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
		`;i.innerHTML=t,e.insertBefore(i,e.childNodes[0]),window.nextLoading=!0},done:(e=0)=>{d(()=>{setTimeout(()=>{var t;window.nextLoading=!1;const i=document.querySelector(".loading-next");(t=i==null?void 0:i.parentNode)==null||t.removeChild(i)},e)})}};export{o as N};
