import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../../client/redux/configureStore'
import App from '../../client/App'
import { matchComp } from "../../client/routeConfig";




const store = configureStore()

// 配置页面路由
async function viewRoute(ctx, next) {

    // 因为所有请求，不单单是页面请求，包括图片请求都会进入本方法，必须判断该url是否匹配上页面路由
    const comp = matchComp(ctx.url)
    if(comp){
        if (process.env.NODE_ENV === "production" && comp.preload) {
            await comp.preload()
        }
        await ctx.render('index', {
            // 渲染dom有多种方法，这里只最简单的[renderToString]
            root: ReactDOMServer.renderToString(
                <Provider store={store}>
                    <StaticRouter
                        location={ctx.url}
                        context={ctx}
                    >
                        <App/>
                    </StaticRouter>
                </Provider>
            ),
            state: store.getState()
        })
    }
    else{
        await next()
    }
}

export default viewRoute
