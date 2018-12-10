app.service('productService',function($http){
    this.addProduct=function(name,description,price,qty,cat,last_date,display,user,today_date){
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data:{'name':name,'description':description,'price':price,'qty':qty,'cat':cat,'last_date':last_date,'display':display,'date':today_date,'user':user},
            url: 'app/backend/product/addProductApi.php'
        });
    }
    this.recentProduct=function(){
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data:{'name':""},
            url: 'app/backend/product/recentProductApi.php'
        });
    }
    this.getSingleProduct=function(product_id){
        return $http({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},
            data:{'product_id':product_id},
            url: 'app/backend/product/viewSingleProductApi.php'
        });
    }
});