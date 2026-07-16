class Book {

    constructor(
        private _isbn: string,
        private _title: string,
        private _author: string,
        private _price: number
    ) {}

    public getIsbn = (): string => this._isbn;
    public getTitle = (): string => this._title;
    public getPrice = (): number => this._price;
}

class Cart {
    private _cartId: string;
    private _cartItems: Book[] = []; 

    constructor(cartId: string) {
        this._cartId = cartId;
    }

    
    public addBook(book: Book): void {
        this._cartItems.push(book);
    }

    
    public getTotalPrice(): number {
        return this._cartItems.reduce((total, item) => total + item.getPrice(), 0);
    }

    public getInfo(): void {
        console.log("=== ใบเสร็จรับเงิน ===");
        console.log(`รหัสตะกร้า: ${this._cartId}`);
        console.log("รายการ:");
        
     
        this._cartItems.forEach(item => {
            console.log(`- ${item.getTitle()} (${item.getIsbn()}): ${item.getPrice()} บาท`);
        });
        
        console.log(`ราคารวม: ${this.getTotalPrice()} บาท`);
    }
}


const firstBook = new Book("978-0132350884", "Clean Code", "Uncle Bob", 450);
const secondBook = new Book("978-1234567890", "TypeScript Deep Dive", "Basarat", 320);

const myCart = new Cart("CO01");
myCart.addBook(firstBook);
myCart.addBook(secondBook);


myCart.getInfo();