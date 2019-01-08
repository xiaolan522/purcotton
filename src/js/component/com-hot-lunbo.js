define(["jquery"], ()=>{
	class Lunbo{
		constructor(){
			this.init();
		}
		init(){
			//加载com-hot-lunbo.html
			new Promise((resolve, reject) => {
				$(".hot-recommend-wrap").load("/html/component/com-hot-lunbo.html", () => {
					resolve();
				})
			}).then(() => {
			})
		}
	}
	return new Lunbo();
})