module app.productList {
    interface IProductListModel {
        title: string,
        showImage: boolean,
        products: app.domain.IProduct[];
        toggleImage(): void
    }

class ProductListCtrl implements IProductListModel {
    title: string;
    showImage: boolean;
    products: app.domain.IProduct[];

    constructor() {
        this.title = "Product List";
        this.showImage = false;
        this.products = [
            { 
                "productId": 1, 
                "productName": "Leaf Rake", 
                "productCode": "GDN-0011", 
                "releaseDate" : new Date(2009, 2, 19), 
                "price": 19.95,
                "description" : "Leaf rake with 48-inch wooden handle.",
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                }, 
                {
                    "productId" :2, 
                    "productName": "Garden Cart", 
                    "productCode": "GDN-0023", 
                    "releaseDate": new Date(2010, 2, 18), 
                    "price" : 26.95,
                    "description" : "15 gallon capacity rolling garden cart",
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                }
        ];

        var newProduct = new app.domain.Product(3, "Saw", "TBX-002", new Date(2002, 3, 1), 16.95,
        "15-inch steel blade hand saw", "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png");
        newProduct.price = newProduct.calculateDiscount(10);
        this.products.push(newProduct);
    }
    
    toggleImage() :void {
        this.showImage = !this.showImage;
    }
}

angular.module("productManagement", [])
        .controller("ProductListCtrl", ProductListCtrl);
}