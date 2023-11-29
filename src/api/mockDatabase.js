export const users = [
    {
        id: 1,
        firstName: 'Javed',
        lastName: 'Patel',
        email: 'user1@eshop.com',
        contactNumber: '1234567890',
        password: 'password1',
        role: 'USER'
    },
    {
        id: 2,
        firstName: 'Irfan',
        lastName: 'Patan',
        email: 'user2@eshop.com',
        contactNumber: '0987654321',
        password: 'password2',
        role: 'USER'
    },
    {
        id: 3,
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@eshop.com',
        contactNumber: '1122334455',
        password: 'adminpass',
        role: 'ADMIN'
    }
];

export const addresses = [
    // Example addresses
    {id: 1, userId: 1, address: '123 Main St, Townsville'},
    {id: 2, userId: 1, address: '456 Side St, Villageton'},
    {id: 2, userId: 2, address: '456 Side St, Villageton'},
    // Add more addresses as needed
];

export const orders = [
    // Example orders
    {id: 1, userId: 1, quantity: 1, addressId: 1, productId: 1},
    {id: 2, userId: 1, quantity: 2, addressId: 2, productId: 2},
    {id: 3, userId: 2, quantity: 3, addressId: 2, productId: 3},
    // Add more orders as needed
];

export const products = [
    // Example products
    {
        id: 1,
        availableItems:
            "43",
        category:
            "Apparel",
        description:
            "asdfsdf",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSNcvpQ_CgDv7ibS8OkLJ8KvWuRD-UtB8-pghTS556GKMFXQWUw75lDaTAFI9umxqOoh8c0IULzH2pNDT2O4HBjonjAnJcGwzxn7k34WRNLRXwTK7R3f84K&usqp=CAE",
        manufacturer:
            "zara",
        name:
            "Jeans",
        price:
            "233"
    },
    {
        id: 2,
        availableItems:
            "23",
        category: "Electronics",
        description: "Epson Printer",
        imageUrl: "https://static.epsonshop.co.in/media/catalog/product/cache/cdcc8b312a05b9ee926321ee87314749/l/3/l3210_27042023_2_.jpg",
        manufacturer: "zara",
        name: "Printer",
        price: "50"
    },
    {
        id: 3,
        availableItems:
            "23",
        category: "Personal Care",
        description: "Vaseline",
        imageUrl: "https://rukminim2.flixcart.com/image/850/1000/kzpw2vk0/moisturizer-cream/m/4/8/42-original-skin-protecting-jelly-gel-vaseline-original-imagbz69p3hjpqcj.jpeg?q=90",
        manufacturer: "P&G",
        name: "Vaseline",
        price: "50"
    },
    {
        id: 4,
        availableItems:
            "23",
        category: "Footwear",
        description: "Nike Air jordan",
        imageUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1f3586ce-7b81-45c6-9405-c2116a5ec967/air-jordan-1-mid-shoes-86f1ZW.png",
        manufacturer: "Nike",
        name: "Air Jordan",
        price: "500"
    }
    // Add more products as needed

];

