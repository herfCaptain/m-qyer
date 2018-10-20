const gulp=require("gulp")
//用gulp搭建一个webserver

gulp.task("copyhtml",()=>{
	return gulp.src('./src/*.html')
	.pipe(gulp.dest('./dev/'))
})
const server=require("gulp-webserver")
const proxy=require('http-proxy-middleware')
/*
 1、安装gulp-webserver插件 yarn add gulp-webserver --dev
 2、配置sever
 * */
gulp.task("server",()=>{
	return gulp.src('./dev')
	.pipe(server({
		host:'localhost',
		port:8080,
		livereload:true,
		middleware:[
		  proxy('/v4',{
//		  	target:'https://m.lagou.com/',
		  	target:'https://m.maizuo.com',
		  	changeOrigin:true,
//		  	pathRewrite: {
//          '/api' : ''
//          },
			}),

			proxy('/z',{
				target:'http://dpl.qyer.com',
				changeOrigin:true,
				pathRewrite:{
						'/^z':''
				}
		}),


		  proxy('/x5',{
//		  	target:'https://m.lagou.com/',
				target:'https://m.maizuo.com',
				changeOrigin:true,
//		  	pathRewrite: {
//          '/api' : ''
//          },
				
		  	
			}),
		   proxy('/qcross',{
		   	//http://www.qyer.com/qcross/home/index.php?action=recommend&timer=1539683491158&ajaxID=59b0b70acebeb65c1882399e
		  	target:'http://www.qyer.com/',
		  	//target:'http://localhost:3000',
		  	changeOrigin:true,
//		  	pathRewrite: {
//          '/api' : ''
//          },
		  	
		  }),
		   proxy('/search',{
		   	//http://www.qyer.com/qcross/home/index.php?action=recommend&timer=1539683491158&ajaxID=59b0b70acebeb65c1882399e
		  	target:'https://m.qyer.com',
		  	//target:'http://localhost:3000',
		  	changeOrigin:true,
		  	pathRewrite: {
            '/search' : ''
            },
		  	
		  })
		]
	}))
})


//编译scss文件
const sass=require("gulp-sass")
//1.安装sass插件 yarn add gulp-sass node-sass --dev
gulp.task("packscss",()=>{
	gulp.src([
		"./src/styles/app.scss",
		"./src/styles/app-mall.scss",
		"./src/styles/app-server.scss",
		"./src/styles/app-signUp.scss",
		"./src/styles/app-submit.scss"
	])
	.pipe(sass().on("error",sass.logError))
	.pipe(gulp.dest("./dev/styles"))
})

//CommonJS规范做JS模块化
const webpack=require("webpack-stream")
gulp.task("packjs",()=>{
	return gulp.src('./src/scripts/**/*.js')
	.pipe(webpack({
		mode:'development',
		entry:{
			"app":['@babel/polyfill','./src/scripts/app.js'],
			"app-mall":['@babel/polyfill','./src/scripts/app-mall.js'],
			"app-server":['@babel/polyfill','./src/scripts/app-server.js'],
			"app-signUp":['@babel/polyfill','./src/scripts/app-signUp.js'],
			"app-submit":['@babel/polyfill','./src/scripts/app-submit.js']
		},
		output:{
			filename:"[name].js"
		},
		module:{
			rules:[
			{
				test:/\.html$/,
				use:['string-loader']
			},
	          {
	            test: /\.js$/,
	            exclude: /node_modules/,
	            use: {
	              loader: 'babel-loader',
	              options: {
	                presets: ['@babel/preset-env'],
	                plugins: ['@babel/plugin-transform-runtime']
	              }
	            }
	          }
			]
		}
	}))
	.pipe(gulp.dest('./dev/scripts'))
})
//文件修改watch
const watch=require('gulp-watch')
gulp.task('watch',()=>{
	gulp.watch('./src/*.html',['copyhtml'])
 	gulp.watch('./src/styles/**/*',()=>{
		console.log(1);
		gulp.start(['packscss'])
	})
	gulp.watch('./src/libs/**/*', () => {
    gulp.start(['copylibs'])
  })
	gulp.watch("./src/scripts/**/*",['packjs'])
})
//copy iconfonts
gulp.task('copyicons',()=>{
	return gulp.src('./src/iconfonts/**/*')
	.pipe(gulp.dest('./dev/iconfonts'))
})
//copy lib
gulp.task('copylib',()=>{
	return gulp.src('./src/lib/**/*')
	.pipe(gulp.dest('./dev/lib'))
})
//// copy mock
gulp.task('copymock', () => {
  return gulp.src('./src/mock/**/*')
    .pipe(gulp.dest('./dev/mock'))
})
//// copy mock
gulp.task('copyimg', () => {
  return gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./dev/images'))
})
//// copy swiper
gulp.task('copyswiper', () => {
  return gulp.src('./src/styles/swiper/*')
    .pipe(gulp.dest('./dev/styles/swiper'))
})
gulp.task('default',['copyhtml','copyimg','packscss','copylib','copymock','packjs','copyicons','copyswiper','server','watch'],()=>{
	console.log("all tasks!")
})