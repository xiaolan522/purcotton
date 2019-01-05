define(["jquery"], ()=>{
	class Header{
		constructor(){
			this.init();
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("header").load("/html/component/com-header.html", () => {
					resolve();
				})
			}).then(() => {
				
			})
		}
		
	}
	return new Header();
})

