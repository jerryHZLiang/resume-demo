window.Model = function(options){
    let resorceName = options.resorceName
    return {
        init: function(){
            var APP_ID = 'knApgRryp19XlPA6LtVScQV8-gzGzoHsz';
            var APP_KEY = 'Y1gsluE1ilJVEFK6fpe4gOQ0';
            AV.init({appId: APP_ID,appKey: APP_KEY});
        },
        fetch: function(){
            var query = new AV.Query(resorceName)
            return query.find()
        },
        save: function(object){
            var x = AV.Object.extend(resorceName)
            var x = new x();
            return x.save(object)
          
        }
    }
}