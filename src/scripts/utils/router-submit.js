function Router () {
    this.routes = {};
    this.currentHash = ""
}

var noop = function (){};

// 路由注册

Router.prototype.route = function(hash,cb){
    this.currentHash = hash;

    this.routes[this.currentHash] = cb || noop;

}

// 路由刷新
Router.prototype.refresh = function(){
    let hash = location.hash || '#number';
    this.currentHash = hash; 
    console.log(this.routes[this.currentHash])
    this.routes[this.currentHash]()
    this.swithchTabbar()
}

// Tabbar switch
Router.prototype.swithchTabbar = function(){
    let hashs = ['#number','#message']
    let index = hashs.indexOf(this.currentHash)
}

// 路由切换监听
Router.prototype.init = function(){
    window.addEventListener('load',this.refresh.bind(this))
    window.addEventListener('hashchange',this.refresh.bind(this))
}

export default Router