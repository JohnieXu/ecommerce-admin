module.exports = {
  fetch: {
    routes: [
      'adminapi/product/product?page=1&limit=15&cate_id=&type=1&store_name=&excel=0',
      'adminapi/product/category?pid=&is_show=&page=1&cate_name=&limit=15',
      'adminapi/product/reply?is_reply=&data=&store_name=&account=&product_id=0&page=1&limit=15',
      'adminapi/product/product/rule?page=1&limit=15&rule_name=',
      'adminapi/order/list?page=1&limit=10&status=&data=&real_name=&type=4',
      'adminapi/order/chart?data=',
      'adminapi/user/user?label_id=&user_type=&status=&sex=&is_promoter=&country=&pay_count=&user_time_type=&user_time=&nickname=&province=&city=&page=1&limit=15&level=&group_id=',
      'adminapi/user/user_level/vip_list?is_show=&title=&page=1&limit=15',
      'adminapi/user/user_group/list?page=1&limit=15',
      'adminapi/user/user_label',
      'adminapi/agent/index?nickname=&data=&page=1&limit=15',
      'adminapi/agent/statistics?nickname=&data=',
      'adminapi/marketing/coupon/list?status=&title=&page=1&limit=15',
      'adminapi/finance/extract?status=&extract_type=&nireid=&data=&page=1&limit=20',
      'adminapi/finance/recharge?data=&paid=&nickname=&excel=0&page=1&limit=20',
      'adminapi/finance/recharge/user_recharge?data=&paid=&nickname=',
      'adminapi/finance/finance/bill_type',
      'adminapi/finance/finance/list?nickname=&start_time=&end_time=&type=&page=1&limit=20',
      'adminapi/finance/finance/commission_list?nickname=&price_max=&price_min=&excel=0&page=1&limit=20',
      'adminapi/cms/cms?pid=0&title=&page=1&limit=20',
      'adminapi/cms/category?type=1',
      'adminapi/cms/category?status=&page=1&limit=20&type=0',
      'adminapi/system/log/search_admin',
      'adminapi/system/log?limit=15&page=1&pages=&data=&path=&ip=&admin_id=',
      'adminapi/system/file',
      'adminapi/system/backup',
      'adminapi/system/backup/file_list',
      'adminapi/app/wechat/menu',
      'adminapi/app/wechat/template?status=&name=&page=1&limit=20',
      'adminapi/app/wechat/news?cate_name=&page=1&limit=10',
      'adminapi/app/wechat/keyword?key=&type=&page=1&limit=20',
      'adminapi/app/wechat/reply?key=default',
      'adminapi/app/routine?status=&name=&page=1&limit=20'
      // 营销模块、设置模块
    ],
    auth: {
      cookie: 'think_lang=zh-cn; PHPSESSID=8a5b0f4297e27aa602ff0a92843d8b2a; admin-uuid=2; admin-token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwcm8uY3JtZWIubmV0IiwiYXVkIjoicHJvLmNybWViLm5ldCIsImlhdCI6MTU5MDgwODE1MSwibmJmIjoxNTkwODA4MTUxLCJleHAiOjE1OTA4MTg5NTEsImp0aSI6eyJpZCI6MiwidHlwZSI6ImFkbWluIn19._vcRBNFpI7ZucEFlcUQ19TfDvYyp9OAXUTqn7CHj7Rw; admin-expires_time=1590818951',
      token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwcm8uY3JtZWIubmV0IiwiYXVkIjoicHJvLmNybWViLm5ldCIsImlhdCI6MTU5MDgwODE1MSwibmJmIjoxNTkwODA4MTUxLCJleHAiOjE1OTA4MTg5NTEsImp0aSI6eyJpZCI6MiwidHlwZSI6ImFkbWluIn19._vcRBNFpI7ZucEFlcUQ19TfDvYyp9OAXUTqn7CHj7Rw'
    },
    outputPath: 'data/mock'
  }
}
