import Router from 'koa-router'
import utils from '../common/utils';
import Config from './config.json';     // 后端服务地址

const router = new Router({prefix: '/user'});



router.get('/getUserInfo',async function(ctx){
    ctx.body=await utils.sendHttp(
        {
            protocol: Config.protocol,
            host:Config.host,
            port:Config.port,
            path:Config.prefix+'/get_user_info',
            method: 'GET'
        }
    ).then(function(data){return data;});
});


export default router;