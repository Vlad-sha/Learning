class Product {
    constructor (
       public name : string,
       public id: number,
       public price: number
    ) {}
}

class Delivery {
    constructor (
        date: Date
    ) {}
}

class HomeDelivery extends Delivery {
    constructor (date : Date, homeAdress : string) {
        super(date)
    }
}


class AdressDelivery extends Delivery {
    constructor ( shopId : number) {
        super(new Date())
    }
}

type DeliveryOpt = HomeDelivery | AdressDelivery

class Cart {
    private products : Product[] = [];
    private delivery : DeliveryOpt;
    addProduct (product: Product) {
        this.products.push(product);
    }
    deleteProduct (productId : number) {
        this.products = this.products.filter((product : Product) => product.id !== productId);
    }
    getSum() : number {
        return this.products
        .map((p : Product) => p.price)
        .reduce((price1 : number, price2 : number) => price1 + price2);
    }

    setDelivery (delivery : DeliveryOpt ) : void {
        this.delivery = delivery;
    }

    CheckOut () {
        if (this.products.length == 0) {
            throw new Error ("Нет товаров в корзине");
        }
        if (!this.delivery) {
            throw new Error ('Не указан способ доставки')
        }
        return {success : true};
    }
}